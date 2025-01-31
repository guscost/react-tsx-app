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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slot", "class-variance-authority", "lucide-react", "src/hooks/use-mobile", "src/lib/utils", "@/components/ui/button", "@/components/ui/input", "@/components/ui/separator", "@/components/ui/sheet", "@/components/ui/skeleton", "@/components/ui/tooltip"], function (require, exports, jsx_runtime_1, React, react_slot_1, class_variance_authority_1, lucide_react_1, use_mobile_1, utils_1, button_1, input_1, separator_1, sheet_1, skeleton_1, tooltip_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3NpZGViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7O0lBaXdCWCxnQ0FBVTs7SUE1dUJaLElBQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0lBQzVDLElBQU0sc0JBQXNCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUM5QixJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQztJQUNyQyxJQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztJQVl0QyxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUF3QixJQUFJLENBQUMsQ0FBQztJQUV4RSxTQUFTLFVBQVU7UUFDakIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQVF0QyxVQUNFLEVBUUMsRUFDRCxHQUFHO1FBUkQsSUFBQSxtQkFBa0IsRUFBbEIsV0FBVyxtQkFBRyxJQUFJLEtBQUEsRUFDWixRQUFRLFVBQUEsRUFDQSxXQUFXLGtCQUFBLEVBQ3pCLFNBQVMsZUFBQSxFQUNULEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNMLEtBQUssY0FQVix5RUFRQyxDQURTO1FBSVYs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