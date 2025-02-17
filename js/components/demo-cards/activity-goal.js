define(["require", "exports", "react/jsx-runtime", "react", "lucide-react", "recharts", "@/components/ui/button", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, React, lucide_react_1, recharts_1, button_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsActivityGoal = CardsActivityGoal;
    const data = [
        {
            goal: 400,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 239,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 349,
        },
    ];
    const chartConfig = {
        goal: {
            label: "Goal",
            color: "hsl(var(--primary))",
        },
    };
    function CardsActivityGoal() {
        const [goal, setGoal] = React.useState(350);
        function onClick(adjustment) {
            setGoal(Math.max(200, Math.min(400, goal + adjustment)));
        }
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { className: "pb-4", children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Move Goal" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Set your daily activity goal." })] }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "pb-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center space-x-2", children: [(0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", size: "icon", className: "h-8 w-8 shrink-0 rounded-full", onClick: () => onClick(-10), disabled: goal <= 200, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Minus, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Decrease" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-5xl font-bold tracking-tighter", children: goal }), (0, jsx_runtime_1.jsx)("div", { className: "text-[0.70rem] uppercase text-muted-foreground", children: "Calories/day" })] }), (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", size: "icon", className: "h-8 w-8 shrink-0 rounded-full", onClick: () => onClick(10), disabled: goal >= 400, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Plus, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Increase" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-3 h-[60px]", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "aspect-auto h-full w-full", children: (0, jsx_runtime_1.jsx)(recharts_1.BarChart, { data: data, children: (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "goal", radius: 4, fill: "var(--color-goal)" }) }) }) })] }), (0, jsx_runtime_1.jsx)(card_1.CardFooter, { children: (0, jsx_runtime_1.jsx)(button_1.Button, { className: "w-full", children: "Set Goal" }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktZ29hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvYWN0aXZpdHktZ29hbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBa0ViLDhDQTBEQztJQTNHRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtLQUNGLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRztRQUNsQixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxxQkFBcUI7U0FDN0I7S0FDb0IsQ0FBQztJQUV4QixTQUFnQixpQkFBaUI7UUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLFNBQVMsT0FBTyxDQUFDLFVBQWtCO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxPQUFPLENBQ0wsd0JBQUMsV0FBSSxlQUNILHdCQUFDLGlCQUFVLElBQUMsU0FBUyxFQUFDLE1BQU0sYUFDMUIsdUJBQUMsZ0JBQVMsNEJBQXNCLEVBQ2hDLHVCQUFDLHNCQUFlLGdEQUFnRCxJQUNyRCxFQUNiLHdCQUFDLGtCQUFXLElBQUMsU0FBUyxFQUFDLE1BQU0sYUFDM0IsaUNBQUssU0FBUyxFQUFDLDRDQUE0QyxhQUN6RCx3QkFBQyxlQUFNLElBQ0wsT0FBTyxFQUFDLFNBQVMsRUFDakIsSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsK0JBQStCLEVBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDM0IsUUFBUSxFQUFFLElBQUksSUFBSSxHQUFHLGFBRXJCLHVCQUFDLG9CQUFLLEtBQUcsRUFDVCxpQ0FBTSxTQUFTLEVBQUMsU0FBUyx5QkFBZ0IsSUFDbEMsRUFDVCxpQ0FBSyxTQUFTLEVBQUMsb0JBQW9CLGFBQ2pDLGdDQUFLLFNBQVMsRUFBQyxxQ0FBcUMsWUFBRSxJQUFJLEdBQU8sRUFDakUsZ0NBQUssU0FBUyxFQUFDLGdEQUFnRCw2QkFFekQsSUFDRixFQUNOLHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQywrQkFBK0IsRUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDMUIsUUFBUSxFQUFFLElBQUksSUFBSSxHQUFHLGFBRXJCLHVCQUFDLG1CQUFJLEtBQUcsRUFDUixpQ0FBTSxTQUFTLEVBQUMsU0FBUyx5QkFBZ0IsSUFDbEMsSUFDTCxFQUNOLGdDQUFLLFNBQVMsRUFBQyxlQUFlLFlBQzVCLHVCQUFDLHNCQUFjLElBQ2IsTUFBTSxFQUFFLFdBQVcsRUFDbkIsU0FBUyxFQUFDLDJCQUEyQixZQUVyQyx1QkFBQyxtQkFBUSxJQUFDLElBQUksRUFBRSxJQUFJLFlBQ2xCLHVCQUFDLGNBQUcsSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixHQUFHLEdBQ2pELEdBQ0ksR0FDYixJQUNNLEVBQ2QsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsU0FBUyxFQUFDLFFBQVEseUJBQWtCLEdBQ2pDLElBQ1IsQ0FDUixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1pbnVzLCBQbHVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQmFyLCBCYXJDaGFydCB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmREZXNjcmlwdGlvbixcbiAgQ2FyZEZvb3RlcixcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZFRpdGxlLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IENoYXJ0Q29uZmlnLCBDaGFydENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGdvYWw6IDQwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDI3OCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDE4OSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIzOSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDI3OCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDE4OSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDM0OSxcbiAgfSxcbl07XG5cbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xuICBnb2FsOiB7XG4gICAgbGFiZWw6IFwiR29hbFwiLFxuICAgIGNvbG9yOiBcImhzbCh2YXIoLS1wcmltYXJ5KSlcIixcbiAgfSxcbn0gc2F0aXNmaWVzIENoYXJ0Q29uZmlnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZHNBY3Rpdml0eUdvYWwoKSB7XG4gIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IFJlYWN0LnVzZVN0YXRlKDM1MCk7XG5cbiAgZnVuY3Rpb24gb25DbGljayhhZGp1c3RtZW50OiBudW1iZXIpIHtcbiAgICBzZXRHb2FsKE1hdGgubWF4KDIwMCwgTWF0aC5taW4oNDAwLCBnb2FsICsgYWRqdXN0bWVudCkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgIDxDYXJkVGl0bGU+TW92ZSBHb2FsPC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24+U2V0IHlvdXIgZGFpbHkgYWN0aXZpdHkgZ29hbC48L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCBzaHJpbmstMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygtMTApfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2dvYWwgPD0gMjAwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNaW51cyAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkRlY3JlYXNlPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyXCI+e2dvYWx9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzAuNzByZW1dIHVwcGVyY2FzZSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgQ2Fsb3JpZXMvZGF5XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IHNocmluay0wIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKDEwKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtnb2FsID49IDQwMH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkluY3JlYXNlPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIGgtWzYwcHhdXCI+XG4gICAgICAgICAgPENoYXJ0Q29udGFpbmVyXG4gICAgICAgICAgICBjb25maWc9e2NoYXJ0Q29uZmlnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LWF1dG8gaC1mdWxsIHctZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2RhdGF9PlxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJnb2FsXCIgcmFkaXVzPXs0fSBmaWxsPVwidmFyKC0tY29sb3ItZ29hbClcIiAvPlxuICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5TZXQgR29hbDwvQnV0dG9uPlxuICAgICAgPC9DYXJkRm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==