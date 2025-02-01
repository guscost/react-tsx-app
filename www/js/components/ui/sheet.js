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
define("ui/sheet", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-dialog", "class-variance-authority", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, SheetPrimitive, class_variance_authority_1, lucide_react_1, utils_1) {
    /// <amd-module name="ui/sheet"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetClose = exports.SheetTrigger = exports.SheetOverlay = exports.SheetPortal = exports.Sheet = void 0;
    React = __importStar(React);
    SheetPrimitive = __importStar(SheetPrimitive);
    var Sheet = SheetPrimitive.Root;
    exports.Sheet = Sheet;
    var SheetTrigger = SheetPrimitive.Trigger;
    exports.SheetTrigger = SheetTrigger;
    var SheetClose = SheetPrimitive.Close;
    exports.SheetClose = SheetClose;
    var SheetPortal = SheetPrimitive.Portal;
    exports.SheetPortal = SheetPortal;
    var SheetOverlay = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Overlay, __assign({ className: (0, utils_1.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props, { ref: ref })));
    });
    exports.SheetOverlay = SheetOverlay;
    SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
    var sheetVariants = (0, class_variance_authority_1.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            },
        },
        defaultVariants: {
            side: "right",
        },
    });
    var SheetContent = React.forwardRef(function (_a, ref) {
        var _b = _a.side, side = _b === void 0 ? "right" : _b, className = _a.className, children = _a.children, props = __rest(_a, ["side", "className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(SheetPortal, { children: [(0, jsx_runtime_1.jsx)(SheetOverlay, {}), (0, jsx_runtime_1.jsxs)(SheetPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)(sheetVariants({ side: side }), className) }, props, { children: [(0, jsx_runtime_1.jsxs)(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] }), children] }))] }));
    });
    exports.SheetContent = SheetContent;
    SheetContent.displayName = SheetPrimitive.Content.displayName;
    var SheetHeader = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
    };
    exports.SheetHeader = SheetHeader;
    SheetHeader.displayName = "SheetHeader";
    var SheetFooter = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
    };
    exports.SheetFooter = SheetFooter;
    SheetFooter.displayName = "SheetFooter";
    var SheetTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Title, __assign({ ref: ref, className: (0, utils_1.cn)("text-lg font-semibold text-foreground", className) }, props)));
    });
    exports.SheetTitle = SheetTitle;
    SheetTitle.displayName = SheetPrimitive.Title.displayName;
    var SheetDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Description, __assign({ ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className) }, props)));
    });
    exports.SheetDescription = SheetDescription;
    SheetDescription.displayName = SheetPrimitive.Description.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9zaGVldC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxpQ0FBaUM7SUFDakMsWUFBWSxDQUFDOzs7Ozs7SUFTYixJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBd0hoQyxzQkFBSztJQXRIUCxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBeUgxQyxvQ0FBWTtJQXZIZCxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBd0h0QyxnQ0FBVTtJQXRIWixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBbUh4QyxrQ0FBVztJQWpIYixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUduQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsY0FBYyxDQUFDLE9BQU8sYUFDckIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHlKQUF5SixFQUN6SixTQUFTLENBQ1YsSUFDRyxLQUFLLElBQ1QsR0FBRyxFQUFFLEdBQUcsSUFDUixDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFzR0Qsb0NBQVk7SUFyR2QsWUFBWSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUU5RCxJQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFHLEVBQ3ZCLGtNQUFrTSxFQUNsTTtRQUNFLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsbUdBQW1HO2dCQUN4RyxNQUFNLEVBQ0osNEdBQTRHO2dCQUM5RyxJQUFJLEVB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QUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvc2hlZXRcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTaGVldFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcbmltcG9ydCB7IFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgU2hlZXQgPSBTaGVldFByaW1pdGl2ZS5Sb290O1xuXG5jb25zdCBTaGVldFRyaWdnZXIgPSBTaGVldFByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBTaGVldENsb3NlID0gU2hlZXRQcmltaXRpdmUuQ2xvc2U7XG5cbmNvbnN0IFNoZWV0UG9ydGFsID0gU2hlZXRQcmltaXRpdmUuUG9ydGFsO1xuXG5jb25zdCBTaGVldE92ZXJsYXkgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTaGVldFByaW1pdGl2ZS5PdmVybGF5PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTaGVldFByaW1pdGl2ZS5PdmVybGF5PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2hlZXRQcmltaXRpdmUuT3ZlcmxheVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay84MCAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgLz5cbikpO1xuU2hlZXRPdmVybGF5LmRpc3BsYXlOYW1lID0gU2hlZXRQcmltaXRpdmUuT3ZlcmxheS5kaXNwbGF5TmFtZTtcblxuY29uc3Qgc2hlZXRWYXJpYW50cyA9IGN2YShcbiAgXCJmaXhlZCB6LTUwIGdhcC00IGJnLWJhY2tncm91bmQgcC02IHNoYWRvdy1sZyB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZHVyYXRpb24tMzAwIGRhdGEtW3N0YXRlPW9wZW5dOmR1cmF0aW9uLTUwMCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXRcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICBzaWRlOiB7XG4gICAgICAgIHRvcDogXCJpbnNldC14LTAgdG9wLTAgYm9yZGVyLWIgZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tdG9wIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wXCIsXG4gICAgICAgIGJvdHRvbTpcbiAgICAgICAgICBcImluc2V0LXgtMCBib3R0b20tMCBib3JkZXItdCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by1ib3R0b20gZGF0YS1bc3RhdGU9b3Blbl06c2xpZGUtaW4tZnJvbS1ib3R0b21cIixcbiAgICAgICAgbGVmdDogXCJpbnNldC15LTAgbGVmdC0wIGgtZnVsbCB3LTMvNCBib3JkZXItciBkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by1sZWZ0IGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tbGVmdCBzbTptYXgtdy1zbVwiLFxuICAgICAgICByaWdodDpcbiAgICAgICAgICBcImluc2V0LXktMCByaWdodC0wIGgtZnVsbCB3LTMvNCBib3JkZXItbCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by1yaWdodCBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLXJpZ2h0IHNtOm1heC13LXNtXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICBzaWRlOiBcInJpZ2h0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmludGVyZmFjZSBTaGVldENvbnRlbnRQcm9wc1xuICBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2hlZXRQcmltaXRpdmUuQ29udGVudD4sXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiBzaGVldFZhcmlhbnRzPiB7fVxuXG5jb25zdCBTaGVldENvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTaGVldFByaW1pdGl2ZS5Db250ZW50PixcbiAgU2hlZXRDb250ZW50UHJvcHNcbj4oKHsgc2lkZSA9IFwicmlnaHRcIiwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTaGVldFBvcnRhbD5cbiAgICA8U2hlZXRPdmVybGF5IC8+XG4gICAgPFNoZWV0UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihzaGVldFZhcmlhbnRzKHsgc2lkZSB9KSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U2hlZXRQcmltaXRpdmUuQ2xvc2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtNCByb3VuZGVkLXNtIG9wYWNpdHktNzAgcmluZy1vZmZzZXQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJpbmcgZm9jdXM6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmJnLXNlY29uZGFyeVwiPlxuICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPlxuICAgICAgPC9TaGVldFByaW1pdGl2ZS5DbG9zZT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NoZWV0UHJpbWl0aXZlLkNvbnRlbnQ+XG4gIDwvU2hlZXRQb3J0YWw+XG4pKTtcblNoZWV0Q29udGVudC5kaXNwbGF5TmFtZSA9IFNoZWV0UHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IFNoZWV0SGVhZGVyID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5TaGVldEhlYWRlci5kaXNwbGF5TmFtZSA9IFwiU2hlZXRIZWFkZXJcIjtcblxuY29uc3QgU2hlZXRGb290ZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWVuZCBzbTpzcGFjZS14LTJcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5TaGVldEZvb3Rlci5kaXNwbGF5TmFtZSA9IFwiU2hlZXRGb290ZXJcIjtcblxuY29uc3QgU2hlZXRUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNoZWV0UHJpbWl0aXZlLlRpdGxlPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTaGVldFByaW1pdGl2ZS5UaXRsZT5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNoZWV0UHJpbWl0aXZlLlRpdGxlXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblNoZWV0VGl0bGUuZGlzcGxheU5hbWUgPSBTaGVldFByaW1pdGl2ZS5UaXRsZS5kaXNwbGF5TmFtZTtcblxuY29uc3QgU2hlZXREZXNjcmlwdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNoZWV0UHJpbWl0aXZlLkRlc2NyaXB0aW9uPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTaGVldFByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNoZWV0UHJpbWl0aXZlLkRlc2NyaXB0aW9uXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5TaGVldERlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID0gU2hlZXRQcmltaXRpdmUuRGVzY3JpcHRpb24uZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7XG4gIFNoZWV0LFxuICBTaGVldFBvcnRhbCxcbiAgU2hlZXRPdmVybGF5LFxuICBTaGVldFRyaWdnZXIsXG4gIFNoZWV0Q2xvc2UsXG4gIFNoZWV0Q29udGVudCxcbiAgU2hlZXRIZWFkZXIsXG4gIFNoZWV0Rm9vdGVyLFxuICBTaGVldFRpdGxlLFxuICBTaGVldERlc2NyaXB0aW9uLFxufTtcbiJdfQ==