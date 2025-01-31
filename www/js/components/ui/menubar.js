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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-menubar", "lucide-react", "utils"], function (require, exports, jsx_runtime_1, React, MenubarPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenubarShortcut = exports.MenubarSub = exports.MenubarGroup = exports.MenubarSubTrigger = exports.MenubarSubContent = exports.MenubarPortal = exports.MenubarRadioItem = exports.MenubarRadioGroup = exports.MenubarCheckboxItem = exports.MenubarLabel = exports.MenubarSeparator = exports.MenubarItem = exports.MenubarContent = exports.MenubarTrigger = exports.MenubarMenu = exports.Menubar = void 0;
    React = __importStar(React);
    MenubarPrimitive = __importStar(MenubarPrimitive);
    var MenubarMenu = MenubarPrimitive.Menu;
    exports.MenubarMenu = MenubarMenu;
    var MenubarGroup = MenubarPrimitive.Group;
    exports.MenubarGroup = MenubarGroup;
    var MenubarPortal = MenubarPrimitive.Portal;
    exports.MenubarPortal = MenubarPortal;
    var MenubarSub = MenubarPrimitive.Sub;
    exports.MenubarSub = MenubarSub;
    var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
    exports.MenubarRadioGroup = MenubarRadioGroup;
    var Menubar = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm", className) }, props)));
    });
    exports.Menubar = Menubar;
    Menubar.displayName = MenubarPrimitive.Root.displayName;
    var MenubarTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className) }, props)));
    });
    exports.MenubarTrigger = MenubarTrigger;
    MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
    var MenubarSubTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
        return ((0, jsx_runtime_1.jsxs)(MenubarPrimitive.SubTrigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "ml-auto h-4 w-4" })] })));
    });
    exports.MenubarSubTrigger = MenubarSubTrigger;
    MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
    var MenubarSubContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.SubContent, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
    });
    exports.MenubarSubContent = MenubarSubContent;
    MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
    var MenubarContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.alignOffset, alignOffset = _c === void 0 ? -4 : _c, _d = _a.sideOffset, sideOffset = _d === void 0 ? 8 : _d, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(MenubarPrimitive.Content, __assign({ ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.MenubarContent = MenubarContent;
    MenubarContent.displayName = MenubarPrimitive.Content.displayName;
    var MenubarItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className) }, props)));
    });
    exports.MenubarItem = MenubarItem;
    MenubarItem.displayName = MenubarPrimitive.Item.displayName;
    var MenubarCheckboxItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
        return ((0, jsx_runtime_1.jsxs)(MenubarPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(MenubarPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4" }) }) }), children] })));
    });
    exports.MenubarCheckboxItem = MenubarCheckboxItem;
    MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
    var MenubarRadioItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(MenubarPrimitive.RadioItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(MenubarPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "h-4 w-4 fill-current" }) }) }), children] })));
    });
    exports.MenubarRadioItem = MenubarRadioItem;
    MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
    var MenubarLabel = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className) }, props)));
    });
    exports.MenubarLabel = MenubarLabel;
    MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
    var MenubarSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(MenubarPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className) }, props)));
    });
    exports.MenubarSeparator = MenubarSeparator;
    MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
    var MenubarShortcut = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className) }, props)));
    };
    exports.MenubarShortcut = MenubarShortcut;
    MenubarShortcut.displayname = "MenubarShortcut";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL21lbnViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7Ozs7SUFRYixJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFvTnhDLGtDQUFXO0lBbE5iLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQThOMUMsb0NBQVk7SUE1TmQsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBeU41QyxzQ0FBYTtJQXZOZixJQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUEyTnRDLGdDQUFVO0lBek5aLElBQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBbU5wRCw4Q0FBaUI7SUFqTm5CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzlCLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxnQkFBZ0IsQ0FBQyxJQUFJLGFBQ3BCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLCtFQUErRSxFQUMvRSxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBNkxELDBCQUFPO0lBNUxULE9BQU8sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUV4RCxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMs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