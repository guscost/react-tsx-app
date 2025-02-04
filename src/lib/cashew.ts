// Custom AMD-like shim script to load script modules
// Does not support circular dependencies
const __MODULES__: {
  cache: { [name: string]: any };
  pending: { [name: string]: { unmetDeps: string[]; load: () => void } };
  get: (name: string) => any;
  set: (name: string, value: any) => void;
  resolve: (dep: string, current: string) => string;
  refresh: () => void;
} = {
  cache: {},
  pending: {},
  get: (name: string) => __MODULES__.cache[name],
  set: (name: string, value: any) => (__MODULES__.cache[name] = value),
  resolve: (name: string, current: string) => {
    if (/^\.\.?\//.test(name)) {
      const absolutePath = current.split("/").slice(0, -1);
      const relativeDep = name.split("/");
      while (relativeDep[0] === "..") {
        relativeDep.shift();
        absolutePath.pop();
      }
      while (relativeDep[0] === ".") {
        relativeDep.shift();
      }
      name = [...absolutePath, ...relativeDep].join("/");
    } else {
      name = name.replace(/^@?\//, "/js/");
    }
    return name;
  },
  refresh: () => {
    Object.entries(__MODULES__.pending).forEach(
      ([key, { unmetDeps, load }]) => {
        if (unmetDeps.every((name) => name in __MODULES__.cache)) {
          delete __MODULES__.pending[key];
          load();
        }
      },
    );
  },
};

const define = (...args: any) => {
  let name: string, deps: Array<string>, factory: Function;

  // Parse the arguments for named or anonymous modules
  if ("string" === typeof args[0]) {
    name = args[0];
    deps = args[1];
    factory = args[2];
  } else {
    name = (document.currentScript as HTMLScriptElement).src
      .replace(window.location.origin, "")
      .replace(/\.js$/, "");
    deps = args[0];
    factory = args[1];
  }

  if ("require" === deps[0] && "exports" === deps[1]) {
    // TypeScript AMD modules pass two extra arguments
    const moduleDeps = deps.slice(2);
    const unmetDeps = [];

    for (let dep of moduleDeps) {
      dep = __MODULES__.resolve(dep, name);
      !__MODULES__.get(dep) &&
        !Object.values(__MODULES__.pending).some(({ unmetDeps }) =>
          unmetDeps.includes(dep),
        ) &&
        unmetDeps.push(dep);
    }

    const load = () => {
      const require = (dep: string) =>
        __MODULES__.get(__MODULES__.resolve(dep, name));
      const exports = {};
      factory.call(this, require, exports, ...moduleDeps.map(require));
      __MODULES__.set(name, exports);
      __MODULES__.refresh();
    };

    if (unmetDeps.length) {
      __MODULES__.pending[name] = { unmetDeps, load };

      for (let dep of unmetDeps) {
        const dynamicScript = document.createElement("script");
        dynamicScript.src = dep + ".js";
        document.body.appendChild(dynamicScript);
      }
    } else {
      load();
    }
  } else {
    // Webpack UMD modules take only dependencies and return exports
    __MODULES__.set(name, factory.call(this, ...deps.map(__MODULES__.get)));
    __MODULES__.refresh();
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
