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
define("ui/navigation-menu", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-navigation-menu", "class-variance-authority", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, NavigationMenuPrimitive, class_variance_authority_1, lucide_react_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationMenuViewport = exports.NavigationMenuIndicator = exports.NavigationMenuLink = exports.NavigationMenuTrigger = exports.NavigationMenuContent = exports.NavigationMenuItem = exports.NavigationMenuList = exports.NavigationMenu = exports.navigationMenuTriggerStyle = void 0;
    React = __importStar(React);
    NavigationMenuPrimitive = __importStar(NavigationMenuPrimitive);
    var NavigationMenu = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(NavigationMenuPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(NavigationMenuViewport, {})] })));
    });
    exports.NavigationMenu = NavigationMenu;
    NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
    var NavigationMenuList = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.List, __assign({ ref: ref, className: (0, utils_1.cn)("group flex flex-1 list-none items-center justify-center space-x-1", className) }, props)));
    });
    exports.NavigationMenuList = NavigationMenuList;
    NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
    var NavigationMenuItem = NavigationMenuPrimitive.Item;
    exports.NavigationMenuItem = NavigationMenuItem;
    var navigationMenuTriggerStyle = (0, class_variance_authority_1.cva)("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
    exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
    var NavigationMenuTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(NavigationMenuPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)(navigationMenuTriggerStyle(), "group", className) }, props, { children: [children, " ", (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] })));
    });
    exports.NavigationMenuTrigger = NavigationMenuTrigger;
    NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
    var NavigationMenuContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className) }, props)));
    });
    exports.NavigationMenuContent = NavigationMenuContent;
    NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
    var NavigationMenuLink = NavigationMenuPrimitive.Link;
    exports.NavigationMenuLink = NavigationMenuLink;
    var NavigationMenuViewport = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute left-0 top-full flex justify-center"), children: (0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Viewport, __assign({ className: (0, utils_1.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref: ref }, props)) }));
    });
    exports.NavigationMenuViewport = NavigationMenuViewport;
    NavigationMenuViewport.displayName =
        NavigationMenuPrimitive.Viewport.displayName;
    var NavigationMenuIndicator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Indicator, __assign({ ref: ref, className: (0, utils_1.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className) }, props, { children: (0, jsx_runtime_1.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) })));
    });
    exports.NavigationMenuIndicator = NavigationMenuIndicator;
    NavigationMenuIndicator.displayName =
        NavigationMenuPrimitive.Indicator.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUUEsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHckMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx3QkFBQyx1QkFBdUIsQ0FBQyxJQUFJLGFBQzNCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGlFQUFpRSxFQUNqRSxTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVIsUUFBUSxFQUNULHVCQUFDLHNCQUFzQixLQUFHLEtBQ0csQ0FDaEMsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWlHRCx3Q0FBYztJQWhHaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHekMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLHVCQUF1QixDQUFDLElBQUksYUFDM0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbUVBQW1FLEVBQ25FLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFtRkQsZ0RBQWtCO0lBbEZwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsdUJB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Ly8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9uYXZpZ2F0aW9uLW1lbnVcIi8+XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbmF2aWdhdGlvbi1tZW51XCI7XG5pbXBvcnQgeyBjdmEgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwic3JjL2xpYi91dGlsc1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIHotMTAgZmxleCBtYXgtdy1tYXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxOYXZpZ2F0aW9uTWVudVZpZXdwb3J0IC8+XG4gIDwvTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdD5cbikpO1xuTmF2aWdhdGlvbk1lbnUuZGlzcGxheU5hbWUgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUxpc3QgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5MaXN0PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5MaXN0PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuTGlzdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImdyb3VwIGZsZXggZmxleC0xIGxpc3Qtbm9uZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0xXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbk5hdmlnYXRpb25NZW51TGlzdC5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpc3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51SXRlbSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkl0ZW07XG5cbmNvbnN0IG5hdmlnYXRpb25NZW51VHJpZ2dlclN0eWxlID0gY3ZhKFxuICBcImdyb3VwIGlubGluZS1mbGV4IGgtOSB3LW1heCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1iYWNrZ3JvdW5kIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgZGF0YS1bYWN0aXZlXTpiZy1hY2NlbnQvNTAgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50LzUwXCIsXG4pO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudVRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5UcmlnZ2VyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5UcmlnZ2VyPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlRyaWdnZXJcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKG5hdmlnYXRpb25NZW51VHJpZ2dlclN0eWxlKCksIFwiZ3JvdXBcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxDaGV2cm9uRG93blxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLVsxcHhdIG1sLTEgaC0zIHctMyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBncm91cC1kYXRhLVtzdGF0ZT1vcGVuXTpyb3RhdGUtMTgwXCJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgLz5cbiAgPC9OYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5UcmlnZ2VyPlxuKSk7XG5OYXZpZ2F0aW9uTWVudVRyaWdnZXIuZGlzcGxheU5hbWUgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5UcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImxlZnQtMCB0b3AtMCB3LWZ1bGwgZGF0YS1bbW90aW9uXj1mcm9tLV06YW5pbWF0ZS1pbiBkYXRhLVttb3Rpb25ePXRvLV06YW5pbWF0ZS1vdXQgZGF0YS1bbW90aW9uXj1mcm9tLV06ZmFkZS1pbiBkYXRhLVttb3Rpb25ePXRvLV06ZmFkZS1vdXQgZGF0YS1bbW90aW9uPWZyb20tZW5kXTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTUyIGRhdGEtW21vdGlvbj1mcm9tLXN0YXJ0XTpzbGlkZS1pbi1mcm9tLWxlZnQtNTIgZGF0YS1bbW90aW9uPXRvLWVuZF06c2xpZGUtb3V0LXRvLXJpZ2h0LTUyIGRhdGEtW21vdGlvbj10by1zdGFydF06c2xpZGUtb3V0LXRvLWxlZnQtNTIgbWQ6YWJzb2x1dGUgbWQ6dy1hdXRvIFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5OYXZpZ2F0aW9uTWVudUNvbnRlbnQuZGlzcGxheU5hbWUgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUxpbmsgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5MaW5rO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudVZpZXdwb3J0ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVmlld3BvcnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiKX0+XG4gICAgPE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm9yaWdpbi10b3AtY2VudGVyIHJlbGF0aXZlIG10LTEuNSBoLVt2YXIoLS1yYWRpeC1uYXZpZ2F0aW9uLW1lbnUtdmlld3BvcnQtaGVpZ2h0KV0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTkwIG1kOnctW3ZhcigtLXJhZGl4LW5hdmlnYXRpb24tbWVudS12aWV3cG9ydC13aWR0aCldXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L2Rpdj5cbikpO1xuTmF2aWdhdGlvbk1lbnVWaWV3cG9ydC5kaXNwbGF5TmFtZSA9XG4gIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUluZGljYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkluZGljYXRvcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwidG9wLWZ1bGwgei1bMV0gZmxleCBoLTEuNSBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGRhdGEtW3N0YXRlPXZpc2libGVdOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9aGlkZGVuXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1oaWRkZW5dOmZhZGUtb3V0IGRhdGEtW3N0YXRlPXZpc2libGVdOmZhZGUtaW5cIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLVs2MCVdIGgtMiB3LTIgcm90YXRlLTQ1IHJvdW5kZWQtdGwtc20gYmctYm9yZGVyIHNoYWRvdy1tZFwiIC8+XG4gIDwvTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yPlxuKSk7XG5OYXZpZ2F0aW9uTWVudUluZGljYXRvci5kaXNwbGF5TmFtZSA9XG4gIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkluZGljYXRvci5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHtcbiAgbmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUsXG4gIE5hdmlnYXRpb25NZW51LFxuICBOYXZpZ2F0aW9uTWVudUxpc3QsXG4gIE5hdmlnYXRpb25NZW51SXRlbSxcbiAgTmF2aWdhdGlvbk1lbnVDb250ZW50LFxuICBOYXZpZ2F0aW9uTWVudVRyaWdnZXIsXG4gIE5hdmlnYXRpb25NZW51TGluayxcbiAgTmF2aWdhdGlvbk1lbnVJbmRpY2F0b3IsXG4gIE5hdmlnYXRpb25NZW51Vmlld3BvcnQsXG59O1xuIl19