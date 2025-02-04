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
define(["require", "exports", "react/jsx-runtime", "react", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlertDescription = exports.AlertTitle = exports.Alert = void 0;
    React = __importStar(React);
    var alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
        variants: {
            variant: {
                default: "bg-background text-foreground",
                destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    var Alert = React.forwardRef(function (_a, ref) {
        var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, role: "alert", className: (0, utils_1.cn)(alertVariants({ variant: variant }), className) }, props)));
    });
    exports.Alert = Alert;
    Alert.displayName = "Alert";
    var AlertTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("h5", __assign({ ref: ref, className: (0, utils_1.cn)("mb-1 font-medium leading-none tracking-tight", className) }, props)));
    });
    exports.AlertTitle = AlertTitle;
    AlertTitle.displayName = "AlertTitle";
    var AlertDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("text-sm [&_p]:leading-relaxed", className) }, props)));
    });
    exports.AlertDescription = AlertDescription;
    AlertDescription.displayName = "AlertDescription";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9hbGVydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTSxhQUFhLEdBQUcsSUFBQSw4QkFBRyxFQUN2Qix5S0FBeUssRUFDeks7UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsV0FBVyxFQUNULHlGQUF5RjthQUM1RjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7U0FDbkI7S0FDRixDQUNGLENBQUM7SUFFRixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUc1QixVQUFDLEVBQWdDLEVBQUUsR0FBRztRQUFuQyxJQUFBLFNBQVMsZUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFLLEtBQUssY0FBOUIsd0JBQWdDLENBQUY7UUFBWSxPQUFBLENBQzNDLHlDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFDLE9BQU8sRUFDWixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUNoRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBMkJNLHNCQUFLO0lBMUJkLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBRTVCLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx3Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyw4Q0FBOEMsRUFBRSxTQUFTLENBQUMsSUFDcEUsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWVhLGdDQUFVO0lBZDFCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBRXRDLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHdkMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHlDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxJQUNyRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBR3lCLDRDQUFnQjtJQUY1QyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IGFsZXJ0VmFyaWFudHMgPSBjdmEoXG4gIFwicmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIHB4LTQgcHktMyB0ZXh0LXNtIFsmPnN2ZytkaXZdOnRyYW5zbGF0ZS15LVstM3B4XSBbJj5zdmddOmFic29sdXRlIFsmPnN2Z106bGVmdC00IFsmPnN2Z106dG9wLTQgWyY+c3ZnXTp0ZXh0LWZvcmVncm91bmQgWyY+c3ZnfipdOnBsLTdcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmRcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJib3JkZXItZGVzdHJ1Y3RpdmUvNTAgdGV4dC1kZXN0cnVjdGl2ZSBkYXJrOmJvcmRlci1kZXN0cnVjdGl2ZSBbJj5zdmddOnRleHQtZGVzdHJ1Y3RpdmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5jb25zdCBBbGVydCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4gJiBWYXJpYW50UHJvcHM8dHlwZW9mIGFsZXJ0VmFyaWFudHM+XG4+KCh7IGNsYXNzTmFtZSwgdmFyaWFudCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXZcbiAgICByZWY9e3JlZn1cbiAgICByb2xlPVwiYWxlcnRcIlxuICAgIGNsYXNzTmFtZT17Y24oYWxlcnRWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BbGVydC5kaXNwbGF5TmFtZSA9IFwiQWxlcnRcIjtcblxuY29uc3QgQWxlcnRUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxQYXJhZ3JhcGhFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZGluZ0VsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxoNVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJtYi0xIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSB0cmFja2luZy10aWdodFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQWxlcnRUaXRsZS5kaXNwbGF5TmFtZSA9IFwiQWxlcnRUaXRsZVwiO1xuXG5jb25zdCBBbGVydERlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFBhcmFncmFwaEVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gWyZfcF06bGVhZGluZy1yZWxheGVkXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BbGVydERlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID0gXCJBbGVydERlc2NyaXB0aW9uXCI7XG5cbmV4cG9ydCB7IEFsZXJ0LCBBbGVydFRpdGxlLCBBbGVydERlc2NyaXB0aW9uIH07XG4iXX0=