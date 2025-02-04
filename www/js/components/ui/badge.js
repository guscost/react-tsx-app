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
define(["require", "exports", "react/jsx-runtime", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.badgeVariants = void 0;
    exports.Badge = Badge;
    var badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    exports.badgeVariants = badgeVariants;
    function Badge(_a) {
        var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, utils_1.cn)(badgeVariants({ variant: variant }), className) }, props)));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQ1Msc0JBQUs7SUE5QmQsSUFBTSxhQUFhLEdBQUcsSUFBQSw4QkFBRyxFQUN2QixzS0FBc0ssRUFDdEs7UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUNMLGtGQUFrRjtnQkFDcEYsU0FBUyxFQUNQLGlGQUFpRjtnQkFDbkYsV0FBVyxFQUNULDhGQUE4RjtnQkFDaEcsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7U0FDbkI7S0FDRixDQUNGLENBQUM7SUFZYyxzQ0FBYTtJQU43QixTQUFTLEtBQUssQ0FBQyxFQUE0QztRQUExQyxJQUFBLFNBQVMsZUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFLLEtBQUssY0FBOUIsd0JBQWdDLENBQUY7UUFDM0MsT0FBTyxDQUNMLHlDQUFLLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxhQUFhLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3pFLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBweC0yLjUgcHktMC41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmluZyBmb2N1czpyaW5nLW9mZnNldC0yXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93IGhvdmVyOmJnLXByaW1hcnkvODBcIixcbiAgICAgICAgc2Vjb25kYXJ5OlxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS84MFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1kZXN0cnVjdGl2ZSB0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgc2hhZG93IGhvdmVyOmJnLWRlc3RydWN0aXZlLzgwXCIsXG4gICAgICAgIG91dGxpbmU6IFwidGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByb3BzXG4gIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LFxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgYmFkZ2VWYXJpYW50cz4ge31cblxuZnVuY3Rpb24gQmFkZ2UoeyBjbGFzc05hbWUsIHZhcmlhbnQsIC4uLnByb3BzIH06IEJhZGdlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oYmFkZ2VWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfTtcbiJdfQ==