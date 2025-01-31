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
define("ui/menubar", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-menubar", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, MenubarPrimitive, lucide_react_1, utils_1) {
    /// <amd-module name="ui/menubar"/>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL21lbnViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7Ozs7O0lBUWIsSUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBb054QyxrQ0FBVztJQWxOYixJQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUE4TjFDLG9DQUFZO0lBNU5kLElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQXlONUMsc0NBQWE7SUF2TmYsSUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBMk50QyxnQ0FBVTtJQXpOWixJQUFNLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztJQW1OcEQsOENBQWlCO0lBak5uQixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUc5QixVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsZ0JBQWdCLENBQUMsSUFBSSxhQUNwQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwrRUFBK0UsRUFDL0UsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQTZMRCwwQkFBTztJQTVMVCxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFeEQsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHckMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFB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