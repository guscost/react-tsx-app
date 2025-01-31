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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9zaGVldC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxpQ0FBaUM7SUFDakMsWUFBWSxDQUFDOzs7Ozs7SUFTYixJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBd0hoQyxzQkFBSztJQXRIUCxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBeUgxQyxvQ0FBWTtJQXZIZCxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBd0h0QyxnQ0FBVTtJQXRIWixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBbUh4QyxrQ0FBVztJQWpIYixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUduQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsY0FBYyxDQUFDLE9BQU8sYUFDckIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHlKQUF5SixFQUN6SixTQUFTLENBQ1YsSUFDRyxLQUFLLElBQ1QsR0FBRyxFQUFFLEdBQUcsSUFDUixDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFzR0Qsb0NBQVk7SUFyR2QsWUFBWSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUU5RCxJQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFHLEVBQ3ZCLGtNQUFrTSxFQUNsTTtRQUNFLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsbUdBQW1HO2dCQUN4RyxNQUFNLEVBQ0osNEdBQTRHO2dCQUM5RyxJQUFJLEVB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