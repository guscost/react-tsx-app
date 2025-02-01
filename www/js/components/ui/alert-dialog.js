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
define("ui/alert-dialog", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-alert-dialog", "lib/utils", "ui/button"], function (require, exports, jsx_runtime_1, React, AlertDialogPrimitive, utils_1, button_1) {
    /// <amd-module name="ui/alert-dialog"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialogDescription = exports.AlertDialogTitle = exports.AlertDialogFooter = exports.AlertDialogHeader = exports.AlertDialogContent = exports.AlertDialogTrigger = exports.AlertDialogOverlay = exports.AlertDialogPortal = exports.AlertDialog = void 0;
    React = __importStar(React);
    AlertDialogPrimitive = __importStar(AlertDialogPrimitive);
    var AlertDialog = AlertDialogPrimitive.Root;
    exports.AlertDialog = AlertDialog;
    var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
    exports.AlertDialogTrigger = AlertDialogTrigger;
    var AlertDialogPortal = AlertDialogPrimitive.Portal;
    exports.AlertDialogPortal = AlertDialogPortal;
    var AlertDialogOverlay = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Overlay, __assign({ className: (0, utils_1.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props, { ref: ref })));
    });
    exports.AlertDialogOverlay = AlertDialogOverlay;
    AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
    var AlertDialogContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)(AlertDialogPortal, { children: [(0, jsx_runtime_1.jsx)(AlertDialogOverlay, {}), (0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className) }, props))] }));
    });
    exports.AlertDialogContent = AlertDialogContent;
    AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
    var AlertDialogHeader = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
    };
    exports.AlertDialogHeader = AlertDialogHeader;
    AlertDialogHeader.displayName = "AlertDialogHeader";
    var AlertDialogFooter = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
    };
    exports.AlertDialogFooter = AlertDialogFooter;
    AlertDialogFooter.displayName = "AlertDialogFooter";
    var AlertDialogTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Title, __assign({ ref: ref, className: (0, utils_1.cn)("text-lg font-semibold", className) }, props)));
    });
    exports.AlertDialogTitle = AlertDialogTitle;
    AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
    var AlertDialogDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Description, __assign({ ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className) }, props)));
    });
    exports.AlertDialogDescription = AlertDialogDescription;
    AlertDialogDescription.displayName =
        AlertDialogPrimitive.Description.displayName;
    var AlertDialogAction = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Action, __assign({ ref: ref, className: (0, utils_1.cn)((0, button_1.buttonVariants)(), className) }, props)));
    });
    exports.AlertDialogAction = AlertDialogAction;
    AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
    var AlertDialogCancel = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AlertDialogPrimitive.Cancel, __assign({ ref: ref, className: (0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "outline" }), "mt-2 sm:mt-0", className) }, props)));
    });
    exports.AlertDialogCancel = AlertDialogCancel;
    AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHdDQUF3QztJQUN4QyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQXlINUMsa0NBQVc7SUF2SGIsSUFBTSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUEwSHRELGdEQUFrQjtJQXhIcEIsSUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7SUFzSHBELDhDQUFpQjtJQXBIbkIsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd6QyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsb0JBQW9CLENBQUMsT0FBTyxhQUMzQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsd0pBQXdKLEVBQ3hKLFNBQVMsQ0FDVixJQUNHLEtBQUssSUFDVCxHQUFHLEVBQUUsR0FBRyxJQUNSLENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXlHRCxnREFBa0I7SUF4R3BCLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBRTFFLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHekMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHdCQUFDLGlCQUFpQixlQUNoQix1QkFBQyxrQkFB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QUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLG9CQUFvQixDQUFDLE1BQU0sYUFDMUIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsSUFBQSx1QkFBYyxFQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQ3RDLGNBQWMsRUFDZCxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBY0QsOENBQWlCO0lBYm5CLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9hbGVydC1kaWFsb2dcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBBbGVydERpYWxvZ1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBidXR0b25WYXJpYW50cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nID0gQWxlcnREaWFsb2dQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgQWxlcnREaWFsb2dUcmlnZ2VyID0gQWxlcnREaWFsb2dQcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgQWxlcnREaWFsb2dQb3J0YWwgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5Qb3J0YWw7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nT3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrLzgwIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gICAgcmVmPXtyZWZ9XG4gIC8+XG4pKTtcbkFsZXJ0RGlhbG9nT3ZlcmxheS5kaXNwbGF5TmFtZSA9IEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXkuZGlzcGxheU5hbWU7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxBbGVydERpYWxvZ1BvcnRhbD5cbiAgICA8QWxlcnREaWFsb2dPdmVybGF5IC8+XG4gICAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmaXhlZCBsZWZ0LVs1MCVdIHRvcC1bNTAlXSB6LTUwIGdyaWQgdy1mdWxsIG1heC13LWxnIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gZ2FwLTQgYm9yZGVyIGJnLWJhY2tncm91bmQgcC02IHNoYWRvdy1sZyBkdXJhdGlvbi0yMDAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLWxlZnQtMS8yIGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLXRvcC1bNDglXSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLWxlZnQtMS8yIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wLVs0OCVdIHNtOnJvdW5kZWQtbGdcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0FsZXJ0RGlhbG9nUG9ydGFsPlxuKSk7XG5BbGVydERpYWxvZ0NvbnRlbnQuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBBbGVydERpYWxvZ0hlYWRlciA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PikgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuQWxlcnREaWFsb2dIZWFkZXIuZGlzcGxheU5hbWUgPSBcIkFsZXJ0RGlhbG9nSGVhZGVyXCI7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nRm9vdGVyID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cgc206anVzdGlmeS1lbmQgc206c3BhY2UteC0yXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuQWxlcnREaWFsb2dGb290ZXIuZGlzcGxheU5hbWUgPSBcIkFsZXJ0RGlhbG9nRm9vdGVyXCI7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nVGl0bGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuVGl0bGU+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5UaXRsZVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkFsZXJ0RGlhbG9nVGl0bGUuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UaXRsZS5kaXNwbGF5TmFtZTtcblxuY29uc3QgQWxlcnREaWFsb2dEZXNjcmlwdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BbGVydERpYWxvZ0Rlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID1cbiAgQWxlcnREaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb24uZGlzcGxheU5hbWU7XG5cbmNvbnN0IEFsZXJ0RGlhbG9nQWN0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuQWN0aW9uPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5BY3Rpb24+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5BY3Rpb25cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKCksIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BbGVydERpYWxvZ0FjdGlvbi5kaXNwbGF5TmFtZSA9IEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkFjdGlvbi5kaXNwbGF5TmFtZTtcblxuY29uc3QgQWxlcnREaWFsb2dDYW5jZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWw+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNhbmNlbD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNhbmNlbFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBidXR0b25WYXJpYW50cyh7IHZhcmlhbnQ6IFwib3V0bGluZVwiIH0pLFxuICAgICAgXCJtdC0yIHNtOm10LTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQWxlcnREaWFsb2dDYW5jZWwuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWwuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7XG4gIEFsZXJ0RGlhbG9nLFxuICBBbGVydERpYWxvZ1BvcnRhbCxcbiAgQWxlcnREaWFsb2dPdmVybGF5LFxuICBBbGVydERpYWxvZ1RyaWdnZXIsXG4gIEFsZXJ0RGlhbG9nQ29udGVudCxcbiAgQWxlcnREaWFsb2dIZWFkZXIsXG4gIEFsZXJ0RGlhbG9nRm9vdGVyLFxuICBBbGVydERpYWxvZ1RpdGxlLFxuICBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uLFxuICBBbGVydERpYWxvZ0FjdGlvbixcbiAgQWxlcnREaWFsb2dDYW5jZWwsXG59O1xuIl19