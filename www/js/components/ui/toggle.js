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
define("ui/toggle", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-toggle", "class-variance-authority", "lib/utils"], function (require, exports, jsx_runtime_1, React, TogglePrimitive, class_variance_authority_1, utils_1) {
    /// <amd-module name="ui/toggle"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = exports.Toggle = void 0;
    React = __importStar(React);
    TogglePrimitive = __importStar(TogglePrimitive);
    var toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-2 min-w-9",
                sm: "h-8 px-1.5 min-w-8",
                lg: "h-10 px-2.5 min-w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.toggleVariants = toggleVariants;
    var Toggle = React.forwardRef(function (_a, ref) {
        var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
        return ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)(toggleVariants({ variant: variant, size: size, className: className })) }, props)));
    });
    exports.Toggle = Toggle;
    Toggle.displayName = TogglePrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLGtDQUFrQztJQUNsQyxZQUFZLENBQUM7Ozs7OztJQVFiLElBQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsaVlBQWlZLEVBQ2pZO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFDTCwyRkFBMkY7YUFDOUY7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsRUFBRSxFQUFFLG9CQUFvQjtnQkFDeEIsRUFBRSxFQUFFLHNCQUFzQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFnQmUsd0NBQWM7SUFkL0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FJN0IsVUFBQyxFQUFzQyxFQUFFLEdBQUc7UUFBekMsSUFBQSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsRUFBSyxLQUFLLGNBQXBDLGdDQUFzQyxDQUFGO1FBQVksT0FBQSxDQUNqRCx1QkFBQyxlQUFlLENBQUMsSUFBSSxhQUNuQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxjQUFjLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUMsSUFDdkQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUlNLHdCQUFNO0lBRmYsTUFBTSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvdG9nZ2xlXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVG9nZ2xlUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlXCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0xIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNpemUtNCBbJl9zdmddOnNocmluay0wXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtMiBtaW4tdy05XCIsXG4gICAgICAgIHNtOiBcImgtOCBweC0xLjUgbWluLXctOFwiLFxuICAgICAgICBsZzogXCJoLTEwIHB4LTIuNSBtaW4tdy0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuY29uc3QgVG9nZ2xlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgVG9nZ2xlUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRvZ2dsZVByaW1pdGl2ZS5Sb290PiAmXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiB0b2dnbGVWYXJpYW50cz5cbj4oKHsgY2xhc3NOYW1lLCB2YXJpYW50LCBzaXplLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRvZ2dsZVByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cblRvZ2dsZS5kaXNwbGF5TmFtZSA9IFRvZ2dsZVByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBUb2dnbGUsIHRvZ2dsZVZhcmlhbnRzIH07XG4iXX0=