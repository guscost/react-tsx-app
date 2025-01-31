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
define("ui/sidebar", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slot", "class-variance-authority", "lucide-react", "hooks/use-mobile", "lib/utils", "ui/button", "ui/input", "ui/separator", "ui/sheet", "ui/skeleton", "ui/tooltip"], function (require, exports, jsx_runtime_1, React, react_slot_1, class_variance_authority_1, lucide_react_1, use_mobile_1, utils_1, button_1, input_1, separator_1, sheet_1, skeleton_1, tooltip_1) {
    /// <amd-module name="ui/sidebar"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SidebarTrigger = exports.SidebarSeparator = exports.SidebarRail = exports.SidebarProvider = exports.SidebarMenuSubItem = exports.SidebarMenuSubButton = exports.SidebarMenuSub = exports.SidebarMenuSkeleton = exports.SidebarMenuItem = exports.SidebarMenuButton = exports.SidebarMenuBadge = exports.SidebarMenuAction = exports.SidebarMenu = exports.SidebarInset = exports.SidebarInput = exports.SidebarHeader = exports.SidebarGroupLabel = exports.SidebarGroupContent = exports.SidebarGroupAction = exports.SidebarGroup = exports.SidebarFooter = exports.SidebarContent = exports.Sidebar = void 0;
    exports.useSidebar = useSidebar;
    React = __importStar(React);
    var SIDEBAR_COOKIE_NAME = "sidebar:state";
    var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
    var SIDEBAR_WIDTH = "16rem";
    var SIDEBAR_WIDTH_MOBILE = "18rem";
    var SIDEBAR_WIDTH_ICON = "3rem";
    var SIDEBAR_KEYBOARD_SHORTCUT = "b";
    var SidebarContext = React.createContext(null);
    function useSidebar() {
        var context = React.useContext(SidebarContext);
        if (!context) {
            throw new Error("useSidebar must be used within a SidebarProvider.");
        }
        return context;
    }
    var SidebarProvider = React.forwardRef(function (_a, ref) {
        var _b = _a.defaultOpen, defaultOpen = _b === void 0 ? true : _b, openProp = _a.open, setOpenProp = _a.onOpenChange, className = _a.className, style = _a.style, children = _a.children, props = __rest(_a, ["defaultOpen", "open", "onOpenChange", "className", "style", "children"]);
        var isMobile = (0, use_mobile_1.useIsMobile)();
        var _c = React.useState(false), openMobile = _c[0], setOpenMobile = _c[1];
        // This is the internal state of the sidebar.
        // We use openProp and setOpenProp for control from outside the component.
        var _d = React.useState(defaultOpen), _open = _d[0], _setOpen = _d[1];
        var open = openProp !== null && openProp !== void 0 ? openProp : _open;
        var setOpen = React.useCallback(function (value) {
            var openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            }
            else {
                _setOpen(openState);
            }
            // This sets the cookie to keep the sidebar state.
            document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
        }, [setOpenProp, open]);
        // Helper to toggle the sidebar.
        var toggleSidebar = React.useCallback(function () {
            return isMobile
                ? setOpenMobile(function (open) { return !open; })
                : setOpen(function (open) { return !open; });
        }, [isMobile, setOpen, setOpenMobile]);
        // Adds a keyboard shortcut to toggle the sidebar.
        React.useEffect(function () {
            var handleKeyDown = function (event) {
                if (event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                    (event.metaKey || event.ctrlKey)) {
                    event.preventDefault();
                    toggleSidebar();
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return function () { return window.removeEventListener("keydown", handleKeyDown); };
        }, [toggleSidebar]);
        // We add a state so that we can do data-state="expanded" or "collapsed".
        // This makes it easier to style the sidebar with Tailwind classes.
        var state = open ? "expanded" : "collapsed";
        var contextValue = React.useMemo(function () { return ({
            state: state,
            open: open,
            setOpen: setOpen,
            isMobile: isMobile,
            openMobile: openMobile,
            setOpenMobile: setOpenMobile,
            toggleSidebar: toggleSidebar,
        }); }, [
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
        ]);
        return ((0, jsx_runtime_1.jsx)(SidebarContext.Provider, { value: contextValue, children: (0, jsx_runtime_1.jsx)(tooltip_1.TooltipProvider, { delayDuration: 0, children: (0, jsx_runtime_1.jsx)("div", __assign({ style: __assign({ "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON }, style), className: (0, utils_1.cn)("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className), ref: ref }, props, { children: children })) }) }));
    });
    exports.SidebarProvider = SidebarProvider;
    SidebarProvider.displayName = "SidebarProvider";
    var Sidebar = React.forwardRef(function (_a, ref) {
        var _b = _a.side, side = _b === void 0 ? "left" : _b, _c = _a.variant, variant = _c === void 0 ? "sidebar" : _c, _d = _a.collapsible, collapsible = _d === void 0 ? "offcanvas" : _d, className = _a.className, children = _a.children, props = __rest(_a, ["side", "variant", "collapsible", "className", "children"]);
        var _e = useSidebar(), isMobile = _e.isMobile, state = _e.state, openMobile = _e.openMobile, setOpenMobile = _e.setOpenMobile;
        if (collapsible === "none") {
            return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className), ref: ref }, props, { children: children })));
        }
        if (isMobile) {
            return ((0, jsx_runtime_1.jsx)(sheet_1.Sheet, __assign({ open: openMobile, onOpenChange: setOpenMobile }, props, { children: (0, jsx_runtime_1.jsx)(sheet_1.SheetContent, { "data-sidebar": "sidebar", "data-mobile": "true", className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", style: {
                        "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                    }, side: side, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full flex-col", children: children }) }) })));
        }
        return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: "group peer hidden text-sidebar-foreground md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset"
                        ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }), (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left"
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", 
                    // Adjust the padding for floating and inset variants.
                    variant === "floating" || variant === "inset"
                        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className) }, props, { children: (0, jsx_runtime_1.jsx)("div", { "data-sidebar": "sidebar", className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow", children: children }) }))] }));
    });
    exports.Sidebar = Sidebar;
    Sidebar.displayName = "Sidebar";
    var SidebarTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
        var toggleSidebar = useSidebar().toggleSidebar;
        return ((0, jsx_runtime_1.jsxs)(button_1.Button, __assign({ ref: ref, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: (0, utils_1.cn)("h-7 w-7", className), onClick: function (event) {
                onClick === null || onClick === void 0 ? void 0 : onClick(event);
                toggleSidebar();
            } }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.PanelLeft, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })] })));
    });
    exports.SidebarTrigger = SidebarTrigger;
    SidebarTrigger.displayName = "SidebarTrigger";
    var SidebarRail = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        var toggleSidebar = useSidebar().toggleSidebar;
        return ((0, jsx_runtime_1.jsx)("button", __assign({ ref: ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: (0, utils_1.cn)("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className) }, props)));
    });
    exports.SidebarRail = SidebarRail;
    SidebarRail.displayName = "SidebarRail";
    var SidebarInset = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("main", __assign({ ref: ref, className: (0, utils_1.cn)("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className) }, props)));
    });
    exports.SidebarInset = SidebarInset;
    SidebarInset.displayName = "SidebarInset";
    var SidebarInput = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(input_1.Input, __assign({ ref: ref, "data-sidebar": "input", className: (0, utils_1.cn)("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className) }, props)));
    });
    exports.SidebarInput = SidebarInput;
    SidebarInput.displayName = "SidebarInput";
    var SidebarHeader = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "header", className: (0, utils_1.cn)("flex flex-col gap-2 p-2", className) }, props)));
    });
    exports.SidebarHeader = SidebarHeader;
    SidebarHeader.displayName = "SidebarHeader";
    var SidebarFooter = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "footer", className: (0, utils_1.cn)("flex flex-col gap-2 p-2", className) }, props)));
    });
    exports.SidebarFooter = SidebarFooter;
    SidebarFooter.displayName = "SidebarFooter";
    var SidebarSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(separator_1.Separator, __assign({ ref: ref, "data-sidebar": "separator", className: (0, utils_1.cn)("mx-2 w-auto bg-sidebar-border", className) }, props)));
    });
    exports.SidebarSeparator = SidebarSeparator;
    SidebarSeparator.displayName = "SidebarSeparator";
    var SidebarContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "content", className: (0, utils_1.cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className) }, props)));
    });
    exports.SidebarContent = SidebarContent;
    SidebarContent.displayName = "SidebarContent";
    var SidebarGroup = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "group", className: (0, utils_1.cn)("relative flex w-full min-w-0 flex-col p-2", className) }, props)));
    });
    exports.SidebarGroup = SidebarGroup;
    SidebarGroup.displayName = "SidebarGroup";
    var SidebarGroupLabel = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "asChild"]);
        var Comp = asChild ? react_slot_1.Slot : "div";
        return ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, "data-sidebar": "group-label", className: (0, utils_1.cn)("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className) }, props)));
    });
    exports.SidebarGroupLabel = SidebarGroupLabel;
    SidebarGroupLabel.displayName = "SidebarGroupLabel";
    var SidebarGroupAction = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "asChild"]);
        var Comp = asChild ? react_slot_1.Slot : "button";
        return ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, "data-sidebar": "group-action", className: (0, utils_1.cn)("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", 
            // Increases the hit area of the button on mobile.
            "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className) }, props)));
    });
    exports.SidebarGroupAction = SidebarGroupAction;
    SidebarGroupAction.displayName = "SidebarGroupAction";
    var SidebarGroupContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "group-content", className: (0, utils_1.cn)("w-full text-sm", className) }, props)));
    });
    exports.SidebarGroupContent = SidebarGroupContent;
    SidebarGroupContent.displayName = "SidebarGroupContent";
    var SidebarMenu = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("ul", __assign({ ref: ref, "data-sidebar": "menu", className: (0, utils_1.cn)("flex w-full min-w-0 flex-col gap-1", className) }, props)));
    });
    exports.SidebarMenu = SidebarMenu;
    SidebarMenu.displayName = "SidebarMenu";
    var SidebarMenuItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("li", __assign({ ref: ref, "data-sidebar": "menu-item", className: (0, utils_1.cn)("group/menu-item relative", className) }, props)));
    });
    exports.SidebarMenuItem = SidebarMenuItem;
    SidebarMenuItem.displayName = "SidebarMenuItem";
    var sidebarMenuButtonVariants = (0, class_variance_authority_1.cva)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
        variants: {
            variant: {
                default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
            },
            size: {
                default: "h-8 text-sm",
                sm: "h-7 text-xs",
                lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    var SidebarMenuButton = React.forwardRef(function (_a, ref) {
        var _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c, _d = _a.variant, variant = _d === void 0 ? "default" : _d, _e = _a.size, size = _e === void 0 ? "default" : _e, tooltip = _a.tooltip, className = _a.className, props = __rest(_a, ["asChild", "isActive", "variant", "size", "tooltip", "className"]);
        var Comp = asChild ? react_slot_1.Slot : "button";
        var _f = useSidebar(), isMobile = _f.isMobile, state = _f.state;
        var button = ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: (0, utils_1.cn)(sidebarMenuButtonVariants({ variant: variant, size: size }), className) }, props)));
        if (!tooltip) {
            return button;
        }
        if (typeof tooltip === "string") {
            tooltip = {
                children: tooltip,
            };
        }
        return ((0, jsx_runtime_1.jsxs)(tooltip_1.Tooltip, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.TooltipTrigger, { asChild: true, children: button }), (0, jsx_runtime_1.jsx)(tooltip_1.TooltipContent, __assign({ side: "right", align: "center", hidden: state !== "collapsed" || isMobile }, tooltip))] }));
    });
    exports.SidebarMenuButton = SidebarMenuButton;
    SidebarMenuButton.displayName = "SidebarMenuButton";
    var SidebarMenuAction = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.showOnHover, showOnHover = _c === void 0 ? false : _c, props = __rest(_a, ["className", "asChild", "showOnHover"]);
        var Comp = asChild ? react_slot_1.Slot : "button";
        return ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, "data-sidebar": "menu-action", className: (0, utils_1.cn)("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", 
            // Increases the hit area of the button on mobile.
            "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover &&
                "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className) }, props)));
    });
    exports.SidebarMenuAction = SidebarMenuAction;
    SidebarMenuAction.displayName = "SidebarMenuAction";
    var SidebarMenuBadge = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, "data-sidebar": "menu-badge", className: (0, utils_1.cn)("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className) }, props)));
    });
    exports.SidebarMenuBadge = SidebarMenuBadge;
    SidebarMenuBadge.displayName = "SidebarMenuBadge";
    var SidebarMenuSkeleton = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.showIcon, showIcon = _b === void 0 ? false : _b, props = __rest(_a, ["className", "showIcon"]);
        // Random width between 50 to 90%.
        var width = React.useMemo(function () {
            return "".concat(Math.floor(Math.random() * 40) + 50, "%");
        }, []);
        return ((0, jsx_runtime_1.jsxs)("div", __assign({ ref: ref, "data-sidebar": "menu-skeleton", className: (0, utils_1.cn)("flex h-8 items-center gap-2 rounded-md px-2", className) }, props, { children: [showIcon && ((0, jsx_runtime_1.jsx)(skeleton_1.Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" })), (0, jsx_runtime_1.jsx)(skeleton_1.Skeleton, { className: "h-4 max-w-[--skeleton-width] flex-1", "data-sidebar": "menu-skeleton-text", style: {
                        "--skeleton-width": width,
                    } })] })));
    });
    exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
    SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
    var SidebarMenuSub = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("ul", __assign({ ref: ref, "data-sidebar": "menu-sub", className: (0, utils_1.cn)("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className) }, props)));
    });
    exports.SidebarMenuSub = SidebarMenuSub;
    SidebarMenuSub.displayName = "SidebarMenuSub";
    var SidebarMenuSubItem = React.forwardRef(function (_a, ref) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)("li", __assign({ ref: ref }, props));
    });
    exports.SidebarMenuSubItem = SidebarMenuSubItem;
    SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
    var SidebarMenuSubButton = React.forwardRef(function (_a, ref) {
        var _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, isActive = _a.isActive, className = _a.className, props = __rest(_a, ["asChild", "size", "isActive", "className"]);
        var Comp = asChild ? react_slot_1.Slot : "a";
        return ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: (0, utils_1.cn)("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className) }, props)));
    });
    exports.SidebarMenuSubButton = SidebarMenuSubButton;
    SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3NpZGViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7OztJQWl3QlgsZ0NBQVU7O0lBNXVCWixJQUFNLG1CQUFtQixHQUFHLGVBQWUsQ0FBQztJQUM1QyxJQUFNLHNCQUFzQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDOUIsSUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUM7SUFDckMsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUM7SUFDbEMsSUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7SUFZdEMsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBd0IsSUFBSSxDQUFDLENBQUM7SUFFeEUsU0FBUyxVQUFVO1FBQ2pCLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FRdEMsVUFDRSxFQVFDLEVBQ0QsR0FBRztRQVJELElBQUEsbUJBQWtCLEVBQWxCLFdBQVcsbUJBQUcsSUFBSSxLQUFBLEVBQ1osUUFBUSxVQUFBLEVBQ0EsV0FBVyxrQkFBQSxFQUN6QixTQUFTLGVBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDTCxLQUFLLGNBUFYseUVB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