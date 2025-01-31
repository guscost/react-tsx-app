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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-dropdown-menu", "lucide-react", "src/lib/utils"], function (require, exports, jsx_runtime_1, React, DropdownMenuPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DropdownMenuRadioGroup = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuPortal = exports.DropdownMenuGroup = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuLabel = exports.DropdownMenuRadioItem = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenu = void 0;
    React = __importStar(React);
    DropdownMenuPrimitive = __importStar(DropdownMenuPrimitive);
    var DropdownMenu = DropdownMenuPrimitive.Root;
    exports.DropdownMenu = DropdownMenu;
    var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
    exports.DropdownMenuTrigger = DropdownMenuTrigger;
    var DropdownMenuGroup = DropdownMenuPrimitive.Group;
    exports.DropdownMenuGroup = DropdownMenuGroup;
    var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
    exports.DropdownMenuPortal = DropdownMenuPortal;
    var DropdownMenuSub = DropdownMenuPrimitive.Sub;
    exports.DropdownMenuSub = DropdownMenuSub;
    var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
    exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
    var DropdownMenuSubTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "ml-auto" })] })));
    });
    exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
    DropdownMenuSubTrigger.displayName =
        DropdownMenuPrimitive.SubTrigger.displayName;
    var DropdownMenuSubContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
    });
    exports.DropdownMenuSubContent = DropdownMenuSubContent;
    DropdownMenuSubContent.displayName =
        DropdownMenuPrimitive.SubContent.displayName;
    var DropdownMenuContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, props = __rest(_a, ["className", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, __assign({ ref: ref, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.DropdownMenuContent = DropdownMenuContent;
    DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
    var DropdownMenuItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className) }, props)));
    });
    exports.DropdownMenuItem = DropdownMenuItem;
    DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
    var DropdownMenuCheckboxItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4" }) }) }), children] })));
    });
    exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
    DropdownMenuCheckboxItem.displayName =
        DropdownMenuPrimitive.CheckboxItem.displayName;
    var DropdownMenuRadioItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
    });
    exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
    DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
    var DropdownMenuLabel = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className) }, props)));
    });
    exports.DropdownMenuLabel = DropdownMenuLabel;
    DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
    var DropdownMenuSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className) }, props)));
    });
    exports.DropdownMenuSeparator = DropdownMenuSeparator;
    DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
    var DropdownMenuShortcut = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest opacity-60", className) }, props)));
    };
    exports.DropdownMenuShortcut = DropdownMenuShortcut;
    DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7Ozs7SUFRYixJQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7SUFpTDlDLG9DQUFZO0lBL0tkLElBQU0sbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBZ0x4RCxrREFBbUI7SUE5S3JCLElBQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBc0xwRCw4Q0FBaUI7SUFwTG5CLElBQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO0lBcUx0RCxnREFBa0I7SUFuTHBCLElBQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztJQW9MaEQsMENBQWU7SUFsTGpCLElBQU0sc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsVUFBVSxDQUFDO0lBcUw5RCx3REFBc0I7SUFuTHhCLElBQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FLN0MsVUFBQyxFQUF3QyxFQUFFLEdBQUc7UUFBM0MsSUFBQSxTQUFTLGVBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQXRDLGtDQUF3QyxDQUFGO1FBQVksT0FBQSxDQUNuRCx3QkFBQyxxQkFBcUIsQ0FBQyxVQUFVLGFBQy9CLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHdNQUF3TSxFQUN4TSxLQUFLLElBQUksTUFBTSxFQUNmLFNBQVMsQ0FDVixJQUNHLEtBQUssZUFFUixRQUFRLEVBQ1QsdUJBQUMsMkJBQVksSUFBQyxTQUFTLEVBQUMsU0FB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