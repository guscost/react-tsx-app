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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-separator", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, SeparatorPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Separator = void 0;
    React = __importStar(React);
    SeparatorPrimitive = __importStar(SeparatorPrimitive);
    var Separator = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? "horizontal" : _b, _c = _a.decorative, decorative = _c === void 0 ? true : _c, props = __rest(_a, ["className", "orientation", "decorative"]);
        return ((0, jsx_runtime_1.jsx)(SeparatorPrimitive.Root, __assign({ ref: ref, decorative: decorative, orientation: orientation, className: (0, utils_1.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className) }, props)));
    });
    exports.Separator = Separator;
    Separator.displayName = SeparatorPrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBT2IsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FJaEMsVUFDRSxFQUFzRSxFQUN0RSxHQUFHO1FBREQsSUFBQSxTQUFTLGVBQUEsRUFBRSxtQkFBMEIsRUFBMUIsV0FBVyxtQkFBRyxZQUFZLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFBSyxLQUFLLGNBQXBFLDBDQUFzRSxDQUFGO1FBRWpFLE9BQUEsQ0FDSCx1QkFBQyxrQkFBa0IsQ0FBQyxJQUFJLGFBQ3RCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsVUFBVSxFQUFFLFVBQVUsRUFDdEIsV0FBVyxFQUFFLFdBQVcsRUFDeEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLG9CQUFvQixFQUNwQixXQUFXLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQ2xFLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUNGLENBQUM7SUFHTyw4QkFBUztJQUZsQixTQUFTLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTZXBhcmF0b3JQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3JcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgU2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlcGFyYXRvclByaW1pdGl2ZS5Sb290PlxuPihcbiAgKFxuICAgIHsgY2xhc3NOYW1lLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiLCBkZWNvcmF0aXZlID0gdHJ1ZSwgLi4ucHJvcHMgfSxcbiAgICByZWYsXG4gICkgPT4gKFxuICAgIDxTZXBhcmF0b3JQcmltaXRpdmUuUm9vdFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBkZWNvcmF0aXZlPXtkZWNvcmF0aXZlfVxuICAgICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJzaHJpbmstMCBiZy1ib3JkZXJcIixcbiAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJoLVsxcHhdIHctZnVsbFwiIDogXCJoLWZ1bGwgdy1bMXB4XVwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4pO1xuU2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IFNlcGFyYXRvciB9O1xuIl19