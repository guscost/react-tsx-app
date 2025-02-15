define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-toggle", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, TogglePrimitive, class_variance_authority_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = void 0;
    exports.Toggle = Toggle;
    const toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow]", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
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
    function Toggle({ className, variant, size, ...props }) {
        return ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, { "data-slot": "toggle", className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBOENKLHdCQUFNO0lBdENmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsZ2dCQUFnZ0IsRUFDaGdCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFDTCwyRkFBMkY7YUFDOUY7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsRUFBRSxFQUFFLG9CQUFvQjtnQkFDeEIsRUFBRSxFQUFFLHNCQUFzQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFrQmUsd0NBQWM7SUFoQi9CLFNBQVMsTUFBTSxDQUFDLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osR0FBRyxLQUFLLEVBRTJCO1FBQ25DLE9BQU8sQ0FDTCx1QkFBQyxlQUFlLENBQUMsSUFBSSxpQkFDVCxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FDdkQsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb2dnbGVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgWyZfc3ZnXTpzaHJpbmstMCByaW5nLXJpbmcvMTAgZGFyazpyaW5nLXJpbmcvMjAgZGFyazpvdXRsaW5lLXJpbmcvNDAgb3V0bGluZS1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy00IGZvY3VzLXZpc2libGU6b3V0bGluZS0xIGFyaWEtaW52YWxpZDpmb2N1cy12aXNpYmxlOnJpbmctMCB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XVwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICBvdXRsaW5lOlxuICAgICAgICAgIFwiYm9yZGVyIGJvcmRlci1pbnB1dCBiZy10cmFuc3BhcmVudCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiaC05IHB4LTIgbWluLXctOVwiLFxuICAgICAgICBzbTogXCJoLTggcHgtMS41IG1pbi13LThcIixcbiAgICAgICAgbGc6IFwiaC0xMCBweC0yLjUgbWluLXctMTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIFRvZ2dsZSh7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBUb2dnbGVQcmltaXRpdmUuUm9vdD4gJlxuICBWYXJpYW50UHJvcHM8dHlwZW9mIHRvZ2dsZVZhcmlhbnRzPikge1xuICByZXR1cm4gKFxuICAgIDxUb2dnbGVQcmltaXRpdmUuUm9vdFxuICAgICAgZGF0YS1zbG90PVwidG9nZ2xlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24odG9nZ2xlVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFRvZ2dsZSwgdG9nZ2xlVmFyaWFudHMgfTtcbiJdfQ==