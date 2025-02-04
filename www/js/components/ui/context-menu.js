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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-context-menu", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, ContextMenuPrimitive, lucide_react_1, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvY29udGV4dC1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBUWIsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBZ0w1QyxrQ0FBVztJQTlLYixJQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQStLdEQsZ0RBQWtCO0lBN0twQixJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQztJQXFMbEQsNENBQWdCO0lBbkxsQixJQUFNLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztJQW9McEQsOENBQWlCO0lBbExuQixJQUFNLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7SUFtTDlDLHdDQUFjO0lBakxoQixJQUFNLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztJQW9MNUQsc0RBQXFCO0lBbEx2QixJQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBSzVDLFVBQUMsRUFBd0MsRUFBRSxHQUFHO1FBQTNDLElBQUEsU0FBUyxlQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUssS0FBSyxjQUF0QyxrQ0FBd0MsQ0FBRjtRQUFZLE9BQUEsQ0FDbkQsd0JBQUMsb0JBQW9CLENBQUMsVUFBVSxhQUM5QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw0TUFBNE0sRUFDNU0sS0FBSyxJQUFJLE1BQU0sRUFDZixTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVIsUUFBUSxFQUNULHVCQUFDLDJCQUFZLElBQUMsU0FBUyxFQUFDLGlCQUFpQixHQUFHLEtBQ1osQ0FDbkMsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQStKRCxzREFBcUI7SUE5SnZCLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBRWhGLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHNUMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLG9CQUFvQixDQUFDLFVBQVUsYUFDOUIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdWJBQXViLEVBQ3ZiLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUErSUQsc0RBQXFCO0lBOUl2QixxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUVoRixJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3pDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxvQkFBb0IsQ0FBQyxNQUFNLGNBQzFCLHVCQUFDLG9CQUFvQixDQUFDLE9BQU8sYUFDM0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdWJBQXViLEVBQ3ZiLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxHQUMwQixDQUMvQixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBb0hELGdEQUFrQjtJQW5IcEIsa0JBQWtCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFMUUsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FLdEMsVUFBQyxFQUE4QixFQUFFLEdBQUc7UUFBakMsSUFBQSxTQUFTLGVBQUEsRUFBRSxLQUFLLFdBQUEsRUFBSyxLQUFLLGNBQTVCLHNCQUE4QixDQUFGO1FBQVksT0FBQSxDQUN6Qyx1QkFBQyxvQkFBb0IsQ0FBQyxJQUFJLGFBQ3hCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLCtNQUErTSxFQUMvTSxLQUFLLElBQUksTUFBTSxFQUNmLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFtR0QsMENBQWU7SUFsR2pCLGVBQWUsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUVwRSxJQUFNLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzlDLFVBQUMsRUFBMEMsRUFBRSxHQUFHO1FBQTdDLElBQUEsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUssS0FBSyxjQUF4QyxvQ0FBMEMsQ0FBRjtRQUFZLE9BQUEsQ0FDckQsd0JBQUMsb0JBQW9CLENBQUMsWUFBWSxhQUNoQyxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvTkFBb04sRUFDcE4sU0FBUyxDQUNWLEVBQ0QsT0FBTyxFQUFFLE9BQU8sSUFDWixLQUFLLGVBRVQsaUNBQU0sU0FBUyxFQUFDLDhEQUE4RCxZQUM1RSx1QkFBQyxvQkFBb0IsQ0FBQyxhQUFhLGNBQ2pDLHVCQUFDLG9CQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRyxHQUNNLEdBQ2hDLEVBQ04sUUFBUSxLQUN5QixDQUNyQyxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBNkVELDBEQUF1QjtJQTVFekIsdUJBQXVCLENBQUMsV0FBVztRQUNqQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO0lBRWhELElBQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx3QkFBQyxvQkFBb0IsQ0FBQyxTQUFTLGFBQzdCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLG9OQUFvTixFQUNwTixTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVQsaUNBQU0sU0FBUyxFQUFDLDhEQUE4RCxZQUM1RSx1QkFBQyxvQkFBb0IsQ0FBQyxhQUFhLGNBQ2pDLHVCQUFDLHFCQUFNLElBQUMsU0FBUyxFQUFDLHNCQUFzQixHQUFHLEdBQ1IsR0FDaEMsRUFDTixRQUFRLEtBQ3NCLENBQ2xDLENBQUE7S0FBQSxDQUFDLENBQUM7SUF1REQsb0RBQW9CO0lBdER0QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUU5RSxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBS3ZDLFVBQUMsRUFBOEIsRUFBRSxHQUFHO1FBQWpDLElBQUEsU0FBUyxlQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUssS0FBSyxjQUE1QixzQkFBOEIsQ0FBRjtRQUFZLE9BQUEsQ0FDekMsdUJBQUMsb0JBQW9CLENBQUMsS0FBSyxhQUN6QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtREFBbUQsRUFDbkQsS0FBSyxJQUFJLE1BQU0sRUFDZixTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBc0NELDRDQUFnQjtJQXJDbEIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFdEUsSUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUczQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsb0JBQW9CLENBQUMsU0FBUyxhQUM3QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywyQkFBMkIsRUFBRSxTQUFTLENBQUMsSUFDakQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQTJCRCxvREFBb0I7SUExQnRCLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBRTlFLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxFQUdXO1FBRnRDLElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZtQixhQUc1QixDQURTO1FBRVIsT0FBTyxDQUNMLDBDQUNFLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx1REFBdUQsRUFDdkQsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztJQVlBLGtEQUFtQjtJQVhyQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBDb250ZXh0TWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQtbWVudVwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBDb250ZXh0TWVudSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IENvbnRleHRNZW51VHJpZ2dlciA9IENvbnRleHRNZW51UHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IENvbnRleHRNZW51R3JvdXAgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5Hcm91cDtcblxuY29uc3QgQ29udGV4dE1lbnVQb3J0YWwgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5Qb3J0YWw7XG5cbmNvbnN0IENvbnRleHRNZW51U3ViID0gQ29udGV4dE1lbnVQcmltaXRpdmUuU3ViO1xuXG5jb25zdCBDb250ZXh0TWVudVJhZGlvR3JvdXAgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwO1xuXG5jb25zdCBDb250ZXh0TWVudVN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxuKSk7XG5Db250ZXh0TWVudVN1YlRyaWdnZXIuZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVN1YkNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJDb250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJDb250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInotNTAgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbGcgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNvbnRleHRNZW51U3ViQ29udGVudC5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTEgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvQ29udGV4dE1lbnVQcmltaXRpdmUuUG9ydGFsPlxuKSk7XG5Db250ZXh0TWVudUNvbnRlbnQuZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MFwiLFxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNvbnRleHRNZW51SXRlbS5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51Q2hlY2tib3hJdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNoZWNrZWQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweS0xLjUgcGwtOCBwci0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPENvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgIDwvQ29udGV4dE1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cbikpO1xuQ29udGV4dE1lbnVDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPVxuICBDb250ZXh0TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51UmFkaW9JdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweS0xLjUgcGwtOCBwci0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2lyY2xlIGNsYXNzTmFtZT1cImgtNCB3LTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgIDwvQ29udGV4dE1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cbikpO1xuQ29udGV4dE1lbnVSYWRpb0l0ZW0uZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51TGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5MYWJlbD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuTGFiZWw+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLkxhYmVsXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiLFxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNvbnRleHRNZW51TGFiZWwuZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5MYWJlbC5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlNlcGFyYXRvcj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCItbXgtMSBteS0xIGgtcHggYmctYm9yZGVyXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5Db250ZXh0TWVudVNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVTaG9ydGN1dCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJtbC1hdXRvIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuQ29udGV4dE1lbnVTaG9ydGN1dC5kaXNwbGF5TmFtZSA9IFwiQ29udGV4dE1lbnVTaG9ydGN1dFwiO1xuXG5leHBvcnQge1xuICBDb250ZXh0TWVudSxcbiAgQ29udGV4dE1lbnVUcmlnZ2VyLFxuICBDb250ZXh0TWVudUNvbnRlbnQsXG4gIENvbnRleHRNZW51SXRlbSxcbiAgQ29udGV4dE1lbnVDaGVja2JveEl0ZW0sXG4gIENvbnRleHRNZW51UmFkaW9JdGVtLFxuICBDb250ZXh0TWVudUxhYmVsLFxuICBDb250ZXh0TWVudVNlcGFyYXRvcixcbiAgQ29udGV4dE1lbnVTaG9ydGN1dCxcbiAgQ29udGV4dE1lbnVHcm91cCxcbiAgQ29udGV4dE1lbnVQb3J0YWwsXG4gIENvbnRleHRNZW51U3ViLFxuICBDb250ZXh0TWVudVN1YkNvbnRlbnQsXG4gIENvbnRleHRNZW51U3ViVHJpZ2dlcixcbiAgQ29udGV4dE1lbnVSYWRpb0dyb3VwLFxufTtcbiJdfQ==