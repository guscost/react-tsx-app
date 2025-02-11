// Custom AMD-like loader, does not support circular dependencies
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
  resolve: (name: string, from: string) => {
    if (/^\.\.?\//.test(name)) {
      const absolutePath = from.split("/").slice(0, -1);
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
      name = name.replace(
        /^@?\//,
        document.location.pathname.split("/").slice(0, -1).join("/") + "/js/",
      );
    }
    return name;
  },
  refresh: () => {
    for (const [key, { unmetDeps, load }] of Object.entries(
      __MODULES__.pending,
    )) {
      if (unmetDeps.every((name) => name in __MODULES__.cache)) {
        delete __MODULES__.pending[key];
        load();
      }
    }
  },
};

const define = (...args: any) => {
  let name: string, deps: Array<string>, factory: Function;

  // Webpack AMD modules are named, TypeScript AMD modules are not
  if ("string" === typeof args[0]) {
    name = args[0];
    deps = args[1];
    factory = args[2];
  } else {
    name = (document.currentScript as HTMLScriptElement).src
      .replace(document.location.origin, "")
      .replace(/\.js$/, "");
    deps = args[0];
    factory = args[1];
  }

  // TypeScript AMD modules pass in require and exports
  if ("require" === deps[0] && "exports" === deps[1]) {
    deps = deps.slice(2);

    const load = () => {
      const require = (dep: string) =>
        __MODULES__.get(__MODULES__.resolve(dep, name));
      const exports = {};
      factory.call(this, require, exports, ...deps.map(require));
      __MODULES__.set(name, exports);
      __MODULES__.refresh();
    };

    const unmetDeps = [];
    for (let dep of deps) {
      dep = __MODULES__.resolve(dep, name);
      !__MODULES__.get(dep) && unmetDeps.push(dep);
    }

    for (let dep of unmetDeps) {
      if (
        !Object.values(__MODULES__.pending).some(({ unmetDeps }) =>
          unmetDeps.includes(dep),
        )
      ) {
        const dynamicScript = document.createElement("script");
        dynamicScript.type = "text/javascript";
        dynamicScript.src = dep + ".js";
        document.body.appendChild(dynamicScript);
      }
    }

    __MODULES__.pending[name] = { unmetDeps, load };
    __MODULES__.refresh();
  } else {
    // Webpack UMDs do not load dynamically, add these script tags in order
    __MODULES__.set(name, factory.call(this, ...deps.map(__MODULES__.get)));
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
