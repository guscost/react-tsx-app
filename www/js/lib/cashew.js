// Custom AMD-like shim script to provide `require` and `define`
// Script load order matters, no circular dependencies yet

const __MODULE_CACHE__ = {};
const __MODULE_MAIN__ = Symbol();

// Require is a simple lookup in the module cache, no async support yet
const require = (name) => __MODULE_CACHE__[name];

const define = (...args) => {
  let name, deps, factory;

  // Parse the arguments for named or anonymous modules
  if ("string" === typeof args[0]) {
    name = args[0];
    deps = args[1];
    factory = args[2];
  } else {
    if (__MODULE_CACHE__[__MODULE_MAIN__]) {
      throw new Error(
        "Multiple scripts without a `///<amd-module name='MyComponent'/>` directive",
      );
    } else {
      name = __MODULE_MAIN__;
      deps = args[0];
      factory = args[1];
    }
  }

  // Run the module factory with all deps, and add to the cache
  // TypeScript AMD modules pass require and exports
  if ("require" === deps[0] && "exports" === deps[1]) {
    const exports = {};
    factory.call(
      this,
      require,
      exports,
      ...deps.slice(2).map((dep) => __MODULE_CACHE__[dep]),
    );
    __MODULE_CACHE__[name] = exports;
  } else {
    __MODULE_CACHE__[name] = factory.call(
      this,
      ...deps.map((dep) => __MODULE_CACHE__[dep]),
    );
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
