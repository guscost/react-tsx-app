var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
define("hooks/use-mobile", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useIsMobile = useIsMobile;
    React = __importStar(React);
    var MOBILE_BREAKPOINT = 768;
    function useIsMobile() {
        var _a = React.useState(undefined), isMobile = _a[0], setIsMobile = _a[1];
        React.useEffect(function () {
            var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
            var onChange = function () {
                setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            };
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return function () { return mql.removeEventListener("change", onChange); };
        }, []);
        return !!isMobile;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLW1vYmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob29rcy91c2UtbW9iaWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQSxrQ0FnQkM7O0lBbEJELElBQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDO0lBRTlCLFNBQWdCLFdBQVc7UUFDbkIsSUFBQSxLQUEwQixLQUFLLENBQUMsUUFBUSxDQUM1QyxTQUFTLENBQ1YsRUFGTSxRQUFRLFFBQUEsRUFBRSxXQUFXLFFBRTNCLENBQUM7UUFFRixLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2QsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBZSxpQkFBaUIsR0FBRyxDQUFDLFFBQUssQ0FBQyxDQUFDO1lBQ3pFLElBQU0sUUFBUSxHQUFHO2dCQUNmLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sY0FBTSxPQUFBLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQTNDLENBQTJDLENBQUM7UUFDM0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1tb2R1bGUgbmFtZT1cImhvb2tzL3VzZS1tb2JpbGVcIi8+XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTU9CSUxFX0JSRUFLUE9JTlQgPSA3Njg7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc01vYmlsZSgpIHtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuIHwgdW5kZWZpbmVkPihcbiAgICB1bmRlZmluZWQsXG4gICk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHtNT0JJTEVfQlJFQUtQT0lOVCAtIDF9cHgpYCk7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UKTtcbiAgICB9O1xuICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKTtcbiAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UKTtcbiAgICByZXR1cm4gKCkgPT4gbXFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuICEhaXNNb2JpbGU7XG59XG4iXX0=