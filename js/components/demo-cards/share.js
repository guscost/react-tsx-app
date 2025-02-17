define(["require", "exports", "react/jsx-runtime", "@/components/ui/avatar", "@/components/ui/button", "@/components/ui/card", "@/components/ui/input", "@/components/ui/label", "@/components/ui/select", "@/components/ui/separator"], function (require, exports, jsx_runtime_1, avatar_1, button_1, card_1, input_1, label_1, select_1, separator_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsShare = CardsShare;
    function CardsShare() {
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { className: "pb-3", children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Share this document" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Anyone with the link can view this document." })] }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "link", className: "sr-only", children: "Link" }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "link", value: "http://example.com/link/to/document", readOnly: true }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "shrink-0", children: "Copy Link" })] }), (0, jsx_runtime_1.jsx)(separator_1.Separator, { className: "my-4" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-sm font-medium", children: "People with access" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between space-x-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "/avatars/03.png", alt: "Image" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "OM" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium leading-none", children: "Olivia Martin" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-muted-foreground", children: "m@example.com" })] })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { defaultValue: "edit", children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "ml-auto w-[110px]", "aria-label": "Edit", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "edit", children: "Can edit" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "view", children: "Can view" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between space-x-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "/avatars/05.png", alt: "Image" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "IN" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium leading-none", children: "Isabella Nguyen" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-muted-foreground", children: "b@example.com" })] })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { defaultValue: "view", children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "ml-auto w-[110px]", "aria-label": "Edit", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "edit", children: "Can edit" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "view", children: "Can view" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between space-x-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "/avatars/01.png", alt: "Image" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "SD" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium leading-none", children: "Sofia Davis" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-muted-foreground", children: "p@example.com" })] })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { defaultValue: "view", children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "ml-auto w-[110px]", "aria-label": "Edit", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "edit", children: "Can edit" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "view", children: "Can view" })] })] })] })] })] })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL3NoYXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFzQmIsZ0NBbUdDO0lBbkdELFNBQWdCLFVBQVU7UUFDeEIsT0FBTyxDQUNMLHdCQUFDLFdBQUksZUFDSCx3QkFBQyxpQkFBVSxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQzFCLHVCQUFDLGdCQUFTLHNDQUFnQyxFQUMxQyx1QkFBQyxzQkFBZSwrREFFRSxJQUNQLEVBQ2Isd0JBQUMsa0JBQVcsZUFDVixpQ0FBSyxTQUFTLEVBQUMsZ0JBQWdCLGFBQzdCLHVCQUFDLGFBQUssSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxTQUFTLHFCQUVqQyxFQUNSLHVCQUFDLGFBQUssSUFDSixFQUFFLEVBQUMsTUFBTSxFQUNULEtBQUssRUFBQyxxQ0FBcUMsRUFDM0MsUUFBUSxTQUNSLEVBQ0YsdUJBQUMsZUFBTSxJQUFDLFNBQVMsRUFBQyxVQUFVLDBCQUFtQixJQUMzQyxFQUNOLHVCQUFDLHFCQUFTLElBQUMsU0FBUyxFQUFDLE1BQU0sR0FBRyxFQUM5QixpQ0FBSyxTQUFTLEVBQUMsV0FBVyxhQUN4QixnQ0FBSyxTQUFTLEVBQUMscUJBQXFCLG1DQUF5QixFQUM3RCxpQ0FBSyxTQUFTLEVBQUMsWUFBWSxhQUN6QixpQ0FBSyxTQUFTLEVBQUMsNkNBQTZDLGFBQzFELGlDQUFLLFNBQVMsRUFBQyw2QkFBNkIsYUFDMUMsd0JBQUMsZUFBTSxlQUNMLHVCQUFDLG9CQUFXLElBQUMsR0FBRyxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBQyxPQUFPLEdBQUcsRUFDakQsdUJBQUMsdUJBQWMscUJBQW9CLElBQzVCLEVBQ1QsNENBQ0UsOEJBQUcsU0FBUyxFQUFDLGtDQUFrQyw4QkFFM0MsRUFDSiw4QkFBRyxTQUFTLEVBQUMsK0JBQStCLDhCQUFrQixJQUMxRCxJQUNGLEVBQ04sd0JBQUMsZUFBTSxJQUFDLFlBQVksRUFBQyxNQUFNLGFBQ3pCLHVCQUFDLHNCQUFhLElBQUMsU0FBUyxFQUFDLG1CQUFtQixnQkFBWSxNQUFNLFlBQzVELHVCQUFDLG9CQUFXLElBQUMsV0FBVyxFQUFDLFFBQVEsR0FBRyxHQUN0QixFQUNoQix3QkFBQyxzQkFBYSxlQUNaLHVCQUFDLG1CQUFVLElBQUMsS0FBSyxFQUFDLE1BQU0seUJBQXNCLEVBQzlDLHVCQUFDLG1CQUFVLElBQUMsS0FBSyxFQUFDLE1BQU0seUJBQXNCLElBQ2hDLElBQ1QsSUFDTCxFQUNOLGlDQUFLLFNBQVMsRUFBQyw2Q0FBNkMsYUFDMUQsaUNBQUssU0FBUyxFQUFDLDZCQUE2QixhQUMxQyx3QkFBQyxlQUFNLGVBQ0wsdUJBQUMsb0JBQVcsSUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFDLE9BQU8sR0FBRyxFQUNqRCx1QkFBQyx1QkFBYyxxQkFBb0IsSUFDNUIsRUFDVCw0Q0FDRSw4QkFBRyxTQUFTLEVBQUMsa0NBQWtDLGdDQUUzQyxFQUNKLDhCQUFHLFNBQVMsRUFBQywrQkFBK0IsOEJBQWtCLElBQzFELElBQ0YsRUFDTix3QkFBQyxlQUFNLElBQUMsWUFBWSxFQUFDLE1BQU0sYUFDekIsdUJBQUMsc0JBQWEsSUFBQyxTQUFTLEVBQUMsbUJBQW1CLGdCQUFZLE1BQU0sWUFDNUQsdUJBQUMsb0JBQVcsSUFBQyxXQUFXLEVBQUMsUUFBUSxHQUFHLEdBQ3RCLEVBQ2hCLHdCQUFDLHNCQUFhLGVBQ1osdUJBQUMsbUJBQVUsSUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBc0IsRUFDOUMsdUJBQUMsbUJBQVUsSUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBc0IsSUFDaEMsSUFDVCxJQUNMLEVBQ04saUNBQUssU0FBUyxFQUFDLDZDQUE2QyxhQUMxRCxpQ0FBSyxTQUFTLEVBQUMsNkJBQTZCLGFBQzFDLHdCQUFDLGVBQU0sZUFDTCx1QkFBQyxvQkFBVyxJQUFDLEdBQUcsRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMsT0FBTyxHQUFHLEVBQ2pELHVCQUFDLHVCQUFjLHFCQUFvQixJQUM1QixFQUNULDRDQUNFLDhCQUFHLFNBQVMsRUFBQyxrQ0FBa0MsNEJBRTNDLEVBQ0osOEJBQUcsU0FBUyxFQUFDLCtCQUErQiw4QkFBa0IsSUFDMUQsSUFDRixFQUNOLHdCQUFDLGVBQU0sSUFBQyxZQUFZLEVBQUMsTUFBTSxhQUN6Qix1QkFBQyxzQkFBYSxJQUFDLFNBQVMsRUFBQyxtQkFBbUIsZ0JBQVksTUFBTSxZQUM1RCx1QkFBQyxvQkFBVyxJQUFDLFdBQVcsRUFBQyxRQUFRLEdBQUcsR0FDdEIsRUFDaEIsd0JBQUMsc0JBQWEsZUFDWix1QkFBQyxtQkFBVSxJQUFDLEtBQUssRUFBQyxNQUFNLHlCQUFzQixFQUM5Qyx1QkFBQyxtQkFBVSxJQUFDLEtBQUssRUFBQyxNQUFNLHlCQUFzQixJQUNoQyxJQUNULElBQ0wsSUFDRixJQUNGLElBQ00sSUFDVCxDQUNSLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NlcGFyYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZHNTaGFyZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInBiLTNcIj5cbiAgICAgICAgPENhcmRUaXRsZT5TaGFyZSB0aGlzIGRvY3VtZW50PC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgQW55b25lIHdpdGggdGhlIGxpbmsgY2FuIHZpZXcgdGhpcyBkb2N1bWVudC5cbiAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxpbmtcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICBMaW5rXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGlkPVwibGlua1wiXG4gICAgICAgICAgICB2YWx1ZT1cImh0dHA6Ly9leGFtcGxlLmNvbS9saW5rL3RvL2RvY3VtZW50XCJcbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNocmluay0wXCI+Q29weSBMaW5rPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VwYXJhdG9yIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlBlb3BsZSB3aXRoIGFjY2VzczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9XCIvYXZhdGFycy8wMy5wbmdcIiBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+T008L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICBPbGl2aWEgTWFydGluXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPm1AZXhhbXBsZS5jb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImVkaXRcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJtbC1hdXRvIHctWzExMHB4XVwiIGFyaWEtbGFiZWw9XCJFZGl0XCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiZWRpdFwiPkNhbiBlZGl0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJ2aWV3XCI+Q2FuIHZpZXc8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9XCIvYXZhdGFycy8wNS5wbmdcIiBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+SU48L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICBJc2FiZWxsYSBOZ3V5ZW5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+YkBleGFtcGxlLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwidmlld1wiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cIm1sLWF1dG8gdy1bMTEwcHhdXCIgYXJpYS1sYWJlbD1cIkVkaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJlZGl0XCI+Q2FuIGVkaXQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cInZpZXdcIj5DYW4gdmlldzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz1cIi9hdmF0YXJzLzAxLnBuZ1wiIGFsdD1cIkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJGYWxsYmFjaz5TRDwvQXZhdGFyRmFsbGJhY2s+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIFNvZmlhIERhdmlzXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnBAZXhhbXBsZS5jb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJtbC1hdXRvIHctWzExMHB4XVwiIGFyaWEtbGFiZWw9XCJFZGl0XCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiZWRpdFwiPkNhbiBlZGl0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJ2aWV3XCI+Q2FuIHZpZXc8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl19