define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slider", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, SliderPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Slider = Slider;
    function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
        const _values = React.useMemo(() => Array.isArray(value)
            ? value
            : Array.isArray(defaultValue)
                ? defaultValue
                : [min, max], [value, defaultValue, min, max]);
        return ((0, jsx_runtime_1.jsxs)(SliderPrimitive.Root, { "data-slot": "slider", defaultValue: defaultValue, value: value, min: min, max: max, className: (0, utils_1.cn)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className), ...props, children: [(0, jsx_runtime_1.jsx)(SliderPrimitive.Track, { "data-slot": "slider-track", className: (0, utils_1.cn)("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"), children: (0, jsx_runtime_1.jsx)(SliderPrimitive.Range, { "data-slot": "slider-range", className: (0, utils_1.cn)("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") }) }), Array.from({ length: _values.length }, (_, index) => ((0, jsx_runtime_1.jsx)(SliderPrimitive.Thumb, { "data-slot": "slider-thumb", className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" }, index)))] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc2xpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUE4REosd0JBQU07SUF2RGYsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEdBQUcsQ0FBQyxFQUNQLEdBQUcsR0FBRyxHQUFHLEVBQ1QsR0FBRyxLQUFLLEVBQzBDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQzNCLEdBQUcsRUFBRSxDQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUMzQixDQUFDLENBQUMsWUFBWTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ2hDLENBQUM7UUFFRixPQUFPLENBQ0wsd0JBQUMsZUFBZSxDQUFDLElBQUksaUJBQ1QsUUFBUSxFQUNsQixZQUFZLEVBQUUsWUFBWSxFQUMxQixLQUFLLEVBQUUsS0FBSyxFQUNaLEdBQUcsRUFBRSxHQUFHLEVBQ1IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gscU9BQXFPLEVBQ3JPLFNBQVMsQ0FDVixLQUNHLEtBQUssYUFFVCx1QkFBQyxlQUFlLENBQUMsS0FBSyxpQkFDVixjQUFjLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtTUFBbU0sQ0FDcE0sWUFFRCx1QkFBQyxlQUFlLENBQUMsS0FBSyxpQkFDVixjQUFjLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw2RkFBNkYsQ0FDOUYsR0FDRCxHQUNvQixFQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ3BELHVCQUFDLGVBQWUsQ0FBQyxLQUFLLGlCQUNWLGNBQWMsRUFFeEIsU0FBUyxFQUFDLDZPQUE2TyxJQURsUCxLQUFLLENBRVYsQ0FDSCxDQUFDLElBQ21CLENBQ3hCLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2xpZGVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIFNsaWRlcih7XG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdFZhbHVlLFxuICB2YWx1ZSxcbiAgbWluID0gMCxcbiAgbWF4ID0gMTAwLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNsaWRlclByaW1pdGl2ZS5Sb290Pikge1xuICBjb25zdCBfdmFsdWVzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKVxuICAgICAgICAgID8gZGVmYXVsdFZhbHVlXG4gICAgICAgICAgOiBbbWluLCBtYXhdLFxuICAgIFt2YWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW4sIG1heF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyUHJpbWl0aXZlLlJvb3RcbiAgICAgIGRhdGEtc2xvdD1cInNsaWRlclwiXG4gICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG1pbj17bWlufVxuICAgICAgbWF4PXttYXh9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInJlbGF0aXZlIGZsZXggdy1mdWxsIHRvdWNoLW5vbmUgaXRlbXMtY2VudGVyIHNlbGVjdC1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIGRhdGEtW29yaWVudGF0aW9uPXZlcnRpY2FsXTpoLWZ1bGwgZGF0YS1bb3JpZW50YXRpb249dmVydGljYWxdOm1pbi1oLTQ0IGRhdGEtW29yaWVudGF0aW9uPXZlcnRpY2FsXTp3LWF1dG8gZGF0YS1bb3JpZW50YXRpb249dmVydGljYWxdOmZsZXgtY29sXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFNsaWRlclByaW1pdGl2ZS5UcmFja1xuICAgICAgICBkYXRhLXNsb3Q9XCJzbGlkZXItdHJhY2tcIlxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiYmctbXV0ZWQgcmVsYXRpdmUgZ3JvdyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGRhdGEtW29yaWVudGF0aW9uPWhvcml6b250YWxdOmgtMS41IGRhdGEtW29yaWVudGF0aW9uPWhvcml6b250YWxdOnctZnVsbCBkYXRhLVtvcmllbnRhdGlvbj12ZXJ0aWNhbF06aC1mdWxsIGRhdGEtW29yaWVudGF0aW9uPXZlcnRpY2FsXTp3LTEuNVwiLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8U2xpZGVyUHJpbWl0aXZlLlJhbmdlXG4gICAgICAgICAgZGF0YS1zbG90PVwic2xpZGVyLXJhbmdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgXCJiZy1wcmltYXJ5IGFic29sdXRlIGRhdGEtW29yaWVudGF0aW9uPWhvcml6b250YWxdOmgtZnVsbCBkYXRhLVtvcmllbnRhdGlvbj12ZXJ0aWNhbF06dy1mdWxsXCIsXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2xpZGVyUHJpbWl0aXZlLlRyYWNrPlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IF92YWx1ZXMubGVuZ3RoIH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8U2xpZGVyUHJpbWl0aXZlLlRodW1iXG4gICAgICAgICAgZGF0YS1zbG90PVwic2xpZGVyLXRodW1iXCJcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1wcmltYXJ5IGJnLWJhY2tncm91bmQgcmluZy1yaW5nLzUwIGJsb2NrIHNpemUtNCBzaHJpbmstMCByb3VuZGVkLWZ1bGwgYm9yZGVyIHNoYWRvdy1zbSB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBob3ZlcjpyaW5nLTQgZm9jdXMtdmlzaWJsZTpyaW5nLTQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWhpZGRlbiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9TbGlkZXJQcmltaXRpdmUuUm9vdD5cbiAgKTtcbn1cblxuZXhwb3J0IHsgU2xpZGVyIH07XG4iXX0=