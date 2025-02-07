define(["require", "exports", "react/jsx-runtime", "react", "react-day-picker", "../../lib/utils", "./button", "./scroll-area", "./select"], function (require, exports, jsx_runtime_1, React, react_day_picker_1, utils_1, button_1, scroll_area_1, select_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NO_BORDER = void 0;
    exports.Calendar = Calendar;
    exports.NO_BORDER = "ring-0 focus:ring-0 focus-visible:ring-0 shadow-none focus:shadow-none focus-visible:shadow-none outline-none focus:outline-none focus-visible:outline-none border-none focus:border-none focus-visible:border-none";
    // Updated for react-day-picker v9 and mobile sizing
    function Calendar({ numberOfMonths = 1, showOutsideDays = true, compact = false, captionLayout = "dropdown", className = "w-fit", classNames, ...props }) {
        // Custom components for prev/next and date dropdowns
        const components = React.useMemo(() => {
            const pnc = compact
                ? "focus:underline focus:underline-offset-2 -mx-0.5 sm:mx-0"
                : "focus:underline focus:underline-offset-2 mx-0";
            const customComponents = {
                PreviousMonthButton: ({ tabIndex, className, ...props }) => ((0, jsx_runtime_1.jsx)(react_day_picker_1.PreviousMonthButton, { tabIndex: 0, className: (0, utils_1.cn)(className, pnc), ...props })),
                NextMonthButton: ({ tabIndex, className, ...props }) => ((0, jsx_runtime_1.jsx)(react_day_picker_1.NextMonthButton, { tabIndex: 0, className: (0, utils_1.cn)(className, pnc), ...props })),
                Dropdown: ({ value, options, onChange }) => {
                    const selected = options === null || options === void 0 ? void 0 : options.find((option) => option.value === value);
                    const handleChange = (value) => onChange === null || onChange === void 0 ? void 0 : onChange({ target: { value } });
                    return ((0, jsx_runtime_1.jsxs)(select_1.Select, { value: value === null || value === void 0 ? void 0 : value.toString(), onValueChange: handleChange, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { tabIndex: 0, className: (0, utils_1.cn)(exports.NO_BORDER, compact ? "[&>svg]:-ml-[1px]" : "text-md", "focus:underline focus:underline-offset-2 h-7 -mr-2.5 pr-0 [&>svg]:opacity-15"), children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { children: selected === null || selected === void 0 ? void 0 : selected.label }) }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { position: "popper", children: (0, jsx_runtime_1.jsx)(scroll_area_1.ScrollArea, { className: "h-56", children: options === null || options === void 0 ? void 0 : options.map(({ value: v, label }, i) => {
                                        var _a;
                                        return ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: (_a = v === null || v === void 0 ? void 0 : v.toString()) !== null && _a !== void 0 ? _a : "", children: label }, `${v}-${i}`));
                                    }) }) })] }));
                },
            };
            return props.components
                ? {
                    ...customComponents,
                    ...props.components,
                }
                : customComponents;
        }, [compact, props.components]);
        const prevNextButtonSize = compact ? "h-5 w-5" : "h-6 w-6";
        const isLabel = captionLayout === "label";
        return ((0, jsx_runtime_1.jsx)(react_day_picker_1.DayPicker, { mode: props.mode || "single", captionLayout: captionLayout, numberOfMonths: numberOfMonths, showOutsideDays: showOutsideDays, components: components, className: className, classNames: {
                months: "flex gap-4 relative",
                month_grid: compact ? undefined : isLabel ? "mt-2.5" : "mt-2",
                month_caption: (0, utils_1.cn)("flex relative items-center font-medium", compact ? "text-sm mt-1 ml-1 sm:ml-[5.5px]" : "text-md mt-0.5 ml-1.5", isLabel ? "mb-2" : "-ml-2 sm:-ml-2 mb-1 mt-0"),
                dropdowns: compact ? "flex sm:ml-0.5" : "flex ml-0.5",
                years_dropdown: "after:none",
                nav: "absolute right-0 z-50 flex items-center h-7",
                button_previous: (0, utils_1.cn)(exports.NO_BORDER, prevNextButtonSize, "group"),
                button_next: (0, utils_1.cn)(exports.NO_BORDER, prevNextButtonSize, "group"),
                chevron: (0, utils_1.cn)("border-b border-transparent group-focus:border-current", prevNextButtonSize),
                weeks: "w-full border-collapse space-y-1",
                week: "flex w-full mt-2",
                weekdays: "flex",
                weekday: (0, utils_1.cn)("text-muted-foreground rounded-md font-normal", compact ? "w-6 sm:w-7 text-xs sm:text-sm" : "w-8 text-sm"),
                day: (0, utils_1.cn)("relative p-0 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50", props.mode === "range"
                    ? "[&.range-end]:rounded-r-md [&.range-start]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                    : "rounded-md"),
                day_button: (0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "ghost" }), "[&:hover]:bg-transparent [&:hover]:text-inherit", // Disable the ghost button hover
                compact
                    ? "h-6 w-6 sm:h-7 sm:w-7 p-0 text-xs sm:text-sm"
                    : "h-8 w-8 p-0.5 text-sm", "text-center font-normal"),
                range_start: "range-start",
                range_end: "range-end",
                selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                today: "bg-accent text-accent-foreground",
                outside: "outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                disabled: "text-muted-foreground opacity-50",
                range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                hidden: "invisible",
                ...classNames,
            }, ...props }));
    }
    Calendar.displayName = "Calendar";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdjkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jYWxlbmRhci12OS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7OztJQWdLSiw0QkFBUTtJQW5JSixRQUFBLFNBQVMsR0FDcEIscU5BQXFOLENBQUM7SUFFeE4sb0RBQW9EO0lBQ3BELFNBQVMsUUFBUSxDQUFDLEVBQ2hCLGNBQWMsR0FBRyxDQUFDLEVBQ2xCLGVBQWUsR0FBRyxJQUFJLEVBQ3RCLE9BQU8sR0FBRyxLQUFLLEVBQ2YsYUFBYSxHQUFHLFVBQVUsRUFDMUIsU0FBUyxHQUFHLE9BQU8sRUFDbkIsVUFBVSxFQUNWLEdBQUcsS0FBSyxFQUNNO1FBQ2QscURBQXFEO1FBQ3JELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3BDLE1BQU0sR0FBRyxHQUFHLE9BQU87Z0JBQ2pCLENBQUMsQ0FBQywwREFBMEQ7Z0JBQzVELENBQUMsQ0FBQywrQ0FBK0MsQ0FBQztZQUVwRCxNQUFNLGdCQUFnQixHQUFHO2dCQUN2QixtQkFBbUIsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUNuRSx1QkFBQyxzQ0FBTyxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBTSxLQUFLLEdBQUksQ0FDbkU7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFXLEVBQUUsRUFBRSxDQUFDLENBQy9ELHVCQUFDLGtDQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFNLEtBQUssR0FB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a0NBQWtDO2dCQUM1QyxZQUFZLEVBQ1YsOERBQThEO2dCQUNoRSxNQUFNLEVBQUUsV0FBVztnQkFDbkIsR0FBRyxVQUFVO2FBQ2QsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUHJldmlvdXNNb250aEJ1dHRvbiBhcyBCdG5QcmV2LFxuICBQcmV2aW91c01vbnRoQnV0dG9uUHJvcHMgYXMgUHJwUHJldixcbiAgTmV4dE1vbnRoQnV0dG9uIGFzIEJ0bk5leHQsXG4gIE5leHRNb250aEJ1dHRvblByb3BzIGFzIFBycE5leHQsXG4gIERhdGVSYW5nZSBhcyBJbm5lckRhdGVSYW5nZSxcbiAgRGF5UGlja2VyLFxuICBEcm9wZG93blByb3BzLFxufSBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IGJ1dHRvblZhcmlhbnRzIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSBcIi4vc2Nyb2xsLWFyZWFcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUsXG59IGZyb20gXCIuL3NlbGVjdFwiO1xuXG5leHBvcnQgdHlwZSBEYXRlUmFuZ2UgPSBJbm5lckRhdGVSYW5nZTtcbmV4cG9ydCB0eXBlIENhbGVuZGFyUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRGF5UGlja2VyPiAmIHtcbiAgY29tcGFjdD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTk9fQk9SREVSID1cbiAgXCJyaW5nLTAgZm9jdXM6cmluZy0wIGZvY3VzLXZpc2libGU6cmluZy0wIHNoYWRvdy1ub25lIGZvY3VzOnNoYWRvdy1ub25lIGZvY3VzLXZpc2libGU6c2hhZG93LW5vbmUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb2N1czpib3JkZXItbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1ub25lXCI7XG5cbi8vIFVwZGF0ZWQgZm9yIHJlYWN0LWRheS1waWNrZXIgdjkgYW5kIG1vYmlsZSBzaXppbmdcbmZ1bmN0aW9uIENhbGVuZGFyKHtcbiAgbnVtYmVyT2ZNb250aHMgPSAxLFxuICBzaG93T3V0c2lkZURheXMgPSB0cnVlLFxuICBjb21wYWN0ID0gZmFsc2UsXG4gIGNhcHRpb25MYXlvdXQgPSBcImRyb3Bkb3duXCIsXG4gIGNsYXNzTmFtZSA9IFwidy1maXRcIixcbiAgY2xhc3NOYW1lcyxcbiAgLi4ucHJvcHNcbn06IENhbGVuZGFyUHJvcHMpIHtcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHMgZm9yIHByZXYvbmV4dCBhbmQgZGF0ZSBkcm9wZG93bnNcbiAgY29uc3QgY29tcG9uZW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHBuYyA9IGNvbXBhY3RcbiAgICAgID8gXCJmb2N1czp1bmRlcmxpbmUgZm9jdXM6dW5kZXJsaW5lLW9mZnNldC0yIC1teC0wLjUgc206bXgtMFwiXG4gICAgICA6IFwiZm9jdXM6dW5kZXJsaW5lIGZvY3VzOnVuZGVybGluZS1vZmZzZXQtMiBteC0wXCI7XG5cbiAgICBjb25zdCBjdXN0b21Db21wb25lbnRzID0ge1xuICAgICAgUHJldmlvdXNNb250aEJ1dHRvbjogKHsgdGFiSW5kZXgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUHJwUHJldikgPT4gKFxuICAgICAgICA8QnRuUHJldiB0YWJJbmRleD17MH0gY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsIHBuYyl9IHsuLi5wcm9wc30gLz5cbiAgICAgICksXG4gICAgICBOZXh0TW9udGhCdXR0b246ICh7IHRhYkluZGV4LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFBycE5leHQpID0+IChcbiAgICAgICAgPEJ0bk5leHQgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCBwbmMpfSB7Li4ucHJvcHN9IC8+XG4gICAgICApLFxuICAgICAgRHJvcGRvd246ICh7IHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9OiBEcm9wZG93blByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gb3B0aW9ucz8uZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+XG4gICAgICAgICAgb25DaGFuZ2U/Lih7IHRhcmdldDogeyB2YWx1ZSB9IH0gYXMgYW55KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXt2YWx1ZT8udG9TdHJpbmcoKX0gb25WYWx1ZUNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyXG4gICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIE5PX0JPUkRFUixcbiAgICAgICAgICAgICAgICBjb21wYWN0ID8gXCJbJj5zdmddOi1tbC1bMXB4XVwiIDogXCJ0ZXh0LW1kXCIsXG4gICAgICAgICAgICAgICAgXCJmb2N1czp1bmRlcmxpbmUgZm9jdXM6dW5kZXJsaW5lLW9mZnNldC0yIGgtNyAtbXItMi41IHByLTAgWyY+c3ZnXTpvcGFjaXR5LTE1XCIsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZT57c2VsZWN0ZWQ/LmxhYmVsfTwvU2VsZWN0VmFsdWU+XG4gICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICA8U2VsZWN0Q29udGVudCBwb3NpdGlvbj1cInBvcHBlclwiPlxuICAgICAgICAgICAgICA8U2Nyb2xsQXJlYSBjbGFzc05hbWU9XCJoLTU2XCI+XG4gICAgICAgICAgICAgICAge29wdGlvbnM/Lm1hcCgoeyB2YWx1ZTogdiwgbGFiZWwgfSwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBrZXk9e2Ake3Z9LSR7aX1gfSB2YWx1ZT17dj8udG9TdHJpbmcoKSA/PyBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1Njcm9sbEFyZWE+XG4gICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHByb3BzLmNvbXBvbmVudHNcbiAgICAgID8ge1xuICAgICAgICAgIC4uLmN1c3RvbUNvbXBvbmVudHMsXG4gICAgICAgICAgLi4ucHJvcHMuY29tcG9uZW50cyxcbiAgICAgICAgfVxuICAgICAgOiBjdXN0b21Db21wb25lbnRzO1xuICB9LCBbY29tcGFjdCwgcHJvcHMuY29tcG9uZW50c10pO1xuXG4gIGNvbnN0IHByZXZOZXh0QnV0dG9uU2l6ZSA9IGNvbXBhY3QgPyBcImgtNSB3LTVcIiA6IFwiaC02IHctNlwiO1xuICBjb25zdCBpc0xhYmVsID0gY2FwdGlvbkxheW91dCA9PT0gXCJsYWJlbFwiO1xuXG4gIHJldHVybiAoXG4gICAgPERheVBpY2tlclxuICAgICAgbW9kZT17cHJvcHMubW9kZSB8fCBcInNpbmdsZVwifVxuICAgICAgY2FwdGlvbkxheW91dD17Y2FwdGlvbkxheW91dH1cbiAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgIHNob3dPdXRzaWRlRGF5cz17c2hvd091dHNpZGVEYXlzfVxuICAgICAgY29tcG9uZW50cz17Y29tcG9uZW50c31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICBtb250aHM6IFwiZmxleCBnYXAtNCByZWxhdGl2ZVwiLFxuICAgICAgICBtb250aF9ncmlkOiBjb21wYWN0ID8gdW5kZWZpbmVkIDogaXNMYWJlbCA/IFwibXQtMi41XCIgOiBcIm10LTJcIixcbiAgICAgICAgbW9udGhfY2FwdGlvbjogY24oXG4gICAgICAgICAgXCJmbGV4IHJlbGF0aXZlIGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bVwiLFxuICAgICAgICAgIGNvbXBhY3QgPyBcInRleHQtc20gbXQtMSBtbC0xIHNtOm1sLVs1LjVweF1cIiA6IFwidGV4dC1tZCBtdC0wLjUgbWwtMS41XCIsXG4gICAgICAgICAgaXNMYWJlbCA/IFwibWItMlwiIDogXCItbWwtMiBzbTotbWwtMiBtYi0xIG10LTBcIixcbiAgICAgICAgKSxcbiAgICAgICAgZHJvcGRvd25zOiBjb21wYWN0ID8gXCJmbGV4IHNtOm1sLTAuNVwiIDogXCJmbGV4IG1sLTAuNVwiLFxuICAgICAgICB5ZWFyc19kcm9wZG93bjogXCJhZnRlcjpub25lXCIsXG4gICAgICAgIG5hdjogXCJhYnNvbHV0ZSByaWdodC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIgaC03XCIsXG4gICAgICAgIGJ1dHRvbl9wcmV2aW91czogY24oTk9fQk9SREVSLCBwcmV2TmV4dEJ1dHRvblNpemUsIFwiZ3JvdXBcIiksXG4gICAgICAgIGJ1dHRvbl9uZXh0OiBjbihOT19CT1JERVIsIHByZXZOZXh0QnV0dG9uU2l6ZSwgXCJncm91cFwiKSxcbiAgICAgICAgY2hldnJvbjogY24oXG4gICAgICAgICAgXCJib3JkZXItYiBib3JkZXItdHJhbnNwYXJlbnQgZ3JvdXAtZm9jdXM6Ym9yZGVyLWN1cnJlbnRcIixcbiAgICAgICAgICBwcmV2TmV4dEJ1dHRvblNpemUsXG4gICAgICAgICksXG4gICAgICAgIHdlZWtzOiBcInctZnVsbCBib3JkZXItY29sbGFwc2Ugc3BhY2UteS0xXCIsXG4gICAgICAgIHdlZWs6IFwiZmxleCB3LWZ1bGwgbXQtMlwiLFxuICAgICAgICB3ZWVrZGF5czogXCJmbGV4XCIsXG4gICAgICAgIHdlZWtkYXk6IGNuKFxuICAgICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJvdW5kZWQtbWQgZm9udC1ub3JtYWxcIixcbiAgICAgICAgICBjb21wYWN0ID8gXCJ3LTYgc206dy03IHRleHQteHMgc206dGV4dC1zbVwiIDogXCJ3LTggdGV4dC1zbVwiLFxuICAgICAgICApLFxuICAgICAgICBkYXk6IGNuKFxuICAgICAgICAgIFwicmVsYXRpdmUgcC0wIGZvY3VzLXdpdGhpbjpyZWxhdGl2ZSBmb2N1cy13aXRoaW46ei0yMCBbJjpoYXMoW2FyaWEtc2VsZWN0ZWRdKV06YmctYWNjZW50IFsmOmhhcyhbYXJpYS1zZWxlY3RlZF0ub3V0c2lkZSldOmJnLWFjY2VudC81MFwiLFxuICAgICAgICAgIHByb3BzLm1vZGUgPT09IFwicmFuZ2VcIlxuICAgICAgICAgICAgPyBcIlsmLnJhbmdlLWVuZF06cm91bmRlZC1yLW1kIFsmLnJhbmdlLXN0YXJ0XTpyb3VuZGVkLWwtbWQgZmlyc3Q6WyY6aGFzKFthcmlhLXNlbGVjdGVkXSldOnJvdW5kZWQtbC1tZCBsYXN0OlsmOmhhcyhbYXJpYS1zZWxlY3RlZF0pXTpyb3VuZGVkLXItbWRcIlxuICAgICAgICAgICAgOiBcInJvdW5kZWQtbWRcIixcbiAgICAgICAgKSxcbiAgICAgICAgZGF5X2J1dHRvbjogY24oXG4gICAgICAgICAgYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50OiBcImdob3N0XCIgfSksXG4gICAgICAgICAgXCJbJjpob3Zlcl06YmctdHJhbnNwYXJlbnQgWyY6aG92ZXJdOnRleHQtaW5oZXJpdFwiLCAvLyBEaXNhYmxlIHRoZSBnaG9zdCBidXR0b24gaG92ZXJcbiAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICA/IFwiaC02IHctNiBzbTpoLTcgc206dy03IHAtMCB0ZXh0LXhzIHNtOnRleHQtc21cIlxuICAgICAgICAgICAgOiBcImgtOCB3LTggcC0wLjUgdGV4dC1zbVwiLFxuICAgICAgICAgIFwidGV4dC1jZW50ZXIgZm9udC1ub3JtYWxcIixcbiAgICAgICAgKSxcbiAgICAgICAgcmFuZ2Vfc3RhcnQ6IFwicmFuZ2Utc3RhcnRcIixcbiAgICAgICAgcmFuZ2VfZW5kOiBcInJhbmdlLWVuZFwiLFxuICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb2N1czpiZy1wcmltYXJ5IGZvY3VzOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIHRvZGF5OiBcImJnLWFjY2VudCB0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIG91dHNpZGU6XG4gICAgICAgICAgXCJvdXRzaWRlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBvcGFjaXR5LTUwICBhcmlhLXNlbGVjdGVkOmJnLWFjY2VudC81MCBhcmlhLXNlbGVjdGVkOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBhcmlhLXNlbGVjdGVkOm9wYWNpdHktMzBcIixcbiAgICAgICAgZGlzYWJsZWQ6IFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktNTBcIixcbiAgICAgICAgcmFuZ2VfbWlkZGxlOlxuICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZDpiZy1hY2NlbnQgYXJpYS1zZWxlY3RlZDp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGhpZGRlbjogXCJpbnZpc2libGVcIixcbiAgICAgICAgLi4uY2xhc3NOYW1lcyxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cbkNhbGVuZGFyLmRpc3BsYXlOYW1lID0gXCJDYWxlbmRhclwiO1xuXG5leHBvcnQgeyBDYWxlbmRhciB9O1xuIl19