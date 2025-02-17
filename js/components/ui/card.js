define(["require", "exports", "react/jsx-runtime", "react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardContent = exports.CardDescription = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;
    const Card = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("rounded-xl border bg-card text-card-foreground shadow", className), ...props })));
    exports.Card = Card;
    Card.displayName = "Card";
    const CardHeader = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("flex flex-col space-y-1.5 p-6", className), ...props })));
    exports.CardHeader = CardHeader;
    CardHeader.displayName = "CardHeader";
    const CardTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("font-semibold leading-none tracking-tight", className), ...props })));
    exports.CardTitle = CardTitle;
    CardTitle.displayName = "CardTitle";
    const CardDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className), ...props })));
    exports.CardDescription = CardDescription;
    CardDescription.displayName = "CardDescription";
    const CardContent = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("p-6 pt-0", className), ...props })));
    exports.CardContent = CardContent;
    CardContent.displayName = "CardContent";
    const CardFooter = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("flex items-center p-6 pt-0", className), ...props })));
    exports.CardFooter = CardFooter;
    CardFooter.displayName = "CardFooter";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFJQSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUczQixDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyxnQ0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx1REFBdUQsRUFDdkQsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFDO0lBNERELG9CQUFJO0lBM0ROLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBRTFCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLGdDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxLQUNyRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUM7SUFpREQsZ0NBQVU7SUFoRFosVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFdEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHaEMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDbEMsZ0NBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMkNBQTJDLEVBQUUsU0FBUyxDQUFDLEtBQ2pFLEtBQUssR0FDVCxDQUNILENBQUMsQ0FBQztJQXVDRCw4QkFBUztJQXRDWCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUVwQyxNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd0QyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUNsQyxnQ0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywrQkFBK0IsRUFBRSxTQUFTLENBQUMsS0FDckQsS0FBSyxHQUNULENBQ0gsQ0FBQyxDQUFDO0lBNEJELDBDQUFlO0lBM0JqQixlQUFlLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO0lBRWhELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLGdDQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBTSxLQUFLLEdBQUksQ0FDbkUsQ0FBQyxDQUFDO0lBcUJELGtDQUFXO0lBcEJiLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBRXhDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xDLGdDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxLQUNsRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDLENBQUM7SUFNRCxnQ0FBVTtJQUxaLFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IENhcmQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXZcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyb3VuZGVkLXhsIGJvcmRlciBiZy1jYXJkIHRleHQtY2FyZC1mb3JlZ3JvdW5kIHNoYWRvd1wiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5DYXJkLmRpc3BsYXlOYW1lID0gXCJDYXJkXCI7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXZcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEuNSBwLTZcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNhcmRIZWFkZXIuZGlzcGxheU5hbWUgPSBcIkNhcmRIZWFkZXJcIjtcblxuY29uc3QgQ2FyZFRpdGxlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcImZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0XCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5DYXJkVGl0bGUuZGlzcGxheU5hbWUgPSBcIkNhcmRUaXRsZVwiO1xuXG5jb25zdCBDYXJkRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxkaXZcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNhcmREZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiQ2FyZERlc2NyaXB0aW9uXCI7XG5cbmNvbnN0IENhcmRDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwicC02IHB0LTBcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSk7XG5DYXJkQ29udGVudC5kaXNwbGF5TmFtZSA9IFwiQ2FyZENvbnRlbnRcIjtcblxuY29uc3QgQ2FyZEZvb3RlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdlxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgcHQtMFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ2FyZEZvb3Rlci5kaXNwbGF5TmFtZSA9IFwiQ2FyZEZvb3RlclwiO1xuXG5leHBvcnQge1xuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkRm9vdGVyLFxuICBDYXJkVGl0bGUsXG4gIENhcmREZXNjcmlwdGlvbixcbiAgQ2FyZENvbnRlbnQsXG59O1xuIl19