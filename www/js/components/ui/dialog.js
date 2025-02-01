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
define("ui/dialog", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-dialog", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, DialogPrimitive, lucide_react_1, utils_1) {
    /// <amd-module name="ui/dialog"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DialogDescription = exports.DialogTitle = exports.DialogFooter = exports.DialogHeader = exports.DialogContent = exports.DialogClose = exports.DialogTrigger = exports.DialogOverlay = exports.DialogPortal = exports.Dialog = void 0;
    React = __importStar(React);
    DialogPrimitive = __importStar(DialogPrimitive);
    var Dialog = DialogPrimitive.Root;
    exports.Dialog = Dialog;
    var DialogTrigger = DialogPrimitive.Trigger;
    exports.DialogTrigger = DialogTrigger;
    var DialogPortal = DialogPrimitive.Portal;
    exports.DialogPortal = DialogPortal;
    var DialogClose = DialogPrimitive.Close;
    exports.DialogClose = DialogClose;
    var DialogOverlay = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Overlay, __assign({ ref: ref, className: (0, utils_1.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props)));
    });
    exports.DialogOverlay = DialogOverlay;
    DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
    var DialogContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(DialogPortal, { children: [(0, jsx_runtime_1.jsx)(DialogOverlay, {}), (0, jsx_runtime_1.jsxs)(DialogPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className) }, props, { children: [children, (0, jsx_runtime_1.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] })] }))] }));
    });
    exports.DialogContent = DialogContent;
    DialogContent.displayName = DialogPrimitive.Content.displayName;
    var DialogHeader = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props)));
    };
    exports.DialogHeader = DialogHeader;
    DialogHeader.displayName = "DialogHeader";
    var DialogFooter = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
    };
    exports.DialogFooter = DialogFooter;
    DialogFooter.displayName = "DialogFooter";
    var DialogTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Title, __assign({ ref: ref, className: (0, utils_1.cn)("text-lg font-semibold leading-none tracking-tight", className) }, props)));
    });
    exports.DialogTitle = DialogTitle;
    DialogTitle.displayName = DialogPrimitive.Title.displayName;
    var DialogDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Description, __assign({ ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className) }, props)));
    });
    exports.DialogDescription = DialogDescription;
    DialogDescription.displayName = DialogPrimitive.Description.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLGtDQUFrQztJQUNsQyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUF1R2xDLHdCQUFNO0lBckdSLElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUF3RzVDLHNDQUFhO0lBdEdmLElBQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFvRzFDLG9DQUFZO0lBbEdkLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFxR3hDLGtDQUFXO0lBbkdiLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3BDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxlQUFlLENBQUMsT0FBTyxhQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx5SkFBeUosRUFDekosU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXFGRCxzQ0FBYTtJQXBGZixhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBRWhFLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3BDLFVBQUMsRUFBaUMsRUFBRSxHQUFHO1FBQXBDLElBQUEsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUssS0FBSyxjQUEvQix5QkFBaUMsQ0FBRjtRQUFZLE9BQUEsQ0FDNUMsd0JBQUMsWUFBWSxlQUNYLHVCQUFDLGFBQWEsS0FBRyxFQUNqQix3QkFBQyxlQUFlLENBQUMsT0FBTyxhQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw2ZkFBNmYsRUFDN2YsU0FBUyxDQUNWLElBQ0csS0FBSyxlQUVSLFFBQVEsRUFDVCx3QkFBQyxlQUFlLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQywrUUFBK1EsYUFDOVMsdUJBQUMsZ0JBQUMsSUFBQyxTQUFTLEVBQUMsU0FBUyxHQUFHLEVBQ3pCLGlDQUFNLFNBQVMsRUFBQyxTQUFTLHNCQUFhLElBQ2hCLEtBQ0EsSUFDYixDQUNoQixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBZ0VELHNDQUFhO0lBL0RmLGFBQWEsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFaEUsSUFBTSxZQUFZLEdBQUcsVUFBQyxFQUdpQjtRQUZyQyxJQUFBLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FGWSxhQUdyQixDQURTO1FBQ2tDLE9BQUEsQ0FDMUMseUNBQ0UsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLG9EQUFvRCxFQUNwRCxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQztJQW1EQSxvQ0FBWTtJQWxEZCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztJQUUxQyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBR2lCO1FBRnJDLElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZZLGFBR3JCLENBRFM7UUFDa0MsT0FBQSxDQUMxQyx5Q0FDRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsK0RBQStELEVBQy9ELFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDO0lBc0NBLG9DQUFZO0lBckNkLFlBQVksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO0lBRTFDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxlQUFlLENBQUMsS0FBSyxhQUNwQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtREFBbUQsRUFDbkQsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXdCRCxrQ0FBVztJQXZCYixXQUFXLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRTVELElBQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHeEMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLGVBQWUsQ0FBQyxXQUFXLGFBQzFCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxJQUNyRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBYUQsOENBQWlCO0lBWm5CLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvZGlhbG9nXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgRGlhbG9nUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCI7XG5pbXBvcnQgeyBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IERpYWxvZyA9IERpYWxvZ1ByaW1pdGl2ZS5Sb290O1xuXG5jb25zdCBEaWFsb2dUcmlnZ2VyID0gRGlhbG9nUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IERpYWxvZ1BvcnRhbCA9IERpYWxvZ1ByaW1pdGl2ZS5Qb3J0YWw7XG5cbmNvbnN0IERpYWxvZ0Nsb3NlID0gRGlhbG9nUHJpbWl0aXZlLkNsb3NlO1xuXG5jb25zdCBEaWFsb2dPdmVybGF5ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXlcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svODAgIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkRpYWxvZ092ZXJsYXkuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuT3ZlcmxheS5kaXNwbGF5TmFtZTtcblxuY29uc3QgRGlhbG9nQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEaWFsb2dQb3J0YWw+XG4gICAgPERpYWxvZ092ZXJsYXkgLz5cbiAgICA8RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmaXhlZCBsZWZ0LVs1MCVdIHRvcC1bNTAlXSB6LTUwIGdyaWQgdy1mdWxsIG1heC13LWxnIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gZ2FwLTQgYm9yZGVyIGJnLWJhY2tncm91bmQgcC02IHNoYWRvdy1sZyBkdXJhdGlvbi0yMDAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLWxlZnQtMS8yIGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLXRvcC1bNDglXSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLWxlZnQtMS8yIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wLVs0OCVdIHNtOnJvdW5kZWQtbGdcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8RGlhbG9nUHJpbWl0aXZlLkNsb3NlIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTQgcm91bmRlZC1zbSBvcGFjaXR5LTcwIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgdHJhbnNpdGlvbi1vcGFjaXR5IGhvdmVyOm9wYWNpdHktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yaW5nIGZvY3VzOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XG4gICAgICA8L0RpYWxvZ1ByaW1pdGl2ZS5DbG9zZT5cbiAgICA8L0RpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PlxuICA8L0RpYWxvZ1BvcnRhbD5cbikpO1xuRGlhbG9nQ29udGVudC5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEaWFsb2dIZWFkZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggZmxleC1jb2wgc3BhY2UteS0xLjUgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuRGlhbG9nSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dIZWFkZXJcIjtcblxuY29uc3QgRGlhbG9nRm9vdGVyID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cgc206anVzdGlmeS1lbmQgc206c3BhY2UteC0yXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuRGlhbG9nRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dGb290ZXJcIjtcblxuY29uc3QgRGlhbG9nVGl0bGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuVGl0bGU+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERpYWxvZ1ByaW1pdGl2ZS5UaXRsZVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInRleHQtbGcgZm9udC1zZW1pYm9sZCBsZWFkaW5nLW5vbmUgdHJhY2tpbmctdGlnaHRcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuRGlhbG9nVGl0bGUuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuVGl0bGUuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERpYWxvZ0Rlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb24+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb25cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkRpYWxvZ0Rlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID0gRGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uLmRpc3BsYXlOYW1lO1xuXG5leHBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ1BvcnRhbCxcbiAgRGlhbG9nT3ZlcmxheSxcbiAgRGlhbG9nVHJpZ2dlcixcbiAgRGlhbG9nQ2xvc2UsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG59O1xuIl19