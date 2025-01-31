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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-navigation-menu", "class-variance-authority", "lucide-react", "utils"], function (require, exports, jsx_runtime_1, React, NavigationMenuPrimitive, class_variance_authority_1, lucide_react_1, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT0EsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHckMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx3QkFBQyx1QkFBdUIsQ0FBQyxJQUFJLGFBQzNCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGlFQUFpRSxFQUNqRSxTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVIsUUFBUSxFQUNULHVCQUFDLHNCQUFzQixLQUFHLEtBQ0csQ0FDaEMsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWlHRCx3Q0FBYztJQWhHaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHekMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLHVCQUF1QixDQUFDLElBQUksYUFDM0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbUVBQW1FLEVBQ25FLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFtRkQsZ0RBQWtCO0lBbEZwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsdUJB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