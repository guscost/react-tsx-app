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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-hover-card", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, HoverCardPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HoverCardContent = exports.HoverCardTrigger = exports.HoverCard = void 0;
    React = __importStar(React);
    HoverCardPrimitive = __importStar(HoverCardPrimitive);
    var HoverCard = HoverCardPrimitive.Root;
    exports.HoverCard = HoverCard;
    var HoverCardTrigger = HoverCardPrimitive.Trigger;
    exports.HoverCardTrigger = HoverCardTrigger;
    var HoverCardContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(HoverCardPrimitive.Content, __assign({ ref: ref, align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
    });
    exports.HoverCardContent = HoverCardContent;
    HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2hvdmVyLWNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7Ozs7SUFPYixJQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFxQmpDLDhCQUFTO0lBbkJsQixJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztJQW1CaEMsNENBQWdCO0lBakJwQyxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3ZDLFVBQUMsRUFBeUQsRUFBRSxHQUFHO1FBQTVELElBQUEsU0FBUyxlQUFBLEVBQUUsYUFBZ0IsRUFBaEIsS0FBSyxtQkFBRyxRQUFRLEtBQUEsRUFBRSxrQkFBYyxFQUFkLFVBQVUsbUJBQUcsQ0FBQyxLQUFBLEVBQUssS0FBSyxjQUF2RCxvQ0FBeUQsQ0FBRjtRQUFZLE9BQUEsQ0FDcEUsdUJBQUMsa0JBQWtCLENBQUMsT0FBTyxhQUN6QixHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFFLFVBQVUsRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDRhQUE0YSxFQUM1YSxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBR21DLDRDQUFnQjtJQUZ0RCxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIEhvdmVyQ2FyZFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWhvdmVyLWNhcmRcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgSG92ZXJDYXJkID0gSG92ZXJDYXJkUHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IEhvdmVyQ2FyZFRyaWdnZXIgPSBIb3ZlckNhcmRQcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEhvdmVyQ2FyZFByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBIb3ZlckNhcmRQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCBhbGlnbiA9IFwiY2VudGVyXCIsIHNpZGVPZmZzZXQgPSA0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEhvdmVyQ2FyZFByaW1pdGl2ZS5Db250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgYWxpZ249e2FsaWdufVxuICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCB3LTY0IHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC00IHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1tZCBvdXRsaW5lLW5vbmUgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkhvdmVyQ2FyZENvbnRlbnQuZGlzcGxheU5hbWUgPSBIb3ZlckNhcmRQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgSG92ZXJDYXJkLCBIb3ZlckNhcmRUcmlnZ2VyLCBIb3ZlckNhcmRDb250ZW50IH07XG4iXX0=