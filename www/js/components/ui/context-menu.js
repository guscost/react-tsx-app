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
define("ui/context-menu", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-context-menu", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, ContextMenuPrimitive, lucide_react_1, utils_1) {
    /// <amd-module name="ui/context-menu"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextMenuRadioGroup = exports.ContextMenuSubTrigger = exports.ContextMenuSubContent = exports.ContextMenuSub = exports.ContextMenuPortal = exports.ContextMenuGroup = exports.ContextMenuShortcut = exports.ContextMenuSeparator = exports.ContextMenuLabel = exports.ContextMenuRadioItem = exports.ContextMenuCheckboxItem = exports.ContextMenuItem = exports.ContextMenuContent = exports.ContextMenuTrigger = exports.ContextMenu = void 0;
    React = __importStar(React);
    ContextMenuPrimitive = __importStar(ContextMenuPrimitive);
    var ContextMenu = ContextMenuPrimitive.Root;
    exports.ContextMenu = ContextMenu;
    var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
    exports.ContextMenuTrigger = ContextMenuTrigger;
    var ContextMenuGroup = ContextMenuPrimitive.Group;
    exports.ContextMenuGroup = ContextMenuGroup;
    var ContextMenuPortal = ContextMenuPrimitive.Portal;
    exports.ContextMenuPortal = ContextMenuPortal;
    var ContextMenuSub = ContextMenuPrimitive.Sub;
    exports.ContextMenuSub = ContextMenuSub;
    var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
    exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
    var ContextMenuSubTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
        return ((0, jsx_runtime_1.jsxs)(ContextMenuPrimitive.SubTrigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "ml-auto h-4 w-4" })] })));
    });
    exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
    ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
    var ContextMenuSubContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ContextMenuPrimitive.SubContent, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
    });
    exports.ContextMenuSubContent = ContextMenuSubContent;
    ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
    var ContextMenuContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ContextMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(ContextMenuPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.ContextMenuContent = ContextMenuContent;
    ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
    var ContextMenuItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(ContextMenuPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className) }, props)));
    });
    exports.ContextMenuItem = ContextMenuItem;
    ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
    var ContextMenuCheckboxItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
        return ((0, jsx_runtime_1.jsxs)(ContextMenuPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(ContextMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4" }) }) }), children] })));
    });
    exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
    ContextMenuCheckboxItem.displayName =
        ContextMenuPrimitive.CheckboxItem.displayName;
    var ContextMenuRadioItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(ContextMenuPrimitive.RadioItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(ContextMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "h-4 w-4 fill-current" }) }) }), children] })));
    });
    exports.ContextMenuRadioItem = ContextMenuRadioItem;
    ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
    var ContextMenuLabel = React.forwardRef(function (_a, ref) {
        var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
        return ((0, jsx_runtime_1.jsx)(ContextMenuPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className) }, props)));
    });
    exports.ContextMenuLabel = ContextMenuLabel;
    ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
    var ContextMenuSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ContextMenuPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-border", className) }, props)));
    });
    exports.ContextMenuSeparator = ContextMenuSeparator;
    ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
    var ContextMenuShortcut = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className) }, props)));
    };
    exports.ContextMenuShortcut = ContextMenuShortcut;
    ContextMenuShortcut.displayName = "ContextMenuShortcut";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvY29udGV4dC1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHdDQUF3QztJQUN4QyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQWdMNUMsa0NBQVc7SUE5S2IsSUFBTSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUErS3RELGdEQUFrQjtJQTdLcEIsSUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFxTGxELDRDQUFnQjtJQW5MbEIsSUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7SUFvTHBELDhDQUFpQjtJQWxMbkIsSUFBTSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO0lBbUw5Qyx3Q0FBYztJQWpMaEIsSUFBTSxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7SUFvTDVELHNEQUFxQjtJQWxMdkIsSUFBTSxxQkFBcUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUs1QyxVQUFDLEVBQXdDLEVBQUUsR0FBRztRQUEzQyxJQUFBLFNBQVMsZUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBdEMsa0NBQXdDLENBQUY7UUFBWSxPQUFBLENBQ25ELHdCQUFDLG9CQUFvQixDQUFDLFVBQVUsYUFDOUIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNE1BQTRNLEVBQzVNLEtBQUssSUFBSSxNQUFNLEVBQ2YsU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx1QkFBQywyQkFBWSxJQUFDLFNB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WSxPQUFBLENBQ2xDLHVCQUFDLG9CQUFvQixDQUFDLFNBQVMsYUFDN0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLElBQ2pELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUEyQkQsb0RBQW9CO0lBMUJ0QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUU5RSxJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFHVztRQUZ0QyxJQUFBLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FGbUIsYUFHNUIsQ0FEUztRQUVSLE9BQU8sQ0FDTCwwQ0FDRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdURBQXVELEVBQ3ZELFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUM7SUFDSixDQUFDLENBQUM7SUFZQSxrREFBbUI7SUFYckIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9jb250ZXh0LW1lbnVcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBDb250ZXh0TWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQtbWVudVwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IENvbnRleHRNZW51ID0gQ29udGV4dE1lbnVQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgQ29udGV4dE1lbnVUcmlnZ2VyID0gQ29udGV4dE1lbnVQcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgQ29udGV4dE1lbnVHcm91cCA9IENvbnRleHRNZW51UHJpbWl0aXZlLkdyb3VwO1xuXG5jb25zdCBDb250ZXh0TWVudVBvcnRhbCA9IENvbnRleHRNZW51UHJpbWl0aXZlLlBvcnRhbDtcblxuY29uc3QgQ29udGV4dE1lbnVTdWIgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWI7XG5cbmNvbnN0IENvbnRleHRNZW51UmFkaW9Hcm91cCA9IENvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvR3JvdXA7XG5cbmNvbnN0IENvbnRleHRNZW51U3ViVHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlN1YlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlN1YlRyaWdnZXI+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJtbC1hdXRvIGgtNCB3LTRcIiAvPlxuICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLlN1YlRyaWdnZXI+XG4pKTtcbkNvbnRleHRNZW51U3ViVHJpZ2dlci5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlN1YlRyaWdnZXIuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51U3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJDb250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29udGV4dE1lbnVTdWJDb250ZW50LmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuU3ViQ29udGVudC5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8Q29udGV4dE1lbnVQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInotNTAgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcbkNvbnRleHRNZW51Q29udGVudC5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29udGV4dE1lbnVJdGVtLmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVDaGVja2JveEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY2hlY2tlZCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8Q29udGV4dE1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQ29udGV4dE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuKSk7XG5Db250ZXh0TWVudUNoZWNrYm94SXRlbS5kaXNwbGF5TmFtZSA9XG4gIENvbnRleHRNZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVSYWRpb0l0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaXJjbGUgY2xhc3NOYW1lPVwiaC00IHctNCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQ29udGV4dE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuKSk7XG5Db250ZXh0TWVudVJhZGlvSXRlbS5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkxhYmVsPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5MYWJlbD4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuTGFiZWxcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29udGV4dE1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVNlcGFyYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlNlcGFyYXRvcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcIi1teC0xIG15LTEgaC1weCBiZy1ib3JkZXJcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNvbnRleHRNZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVNob3J0Y3V0ID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3QgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5Db250ZXh0TWVudVNob3J0Y3V0LmRpc3BsYXlOYW1lID0gXCJDb250ZXh0TWVudVNob3J0Y3V0XCI7XG5cbmV4cG9ydCB7XG4gIENvbnRleHRNZW51LFxuICBDb250ZXh0TWVudVRyaWdnZXIsXG4gIENvbnRleHRNZW51Q29udGVudCxcbiAgQ29udGV4dE1lbnVJdGVtLFxuICBDb250ZXh0TWVudUNoZWNrYm94SXRlbSxcbiAgQ29udGV4dE1lbnVSYWRpb0l0ZW0sXG4gIENvbnRleHRNZW51TGFiZWwsXG4gIENvbnRleHRNZW51U2VwYXJhdG9yLFxuICBDb250ZXh0TWVudVNob3J0Y3V0LFxuICBDb250ZXh0TWVudUdyb3VwLFxuICBDb250ZXh0TWVudVBvcnRhbCxcbiAgQ29udGV4dE1lbnVTdWIsXG4gIENvbnRleHRNZW51U3ViQ29udGVudCxcbiAgQ29udGV4dE1lbnVTdWJUcmlnZ2VyLFxuICBDb250ZXh0TWVudVJhZGlvR3JvdXAsXG59O1xuIl19