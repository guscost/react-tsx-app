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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHFDQUFxQztJQUNyQyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQWdEakMsOEJBQVM7SUE5Q2xCLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3BDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxrQkFBa0IsQ0FBQyxJQUFJLGFBQ3RCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFDaEMsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXFDaUIsc0NBQWE7SUFwQ2pDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0lBRTVDLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHdkMsVUFBQyxFQUFpQyxFQUFFLEdBQUc7UUFBcEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQS9CLHlCQUFpQyxDQUFGO1FBQVksT0FBQSxDQUM1Qyx1QkFBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUMsU0FBUyxFQUFDLE1BQU0sWUFDekMsd0JBQUMsa0JBQWtCLENBQUMsT0FBTyxhQUN6QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxnSkFBZ0osRUFDaEosU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx1QkFBQywwQkFBVyxJQUFDLFNBQVMsRUFBQywwRUFBMEUsR0FBRyxLQUN6RSxHQUNILENBQzdCLENBQUE7S0FBQSxDQUFDLENBQUM7SUFpQmdDLDRDQUFnQjtJQWhCbkQsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFdEUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd2QyxVQUFDLEVBQWlDLEVBQUUsR0FBRztRQUFwQyxJQUFBLFNBQVMsZUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFBWSxPQUFBLENBQzVDLHVCQUFDLGtCQUFrQixDQUFDLE9BQU8sYUFDekIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUMsMkdBQTJHLElBQ2pILEtBQUssY0FFVCxnQ0FBSyxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUNqQyxDQUM5QixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBR2tELDRDQUFnQjtJQUZyRSxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyJ9