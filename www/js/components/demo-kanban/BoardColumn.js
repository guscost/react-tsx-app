define(["require", "exports", "react/jsx-runtime", "@dnd-kit/sortable", "@dnd-kit/core", "@dnd-kit/utilities", "react", "./TaskCard", "class-variance-authority", "@/components/ui/card", "@/components/ui/button", "lucide-react", "@/components/ui/scroll-area"], function (require, exports, jsx_runtime_1, sortable_1, core_1, utilities_1, react_1, TaskCard_1, class_variance_authority_1, card_1, button_1, lucide_react_1, scroll_area_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BoardColumn = BoardColumn;
    exports.BoardContainer = BoardContainer;
    function BoardColumn({ column, tasks, isOverlay }) {
        const tasksIds = (0, react_1.useMemo)(() => {
            return tasks.map((task) => task.id);
        }, [tasks]);
        const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = (0, sortable_1.useSortable)({
            id: column.id,
            data: {
                type: "Column",
                column,
            },
            attributes: {
                roleDescription: `Column: ${column.title}`,
            },
        });
        const style = {
            transition,
            transform: utilities_1.CSS.Translate.toString(transform),
        };
        const variants = (0, class_variance_authority_1.cva)("h-[500px] max-h-[500px] w-[350px] max-w-full bg-primary-foreground flex flex-col flex-shrink-0 snap-center", {
            variants: {
                dragging: {
                    default: "border-2 border-transparent",
                    over: "ring-2 opacity-30",
                    overlay: "ring-2 ring-primary",
                },
            },
        });
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { ref: setNodeRef, style: style, className: variants({
                dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
            }), children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { className: "p-4 font-semibold border-b-2 text-left flex flex-row space-between items-center", children: [(0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", ...attributes, ...listeners, className: " p-1 text-primary/50 -ml-2 h-auto cursor-grab relative", children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: `Move column: ${column.title}` }), (0, jsx_runtime_1.jsx)(lucide_react_1.GripVertical, {})] }), (0, jsx_runtime_1.jsxs)("span", { className: "ml-auto", children: [" ", column.title] })] }), (0, jsx_runtime_1.jsx)(scroll_area_1.ScrollArea, { className: "overflow-hidden", children: (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "flex flex-grow flex-col gap-2 p-2", children: (0, jsx_runtime_1.jsx)(sortable_1.SortableContext, { items: tasksIds, children: tasks.map((task) => ((0, jsx_runtime_1.jsx)(TaskCard_1.TaskCard, { task: task }, task.id))) }) }) })] }));
    }
    function BoardContainer({ children }) {
        const dndContext = (0, core_1.useDndContext)();
        const variations = (0, class_variance_authority_1.cva)("px-2 md:px-0 flex lg:justify-center pb-4", {
            variants: {
                dragging: {
                    default: "snap-x snap-mandatory",
                    active: "snap-none",
                },
            },
        });
        return ((0, jsx_runtime_1.jsxs)(scroll_area_1.ScrollArea, { className: variations({
                dragging: dndContext.active ? "active" : "default",
            }), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex gap-4 items-center flex-row", children: children }), (0, jsx_runtime_1.jsx)(scroll_area_1.ScrollBar, { orientation: "horizontal" })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9hcmRDb2x1bW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWthbmJhbi9Cb2FyZENvbHVtbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBNkJBLGtDQXdFQztJQUVELHdDQXNCQztJQWhHRCxTQUFnQixXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBb0I7UUFDeEUsTUFBTSxRQUFRLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFWixNQUFNLEVBQ0osVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEdBQ1gsR0FBRyxJQUFBLHNCQUFXLEVBQUM7WUFDZCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsTUFBTTthQUNrQjtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsZUFBZSxFQUFFLFdBQVcsTUFBTSxDQUFDLEtBQUssRUFBRTthQUMzQztTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sS0FBSyxHQUFHO1lBQ1osVUFBVTtZQUNWLFNBQVMsRUFBRSxlQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDN0MsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQUcsRUFDbEIsNEdBQTRHLEVBQzVHO1lBQ0UsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRTtvQkFDUixPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixPQUFPLEVBQUUscUJBQXFCO2lCQUMvQjthQUNGO1NBQ0YsQ0FDRixDQUFDO1FBRUYsT0FBTyxDQUNMLHdCQUFDLFdBQUksSUFDSCxHQUFHLEVBQUUsVUFBVSxFQUNmLEtBQUssRUFBRSxLQUFLLEVBQ1osU0FBUyxFQUFFLFFBQVEsQ0FBQztnQkFDbEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUzthQUNsRSxDQUFDLGFBRUYsd0JBQUMsaUJBQVUsSUFBQyxTQUFTLEVBQUMsaUZBQWlGLGFBQ3JHLHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUUsT0FBTyxLQUNaLFVBQVUsS0FDVixTQUFTLEVBQ2IsU0FBUyxFQUFDLHdEQUF3RCxhQUVsRSxpQ0FBTSxTQUFTLEVBQUMsU0FBUyxZQUFFLGdCQUFnQixNQUFNLENBQUMsS0FBSyxFQUFFLEdBQVEsRUFDakUsdUJBQUMsMkJBQVksS0FBRyxJQUNULEVBQ1Qsa0NBQU0sU0FBUyxFQUFDLFNBQVMsa0JBQUcsTUFBTSxDQUFDLEtBQUssSUFBUSxJQUNyQyxFQUNiLHVCQUFDLHdCQUFVLElBQUMsU0FBUyxFQUFDLGlCQUFpQixZQUNyQyx1QkFBQyxrQkFBVyxJQUFDLFNBQVMsRUFBQyxtQ0FBbUMsWUFDeEQsdUJBQUMsMEJBQWUsSUFBQyxLQUFLLEVBQUUsUUFBUSxZQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUNuQix1QkFBQyxtQkFBUSxJQUFlLElBQUksRUFBRSxJQUFJLElBQW5CLElBQUksQ0FBQyxFQUFFLENBQWdCLENBQ3ZDLENBQUMsR0FDYyxHQUNOLEdBQ0gsSUFDUixDQUNSLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBZ0IsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFpQztRQUN4RSxNQUFNLFVBQVUsR0FBRyxJQUFBLG9CQUFhLEdBQUUsQ0FBQztRQUVuQyxNQUFNLFVBQVUsR0FBRyxJQUFBLDhCQUFHLEVBQUMsMENBQTBDLEVBQUU7WUFDakUsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRTtvQkFDUixPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxNQUFNLEVBQUUsV0FBVztpQkFDcEI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FDTCx3QkFBQyx3QkFBVSxJQUNULFNBQVMsRUFBRSxVQUFVLENBQUM7Z0JBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7YUFDbkQsQ0FBQyxhQUVGLGdDQUFLLFNBQVMsRUFBQyxrQ0FBa0MsWUFBRSxRQUFRLEdBQU8sRUFDbEUsdUJBQUMsdUJBQVMsSUFBQyxXQUFXLEVBQUMsWUFBWSxHQUFHLElBQzNCLENBQ2QsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0YWJsZUNvbnRleHQsIHVzZVNvcnRhYmxlIH0gZnJvbSBcIkBkbmQta2l0L3NvcnRhYmxlXCI7XG5pbXBvcnQgeyB1c2VEbmRDb250ZXh0LCB0eXBlIFVuaXF1ZUlkZW50aWZpZXIgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSBcIkBkbmQta2l0L3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFzaywgVGFza0NhcmQgfSBmcm9tIFwiLi9UYXNrQ2FyZFwiO1xuaW1wb3J0IHsgY3ZhIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBHcmlwVmVydGljYWwgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBTY3JvbGxBcmVhLCBTY3JvbGxCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uIHtcbiAgaWQ6IFVuaXF1ZUlkZW50aWZpZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENvbHVtblR5cGUgPSBcIkNvbHVtblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbkRyYWdEYXRhIHtcbiAgdHlwZTogQ29sdW1uVHlwZTtcbiAgY29sdW1uOiBDb2x1bW47XG59XG5cbmludGVyZmFjZSBCb2FyZENvbHVtblByb3BzIHtcbiAgY29sdW1uOiBDb2x1bW47XG4gIHRhc2tzOiBUYXNrW107XG4gIGlzT3ZlcmxheT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb2FyZENvbHVtbih7IGNvbHVtbiwgdGFza3MsIGlzT3ZlcmxheSB9OiBCb2FyZENvbHVtblByb3BzKSB7XG4gIGNvbnN0IHRhc2tzSWRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5pZCk7XG4gIH0sIFt0YXNrc10pO1xuXG4gIGNvbnN0IHtcbiAgICBzZXROb2RlUmVmLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgbGlzdGVuZXJzLFxuICAgIHRyYW5zZm9ybSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGlzRHJhZ2dpbmcsXG4gIH0gPSB1c2VTb3J0YWJsZSh7XG4gICAgaWQ6IGNvbHVtbi5pZCxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBcIkNvbHVtblwiLFxuICAgICAgY29sdW1uLFxuICAgIH0gc2F0aXNmaWVzIENvbHVtbkRyYWdEYXRhLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHJvbGVEZXNjcmlwdGlvbjogYENvbHVtbjogJHtjb2x1bW4udGl0bGV9YCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cmFuc2l0aW9uLFxuICAgIHRyYW5zZm9ybTogQ1NTLlRyYW5zbGF0ZS50b1N0cmluZyh0cmFuc2Zvcm0pLFxuICB9O1xuXG4gIGNvbnN0IHZhcmlhbnRzID0gY3ZhKFxuICAgIFwiaC1bNTAwcHhdIG1heC1oLVs1MDBweF0gdy1bMzUwcHhdIG1heC13LWZ1bGwgYmctcHJpbWFyeS1mb3JlZ3JvdW5kIGZsZXggZmxleC1jb2wgZmxleC1zaHJpbmstMCBzbmFwLWNlbnRlclwiLFxuICAgIHtcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIGRyYWdnaW5nOiB7XG4gICAgICAgICAgZGVmYXVsdDogXCJib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBvdmVyOiBcInJpbmctMiBvcGFjaXR5LTMwXCIsXG4gICAgICAgICAgb3ZlcmxheTogXCJyaW5nLTIgcmluZy1wcmltYXJ5XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXt2YXJpYW50cyh7XG4gICAgICAgIGRyYWdnaW5nOiBpc092ZXJsYXkgPyBcIm92ZXJsYXlcIiA6IGlzRHJhZ2dpbmcgPyBcIm92ZXJcIiA6IHVuZGVmaW5lZCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInAtNCBmb250LXNlbWlib2xkIGJvcmRlci1iLTIgdGV4dC1sZWZ0IGZsZXggZmxleC1yb3cgc3BhY2UtYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cbiAgICAgICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBwLTEgdGV4dC1wcmltYXJ5LzUwIC1tbC0yIGgtYXV0byBjdXJzb3ItZ3JhYiByZWxhdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2BNb3ZlIGNvbHVtbjogJHtjb2x1bW4udGl0bGV9YH08L3NwYW4+XG4gICAgICAgICAgPEdyaXBWZXJ0aWNhbCAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0b1wiPiB7Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxTY3JvbGxBcmVhIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgZmxleC1jb2wgZ2FwLTIgcC0yXCI+XG4gICAgICAgICAgPFNvcnRhYmxlQ29udGV4dCBpdGVtcz17dGFza3NJZHN9PlxuICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgICA8VGFza0NhcmQga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L1Njcm9sbEFyZWE+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9hcmRDb250YWluZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBkbmRDb250ZXh0ID0gdXNlRG5kQ29udGV4dCgpO1xuXG4gIGNvbnN0IHZhcmlhdGlvbnMgPSBjdmEoXCJweC0yIG1kOnB4LTAgZmxleCBsZzpqdXN0aWZ5LWNlbnRlciBwYi00XCIsIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgZHJhZ2dpbmc6IHtcbiAgICAgICAgZGVmYXVsdDogXCJzbmFwLXggc25hcC1tYW5kYXRvcnlcIixcbiAgICAgICAgYWN0aXZlOiBcInNuYXAtbm9uZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTY3JvbGxBcmVhXG4gICAgICBjbGFzc05hbWU9e3ZhcmlhdGlvbnMoe1xuICAgICAgICBkcmFnZ2luZzogZG5kQ29udGV4dC5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJkZWZhdWx0XCIsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGZsZXgtcm93XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPFNjcm9sbEJhciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPlxuICAgIDwvU2Nyb2xsQXJlYT5cbiAgKTtcbn1cbiJdfQ==