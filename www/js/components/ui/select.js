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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-select", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, SelectPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectScrollDownButton = exports.SelectScrollUpButton = exports.SelectSeparator = exports.SelectItem = exports.SelectLabel = exports.SelectContent = exports.SelectTrigger = exports.SelectValue = exports.SelectGroup = exports.Select = void 0;
    React = __importStar(React);
    SelectPrimitive = __importStar(SelectPrimitive);
    var Select = SelectPrimitive.Root;
    exports.Select = Select;
    var SelectGroup = SelectPrimitive.Group;
    exports.SelectGroup = SelectGroup;
    var SelectValue = SelectPrimitive.Value;
    exports.SelectValue = SelectValue;
    var SelectTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(SelectPrimitive.Icon, { asChild: true, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-4 w-4 opacity-50" }) })] })));
    });
    exports.SelectTrigger = SelectTrigger;
    SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
    var SelectScrollUpButton = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollUpButton, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className) }, props, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronUp, { className: "h-4 w-4" }) })));
    });
    exports.SelectScrollUpButton = SelectScrollUpButton;
    SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
    var SelectScrollDownButton = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollDownButton, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className) }, props, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-4 w-4" }) })));
    });
    exports.SelectScrollDownButton = SelectScrollDownButton;
    SelectScrollDownButton.displayName =
        SelectPrimitive.ScrollDownButton.displayName;
    var SelectContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, _b = _a.position, position = _b === void 0 ? "popper" : _b, props = __rest(_a, ["className", "children", "position"]);
        return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Portal, { children: (0, jsx_runtime_1.jsxs)(SelectPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props, { children: [(0, jsx_runtime_1.jsx)(SelectScrollUpButton, {}), (0, jsx_runtime_1.jsx)(SelectPrimitive.Viewport, { className: (0, utils_1.cn)("p-1", position === "popper" &&
                            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), (0, jsx_runtime_1.jsx)(SelectScrollDownButton, {})] })) }));
    });
    exports.SelectContent = SelectContent;
    SelectContent.displayName = SelectPrimitive.Content.displayName;
    var SelectLabel = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold", className) }, props)));
    });
    exports.SelectLabel = SelectLabel;
    SelectLabel.displayName = SelectPrimitive.Label.displayName;
    var SelectItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4" }) }) }), (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemText, { children: children })] })));
    });
    exports.SelectItem = SelectItem;
    SelectItem.displayName = SelectPrimitive.Item.displayName;
    var SelectSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className) }, props)));
    });
    exports.SelectSeparator = SelectSeparator;
    SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc2VsZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBUWIsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztJQTRJbEMsd0JBQU07SUExSVIsSUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQTJJeEMsa0NBQVc7SUF6SWIsSUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQTBJeEMsa0NBQVc7SUF4SWIsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHcEMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx3QkFBQyxlQUFlLENBQUMsT0FBTyxhQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx5VEFBeVQsRUFDelQsU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx1QkFBQyxlQUFlLENBQUMsSUFBSSxJQUFDLE9BQU8sa0JBQzNCLHVCQUFDLDBCQUFXLElBQUMsU0FBUyxFQUFDLG9CQUFvQixHQUFHLEdBQ3pCLEtBQ0MsQ0FDM0IsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXdIRCxzQ0FBYTtJQXZIZixhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBRWhFLElBQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxL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QUFJLGFBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDJOQUEyTixFQUMzTixTQUFTLENBQ1YsSUFDRyxLQUFLLGVBRVQsaUNBQU0sU0FBUyxFQUFDLCtEQUErRCxZQUM3RSx1QkFBQyxlQUFlLENBQUMsYUFBYSxjQUM1Qix1QkFBQyxvQkFBSyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBQUcsR0FDQyxHQUMzQixFQUNQLHVCQUFDLGVBQWUsQ0FBQyxRQUFRLGNBQUUsUUFBUSxHQUE0QixLQUMxQyxDQUN4QixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBc0JELGdDQUFVO0lBckJaLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFMUQsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHdEMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLGVBQWUsQ0FBQyxTQUFTLGFBQ3hCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxJQUNoRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBV0QsMENBQWU7SUFWakIsZUFBZSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFNlbGVjdFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25Eb3duLCBDaGV2cm9uVXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFNlbGVjdCA9IFNlbGVjdFByaW1pdGl2ZS5Sb290O1xuXG5jb25zdCBTZWxlY3RHcm91cCA9IFNlbGVjdFByaW1pdGl2ZS5Hcm91cDtcblxuY29uc3QgU2VsZWN0VmFsdWUgPSBTZWxlY3RQcmltaXRpdmUuVmFsdWU7XG5cbmNvbnN0IFNlbGVjdFRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuVHJpZ2dlcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2VsZWN0UHJpbWl0aXZlLlRyaWdnZXJcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGgtOSB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0yIHRleHQtc20gc2hhZG93LXNtIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1yaW5nIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmPnNwYW5dOmxpbmUtY2xhbXAtMVwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxTZWxlY3RQcmltaXRpdmUuSWNvbiBhc0NoaWxkPlxuICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtNCB3LTQgb3BhY2l0eS01MFwiIC8+XG4gICAgPC9TZWxlY3RQcmltaXRpdmUuSWNvbj5cbiAgPC9TZWxlY3RQcmltaXRpdmUuVHJpZ2dlcj5cbikpO1xuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBTZWxlY3RTY3JvbGxVcEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvbj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMVwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPENoZXZyb25VcCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgPC9TZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b24+XG4pKTtcblNlbGVjdFNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBTZWxlY3RTY3JvbGxEb3duQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TY3JvbGxEb3duQnV0dG9uPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b25cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gIDwvU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+XG4pKTtcblNlbGVjdFNjcm9sbERvd25CdXR0b24uZGlzcGxheU5hbWUgPVxuICBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbi5kaXNwbGF5TmFtZTtcblxuY29uc3QgU2VsZWN0Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcG9zaXRpb24gPSBcInBvcHBlclwiLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPFNlbGVjdFByaW1pdGl2ZS5Db250ZW50XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicmVsYXRpdmUgei01MCBtYXgtaC05NiBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJwb3BwZXJcIiAmJlxuICAgICAgICAgIFwiZGF0YS1bc2lkZT1ib3R0b21dOnRyYW5zbGF0ZS15LTEgZGF0YS1bc2lkZT1sZWZ0XTotdHJhbnNsYXRlLXgtMSBkYXRhLVtzaWRlPXJpZ2h0XTp0cmFuc2xhdGUteC0xIGRhdGEtW3NpZGU9dG9wXTotdHJhbnNsYXRlLXktMVwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxTZWxlY3RTY3JvbGxVcEJ1dHRvbiAvPlxuICAgICAgPFNlbGVjdFByaW1pdGl2ZS5WaWV3cG9ydFxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwicC0xXCIsXG4gICAgICAgICAgcG9zaXRpb24gPT09IFwicG9wcGVyXCIgJiZcbiAgICAgICAgICAgIFwiaC1bdmFyKC0tcmFkaXgtc2VsZWN0LXRyaWdnZXItaGVpZ2h0KV0gdy1mdWxsIG1pbi13LVt2YXIoLS1yYWRpeC1zZWxlY3QtdHJpZ2dlci13aWR0aCldXCIsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0PlxuICAgICAgPFNlbGVjdFNjcm9sbERvd25CdXR0b24gLz5cbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5Db250ZW50PlxuICA8L1NlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcblNlbGVjdENvbnRlbnQuZGlzcGxheU5hbWUgPSBTZWxlY3RQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcblxuY29uc3QgU2VsZWN0TGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuTGFiZWw+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5MYWJlbD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNlbGVjdFByaW1pdGl2ZS5MYWJlbFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblNlbGVjdExhYmVsLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBTZWxlY3RJdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkl0ZW0+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5JdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCB3LWZ1bGwgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTIgcHItOCB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICA8L1NlbGVjdFByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICA8U2VsZWN0UHJpbWl0aXZlLkl0ZW1UZXh0PntjaGlsZHJlbn08L1NlbGVjdFByaW1pdGl2ZS5JdGVtVGV4dD5cbiAgPC9TZWxlY3RQcmltaXRpdmUuSXRlbT5cbikpO1xuU2VsZWN0SXRlbS5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBTZWxlY3RTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2VsZWN0UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCItbXgtMSBteS0xIGgtcHggYmctbXV0ZWRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblNlbGVjdFNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3IuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0R3JvdXAsXG4gIFNlbGVjdFZhbHVlLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RMYWJlbCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0U2VwYXJhdG9yLFxuICBTZWxlY3RTY3JvbGxVcEJ1dHRvbixcbiAgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbixcbn07XG4iXX0=