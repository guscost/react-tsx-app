var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports", "react/jsx-runtime", "utils"], function (require, exports, jsx_runtime_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Skeleton = Skeleton;
    function Skeleton(_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("animate-pulse rounded-md bg-primary/10", className) }, props)));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9za2VsZXRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWNTLDRCQUFRO0lBWmpCLFNBQVMsUUFBUSxDQUFDLEVBR3FCO1FBRnJDLElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZRLGFBR2pCLENBRFM7UUFFUixPQUFPLENBQ0wseUNBQ0UsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLHdDQUF3QyxFQUFFLFNBQVMsQ0FBQyxJQUM5RCxLQUFLLEVBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyJ9