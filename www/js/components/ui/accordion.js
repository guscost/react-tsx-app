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
define("ui/accordion", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-accordion", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, AccordionPrimitive, lucide_react_1, utils_1) {
    /// <amd-module name="ui/accordion"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
    React = __importStar(React);
    AccordionPrimitive = __importStar(AccordionPrimitive);
    var Accordion = AccordionPrimitive.Root;
    exports.Accordion = Accordion;
    var AccordionItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("border-b", className) }, props)));
    });
    exports.AccordionItem = AccordionItem;
    AccordionItem.displayName = "AccordionItem";
    var AccordionTrigger = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Header, { className: "flex", children: (0, jsx_runtime_1.jsxs)(AccordionPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })] })) }));
    });
    exports.AccordionTrigger = AccordionTrigger;
    AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
    var AccordionContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Content, __assign({ ref: ref, className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, props, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("pb-4 pt-0", className), children: children }) })));
    });
    exports.AccordionContent = AccordionContent;
    AccordionContent.displayName = AccordionPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHFDQUFxQztJQUNyQyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQWdEakMsOEJBQVM7SUE5Q2xCLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3BDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxrQkFBa0IsQ0FBQyxJQUFJLGFBQ3RCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFDaEMsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXFDaUIsc0NBQWE7SUFwQ2pDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0lBRTVDLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHdkMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx1QkFBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUMsU0FBUyxFQUFDLE1BQU0sWUFDekMsd0JBQUMsa0JBQWtCLENBQUMsT0FBTyxhQUN6QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxnSkFBZ0osRUFDaEosU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx1QkFBQywwQkFBVyxJQUFDLFNBQVMsRUFBQywwRUFBMEUsR0FBRyxLQUN6RSxHQUNILENBQzdCLENBQUE7S0FBQSxDQUFDLENBQUM7SUFpQmdDLDRDQUFnQjtJQWhCbkQsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFdEUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd2QyxVQUFDLEVBQWlDLEVBQUUsR0FBRztRQUFwQyxJQUFBLFNBQVMsZUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFBWSxPQUFBLENBQzVDLHVCQUFDLGtCQUFrQixDQUFDLE9BQU8sYUFDekIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUMsMkdBQTJHLElBQ2pILEtBQUssY0FFVCxnQ0FBSyxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUNqQyxDQUM5QixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBR2tELDRDQUFnQjtJQUZyRSxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvYWNjb3JkaW9uXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgQWNjb3JkaW9uUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwic3JjL2xpYi91dGlsc1wiO1xuXG5jb25zdCBBY2NvcmRpb24gPSBBY2NvcmRpb25QcmltaXRpdmUuUm9vdDtcblxuY29uc3QgQWNjb3JkaW9uSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFjY29yZGlvblByaW1pdGl2ZS5JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBY2NvcmRpb25QcmltaXRpdmUuSXRlbT5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEFjY29yZGlvblByaW1pdGl2ZS5JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcImJvcmRlci1iXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BY2NvcmRpb25JdGVtLmRpc3BsYXlOYW1lID0gXCJBY2NvcmRpb25JdGVtXCI7XG5cbmNvbnN0IEFjY29yZGlvblRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBY2NvcmRpb25QcmltaXRpdmUuVHJpZ2dlcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQWNjb3JkaW9uUHJpbWl0aXZlLlRyaWdnZXI+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8QWNjb3JkaW9uUHJpbWl0aXZlLkhlYWRlciBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgPEFjY29yZGlvblByaW1pdGl2ZS5UcmlnZ2VyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgaG92ZXI6dW5kZXJsaW5lIHRleHQtbGVmdCBbJltkYXRhLXN0YXRlPW9wZW5dPnN2Z106cm90YXRlLTE4MFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCJoLTQgdy00IHNocmluay0wIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDBcIiAvPlxuICAgIDwvQWNjb3JkaW9uUHJpbWl0aXZlLlRyaWdnZXI+XG4gIDwvQWNjb3JkaW9uUHJpbWl0aXZlLkhlYWRlcj5cbikpO1xuQWNjb3JkaW9uVHJpZ2dlci5kaXNwbGF5TmFtZSA9IEFjY29yZGlvblByaW1pdGl2ZS5UcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQWNjb3JkaW9uUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEFjY29yZGlvblByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEFjY29yZGlvblByaW1pdGl2ZS5Db250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHRleHQtc20gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLWFjY29yZGlvbi11cCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWFjY29yZGlvbi1kb3duXCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJwYi00IHB0LTBcIiwgY2xhc3NOYW1lKX0+e2NoaWxkcmVufTwvZGl2PlxuICA8L0FjY29yZGlvblByaW1pdGl2ZS5Db250ZW50PlxuKSk7XG5BY2NvcmRpb25Db250ZW50LmRpc3BsYXlOYW1lID0gQWNjb3JkaW9uUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IEFjY29yZGlvbiwgQWNjb3JkaW9uSXRlbSwgQWNjb3JkaW9uVHJpZ2dlciwgQWNjb3JkaW9uQ29udGVudCB9O1xuIl19