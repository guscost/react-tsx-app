var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
// Custom AMD-like loader, does not support circular dependencies
var __MODULES__ = {
    cache: {},
    pending: {},
    get: function (name) { return __MODULES__.cache[name]; },
    set: function (name, value) { return (__MODULES__.cache[name] = value); },
    resolve: function (name, from) {
        if (/^\.\.?\//.test(name)) {
            var absolutePath = from.split("/").slice(0, -1);
            var relativeDep = name.split("/");
            while (relativeDep[0] === "..") {
                relativeDep.shift();
                absolutePath.pop();
            }
            while (relativeDep[0] === ".") {
                relativeDep.shift();
            }
            name = __spreadArray(__spreadArray([], absolutePath, true), relativeDep, true).join("/");
        }
        else {
            name = name.replace(/^@?\//, "/js/");
        }
        return name;
    },
    refresh: function () {
        for (var _i = 0, _a = Object.entries(__MODULES__.pending); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], _c = _b[1], unmetDeps = _c.unmetDeps, load = _c.load;
            if (unmetDeps.every(function (name) { return name in __MODULES__.cache; })) {
                delete __MODULES__.pending[key];
                load();
            }
        }
    },
};
var define = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name, deps, factory;
    // Webpack AMD modules are named, TypeScript AMD modules are not
    if ("string" === typeof args[0]) {
        name = args[0];
        deps = args[1];
        factory = args[2];
    }
    else {
        name = document.currentScript.src
            .replace(window.location.origin, "")
            .replace(/\.js$/, "");
        deps = args[0];
        factory = args[1];
    }
    // TypeScript AMD modules pass in require and exports
    if ("require" === deps[0] && "exports" === deps[1]) {
        deps = deps.slice(2);
        var load = function () {
            var require = function (dep) {
                return __MODULES__.get(__MODULES__.resolve(dep, name));
            };
            var exports = {};
            factory.call.apply(factory, __spreadArray([_this, require, exports], deps.map(require), false));
            __MODULES__.set(name, exports);
            __MODULES__.refresh();
        };
        var unmetDeps = [];
        for (var _a = 0, deps_1 = deps; _a < deps_1.length; _a++) {
            var dep = deps_1[_a];
            dep = __MODULES__.resolve(dep, name);
            !__MODULES__.get(dep) && unmetDeps.push(dep);
        }
        var _loop_1 = function (dep) {
            if (!Object.values(__MODULES__.pending).some(function (_a) {
                var unmetDeps = _a.unmetDeps;
                return unmetDeps.includes(dep);
            })) {
                var dynamicScript = document.createElement("script");
                dynamicScript.src = dep + ".js";
                document.body.appendChild(dynamicScript);
            }
        };
        for (var _b = 0, unmetDeps_1 = unmetDeps; _b < unmetDeps_1.length; _b++) {
            var dep = unmetDeps_1[_b];
            _loop_1(dep);
        }
        __MODULES__.pending[name] = { unmetDeps: unmetDeps, load: load };
        __MODULES__.refresh();
    }
    else {
        // Webpack UMDs do not load dynamically, add these script tags in order
        __MODULES__.set(name, factory.call.apply(factory, __spreadArray([_this], deps.map(__MODULES__.get), false)));
    }
};
define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jYXNoZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUJBaUdBO0FBbEdBLGlFQUFpRTtBQUNqRSxJQUFNLFdBQVcsR0FPYjtJQUNGLEtBQUssRUFBRSxFQUFFO0lBQ1QsT0FBTyxFQUFFLEVBQUU7SUFDWCxHQUFHLEVBQUUsVUFBQyxJQUFZLElBQUssT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QjtJQUM5QyxHQUFHLEVBQUUsVUFBQyxJQUFZLEVBQUUsS0FBVSxJQUFLLE9BQUEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFqQyxDQUFpQztJQUNwRSxPQUFPLEVBQUUsVUFBQyxJQUFZLEVBQUUsSUFBWTtRQUNsQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUMvQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQ0QsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzlCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBQ0QsSUFBSSxHQUFHLGdDQUFJLFlBQVksU0FBSyxXQUFXLFFBQUUsSUFBSSxDQUFD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b2FkZXIsIGRvZXMgbm90IHN1cHBvcnQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG5jb25zdCBfX01PRFVMRVNfXzoge1xuICBjYWNoZTogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG4gIHBlbmRpbmc6IHsgW25hbWU6IHN0cmluZ106IHsgdW5tZXREZXBzOiBzdHJpbmdbXTsgbG9hZDogKCkgPT4gdm9pZCB9IH07XG4gIGdldDogKG5hbWU6IHN0cmluZykgPT4gYW55O1xuICBzZXQ6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XG4gIHJlc29sdmU6IChkZXA6IHN0cmluZywgY3VycmVudDogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHJlZnJlc2g6ICgpID0+IHZvaWQ7XG59ID0ge1xuICBjYWNoZToge30sXG4gIHBlbmRpbmc6IHt9LFxuICBnZXQ6IChuYW1lOiBzdHJpbmcpID0+IF9fTU9EVUxFU19fLmNhY2hlW25hbWVdLFxuICBzZXQ6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IChfX01PRFVMRVNfXy5jYWNoZVtuYW1lXSA9IHZhbHVlKSxcbiAgcmVzb2x2ZTogKG5hbWU6IHN0cmluZywgZnJvbTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKC9eXFwuXFwuP1xcLy8udGVzdChuYW1lKSkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gZnJvbS5zcGxpdChcIi9cIikuc2xpY2UoMCwgLTEpO1xuICAgICAgY29uc3QgcmVsYXRpdmVEZXAgPSBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgIHdoaWxlIChyZWxhdGl2ZURlcFswXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHJlbGF0aXZlRGVwLnNoaWZ0KCk7XG4gICAgICAgIGFic29sdXRlUGF0aC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChyZWxhdGl2ZURlcFswXSA9PT0gXCIuXCIpIHtcbiAgICAgICAgcmVsYXRpdmVEZXAuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBbLi4uYWJzb2x1dGVQYXRoLCAuLi5yZWxhdGl2ZURlcF0uam9pbihcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15AP1xcLy8sIFwiL2pzL1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWU7XG4gIH0sXG4gIHJlZnJlc2g6ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHsgdW5tZXREZXBzLCBsb2FkIH1dIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgX19NT0RVTEVTX18ucGVuZGluZyxcbiAgICApKSB7XG4gICAgICBpZiAodW5tZXREZXBzLmV2ZXJ5KChuYW1lKSA9PiBuYW1lIGluIF9fTU9EVUxFU19fLmNhY2hlKSkge1xuICAgICAgICBkZWxldGUgX19NT0RVTEVTX18ucGVuZGluZ1trZXldO1xuICAgICAgICBsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgZGVmaW5lID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICBsZXQgbmFtZTogc3RyaW5nLCBkZXBzOiBBcnJheTxzdHJpbmc+LCBmYWN0b3J5OiBGdW5jdGlvbjtcblxuICAvLyBXZWJwYWNrIEFNRCBtb2R1bGVzIGFyZSBuYW1lZCwgVHlwZVNjcmlwdCBBTUQgbW9kdWxlcyBhcmUgbm90XG4gIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgYXJnc1swXSkge1xuICAgIG5hbWUgPSBhcmdzWzBdO1xuICAgIGRlcHMgPSBhcmdzWzFdO1xuICAgIGZhY3RvcnkgPSBhcmdzWzJdO1xuICB9IGVsc2Uge1xuICAgIG5hbWUgPSAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjXG4gICAgICAucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1xcLmpzJC8sIFwiXCIpO1xuICAgIGRlcHMgPSBhcmdzWzBdO1xuICAgIGZhY3RvcnkgPSBhcmdzWzFdO1xuICB9XG5cbiAgLy8gVHlwZVNjcmlwdCBBTUQgbW9kdWxlcyBwYXNzIGluIHJlcXVpcmUgYW5kIGV4cG9ydHNcbiAgaWYgKFwicmVxdWlyZVwiID09PSBkZXBzWzBdICYmIFwiZXhwb3J0c1wiID09PSBkZXBzWzFdKSB7XG4gICAgZGVwcyA9IGRlcHMuc2xpY2UoMik7XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZSA9IChkZXA6IHN0cmluZykgPT5cbiAgICAgICAgX19NT0RVTEVTX18uZ2V0KF9fTU9EVUxFU19fLnJlc29sdmUoZGVwLCBuYW1lKSk7XG4gICAgICBjb25zdCBleHBvcnRzID0ge307XG4gICAgICBmYWN0b3J5LmNhbGwodGhpcywgcmVxdWlyZSwgZXhwb3J0cywgLi4uZGVwcy5tYXAocmVxdWlyZSkpO1xuICAgICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGV4cG9ydHMpO1xuICAgICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBjb25zdCB1bm1ldERlcHMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgb2YgZGVwcykge1xuICAgICAgZGVwID0gX19NT0RVTEVTX18ucmVzb2x2ZShkZXAsIG5hbWUpO1xuICAgICAgIV9fTU9EVUxFU19fLmdldChkZXApICYmIHVubWV0RGVwcy5wdXNoKGRlcCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZGVwIG9mIHVubWV0RGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICAhT2JqZWN0LnZhbHVlcyhfX01PRFVMRVNfXy5wZW5kaW5nKS5zb21lKCh7IHVubWV0RGVwcyB9KSA9PlxuICAgICAgICAgIHVubWV0RGVwcy5pbmNsdWRlcyhkZXApLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZHluYW1pY1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGR5bmFtaWNTY3JpcHQuc3JjID0gZGVwICsgXCIuanNcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU2NyaXB0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfX01PRFVMRVNfXy5wZW5kaW5nW25hbWVdID0geyB1bm1ldERlcHMsIGxvYWQgfTtcbiAgICBfX01PRFVMRVNfXy5yZWZyZXNoKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2VicGFjayBVTURzIGRvIG5vdCBsb2FkIGR5bmFtaWNhbGx5LCBhZGQgdGhlc2Ugc2NyaXB0IHRhZ3MgaW4gb3JkZXJcbiAgICBfX01PRFVMRVNfXy5zZXQobmFtZSwgZmFjdG9yeS5jYWxsKHRoaXMsIC4uLmRlcHMubWFwKF9fTU9EVUxFU19fLmdldCkpKTtcbiAgfVxufTtcblxuZGVmaW5lLmFtZCA9IHRydWU7IC8vIGxvbCBubyBpdCdzIG5vdCwgYnV0IHByZXRlbmQgd2UgYXJlIEFNRC9SZXF1aXJlSlNcbiJdfQ==