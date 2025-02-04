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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-navigation-menu", "class-variance-authority", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, NavigationMenuPrimitive, class_variance_authority_1, lucide_react_1, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT0EsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHckMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx3QkFBQyx1QkFBdUIsQ0FBQyxJQUFJLGFBQzNCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGlFQUFpRSxFQUNqRSxTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVIsUUFBUSxFQUNULHVCQUFDLHNCQUFzQixLQUFHLEtBQ0csQ0FDaEMsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWlHRCx3Q0FBYztJQWhHaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHekMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLHVCQUF1QixDQUFDLElBQUksYUFDM0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbUVBQW1FLEVBQ25FLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFtRkQsZ0RBQWtCO0lBbEZwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsdUJB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aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LW5hdmlnYXRpb24tbWVudVwiO1xuaW1wb3J0IHsgY3ZhIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdD5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgei0xMCBmbGV4IG1heC13LW1heCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPE5hdmlnYXRpb25NZW51Vmlld3BvcnQgLz5cbiAgPC9OYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Sb290PlxuKSk7XG5OYXZpZ2F0aW9uTWVudS5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51TGlzdCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpc3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpc3Q+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5MaXN0XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZ3JvdXAgZmxleCBmbGV4LTEgbGlzdC1ub25lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTFcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuTmF2aWdhdGlvbk1lbnVMaXN0LmRpc3BsYXlOYW1lID0gTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuTGlzdC5kaXNwbGF5TmFtZTtcblxuY29uc3QgTmF2aWdhdGlvbk1lbnVJdGVtID0gTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSXRlbTtcblxuY29uc3QgbmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUgPSBjdmEoXG4gIFwiZ3JvdXAgaW5saW5lLWZsZXggaC05IHctbWF4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWJhY2tncm91bmQgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVthY3RpdmVdOmJnLWFjY2VudC81MCBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQvNTBcIixcbik7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51VHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlRyaWdnZXI+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24obmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKSwgXCJncm91cFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPENoZXZyb25Eb3duXG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtWzFweF0gbWwtMSBoLTMgdy0zIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGdyb3VwLWRhdGEtW3N0YXRlPW9wZW5dOnJvdGF0ZS0xODBcIlxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAvPlxuICA8L05hdmlnYXRpb25NZW51UHJpbWl0aXZlLlRyaWdnZXI+XG4pKTtcbk5hdmlnYXRpb25NZW51VHJpZ2dlci5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlRyaWdnZXIuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Db250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwibGVmdC0wIHRvcC0wIHctZnVsbCBkYXRhLVttb3Rpb25ePWZyb20tXTphbmltYXRlLWluIGRhdGEtW21vdGlvbl49dG8tXTphbmltYXRlLW91dCBkYXRhLVttb3Rpb25ePWZyb20tXTpmYWRlLWluIGRhdGEtW21vdGlvbl49dG8tXTpmYWRlLW91dCBkYXRhLVttb3Rpb249ZnJvbS1lbmRdOnNsaWRlLWluLWZyb20tcmlnaHQtNTIgZGF0YS1bbW90aW9uPWZyb20tc3RhcnRdOnNsaWRlLWluLWZyb20tbGVmdC01MiBkYXRhLVttb3Rpb249dG8tZW5kXTpzbGlkZS1vdXQtdG8tcmlnaHQtNTIgZGF0YS1bbW90aW9uPXRvLXN0YXJ0XTpzbGlkZS1vdXQtdG8tbGVmdC01MiBtZDphYnNvbHV0ZSBtZDp3LWF1dG8gXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbk5hdmlnYXRpb25NZW51Q29udGVudC5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51TGluayA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpbms7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51Vmlld3BvcnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5WaWV3cG9ydD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVmlld3BvcnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbihcImFic29sdXRlIGxlZnQtMCB0b3AtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCIpfT5cbiAgICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVmlld3BvcnRcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwib3JpZ2luLXRvcC1jZW50ZXIgcmVsYXRpdmUgbXQtMS41IGgtW3ZhcigtLXJhZGl4LW5hdmlnYXRpb24tbWVudS12aWV3cG9ydC1oZWlnaHQpXSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93IGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTAgbWQ6dy1bdmFyKC0tcmFkaXgtbmF2aWdhdGlvbi1tZW51LXZpZXdwb3J0LXdpZHRoKV1cIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvZGl2PlxuKSk7XG5OYXZpZ2F0aW9uTWVudVZpZXdwb3J0LmRpc3BsYXlOYW1lID1cbiAgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVmlld3BvcnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51SW5kaWNhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5JbmRpY2F0b3I+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5JbmRpY2F0b3JcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJ0b3AtZnVsbCB6LVsxXSBmbGV4IGgtMS41IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gZGF0YS1bc3RhdGU9dmlzaWJsZV06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1oaWRkZW5dOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWhpZGRlbl06ZmFkZS1vdXQgZGF0YS1bc3RhdGU9dmlzaWJsZV06ZmFkZS1pblwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtWzYwJV0gaC0yIHctMiByb3RhdGUtNDUgcm91bmRlZC10bC1zbSBiZy1ib3JkZXIgc2hhZG93LW1kXCIgLz5cbiAgPC9OYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5JbmRpY2F0b3I+XG4pKTtcbk5hdmlnYXRpb25NZW51SW5kaWNhdG9yLmRpc3BsYXlOYW1lID1cbiAgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yLmRpc3BsYXlOYW1lO1xuXG5leHBvcnQge1xuICBuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSxcbiAgTmF2aWdhdGlvbk1lbnUsXG4gIE5hdmlnYXRpb25NZW51TGlzdCxcbiAgTmF2aWdhdGlvbk1lbnVJdGVtLFxuICBOYXZpZ2F0aW9uTWVudUNvbnRlbnQsXG4gIE5hdmlnYXRpb25NZW51VHJpZ2dlcixcbiAgTmF2aWdhdGlvbk1lbnVMaW5rLFxuICBOYXZpZ2F0aW9uTWVudUluZGljYXRvcixcbiAgTmF2aWdhdGlvbk1lbnVWaWV3cG9ydCxcbn07XG4iXX0=