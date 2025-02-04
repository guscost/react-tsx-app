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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-progress", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, ProgressPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Progress = void 0;
    React = __importStar(React);
    ProgressPrimitive = __importStar(ProgressPrimitive);
    var Progress = React.forwardRef(function (_a, ref) {
        var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
        return ((0, jsx_runtime_1.jsx)(ProgressPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className) }, props, { children: (0, jsx_runtime_1.jsx)(ProgressPrimitive.Indicator, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: "translateX(-".concat(100 - (value || 0), "%)") } }) })));
    });
    exports.Progress = Progress;
    Progress.displayName = ProgressPrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9wcm9ncmVzcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7Ozs7OztJQU9iLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBRy9CLFVBQUMsRUFBOEIsRUFBRSxHQUFHO1FBQWpDLElBQUEsU0FBUyxlQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUssS0FBSyxjQUE1QixzQkFBOEIsQ0FBRjtRQUFZLE9BQUEsQ0FDekMsdUJBQUMsaUJBQWlCLENBQUMsSUFBSSxhQUNyQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxnRUFBZ0UsRUFDaEUsU0FBUyxDQUNWLElBQ0csS0FBSyxjQUVULHVCQUFDLGlCQUFpQixDQUFDLFNBQVMsSUFDMUIsU0FBUyxFQUFDLGdEQUFnRCxFQUMxRCxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0JBQWUsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFJLEVBQUUsR0FDM0QsSUFDcUIsQ0FDMUIsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUdNLDRCQUFRO0lBRmpCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFByb2dyZXNzUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgUHJvZ3Jlc3MgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBQcm9ncmVzc1ByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQcm9ncmVzc1ByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIHZhbHVlLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFByb2dyZXNzUHJpbWl0aXZlLlJvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBoLTIgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8yMFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPFByb2dyZXNzUHJpbWl0aXZlLkluZGljYXRvclxuICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4LTEgYmctcHJpbWFyeSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0kezEwMCAtICh2YWx1ZSB8fCAwKX0lKWAgfX1cbiAgICAvPlxuICA8L1Byb2dyZXNzUHJpbWl0aXZlLlJvb3Q+XG4pKTtcblByb2dyZXNzLmRpc3BsYXlOYW1lID0gUHJvZ3Jlc3NQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgUHJvZ3Jlc3MgfTtcbiJdfQ==