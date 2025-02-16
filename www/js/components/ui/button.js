define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-slot", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, react_slot_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonVariants = void 0;
    exports.Button = Button;
    const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.buttonVariants = buttonVariants;
    function Button({ className, variant, size, asChild = false, ...props }) {
        const Comp = asChild ? react_slot_1.Slot : "button";
        return ((0, jsx_runtime_1.jsx)(Comp, { "data-slot": "button", className: (0, utils_1.cn)(buttonVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBeURTLHdCQUFNO0lBbkRmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsb1pBQW9aLEVBQ3BaO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFDTCxrRUFBa0U7Z0JBQ3BFLFdBQVcsRUFDVCw4RUFBOEU7Z0JBQ2hGLE9BQU8sRUFDTCwwRkFBMEY7Z0JBQzVGLFNBQVMsRUFDUCx3RUFBd0U7Z0JBQzFFLEtBQUssRUFBRSw4Q0FBOEM7Z0JBQ3JELElBQUksRUFBRSxpREFBaUQ7YUFDeEQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsRUFBRSxFQUFFLHVDQUF1QztnQkFDM0MsRUFBRSxFQUFFLHNDQUFzQztnQkFDMUMsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUF1QmUsd0NBQWM7SUFyQi9CLFNBQVMsTUFBTSxDQUFDLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxHQUFHLEtBQUssRUFDZixHQUFHLEtBQUssRUFJUDtRQUNELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXZDLE9BQU8sQ0FDTCx1QkFBQyxJQUFJLGlCQUNPLFFBQVEsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCBbJl9zdmddOnNocmluay0wIHJpbmctcmluZy8xMCBkYXJrOnJpbmctcmluZy8yMCBkYXJrOm91dGxpbmUtcmluZy80MCBvdXRsaW5lLXJpbmcvNTAgZm9jdXMtdmlzaWJsZTpyaW5nLTQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTEgYXJpYS1pbnZhbGlkOmZvY3VzLXZpc2libGU6cmluZy0wXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctc20gaG92ZXI6YmctcHJpbWFyeS85MFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTpcbiAgICAgICAgICBcImJnLWRlc3RydWN0aXZlIHRleHQtZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTBcIixcbiAgICAgICAgb3V0bGluZTpcbiAgICAgICAgICBcImJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgICAgc2Vjb25kYXJ5OlxuICAgICAgICAgIFwiYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLXNlY29uZGFyeS84MFwiLFxuICAgICAgICBnaG9zdDogXCJob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIHB4LTMgaGFzLVs+c3ZnXTpweC0yLjVcIixcbiAgICAgICAgbGc6IFwiaC0xMCByb3VuZGVkLW1kIHB4LTYgaGFzLVs+c3ZnXTpweC00XCIsXG4gICAgICAgIGljb246IFwic2l6ZS05XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBCdXR0b24oe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQsXG4gIHNpemUsXG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICZcbiAgVmFyaWFudFByb3BzPHR5cGVvZiBidXR0b25WYXJpYW50cz4gJiB7XG4gICAgYXNDaGlsZD86IGJvb2xlYW47XG4gIH0pIHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIjtcblxuICByZXR1cm4gKFxuICAgIDxDb21wXG4gICAgICBkYXRhLXNsb3Q9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtjbihidXR0b25WYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9O1xuIl19