// Custom AMD-like shim script to provide `require` and `define`
// Script load order matters, no circular dependencies

const __MODULES__: {
  pending: { [name: string]: { unmetDeps: string[]; load: () => void } };
  cache: { [name: string]: any };
  resolveDep: (dep: string, current: string) => string;
} = {
  pending: {},
  cache: new Proxy(
    {},
    {
      set(obj, prop, value) {
        Reflect.set(obj, prop, value);
        Object.entries(__MODULES__.pending).forEach(
          ([key, { unmetDeps, load }]) => {
            if (unmetDeps.every((name) => name in __MODULES__.cache)) {
              delete __MODULES__.pending[key];
              load();
            }
          },
        );
        return true;
      },
    },
  ),
  resolveDep: (dep: string, current: string) => {
    if (/^\.\.?\//.test(dep)) {
      const absolutePath = current.split("/").slice(0, -1);
      const relativeDep = dep.split("/");
      while (relativeDep[0] === "..") {
        relativeDep.shift();
        absolutePath.pop();
      }
      while (relativeDep[0] === ".") {
        relativeDep.shift();
      }
      dep = [...absolutePath, ...relativeDep].join("/");
    } else {
      dep = dep.replace(/^@?\//, "/js/");
    }
    return dep;
  },
};

// Require is a simple lookup in the module cache, no async support yet
const require = (name: string) => __MODULES__.cache[name];

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

  // Run the module factory with all deps, and add to the cache
  // TypeScript AMD modules pass require and exports
  if ("require" === deps[0] && "exports" === deps[1]) {
    const moduleDeps = deps.slice(2);
    const unmetDeps = [];

    for (let dep of moduleDeps) {
      dep = __MODULES__.resolveDep(dep, name);
      if (
        !__MODULES__.cache[dep] &&
        !Object.values(__MODULES__.pending).some(({ unmetDeps }) =>
          unmetDeps.includes(dep),
        )
      ) {
        unmetDeps.push(dep);
      }
    }

    const load = () => {
      const e = {};
      const r = (dep: string) => require(__MODULES__.resolveDep(dep, name));
      factory.call(this, r, e, ...moduleDeps.map(r));
      __MODULES__.cache[name] = e;
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
    __MODULES__.cache[name] = factory.call(this, ...deps.map(require));
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
