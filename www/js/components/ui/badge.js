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
define(["require", "exports", "react/jsx-runtime", "class-variance-authority", "src/lib/utils"], function (require, exports, jsx_runtime_1, class_variance_authority_1, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQ1Msc0JBQUs7SUE5QmQsSUFBTSxhQUFhLEdBQUcsSUFBQSw4QkFBRyxFQUN2QixzS0FBc0ssRUFDdEs7UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUNMLGtGQUFrRjtnQkFDcEYsU0FBUyxFQUNQLGlGQUFpRjtnQkFDbkYsV0FBVyxFQUNULDhGQUE4RjtnQkFDaEcsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7U0FDbkI7S0FDRixDQUNGLENBQUM7SUFZYyxzQ0FBYTtJQU43QixTQUFTLEtBQUssQ0FBQyxFQUE0QztRQUExQyxJQUFBLFNBQVMsZUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFLLEtBQUssY0FBOUIsd0JBQWdDLENBQUY7UUFDM0MsT0FBTyxDQUNMLHlDQUFLLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxhQUFhLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3pFLENBQUM7SUFDSixDQUFDIn0=