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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvY29udGV4dC1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHdDQUF3QztJQUN4QyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQWdMNUMsa0NBQVc7SUE5S2IsSUFBTSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUErS3RELGdEQUFrQjtJQTdLcEIsSUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFxTGxELDRDQUFnQjtJQW5MbEIsSUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7SUFvTHBELDhDQUFpQjtJQWxMbkIsSUFBTSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO0lBbUw5Qyx3Q0FBYztJQWpMaEIsSUFBTSxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7SUFvTDVELHNEQUFxQjtJQWxMdkIsSUFBTSxxQkFBcUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUs1QyxVQUFDLEVBQXdDLEVBQUUsR0FBRztRQUEzQyxJQUFBLFNBQVMsZUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBdEMsa0NBQXdDLENBQUY7UUFBWSxPQUFBLENBQ25ELHdCQUFDLG9CQUFvQixDQUFDLFVBQVUsYUFDOUIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNE1BQTRNLEVBQzVNLEtBQUssSUFBSSxNQUFNLEVBQ2YsU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx1QkFBQywyQkFBWSxJQUFDLFNBQVMsRUFBQyxpQkFBaUIsR0FBRyxLQUNaLENBQ25DLENBQUE7S0FBQSxDQUFDLENBQUM7SUErSkQsc0RBQXFCO0lBOUp2QixxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUVoRixJQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzVDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxvQkFBb0IsQ0FBQyxVQUFVLGFBQzlCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHViQUF1YixFQUN2YixTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBK0lELHNEQUFxQjtJQTlJdkIscUJBQXFCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFFaEYsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd6QyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsb0JBQW9CLENBQUMsTUFBTSxjQUMxQix1QkFBQyxvQkFBb0IsQ0FBQyxPQUFPLGFBQzNCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHViQUF1YixFQUN2YixTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsR0FDMEIsQ0FDL0IsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQW9IRCxnREFBa0I7SUFuSHBCLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBRTFFLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBS3RDLFVBQUMsRUFBOEIsRUFBRSxHQUFHO1FBQWpDLElBQUEsU0FBUyxlQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUssS0FBSyxjQUE1QixzQkFBOEIsQ0FBRjtRQUFZLE9BQUEsQ0FDekMsdUJBQUMsb0JBQW9CLENBQUMsSUFBSSxhQUN4QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwrTUFBK00sRUFDL00sS0FBSyxJQUFJLE1BQU0sRUFDZixTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBbUdELDBDQUFlO0lBbEdqQixlQUFlLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFcEUsSUFBTSx1QkFBdUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUc5QyxVQUFDLEVBQTBDLEVBQUUsR0FBRztRQUE3QyxJQUFBLFNBQVMsZUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFLLEtBQUssY0FBeEMsb0NBQTBDLENBQUY7UUFBWSxPQUFBLENBQ3JELHdCQUFDLG9CQUFvQixDQUFDLFlBQVksYUFDaEMsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsb05BQW9OLEVBQ3BOLFNBQVMsQ0FDVixFQUNELE9BQU8sRUFBRSxPQUFPLElBQ1osS0FBSyxlQUVULGlDQUFNLFNBQVMsRUFBQyw4REFBOEQsWUFDNUUsdUJBQUMsb0JBQW9CLENBQUMsYUFBYSxjQUNqQyx1QkFBQyxvQkFBSyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBQUcsR0FDTSxHQUNoQyxFQUNOLFFBQVEsS0FDeUIsQ0FDckMsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQTZFRCwwREFBdUI7SUE1RXpCLHVCQUF1QixDQUFDLFdBQVc7UUFDakMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztJQUVoRCxJQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzNDLFVBQUMsRUFBaUMsRUFBRSxHQUFHO1FBQXBDLElBQUEsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUssS0FBSyxjQUEvQix5QkFBaUMsQ0FBRjtRQUFZLE9BQUEsQ0FDNUMsd0JBQUMsb0JBQW9CLENBQUMsU0FBUyxhQUM3QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvTkFBb04sRUFDcE4sU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVULGlDQUFNLFNBQVMsRUFBQyw4REFBOEQsWUFDNUUsdUJBQUMsb0JBQW9CLENBQUMsYUFBYSxjQUNqQyx1QkFBQyxxQkFBTSxJQUFDLFNBQVMsRUFBQyxzQkFBc0IsR0FBRyxHQUNSLEdBQ2hDLEVBQ04sUUFBUSxLQUNzQixDQUNsQyxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBdURELG9EQUFvQjtJQXREdEIsb0JBQW9CLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFFOUUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUt2QyxVQUFDLEVBQThCLEVBQUUsR0FBRztRQUFqQyxJQUFBLFNBQVMsZUFBQSxFQUFFLEtBQUssV0FBQSxFQUFLLEtBQUssY0FBNUIsc0JBQThCLENBQUY7UUFBWSxPQUFBLENBQ3pDLHVCQUFDLG9CQUFvQixDQUFDLEtBQUssYUFDekIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbURBQW1ELEVBQ25ELEtBQUssSUFBSSxNQUFNLEVBQ2YsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXNDRCw0Q0FBZ0I7SUFyQ2xCLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLG9CQUFvQixDQUFDLFNBQVMsYUFDN0IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLElBQ2pELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUEyQkQsb0RBQW9CO0lBMUJ0QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUU5RSxJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFHVztRQUZ0QyxJQUFBLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FGbUIsYUFHNUIsQ0FEUztRQUVSLE9BQU8sQ0FDTCwwQ0FDRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdURBQXVELEVBQ3ZELFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUM7SUFDSixDQUFDLENBQUM7SUFZQSxrREFBbUI7SUFYckIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDIn0=