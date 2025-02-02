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
define("ui/tooltip", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-tooltip", "lib/utils"], function (require, exports, jsx_runtime_1, React, TooltipPrimitive, utils_1) {
    /// <amd-module name="ui/tooltip"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TooltipProvider = exports.TooltipContent = exports.TooltipTrigger = exports.Tooltip = void 0;
    React = __importStar(React);
    TooltipPrimitive = __importStar(TooltipPrimitive);
    var TooltipProvider = TooltipPrimitive.Provider;
    exports.TooltipProvider = TooltipProvider;
    var Tooltip = TooltipPrimitive.Root;
    exports.Tooltip = Tooltip;
    var TooltipTrigger = TooltipPrimitive.Trigger;
    exports.TooltipTrigger = TooltipTrigger;
    var TooltipContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, props = __rest(_a, ["className", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(TooltipPrimitive.Content, __assign({ ref: ref, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.TooltipContent = TooltipContent;
    TooltipContent.displayName = TooltipPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7Ozs7O0lBT2IsSUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBd0JBLDBDQUFlO0lBdEJqRSxJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFzQjdCLDBCQUFPO0lBcEJoQixJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFvQjlCLHdDQUFjO0lBbEJoQyxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXVDLEVBQUUsR0FBRztRQUExQyxJQUFBLFNBQVMsZUFBQSxFQUFFLGtCQUFjLEVBQWQsVUFBVSxtQkFBRyxDQUFDLEtBQUEsRUFBSyxLQUFLLGNBQXJDLDJCQUF1QyxDQUFGO1FBQVksT0FBQSxDQUNsRCx1QkFBQyxnQkFBZ0IsQ0FBQyxNQUFNLGNBQ3RCLHVCQUFDLGdCQUFnQixDQUFDLE9BQU8sYUFDdkIsR0FBRyxFQUFFLEdBQUcsRUFDUixVQUFVLEVBQUUsVUFBVSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbVhBQW1YLEVBQ25YLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxHQUNzQixDQUMzQixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBRytCLHdDQUFjO0lBRmhELGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvdG9vbHRpcFwiLz5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRvb2x0aXBQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b29sdGlwXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgVG9vbHRpcFByb3ZpZGVyID0gVG9vbHRpcFByaW1pdGl2ZS5Qcm92aWRlcjtcblxuY29uc3QgVG9vbHRpcCA9IFRvb2x0aXBQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgVG9vbHRpcFRyaWdnZXIgPSBUb29sdGlwUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8VG9vbHRpcFByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPFRvb2x0aXBQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLXByaW1hcnkgcHgtMyBweS0xLjUgdGV4dC14cyB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBhbmltYXRlLWluIGZhZGUtaW4tMCB6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L1Rvb2x0aXBQcmltaXRpdmUuUG9ydGFsPlxuKSk7XG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9IFRvb2x0aXBQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgVG9vbHRpcCwgVG9vbHRpcFRyaWdnZXIsIFRvb2x0aXBDb250ZW50LCBUb29sdGlwUHJvdmlkZXIgfTtcbiJdfQ==