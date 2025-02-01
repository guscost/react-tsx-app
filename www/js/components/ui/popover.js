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
define("ui/popover", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-popover", "lib/utils"], function (require, exports, jsx_runtime_1, React, PopoverPrimitive, utils_1) {
    /// <amd-module name="ui/popover"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PopoverAnchor = exports.PopoverContent = exports.PopoverTrigger = exports.Popover = void 0;
    React = __importStar(React);
    PopoverPrimitive = __importStar(PopoverPrimitive);
    var Popover = PopoverPrimitive.Root;
    exports.Popover = Popover;
    var PopoverTrigger = PopoverPrimitive.Trigger;
    exports.PopoverTrigger = PopoverTrigger;
    var PopoverAnchor = PopoverPrimitive.Anchor;
    exports.PopoverAnchor = PopoverAnchor;
    var PopoverContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(PopoverPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(PopoverPrimitive.Content, __assign({ ref: ref, align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.PopoverContent = PopoverContent;
    PopoverContent.displayName = PopoverPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3BvcG92ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7Ozs7O0lBT2IsSUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBeUI3QiwwQkFBTztJQXZCaEIsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBdUI5Qix3Q0FBYztJQXJCaEMsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBcUJJLHNDQUFhO0lBbkIvRCxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXlELEVBQUUsR0FBRztRQUE1RCxJQUFBLFNBQVMsZUFBQSxFQUFFLGFBQWdCLEVBQWhCLEtBQUssbUJBQUcsUUFBUSxLQUFBLEVBQUUsa0JBQWMsRUFBZCxVQUFVLG1CQUFHLENBQUMsS0FBQSxFQUFLLEtBQUssY0FBdkQsb0NBQXlELENBQUY7UUFBWSxPQUFBLENBQ3BFLHVCQUFDLGdCQUFnQixDQUFDLE1BQU0sY0FDdEIsdUJBQUMsZ0JBQWdCLENBQUMsT0FBTyxhQUN2QixHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFFLFVBQVUsRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDRhQUE0YSxFQUM1YSxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsR0FDc0IsQ0FDM0IsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUcrQix3Q0FBYztJQUZoRCxjQUFjLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1tb2R1bGUgbmFtZT1cInVpL3BvcG92ZXJcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFBvcG92ZXIgPSBQb3BvdmVyUHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IFBvcG92ZXJUcmlnZ2VyID0gUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBQb3BvdmVyQW5jaG9yID0gUG9wb3ZlclByaW1pdGl2ZS5BbmNob3I7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQb3BvdmVyUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgYWxpZ24gPSBcImNlbnRlclwiLCBzaWRlT2Zmc2V0ID0gNCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxQb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInotNTAgdy03MiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtNCB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgb3V0bGluZS1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvUG9wb3ZlclByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcblBvcG92ZXJDb250ZW50LmRpc3BsYXlOYW1lID0gUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyVHJpZ2dlciwgUG9wb3ZlckNvbnRlbnQsIFBvcG92ZXJBbmNob3IgfTtcbiJdfQ==