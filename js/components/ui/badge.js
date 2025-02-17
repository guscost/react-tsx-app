define(["require", "exports", "react/jsx-runtime", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.badgeVariants = void 0;
    exports.Badge = Badge;
    const badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    function Badge({ className, variant, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(badgeVariants({ variant }), className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQW1DUyxzQkFBSztJQTlCZCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFHLEVBQ3ZCLHNLQUFzSyxFQUN0SztRQUNFLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQ0wsa0ZBQWtGO2dCQUNwRixTQUFTLEVBQ1AsaUZBQWlGO2dCQUNuRixXQUFXLEVBQ1QsOEZBQThGO2dCQUNoRyxPQUFPLEVBQUUsaUJBQWlCO2FBQzNCO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztTQUNuQjtLQUNGLENBQ0YsQ0FBQztJQVljLHNDQUFhO0lBTjdCLFNBQVMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBYztRQUN6RCxPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQU0sS0FBSyxHQUFJLENBQ3pFLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBweC0yLjUgcHktMC41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmluZyBmb2N1czpyaW5nLW9mZnNldC0yXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93IGhvdmVyOmJnLXByaW1hcnkvODBcIixcbiAgICAgICAgc2Vjb25kYXJ5OlxuICAgICAgICAgIFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS84MFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1kZXN0cnVjdGl2ZSB0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgc2hhZG93IGhvdmVyOmJnLWRlc3RydWN0aXZlLzgwXCIsXG4gICAgICAgIG91dGxpbmU6IFwidGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByb3BzXG4gIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LFxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgYmFkZ2VWYXJpYW50cz4ge31cblxuZnVuY3Rpb24gQmFkZ2UoeyBjbGFzc05hbWUsIHZhcmlhbnQsIC4uLnByb3BzIH06IEJhZGdlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oYmFkZ2VWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfTtcbiJdfQ==