define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-tooltip", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, TooltipPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TooltipProvider = exports.TooltipContent = exports.TooltipTrigger = exports.Tooltip = void 0;
    const TooltipProvider = TooltipPrimitive.Provider;
    exports.TooltipProvider = TooltipProvider;
    const Tooltip = TooltipPrimitive.Root;
    exports.Tooltip = Tooltip;
    const TooltipTrigger = TooltipPrimitive.Trigger;
    exports.TooltipTrigger = TooltipTrigger;
    const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(TooltipPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
    exports.TooltipContent = TooltipContent;
    TooltipContent.displayName = TooltipPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7Ozs7SUFPYixNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUF3QkEsMENBQWU7SUF0QmpFLE1BQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQXNCN0IsMEJBQU87SUFwQmhCLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQW9COUIsd0NBQWM7SUFsQmhDLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3JDLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDbEQsdUJBQUMsZ0JBQWdCLENBQUMsTUFBTSxjQUN0Qix1QkFBQyxnQkFBZ0IsQ0FBQyxPQUFPLElBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsVUFBVSxFQUFFLFVBQVUsRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLG1YQUFtWCxFQUNuWCxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsR0FDc0IsQ0FDM0IsQ0FBQyxDQUFDO0lBRytCLHdDQUFjO0lBRmhELGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRvb2x0aXBQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b29sdGlwXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFRvb2x0aXBQcm92aWRlciA9IFRvb2x0aXBQcmltaXRpdmUuUHJvdmlkZXI7XG5cbmNvbnN0IFRvb2x0aXAgPSBUb29sdGlwUHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IFRvb2x0aXBUcmlnZ2VyID0gVG9vbHRpcFByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBUb29sdGlwQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFRvb2x0aXBQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIHNpZGVPZmZzZXQgPSA0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRvb2x0aXBQcmltaXRpdmUuUG9ydGFsPlxuICAgIDxUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiei01MCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiZy1wcmltYXJ5IHB4LTMgcHktMS41IHRleHQteHMgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgYW5pbWF0ZS1pbiBmYWRlLWluLTAgem9vbS1pbi05NSBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9Ub29sdGlwUHJpbWl0aXZlLlBvcnRhbD5cbikpO1xuVG9vbHRpcENvbnRlbnQuZGlzcGxheU5hbWUgPSBUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBUcmlnZ2VyLCBUb29sdGlwQ29udGVudCwgVG9vbHRpcFByb3ZpZGVyIH07XG4iXX0=