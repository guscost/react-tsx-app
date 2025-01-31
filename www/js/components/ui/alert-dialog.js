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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-alert-dialog", "utils", "button"], function (require, exports, jsx_runtime_1, React, AlertDialogPrimitive, utils_1, button_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBUWIsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBeUg1QyxrQ0FBVztJQXZIYixJQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQTBIdEQsZ0RBQWtCO0lBeEhwQixJQUFNLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztJQXNIcEQsOENBQWlCO0lBcEhuQixJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3pDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxvQkFBb0IsQ0FBQyxPQUFPLGFBQzNCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx3SkFBd0osRUFDeEosU0FBUyxDQUNWLElBQ0csS0FBSyxJQUNULEdBQUcsRUFBRSxHQUFHLElBQ1IsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBeUdELGdEQUFrQjtJQXhHcEIsa0JBQWtCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFMUUsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd6QyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsd0JBQUMsaUJBQWlCLGVBQ2hCLHVCQUFDLGtCQUFrQixLQUFHLEVBQ3RC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