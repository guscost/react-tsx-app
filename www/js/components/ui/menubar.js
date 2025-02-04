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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-menubar", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, MenubarPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenubarShortcut = exports.MenubarSubTrigger = exports.MenubarSubContent = exports.MenubarRadioItem = exports.MenubarCheckboxItem = exports.MenubarLabel = exports.MenubarSeparator = exports.MenubarItem = exports.MenubarContent = exports.MenubarTrigger = exports.Menubar = void 0;
    exports.MenubarMenu = MenubarMenu;
    exports.MenubarRadioGroup = MenubarRadioGroup;
    exports.MenubarPortal = MenubarPortal;
    exports.MenubarGroup = MenubarGroup;
    exports.MenubarSub = MenubarSub;
    React = __importStar(React);
    MenubarPrimitive = __importStar(MenubarPrimitive);
    function MenubarMenu(_a) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)(MenubarPrimitive.Menu, __assign({}, props));
    }
    function MenubarGroup(_a) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)(MenubarPrimitive.Group, __assign({}, props));
    }
    function MenubarPortal(_a) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)(MenubarPrimitive.Portal, __assign({}, props));
    }
    function MenubarRadioGroup(_a) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)(MenubarPrimitive.RadioGroup, __assign({}, props));
    }
    function MenubarSub(_a) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)(MenubarPrimitive.Sub, __assign({ "data-slot": "menubar-sub" }, props));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL21lbnViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7O0lBZ1BYLGtDQUFXO0lBT1gsOENBQWlCO0lBRWpCLHNDQUFhO0lBR2Isb0NBQVk7SUFDWixnQ0FBVTs7O0lBclBaLFNBQVMsV0FBVyxDQUFDLEVBRWdDO1lBRGhELEtBQUssY0FEVyxFQUVwQixDQURTO1FBRVIsT0FBTyx1QkFBQyxnQkFBZ0IsQ0FBQyxJQUFJLGVBQUssS0FBSyxFQUFJLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLEVBRWdDO1lBRGpELEtBQUssY0FEWSxFQUVyQixDQURTO1FBRVIsT0FBTyx1QkFBQyxnQkFBZ0IsQ0FBQyxLQUFLLGVBQUssS0FBSyxFQUFJLENBQUM7SUFDL0MsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEVBRWdDO1lBRGxELEtBQUssY0FEYSxFQUV0QixDQURTO1FBRVIsT0FBTyx1QkFBQyxnQkFBZ0IsQ0FBQyxNQUFNLGVBQUssS0FBSyxFQUFJLENBQUM7SUFDaEQsQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQUMsRUFFZ0M7WUFEdEQsS0FBSyxjQURpQixFQUUxQixDQURTO1FBRVIsT0FBTyx1QkFBQyxnQkFBZ0IsQ0FBQyxVQUFVLGVBQUssS0FBSyxFQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEVBRWdDO1lBRC9DLEtBQUssY0FEVSxFQUVuQixDQURTO1FBRVIsT0FBTyx1QkFBQyxnQkFBZ0IsQ0FBQyxHQUFHLDBCQUFXLGFBQWEsSUFBSyxLQUFLLEVBQUksQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FH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QUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFzQ0Qsb0NBQVk7SUFyQ2QsWUFBWSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRTlELElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHdkMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLGdCQUFnQixDQUFDLFNBQVMsYUFDekIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLElBQ2hELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUF5QkQsNENBQWdCO0lBeEJsQixnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUV0RSxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBR2U7UUFGdEMsSUFBQSxTQUFTLGVBQUEsRUFDTixLQUFLLGNBRmUsYUFHeEIsQ0FEUztRQUVSLE9BQU8sQ0FDTCwwQ0FDRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdURBQXVELEVBQ3ZELFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUM7SUFDSixDQUFDLENBQUM7SUFtQkEsMENBQWU7SUFsQmpCLGVBQWUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBNZW51YmFyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbWVudWJhclwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBNZW51YmFyTWVudSh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5NZW51Pikge1xuICByZXR1cm4gPE1lbnViYXJQcmltaXRpdmUuTWVudSB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBNZW51YmFyR3JvdXAoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuR3JvdXA+KSB7XG4gIHJldHVybiA8TWVudWJhclByaW1pdGl2ZS5Hcm91cCB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBNZW51YmFyUG9ydGFsKHtcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlBvcnRhbD4pIHtcbiAgcmV0dXJuIDxNZW51YmFyUHJpbWl0aXZlLlBvcnRhbCB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBNZW51YmFyUmFkaW9Hcm91cCh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xuICByZXR1cm4gPE1lbnViYXJQcmltaXRpdmUuUmFkaW9Hcm91cCB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBNZW51YmFyU3ViKHtcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlN1Yj4pIHtcbiAgcmV0dXJuIDxNZW51YmFyUHJpbWl0aXZlLlN1YiBkYXRhLXNsb3Q9XCJtZW51YmFyLXN1YlwiIHsuLi5wcm9wc30gLz47XG59XG5cbmNvbnN0IE1lbnViYXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuUm9vdD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE1lbnViYXJQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggaC05IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgcm91bmRlZC1tZCBib3JkZXIgYmctYmFja2dyb3VuZCBwLTEgc2hhZG93LXNtXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbk1lbnViYXIuZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJUcmlnZ2VyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5UcmlnZ2VyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlRyaWdnZXI+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxNZW51YmFyUHJpbWl0aXZlLlRyaWdnZXJcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyVHJpZ2dlci5kaXNwbGF5TmFtZSA9IE1lbnViYXJQcmltaXRpdmUuVHJpZ2dlci5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhclN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlN1YlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE1lbnViYXJQcmltaXRpdmUuU3ViVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9NZW51YmFyUHJpbWl0aXZlLlN1YlRyaWdnZXI+XG4pKTtcbk1lbnViYXJTdWJUcmlnZ2VyLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFyU3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU3ViQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5TdWJDb250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5TdWJDb250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuTWVudWJhclN1YkNvbnRlbnQuZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLlN1YkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KFxuICAoXG4gICAgeyBjbGFzc05hbWUsIGFsaWduID0gXCJzdGFydFwiLCBhbGlnbk9mZnNldCA9IC00LCBzaWRlT2Zmc2V0ID0gOCwgLi4ucHJvcHMgfSxcbiAgICByZWYsXG4gICkgPT4gKFxuICAgIDxNZW51YmFyUHJpbWl0aXZlLlBvcnRhbD5cbiAgICAgIDxNZW51YmFyUHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgYWxpZ25PZmZzZXQ9e2FsaWduT2Zmc2V0fVxuICAgICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiei01MCBtaW4tdy1bMTJyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L01lbnViYXJQcmltaXRpdmUuUG9ydGFsPlxuICApLFxuKTtcbk1lbnViYXJDb250ZW50LmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFySXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5JdGVtPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxNZW51YmFyUHJpbWl0aXZlLkl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuTWVudWJhckl0ZW0uZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLkl0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJDaGVja2JveEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLkNoZWNrYm94SXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNoZWNrZWQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5DaGVja2JveEl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8TWVudWJhclByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICA8L01lbnViYXJQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L01lbnViYXJQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuKSk7XG5NZW51YmFyQ2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5DaGVja2JveEl0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJSYWRpb0l0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlJhZGlvSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPE1lbnViYXJQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJoLTQgdy00IGZpbGwtY3VycmVudFwiIC8+XG4gICAgICA8L01lbnViYXJQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L01lbnViYXJQcmltaXRpdmUuUmFkaW9JdGVtPlxuKSk7XG5NZW51YmFyUmFkaW9JdGVtLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5SYWRpb0l0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuTGFiZWw+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuTGFiZWw+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE1lbnViYXJQcmltaXRpdmUuTGFiZWxcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyTGFiZWwuZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFyU2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3JcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwiLW14LTEgbXktMSBoLXB4IGJnLW11dGVkXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyU2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3IuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJTaG9ydGN1dCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJtbC1hdXRvIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuTWVudWJhclNob3J0Y3V0LmRpc3BsYXluYW1lID0gXCJNZW51YmFyU2hvcnRjdXRcIjtcblxuZXhwb3J0IHtcbiAgTWVudWJhcixcbiAgTWVudWJhck1lbnUsXG4gIE1lbnViYXJUcmlnZ2VyLFxuICBNZW51YmFyQ29udGVudCxcbiAgTWVudWJhckl0ZW0sXG4gIE1lbnViYXJTZXBhcmF0b3IsXG4gIE1lbnViYXJMYWJlbCxcbiAgTWVudWJhckNoZWNrYm94SXRlbSxcbiAgTWVudWJhclJhZGlvR3JvdXAsXG4gIE1lbnViYXJSYWRpb0l0ZW0sXG4gIE1lbnViYXJQb3J0YWwsXG4gIE1lbnViYXJTdWJDb250ZW50LFxuICBNZW51YmFyU3ViVHJpZ2dlcixcbiAgTWVudWJhckdyb3VwLFxuICBNZW51YmFyU3ViLFxuICBNZW51YmFyU2hvcnRjdXQsXG59O1xuIl19