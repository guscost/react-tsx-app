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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-toast", "class-variance-authority", "lucide-react", "utils"], function (require, exports, jsx_runtime_1, React, ToastPrimitives, class_variance_authority_1, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToastAction = exports.ToastClose = exports.ToastDescription = exports.ToastTitle = exports.Toast = exports.ToastViewport = exports.ToastProvider = void 0;
    React = __importStar(React);
    ToastPrimitives = __importStar(ToastPrimitives);
    var ToastProvider = ToastPrimitives.Provider;
    exports.ToastProvider = ToastProvider;
    var ToastViewport = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Viewport, __assign({ ref: ref, className: (0, utils_1.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className) }, props)));
    });
    exports.ToastViewport = ToastViewport;
    ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
    var toastVariants = (0, class_variance_authority_1.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    var Toast = React.forwardRef(function (_a, ref) {
        var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Root, __assign({ ref: ref, className: (0, utils_1.cn)(toastVariants({ variant: variant }), className) }, props)));
    });
    exports.Toast = Toast;
    Toast.displayName = ToastPrimitives.Root.displayName;
    var ToastAction = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Action, __assign({ ref: ref, className: (0, utils_1.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className) }, props)));
    });
    exports.ToastAction = ToastAction;
    ToastAction.displayName = ToastPrimitives.Action.displayName;
    var ToastClose = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Close, __assign({ ref: ref, className: (0, utils_1.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "" }, props, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-4 w-4" }) })));
    });
    exports.ToastClose = ToastClose;
    ToastClose.displayName = ToastPrimitives.Close.displayName;
    var ToastTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Title, __assign({ ref: ref, className: (0, utils_1.cn)("text-sm font-semibold [&+div]:text-xs", className) }, props)));
    });
    exports.ToastTitle = ToastTitle;
    ToastTitle.displayName = ToastPrimitives.Title.displayName;
    var ToastDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ToastPrimitives.Description, __assign({ ref: ref, className: (0, utils_1.cn)("text-sm opacity-90", className) }, props)));
    });
    exports.ToastDescription = ToastDescription;
    ToastDescription.displayName = ToastPrimitives.Description.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS90b2FzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7Ozs7OztJQVNiLElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFnSDdDLHNDQUFhO0lBOUdmLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3BDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxlQUFlLENBQUMsUUFBUSxhQUN2QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtSUFBbUksRUFDbkksU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQW1HRCxzQ0FBYTtJQWxHZixhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBRWpFLElBQU0sYUFBYSxHQUFHLElBQUEsOEJBQUcsRUFDdkIsMmxCQUEybEIsRUFDM2xCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLFdBQVcsRUFDVCxpRkFBaUY7YUFDcEY7U0FDRjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxTQUFTO1NBQ25CO0tBQ0YsQ0FDRixDQUFDO0lBRUYsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FJNUIsVUFBQyxFQUFnQyxFQUFFLEdBQUc7UUFBbkMsSUFBQSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBSyxLQUFLLGNBQTlCLHdCQUFn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