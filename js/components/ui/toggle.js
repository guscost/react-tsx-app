define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-toggle", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, TogglePrimitive, class_variance_authority_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = exports.Toggle = void 0;
    const toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
    const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, { ref: ref, className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props })));
    exports.Toggle = Toggle;
    Toggle.displayName = TogglePrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBUWIsTUFBTSxjQUFjLEdBQUcsSUFBQSw4QkFBRyxFQUN4QixpWUFBaVksRUFDalk7UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsT0FBTyxFQUNMLDJGQUEyRjthQUM5RjtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixFQUFFLEVBQUUsb0JBQW9CO2dCQUN4QixFQUFFLEVBQUUsc0JBQXNCO2FBQzNCO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGLENBQ0YsQ0FBQztJQWdCZSx3Q0FBYztJQWQvQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUk3QixDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2pELHVCQUFDLGVBQWUsQ0FBQyxJQUFJLElBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUM7SUFJTSx3QkFBTTtJQUZmLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb2dnbGVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0xIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNpemUtNCBbJl9zdmddOnNocmluay0wXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtMiBtaW4tdy05XCIsXG4gICAgICAgIHNtOiBcImgtOCBweC0xLjUgbWluLXctOFwiLFxuICAgICAgICBsZzogXCJoLTEwIHB4LTIuNSBtaW4tdy0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuY29uc3QgVG9nZ2xlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgVG9nZ2xlUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRvZ2dsZVByaW1pdGl2ZS5Sb290PiAmXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiB0b2dnbGVWYXJpYW50cz5cbj4oKHsgY2xhc3NOYW1lLCB2YXJpYW50LCBzaXplLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRvZ2dsZVByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cblRvZ2dsZS5kaXNwbGF5TmFtZSA9IFRvZ2dsZVByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBUb2dnbGUsIHRvZ2dsZVZhcmlhbnRzIH07XG4iXX0=