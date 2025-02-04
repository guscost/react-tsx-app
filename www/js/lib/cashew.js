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
// Custom AMD-like shim script to load script modules
// Does not support circular dependencies
var __MODULES__ = {
    cache: {},
    pending: {},
    get: function (name) { return __MODULES__.cache[name]; },
    set: function (name, value) { return (__MODULES__.cache[name] = value); },
    resolve: function (name, current) {
        if (/^\.\.?\//.test(name)) {
            var absolutePath = current.split("/").slice(0, -1);
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
        Object.entries(__MODULES__.pending).forEach(function (_a) {
            var key = _a[0], _b = _a[1], unmetDeps = _b.unmetDeps, load = _b.load;
            if (unmetDeps.every(function (name) { return name in __MODULES__.cache; })) {
                delete __MODULES__.pending[key];
                load();
            }
        });
    },
};
var define = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name, deps, factory;
    // Parse the arguments for named or anonymous modules
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
    if ("require" === deps[0] && "exports" === deps[1]) {
        // TypeScript AMD modules pass two extra arguments
        var moduleDeps_2 = deps.slice(2);
        var unmetDeps = [];
        var _loop_1 = function (dep) {
            dep = __MODULES__.resolve(dep, name);
            !__MODULES__.get(dep) &&
                !Object.values(__MODULES__.pending).some(function (_a) {
                    var unmetDeps = _a.unmetDeps;
                    return unmetDeps.includes(dep);
                }) &&
                unmetDeps.push(dep);
        };
        for (var _a = 0, moduleDeps_1 = moduleDeps_2; _a < moduleDeps_1.length; _a++) {
            var dep = moduleDeps_1[_a];
            _loop_1(dep);
        }
        var load = function () {
            var require = function (dep) {
                return __MODULES__.get(__MODULES__.resolve(dep, name));
            };
            var exports = {};
            factory.call.apply(factory, __spreadArray([_this, require, exports], moduleDeps_2.map(require), false));
            __MODULES__.set(name, exports);
            __MODULES__.refresh();
        };
        if (unmetDeps.length) {
            __MODULES__.pending[name] = { unmetDeps: unmetDeps, load: load };
            for (var _b = 0, unmetDeps_1 = unmetDeps; _b < unmetDeps_1.length; _b++) {
                var dep = unmetDeps_1[_b];
                var dynamicScript = document.createElement("script");
                dynamicScript.src = dep + ".js";
                document.body.appendChild(dynamicScript);
            }
        }
        else {
            load();
        }
    }
    else {
        // Webpack UMD modules take only dependencies and return exports
        __MODULES__.set(name, factory.call.apply(factory, __spreadArray([_this], deps.map(__MODULES__.get), false)));
        __MODULES__.refresh();
    }
};
define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jYXNoZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsaUJBbUdBO0FBckdBLHFEQUFxRDtBQUNyRCx5Q0FBeUM7QUFDekMsSUFBTSxXQUFXLEdBT2I7SUFDRixLQUFLLEVBQUUsRUFBRTtJQUNULE9BQU8sRUFBRSxFQUFFO0lBQ1gsR0FBRyxFQUFFLFVBQUMsSUFBWSxJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUI7SUFDOUMsR0FBRyxFQUFFLFVBQUMsSUFBWSxFQUFFLEtBQVUsSUFBSyxPQUFBLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBakMsQ0FBaUM7SUFDcEUsT0FBTyxFQUFFLFVBQUMsSUFBWSxFQUFFLE9BQWU7UUFDckMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUNELElBQUksR0FBRyxnQ0FBSSxZQUFZLFNBQUssV0FBVyxRQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUN6QyxVQUFDLEVBQTBCO2dCQUF6QixHQUFHLFFBQUEsRUFBRSxVQUFtQixFQUFqQixTQUFTLGVBQUEsRUFBRSxJQUFJLFVBQUE7WUFDdEIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQXpCLENBQXlCLENBQUMsRUFBRSxDQUFDO2dCQUN6RCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQztRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRztJQUFDLGNBQVk7U0FBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1FBQVoseUJBQVk7O0lBQzFCLElBQUksSUFBWSxFQUFFLElBQW1CLEVBQUUsT0FBaUIsQ0FBQztJQUV6RCxxREFBcUQ7SUFDckQsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztTQUFNLENBQUM7UUFDTixJQUFJLEdBQUksUUFBUSxDQUFDLGFBQW1DLENBQUMsR0FBRzthQUNyRCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO2FBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsa0RBQWtEO1FBQ2xELElBQU0sWUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO2dDQUVaLEdBQUc7WUFDVixHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFhO3dCQUFYLFNBQVMsZUFBQTtvQkFDbkQsT0FBQSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBdkIsQ0FBdUIsQ0FDeEI7Z0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFOeEIsS0FBZ0IsVUFBVSxFQUFWLGVBQUEsWUFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTtZQUFyQixJQUFJLEdBQUcsbUJBQUE7b0JBQUgsR0FBRztTQU9YO1FBRUQsSUFBTSxJQUFJLEdBQUc7WUFDWCxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQVc7Z0JBQzFCLE9BQUEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUEvQyxDQUErQyxDQUFDO1lBQ2xELElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8saUJBQU0sS0FBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUssWUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBRTtZQUNqRSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsV0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7WUFFaEQsS0FBZ0IsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTLEVBQUUsQ0FBQztnQkFBdkIsSUFBSSxHQUFHLGtCQUFBO2dCQUNWLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDTixnRUFBZ0U7UUFDaEUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLGlCQUFNLEtBQUksR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBRSxDQUFDO1FBQ3hFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxvREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gQU1ELWxpa2Ugc2hpbSBzY3JpcHQgdG8gbG9hZCBzY3JpcHQgbW9kdWxlc1xuLy8gRG9lcyBub3Qgc3VwcG9ydCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbmNvbnN0IF9fTU9EVUxFU19fOiB7XG4gIGNhY2hlOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcbiAgcGVuZGluZzogeyBbbmFtZTogc3RyaW5nXTogeyB1bm1ldERlcHM6IHN0cmluZ1tdOyBsb2FkOiAoKSA9PiB2b2lkIH0gfTtcbiAgZ2V0OiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XG4gIHNldDogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgcmVzb2x2ZTogKGRlcDogc3RyaW5nLCBjdXJyZW50OiBzdHJpbmcpID0+IHN0cmluZztcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbn0gPSB7XG4gIGNhY2hlOiB7fSxcbiAgcGVuZGluZzoge30sXG4gIGdldDogKG5hbWU6IHN0cmluZykgPT4gX19NT0RVTEVTX18uY2FjaGVbbmFtZV0sXG4gIHNldDogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gKF9fTU9EVUxFU19fLmNhY2hlW25hbWVdID0gdmFsdWUpLFxuICByZXNvbHZlOiAobmFtZTogc3RyaW5nLCBjdXJyZW50OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoL15cXC5cXC4/XFwvLy50ZXN0KG5hbWUpKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjdXJyZW50LnNwbGl0KFwiL1wiKS5zbGljZSgwLCAtMSk7XG4gICAgICBjb25zdCByZWxhdGl2ZURlcCA9IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgd2hpbGUgKHJlbGF0aXZlRGVwWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgcmVsYXRpdmVEZXAuc2hpZnQoKTtcbiAgICAgICAgYWJzb2x1dGVQYXRoLnBvcCgpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHJlbGF0aXZlRGVwWzBdID09PSBcIi5cIikge1xuICAgICAgICByZWxhdGl2ZURlcC5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgbmFtZSA9IFsuLi5hYnNvbHV0ZVBhdGgsIC4uLnJlbGF0aXZlRGVwXS5qb2luKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXkA/XFwvLywgXCIvanMvXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbiAgfSxcbiAgcmVmcmVzaDogKCkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKF9fTU9EVUxFU19fLnBlbmRpbmcpLmZvckVhY2goXG4gICAgICAoW2tleSwgeyB1bm1ldERlcHMsIGxvYWQgfV0pID0+IHtcbiAgICAgICAgaWYgKHVubWV0RGVwcy5ldmVyeSgobmFtZSkgPT4gbmFtZSBpbiBfX01PRFVMRVNfXy5jYWNoZSkpIHtcbiAgICAgICAgICBkZWxldGUgX19NT0RVTEVTX18ucGVuZGluZ1trZXldO1xuICAgICAgICAgIGxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9LFxufTtcblxuY29uc3QgZGVmaW5lID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICBsZXQgbmFtZTogc3RyaW5nLCBkZXBzOiBBcnJheTxzdHJpbmc+LCBmYWN0b3J5OiBGdW5jdGlvbjtcblxuICAvLyBQYXJzZSB0aGUgYXJndW1lbnRzIGZvciBuYW1lZCBvciBhbm9ueW1vdXMgbW9kdWxlc1xuICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICBuYW1lID0gYXJnc1swXTtcbiAgICBkZXBzID0gYXJnc1sxXTtcbiAgICBmYWN0b3J5ID0gYXJnc1syXTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lID0gKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnNyY1xuICAgICAgLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9cXC5qcyQvLCBcIlwiKTtcbiAgICBkZXBzID0gYXJnc1swXTtcbiAgICBmYWN0b3J5ID0gYXJnc1sxXTtcbiAgfVxuXG4gIGlmIChcInJlcXVpcmVcIiA9PT0gZGVwc1swXSAmJiBcImV4cG9ydHNcIiA9PT0gZGVwc1sxXSkge1xuICAgIC8vIFR5cGVTY3JpcHQgQU1EIG1vZHVsZXMgcGFzcyB0d28gZXh0cmEgYXJndW1lbnRzXG4gICAgY29uc3QgbW9kdWxlRGVwcyA9IGRlcHMuc2xpY2UoMik7XG4gICAgY29uc3QgdW5tZXREZXBzID0gW107XG5cbiAgICBmb3IgKGxldCBkZXAgb2YgbW9kdWxlRGVwcykge1xuICAgICAgZGVwID0gX19NT0RVTEVTX18ucmVzb2x2ZShkZXAsIG5hbWUpO1xuICAgICAgIV9fTU9EVUxFU19fLmdldChkZXApICYmXG4gICAgICAgICFPYmplY3QudmFsdWVzKF9fTU9EVUxFU19fLnBlbmRpbmcpLnNvbWUoKHsgdW5tZXREZXBzIH0pID0+XG4gICAgICAgICAgdW5tZXREZXBzLmluY2x1ZGVzKGRlcCksXG4gICAgICAgICkgJiZcbiAgICAgICAgdW5tZXREZXBzLnB1c2goZGVwKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZSA9IChkZXA6IHN0cmluZykgPT5cbiAgICAgICAgX19NT0RVTEVTX18uZ2V0KF9fTU9EVUxFU19fLnJlc29sdmUoZGVwLCBuYW1lKSk7XG4gICAgICBjb25zdCBleHBvcnRzID0ge307XG4gICAgICBmYWN0b3J5LmNhbGwodGhpcywgcmVxdWlyZSwgZXhwb3J0cywgLi4ubW9kdWxlRGVwcy5tYXAocmVxdWlyZSkpO1xuICAgICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGV4cG9ydHMpO1xuICAgICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBpZiAodW5tZXREZXBzLmxlbmd0aCkge1xuICAgICAgX19NT0RVTEVTX18ucGVuZGluZ1tuYW1lXSA9IHsgdW5tZXREZXBzLCBsb2FkIH07XG5cbiAgICAgIGZvciAobGV0IGRlcCBvZiB1bm1ldERlcHMpIHtcbiAgICAgICAgY29uc3QgZHluYW1pY1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGR5bmFtaWNTY3JpcHQuc3JjID0gZGVwICsgXCIuanNcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU2NyaXB0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXZWJwYWNrIFVNRCBtb2R1bGVzIHRha2Ugb25seSBkZXBlbmRlbmNpZXMgYW5kIHJldHVybiBleHBvcnRzXG4gICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGZhY3RvcnkuY2FsbCh0aGlzLCAuLi5kZXBzLm1hcChfX01PRFVMRVNfXy5nZXQpKSk7XG4gICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICB9XG59O1xuXG5kZWZpbmUuYW1kID0gdHJ1ZTsgLy8gbG9sIG5vIGl0J3Mgbm90LCBidXQgcHJldGVuZCB3ZSBhcmUgQU1EL1JlcXVpcmVKU1xuIl19