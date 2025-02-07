define(["require", "exports", "react/jsx-runtime", "recharts", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, recharts_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsStats = CardsStats;
    const data = [
        {
            revenue: 10400,
            subscription: 240,
        },
        {
            revenue: 14405,
            subscription: 300,
        },
        {
            revenue: 9400,
            subscription: 200,
        },
        {
            revenue: 8200,
            subscription: 278,
        },
        {
            revenue: 7000,
            subscription: 189,
        },
        {
            revenue: 9600,
            subscription: 239,
        },
        {
            revenue: 11244,
            subscription: 278,
        },
        {
            revenue: 26475,
            subscription: 189,
        },
    ];
    const chartConfig = {
        revenue: {
            label: "Revenue",
            color: "hsl(var(--primary))",
        },
        subscription: {
            label: "Subscriptions",
            color: "hsl(var(--primary))",
        },
    };
    function CardsStats() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-2", children: [(0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-sm font-normal", children: "Total Revenue" }) }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "pb-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-2xl font-bold", children: "$15,231.89" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-muted-foreground", children: "+20.1% from last month" }), (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "h-[80px] w-full", children: (0, jsx_runtime_1.jsx)(recharts_1.LineChart, { data: data, margin: {
                                            top: 5,
                                            right: 10,
                                            left: 10,
                                            bottom: 0,
                                        }, children: (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", strokeWidth: 2, dataKey: "revenue", stroke: "var(--color-revenue)", activeDot: {
                                                r: 6,
                                            } }) }) })] })] }), (0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-sm font-normal", children: "Subscriptions" }) }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-2xl font-bold", children: "+2350" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-muted-foreground", children: "+180.1% from last month" }), (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "mt-2 h-[80px] w-full", children: (0, jsx_runtime_1.jsx)(recharts_1.BarChart, { data: data, children: (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "subscription", fill: "var(--color-subscription)", radius: 4 }) }) })] })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL3N0YXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFxRGIsZ0NBeURDO0lBdkdELE1BQU0sSUFBSSxHQUFHO1FBQ1g7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxHQUFHO1NBQ2xCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxxQkFBcUI7U0FDN0I7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsZUFBZTtZQUN0QixLQUFLLEVBQUUscUJBQXFCO1NBQzdCO0tBQ29CLENBQUM7SUFFeEIsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDBDQUEwQyxhQUN2RCx3QkFBQyxXQUFJLGVBQ0gsdUJBQUMsaUJBQVUsSUFBQyxTQUFTLEVBQUMsMkRBQTJELFlBQy9FLHVCQUFDLGdCQUFTLElBQUMsU0FBUyxFQUFDLHFCQUFxQiw4QkFBMEIsR0FDekQsRUFDYix3QkFBQyxrQkFBVyxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQzNCLGdDQUFLLFNBQVMsRUFBQyxvQkFBb0IsMkJBQWlCLEVBQ3BELDhCQUFHLFNBQVMsRUFBQywrQkFBK0IsdUNBRXhDLEVBQ0osdUJBQUMsc0JBQWMsSUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyxpQkFBaUIsWUFDOUQsdUJBQUMsb0JBQVMsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLE1BQU0sRUFBRTs0Q0FDTixHQUFHLEVBQUUsQ0FBQzs0Q0FDTixLQUFLLEVBQUUsRUFBRTs0Q0FDVCxJQUFJLEVBQUUsRUFBRTs0Q0FDUixNQUFNLEVBQUUsQ0FBQzt5Q0FDVixZQUVELHVCQUFDLGVBQUksSUFDSCxJQUFJLEVBQUMsVUFBVSxFQUNmLFdBQVcsRUFBRSxDQUFDLEVBQ2QsT0FBTyxFQUFDLFNBQVMsRUFDakIsTUFBTSxFQUFDLHNCQUFzQixFQUM3QixTQUFTLEVBQUU7Z0RBQ1QsQ0FBQyxFQUFFLENBQUM7NkNBQ0wsR0FDRCxHQUNRLEdBQ0csSUFDTCxJQUNULEVBQ1Asd0JBQUMsV0FBSSxlQUNILHVCQUFDLGlCQUFVLElBQUMsU0FBUyxFQUFDLDJEQUEyRCxZQUMvRSx1QkFBQyxnQkFBUyxJQUFDLFNBQVMsRUFBQyxxQkFBcUIsOEJBQTBCLEdBQ3pELEVBQ2Isd0JBQUMsa0JBQVcsZUFDVixnQ0FBSyxTQUFTLEVBQUMsb0JBQW9CLHNCQUFZLEVBQy9DLDhCQUFHLFNBQVMsRUFBQywrQkFBK0Isd0NBRXhDLEVBQ0osdUJBQUMsc0JBQWMsSUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyxzQkFBc0IsWUFDbkUsdUJBQUMsbUJBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxZQUNsQix1QkFBQyxjQUFHLElBQ0YsT0FBTyxFQUFDLGNBQWMsRUFDdEIsSUFBSSxFQUFDLDJCQUEyQixFQUNoQyxNQUFNLEVBQUUsQ0FBQyxHQUNULEdBQ08sR0FDSSxJQUNMLElBQ1QsSUFDSCxDQUNQLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEJhciwgQmFyQ2hhcnQsIExpbmUsIExpbmVDaGFydCB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBDaGFydENvbmZpZywgQ2hhcnRDb250YWluZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoYXJ0XCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICByZXZlbnVlOiAxMDQwMCxcbiAgICBzdWJzY3JpcHRpb246IDI0MCxcbiAgfSxcbiAge1xuICAgIHJldmVudWU6IDE0NDA1LFxuICAgIHN1YnNjcmlwdGlvbjogMzAwLFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogOTQwMCxcbiAgICBzdWJzY3JpcHRpb246IDIwMCxcbiAgfSxcbiAge1xuICAgIHJldmVudWU6IDgyMDAsXG4gICAgc3Vic2NyaXB0aW9uOiAyNzgsXG4gIH0sXG4gIHtcbiAgICByZXZlbnVlOiA3MDAwLFxuICAgIHN1YnNjcmlwdGlvbjogMTg5LFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogOTYwMCxcbiAgICBzdWJzY3JpcHRpb246IDIzOSxcbiAgfSxcbiAge1xuICAgIHJldmVudWU6IDExMjQ0LFxuICAgIHN1YnNjcmlwdGlvbjogMjc4LFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogMjY0NzUsXG4gICAgc3Vic2NyaXB0aW9uOiAxODksXG4gIH0sXG5dO1xuXG5jb25zdCBjaGFydENvbmZpZyA9IHtcbiAgcmV2ZW51ZToge1xuICAgIGxhYmVsOiBcIlJldmVudWVcIixcbiAgICBjb2xvcjogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gIH0sXG4gIHN1YnNjcmlwdGlvbjoge1xuICAgIGxhYmVsOiBcIlN1YnNjcmlwdGlvbnNcIixcbiAgICBjb2xvcjogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gIH0sXG59IHNhdGlzZmllcyBDaGFydENvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzU3RhdHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHNtOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0yXCI+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMCBwYi0yXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+VG90YWwgUmV2ZW51ZTwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwYi0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj4kMTUsMjMxLjg5PC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICsyMC4xJSBmcm9tIGxhc3QgbW9udGhcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPENoYXJ0Q29udGFpbmVyIGNvbmZpZz17Y2hhcnRDb25maWd9IGNsYXNzTmFtZT1cImgtWzgwcHhdIHctZnVsbFwiPlxuICAgICAgICAgICAgPExpbmVDaGFydFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBtYXJnaW49e3tcbiAgICAgICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJyZXZlbnVlXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci1yZXZlbnVlKVwiXG4gICAgICAgICAgICAgICAgYWN0aXZlRG90PXt7XG4gICAgICAgICAgICAgICAgICByOiA2LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbmVDaGFydD5cbiAgICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTAgcGItMlwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW5vcm1hbFwiPlN1YnNjcmlwdGlvbnM8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj4rMjM1MDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICArMTgwLjElIGZyb20gbGFzdCBtb250aFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Q2hhcnRDb250YWluZXIgY29uZmlnPXtjaGFydENvbmZpZ30gY2xhc3NOYW1lPVwibXQtMiBoLVs4MHB4XSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJzdWJzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1jb2xvci1zdWJzY3JpcHRpb24pXCJcbiAgICAgICAgICAgICAgICByYWRpdXM9ezR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=