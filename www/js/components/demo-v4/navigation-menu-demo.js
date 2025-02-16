define(["require", "exports", "react/jsx-runtime", "wouter", "lucide-react", "@/components/ui/navigation-menu"], function (require, exports, jsx_runtime_1, wouter_1, lucide_react_1, navigation_menu_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationMenuDemo = NavigationMenuDemo;
    const components = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description: "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ];
    function NavigationMenuDemo() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "hidden w-full flex-col items-center justify-center gap-6 md:flex", children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenu, { children: (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuList, { children: [(0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuItem, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { children: "Getting started" }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { children: (0, jsx_runtime_1.jsxs)("ul", { className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [(0, jsx_runtime_1.jsx)("li", { className: "row-span-3", children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { className: "from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md", href: "/", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-4 mb-2 text-lg font-medium", children: "shadcn/ui" }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground text-sm leading-tight", children: "Beautifully designed components built with Tailwind CSS." })] }) }) }), (0, jsx_runtime_1.jsx)(ListItem, { href: "/docs", title: "Introduction", children: "Re-usable components built using Radix UI and Tailwind CSS." }), (0, jsx_runtime_1.jsx)(ListItem, { href: "/docs/installation", title: "Installation", children: "How to install dependencies and structure your app." }), (0, jsx_runtime_1.jsx)(ListItem, { href: "/docs/primitives/typography", title: "Typography", children: "Styles for headings, paragraphs, lists...etc" })] }) })] }), (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuItem, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { children: "Components" }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { children: (0, jsx_runtime_1.jsx)("ul", { className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: components.map((component) => ((0, jsx_runtime_1.jsx)(ListItem, { title: component.title, href: component.href, children: component.description }, component.title))) }) })] }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuItem, { children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, className: (0, navigation_menu_1.navigationMenuTriggerStyle)(), children: (0, jsx_runtime_1.jsx)(wouter_1.Link, { href: "/docs", children: "Documentation" }) }) })] }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenu, { viewport: false, children: (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuList, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuItem, { children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, className: (0, navigation_menu_1.navigationMenuTriggerStyle)(), children: (0, jsx_runtime_1.jsx)(wouter_1.Link, { href: "/docs", children: "Documentation" }) }) }), (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuItem, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { children: "List" }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { children: (0, jsx_runtime_1.jsx)("ul", { className: "grid w-[300px] gap-4", children: (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-medium", children: "Components" }), (0, jsx_runtime_1.jsx)("div", { className: "text-muted-foreground", children: "Browse all components in the library." })] }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-medium", children: "Documentation" }), (0, jsx_runtime_1.jsx)("div", { className: "text-muted-foreground", children: "Learn how to use the library." })] }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-medium", children: "Blog" }), (0, jsx_runtime_1.jsx)("div", { className: "text-muted-foreground", children: "Read our latest blog posts." })] }) })] }) }) })] }), (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuItem, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { children: "Simple List" }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { children: (0, jsx_runtime_1.jsx)("ul", { className: "grid w-[200px] gap-4", children: (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsx)(wouter_1.Link, { href: "#", children: "Components" }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsx)(wouter_1.Link, { href: "#", children: "Documentation" }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsx)(wouter_1.Link, { href: "#", children: "Blocks" }) })] }) }) })] }), (0, jsx_runtime_1.jsxs)(navigation_menu_1.NavigationMenuItem, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { children: "With Icon" }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { children: (0, jsx_runtime_1.jsx)("ul", { className: "grid w-[200px] gap-4", children: (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CircleHelpIcon, {}), "Backlog"] }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CircleIcon, {}), "To Do"] }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: "#", className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CircleCheckIcon, {}), "Done"] }) })] }) }) })] })] }) })] }));
    }
    function ListItem({ title, children, href, ...props }) {
        return ((0, jsx_runtime_1.jsx)("li", { ...props, children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { asChild: true, children: (0, jsx_runtime_1.jsxs)(wouter_1.Link, { href: href, children: [(0, jsx_runtime_1.jsx)("div", { className: "text-sm leading-none font-medium", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground line-clamp-2 text-sm leading-snug", children: children })] }) }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L25hdmlnYXRpb24tbWVudS1kZW1vLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFzRGIsZ0RBMEpDO0lBaE1ELE1BQU0sVUFBVSxHQUEyRDtRQUN6RTtZQUNFLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSwrQkFBK0I7WUFDckMsV0FBVyxFQUNULHdGQUF3RjtTQUMzRjtRQUNEO1lBQ0UsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLDZCQUE2QjtZQUNuQyxXQUFXLEVBQ1QsK0RBQStEO1NBQ2xFO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLFdBQVcsRUFDVCx5R0FBeUc7U0FDNUc7UUFDRDtZQUNFLEtBQUssRUFBRSxhQUFhO1lBQ3BCLElBQUksRUFBRSw4QkFBOEI7WUFDcEMsV0FBVyxFQUFFLDZDQUE2QztTQUMzRDtRQUNEO1lBQ0UsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLFdBQVcsRUFDVCw0RkFBNEY7U0FDL0Y7UUFDRDtZQUNFLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsV0FBVyxFQUNULCtIQUErSDtTQUNsSTtLQUNGLENBQUM7SUFFRixTQUFnQixrQkFBa0I7UUFDaEMsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxrRUFBa0UsYUFDL0UsdUJBQUMsZ0NBQWMsY0FDYix3QkFBQyxvQ0FBa0IsZUFDakIsd0JBQUMsb0NBQWtCLGVBQ2pCLHVCQUFDLHVDQUFxQixrQ0FBd0MsRUFDOUQsdUJBQUMsdUNBQXFCLGNBQ3BCLGdDQUFJLFNBQVMsRUFBQywrREFBK0QsYUFDM0UsK0JBQUksU0FBUyxFQUFDLFlBQVksWUFD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QyxHQUNZLEdBQ2xCLENBQ04sQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIndvdXRlclwiO1xuaW1wb3J0IHsgQ2lyY2xlQ2hlY2tJY29uLCBDaXJjbGVIZWxwSWNvbiwgQ2lyY2xlSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgTmF2aWdhdGlvbk1lbnUsXG4gIE5hdmlnYXRpb25NZW51Q29udGVudCxcbiAgTmF2aWdhdGlvbk1lbnVJdGVtLFxuICBOYXZpZ2F0aW9uTWVudUxpbmssXG4gIE5hdmlnYXRpb25NZW51TGlzdCxcbiAgTmF2aWdhdGlvbk1lbnVUcmlnZ2VyLFxuICBuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLW1lbnVcIjtcblxuY29uc3QgY29tcG9uZW50czogeyB0aXRsZTogc3RyaW5nOyBocmVmOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfVtdID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQWxlcnQgRGlhbG9nXCIsXG4gICAgaHJlZjogXCIvZG9jcy9wcmltaXRpdmVzL2FsZXJ0LWRpYWxvZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIG1vZGFsIGRpYWxvZyB0aGF0IGludGVycnVwdHMgdGhlIHVzZXIgd2l0aCBpbXBvcnRhbnQgY29udGVudCBhbmQgZXhwZWN0cyBhIHJlc3BvbnNlLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSG92ZXIgQ2FyZFwiLFxuICAgIGhyZWY6IFwiL2RvY3MvcHJpbWl0aXZlcy9ob3Zlci1jYXJkXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZvciBzaWdodGVkIHVzZXJzIHRvIHByZXZpZXcgY29udGVudCBhdmFpbGFibGUgYmVoaW5kIGEgbGluay5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2dyZXNzXCIsXG4gICAgaHJlZjogXCIvZG9jcy9wcmltaXRpdmVzL3Byb2dyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRpc3BsYXlzIGFuIGluZGljYXRvciBzaG93aW5nIHRoZSBjb21wbGV0aW9uIHByb2dyZXNzIG9mIGEgdGFzaywgdHlwaWNhbGx5IGRpc3BsYXllZCBhcyBhIHByb2dyZXNzIGJhci5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNjcm9sbC1hcmVhXCIsXG4gICAgaHJlZjogXCIvZG9jcy9wcmltaXRpdmVzL3Njcm9sbC1hcmVhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlzdWFsbHkgb3Igc2VtYW50aWNhbGx5IHNlcGFyYXRlcyBjb250ZW50LlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVGFic1wiLFxuICAgIGhyZWY6IFwiL2RvY3MvcHJpbWl0aXZlcy90YWJzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2V0IG9mIGxheWVyZWQgc2VjdGlvbnMgb2YgY29udGVudOKAlGtub3duIGFzIHRhYiBwYW5lbHPigJR0aGF0IGFyZSBkaXNwbGF5ZWQgb25lIGF0IGEgdGltZS5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvb2x0aXBcIixcbiAgICBocmVmOiBcIi9kb2NzL3ByaW1pdGl2ZXMvdG9vbHRpcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHBvcHVwIHRoYXQgZGlzcGxheXMgaW5mb3JtYXRpb24gcmVsYXRlZCB0byBhbiBlbGVtZW50IHdoZW4gdGhlIGVsZW1lbnQgcmVjZWl2ZXMga2V5Ym9hcmQgZm9jdXMgb3IgdGhlIG1vdXNlIGhvdmVycyBvdmVyIGl0LlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb25NZW51RGVtbygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IG1kOmZsZXhcIj5cbiAgICAgIDxOYXZpZ2F0aW9uTWVudT5cbiAgICAgICAgPE5hdmlnYXRpb25NZW51TGlzdD5cbiAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51VHJpZ2dlcj5HZXR0aW5nIHN0YXJ0ZWQ8L05hdmlnYXRpb25NZW51VHJpZ2dlcj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdhcC0yIG1kOnctWzQwMHB4XSBsZzp3LVs1MDBweF0gbGc6Z3JpZC1jb2xzLVsuNzVmcl8xZnJdXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJvdy1zcGFuLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUxpbmsgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcm9tLW11dGVkLzUwIHRvLW11dGVkIGZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCByb3VuZGVkLW1kIGJnLWxpbmVhci10by1iIHAtNiBuby11bmRlcmxpbmUgb3V0bGluZS1oaWRkZW4gc2VsZWN0LW5vbmUgZm9jdXM6c2hhZG93LW1kXCJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkY24vdWlcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCZWF1dGlmdWxseSBkZXNpZ25lZCBjb21wb25lbnRzIGJ1aWx0IHdpdGggVGFpbHdpbmQgQ1NTLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gaHJlZj1cIi9kb2NzXCIgdGl0bGU9XCJJbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIFJlLXVzYWJsZSBjb21wb25lbnRzIGJ1aWx0IHVzaW5nIFJhZGl4IFVJIGFuZCBUYWlsd2luZCBDU1MuXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gaHJlZj1cIi9kb2NzL2luc3RhbGxhdGlvblwiIHRpdGxlPVwiSW5zdGFsbGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBIb3cgdG8gaW5zdGFsbCBkZXBlbmRlbmNpZXMgYW5kIHN0cnVjdHVyZSB5b3VyIGFwcC5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBocmVmPVwiL2RvY3MvcHJpbWl0aXZlcy90eXBvZ3JhcGh5XCIgdGl0bGU9XCJUeXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICAgICAgICBTdHlsZXMgZm9yIGhlYWRpbmdzLCBwYXJhZ3JhcGhzLCBsaXN0cy4uLmV0Y1xuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L05hdmlnYXRpb25NZW51Q29udGVudD5cbiAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cbiAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51VHJpZ2dlcj5Db21wb25lbnRzPC9OYXZpZ2F0aW9uTWVudVRyaWdnZXI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVDb250ZW50PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCB3LVs0MDBweF0gZ2FwLTIgbWQ6dy1bNTAwcHhdIG1kOmdyaWQtY29scy0yIGxnOnctWzYwMHB4XVwiPlxuICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb21wb25lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb21wb25lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2NvbXBvbmVudC5ocmVmfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29tcG9uZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVDb250ZW50PlxuICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rXG4gICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvY3NcIj5Eb2N1bWVudGF0aW9uPC9MaW5rPlxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaXN0PlxuICAgICAgPC9OYXZpZ2F0aW9uTWVudT5cbiAgICAgIDxOYXZpZ2F0aW9uTWVudSB2aWV3cG9ydD17ZmFsc2V9PlxuICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaXN0PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rXG4gICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvY3NcIj5Eb2N1bWVudGF0aW9uPC9MaW5rPlxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgPE5hdmlnYXRpb25NZW51SXRlbT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudVRyaWdnZXI+TGlzdDwvTmF2aWdhdGlvbk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgdy1bMzAwcHhdIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51TGluayBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Db21wb25lbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgY29tcG9uZW50cyBpbiB0aGUgbGlicmFyeS5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkRvY3VtZW50YXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGVhcm4gaG93IHRvIHVzZSB0aGUgbGlicmFyeS5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkJsb2c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBvdXIgbGF0ZXN0IGJsb2cgcG9zdHMuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L05hdmlnYXRpb25NZW51Q29udGVudD5cbiAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cbiAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51VHJpZ2dlcj5TaW1wbGUgTGlzdDwvTmF2aWdhdGlvbk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgdy1bMjAwcHhdIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51TGluayBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPkNvbXBvbmVudHM8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cbiAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUxpbmsgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5Eb2N1bWVudGF0aW9uPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+QmxvY2tzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVDb250ZW50PlxuICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVUcmlnZ2VyPldpdGggSWNvbjwvTmF2aWdhdGlvbk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgdy1bMjAwcHhdIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51TGluayBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVIZWxwSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIEJhY2tsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICBUbyBEb1xuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cbiAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUxpbmsgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlQ2hlY2tJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgRG9uZVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaXN0PlxuICAgICAgPC9OYXZpZ2F0aW9uTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGlzdEl0ZW0oe1xuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIGhyZWYsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJsaVwiPiAmIHsgaHJlZjogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgey4uLnByb3BzfT5cbiAgICAgIDxOYXZpZ2F0aW9uTWVudUxpbmsgYXNDaGlsZD5cbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9uZSBmb250LW1lZGl1bVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbGluZS1jbGFtcC0yIHRleHQtc20gbGVhZGluZy1zbnVnXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cbiAgICA8L2xpPlxuICApO1xufVxuIl19