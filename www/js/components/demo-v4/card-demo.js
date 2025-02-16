define(["require", "exports", "react/jsx-runtime", "lucide-react", "@/components/ui/avatar", "@/components/ui/badge", "@/components/ui/button", "@/components/ui/card", "@/components/ui/input", "@/components/ui/label"], function (require, exports, jsx_runtime_1, lucide_react_1, avatar_1, badge_1, button_1, card_1, input_1, label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardDemo = CardDemo;
    function CardDemo() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-start gap-4", children: [(0, jsx_runtime_1.jsx)(card_1.Card, { children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Login to your account" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Enter your email below to login to your account" })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid gap-2", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "email", type: "email", placeholder: "m@example.com", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid gap-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("a", { href: "#", className: "ml-auto inline-block text-sm underline-offset-4 hover:underline", children: "Forgot your password?" })] }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "password", type: "password", required: true })] })] }) }), (0, jsx_runtime_1.jsxs)(card_1.CardFooter, { className: "flex-col gap-2", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", className: "w-full", children: "Login" }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", className: "w-full", children: "Login with Google" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-center text-sm", children: ["Don't have an account?", " ", (0, jsx_runtime_1.jsx)("a", { href: "#", className: "underline underline-offset-4", children: "Sign up" })] })] })] }) }), (0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Meeting Notes" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Transcript from the meeting with the client." })] }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "text-sm", children: [(0, jsx_runtime_1.jsx)("p", { children: "Client requested dashboard redesign with focus on mobile responsiveness." }), (0, jsx_runtime_1.jsxs)("ol", { className: "mt-4 flex list-decimal flex-col gap-2 pl-6", children: [(0, jsx_runtime_1.jsx)("li", { children: "New analytics widgets for daily/weekly metrics" }), (0, jsx_runtime_1.jsx)("li", { children: "Simplified navigation menu" }), (0, jsx_runtime_1.jsx)("li", { children: "Dark mode support" }), (0, jsx_runtime_1.jsx)("li", { children: "Timeline: 6 weeks" }), (0, jsx_runtime_1.jsx)("li", { children: "Follow-up meeting scheduled for next Tuesday" })] })] }), (0, jsx_runtime_1.jsx)(card_1.CardFooter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "CN" })] }), (0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "https://github.com/leerob.png", alt: "@leerob" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "LR" })] }), (0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "https://github.com/evilrabbit.png", alt: "@evilrabbit" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "ER" })] })] }) })] }), (0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Is this an image?" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "This is a card with an image." })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "p-0", children: (0, jsx_runtime_1.jsx)("img", { src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80", alt: "Photo by Drew Beamer", className: "aspect-video object-cover", width: 500, height: 500 }) }), (0, jsx_runtime_1.jsxs)(card_1.CardFooter, { className: "flex items-center gap-2 p-6", children: [(0, jsx_runtime_1.jsxs)(badge_1.Badge, { variant: "outline", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.BedIcon, {}), " 4"] }), (0, jsx_runtime_1.jsxs)(badge_1.Badge, { variant: "outline", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.BathIcon, {}), " 2"] }), (0, jsx_runtime_1.jsxs)(badge_1.Badge, { variant: "outline", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.LandPlotIcon, {}), " 350m\u00B2"] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto font-medium tabular-nums", children: "$135,000" })] })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZGVtby12NC9jYXJkLWRlbW8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQWdCQSw0QkF5SEM7SUF6SEQsU0FBZ0IsUUFBUTtRQUN0QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLGlDQUFpQyxhQUM5Qyx1QkFBQyxXQUFJLGNBQ0gsNkNBQ0Usd0JBQUMsaUJBQVUsZUFDVCx1QkFBQyxnQkFBUyx3Q0FBa0MsRUFDNUMsdUJBQUMsc0JBQWUsa0VBRUUsSUFDUCxFQUNiLHVCQUFDLGtCQUFXLGNBQ1YsaUNBQUssU0FBUyxFQUFDLHFCQUFxQixhQUNsQyxpQ0FBSyxTQUFTLEVBQUMsWUFBWSxhQUN6Qix1QkFBQyxhQUFLLElBQUMsT0FBTyxFQUFDLE9BQU8sc0JBQWMsRUFDcEMsdUJBQUMsYUFBSyxJQUNKLEVBQUUsRUFBQyxPQUFPLEVBQ1YsSUFBSSxFQUFDLE9BQU8sRUFDWixXQUFXLEVBQUMsZUFBZSxFQUMzQixRQUFRLFNBQ1IsSUFDRSxFQUNOLGlDQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3pCLGlDQUFLLFNBQVMsRUFBQyxtQkFBbUIsYUFDaEMsdUJBQUMsYUFBSyxJQUFDLE9BQU8sRUFBQyxVQUFVLHlCQUFpQixFQUMxQyw4QkFDRSxJQUFJLEVBQUMsR0FBRyxFQUNSLFNBQVMsRUFBQyxpRUFBaUUsc0NBR3pFLElBQ0EsRUFDTix1QkFBQyxhQUFLLElBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFFBQVEsU0FBRyxJQUM1QyxJQUNGLEdBQ00sRUFDZCx3QkFBQyxpQkFBVSxJQUFDLFNBQVMsRUFBQyxnQkFBZ0IsYUFDcEMsdUJBQUMsZUFBTSxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFFBQVEsc0JBRS9CLEVBQ1QsdUJBQUMsZUFBTSxJQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsa0NBRW5DLEVBQ1QsaUNBQUssU0FBUyxFQUFDLDBCQUEwQix1Q0FDWCxHQUFHLEVBQy9CLDhCQUFHLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLDhCQUE4Qix3QkFFaEQsSUFDQSxJQUNLLElBQ1IsR0FDRixFQUNQLHdCQUFDLFdBQUksZUFDSCx3QkFBQyxpQkFBVSxlQUNULHVCQUFDLGdCQUFTLGdDQUEwQixFQUNwQyx1QkFBQyxzQkFBZSwrREFFRSxJQUNQLEVBQ2Isd0JBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsU0FBUyxhQUM5QixxSEFHSSxFQUNKLGdDQUFJLFNBQVMsRUFBQyw0Q0FBNEMsYUFDeEQsNEZBQXVELEVBQ3ZELHdFQUFtQyxFQUNuQywrREFBMEIsRUFDMUIsK0RBQTBCLEVBQzFCLDBGQUFxRCxJQUNsRCxJQUNPLEVBQ2QsdUJBQUMsaUJBQVUsY0FDVCxpQ0FBSyxTQUFTLEVBQUMsaUhBQWlILGFBQzlILHdCQUFDLGVBQU0sZUFDTCx1QkFBQyxvQkFBVyxJQUFDLEdBQUcsRUFBQywrQkFBK0IsRUFBQyxHQUFHLEVBQUMsU0FBUyxHQUFHLEVBQ2pFLHVCQUFDLHVCQUFjLHFCQUFvQixJQUM1QixFQUNULHdCQUFDLGVBQU0sZUFDTCx1QkFBQyxvQkFBVyxJQUFDLEdBQUcsRUFBQywrQkFBK0IsRUFBQyxHQUFHLEVBQUMsU0FBUyxHQUFHLEVBQ2pFLHVCQUFDLHVCQUFjLHFCQUFvQixJQUM1QixFQUNULHdCQUFDLGVBQU0sZUFDTCx1QkFBQyxvQkFBVyxJQUNWLEdBQUcsRUFBQyxtQ0FBbUMsRUFDdkMsR0FBRyxFQUFDLGFBQWEsR0FDakIsRUFDRix1QkFBQyx1QkFBYyxxQkFBb0IsSUFDNUIsSUFDTCxHQUNLLElBQ1IsRUFDUCx3QkFBQyxXQUFJLGVBQ0gsd0JBQUMsaUJBQVUsZUFDVCx1QkFBQyxnQkFBUyxvQ0FBOEIsRUFDeEMsdUJBQUMsc0JBQWUsZ0RBQWdELElBQ3JELEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsS0FBSyxZQUMxQixnQ0FDRSxHQUFHLEVBQUMsK0VBQStFLEVBQ25GLEdBQUcsRUFBQyxzQkFBc0IsRUFDMUIsU0FBUyxFQUFDLDJCQUEyQixFQUNyQyxLQUFLLEVBQUUsR0FBRyxFQUNWLE1BQU0sRUFBRSxHQUFHLEdBQ1gsR0FDVSxFQUNkLHdCQUFDLGlCQUFVLElBQUMsU0FBUyxFQUFDLDZCQUE2QixhQUNqRCx3QkFBQyxhQUFLLElBQUMsT0FBTyxFQUFDLFNBQVMsYUFDdEIsdUJBQUMsc0JBQU8sS0FBRyxVQUNMLEVBQ1Isd0JBQUMsYUFBSyxJQUFDLE9BQU8sRUFBQyxTQUFTLGFBQ3RCLHVCQUFDLHVCQUFRLEtBQUcsVUFDTixFQUNSLHdCQUFDLGFBQUssSUFBQyxPQUFPLEVBQUMsU0FBUyxhQUN0Qix1QkFBQywyQkFBWSxLQUFHLG1CQUNWLEVBQ1IsZ0NBQUssU0FBUyxFQUFDLGtDQUFrQyx5QkFBZSxJQUNyRCxJQUNSLElBQ0gsQ0FDUCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhdGhJY29uLCBCZWRJY29uLCBMYW5kUGxvdEljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZERlbW8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPkxvZ2luIHRvIHlvdXIgYWNjb3VudDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgRW50ZXIgeW91ciBlbWFpbCBiZWxvdyB0byBsb2dpbiB0byB5b3VyIGFjY291bnRcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibUBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvIGlubGluZS1ibG9jayB0ZXh0LXNtIHVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgTG9naW4gd2l0aCBHb29nbGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIj5cbiAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkVGl0bGU+TWVldGluZyBOb3RlczwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICBUcmFuc2NyaXB0IGZyb20gdGhlIG1lZXRpbmcgd2l0aCB0aGUgY2xpZW50LlxuICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDbGllbnQgcmVxdWVzdGVkIGRhc2hib2FyZCByZWRlc2lnbiB3aXRoIGZvY3VzIG9uIG1vYmlsZVxuICAgICAgICAgICAgcmVzcG9uc2l2ZW5lc3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJtdC00IGZsZXggbGlzdC1kZWNpbWFsIGZsZXgtY29sIGdhcC0yIHBsLTZcIj5cbiAgICAgICAgICAgIDxsaT5OZXcgYW5hbHl0aWNzIHdpZGdldHMgZm9yIGRhaWx5L3dlZWtseSBtZXRyaWNzPC9saT5cbiAgICAgICAgICAgIDxsaT5TaW1wbGlmaWVkIG5hdmlnYXRpb24gbWVudTwvbGk+XG4gICAgICAgICAgICA8bGk+RGFyayBtb2RlIHN1cHBvcnQ8L2xpPlxuICAgICAgICAgICAgPGxpPlRpbWVsaW5lOiA2IHdlZWtzPC9saT5cbiAgICAgICAgICAgIDxsaT5Gb2xsb3ctdXAgbWVldGluZyBzY2hlZHVsZWQgZm9yIG5leHQgVHVlc2RheTwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIqOmRhdGEtW3Nsb3Q9YXZhdGFyXTpyaW5nLWJhY2tncm91bmQgZmxleCAtc3BhY2UteC0yICo6ZGF0YS1bc2xvdD1hdmF0YXJdOnJpbmctMiAqOmRhdGEtW3Nsb3Q9YXZhdGFyXTpncmF5c2NhbGVcIj5cbiAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vc2hhZGNuLnBuZ1wiIGFsdD1cIkBzaGFkY25cIiAvPlxuICAgICAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+Q048L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2xlZXJvYi5wbmdcIiBhbHQ9XCJAbGVlcm9iXCIgLz5cbiAgICAgICAgICAgICAgPEF2YXRhckZhbGxiYWNrPkxSPC9BdmF0YXJGYWxsYmFjaz5cbiAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgPEF2YXRhckltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2V2aWxyYWJiaXQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJAZXZpbHJhYmJpdFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBdmF0YXJGYWxsYmFjaz5FUjwvQXZhdGFyRmFsbGJhY2s+XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkVGl0bGU+SXMgdGhpcyBhbiBpbWFnZT88L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlRoaXMgaXMgYSBjYXJkIHdpdGggYW4gaW1hZ2UuPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg4MzQ1OTIxNTIzLWMyZGNkYjdmMWRjZD93PTgwMCZkcHI9MiZxPTgwXCJcbiAgICAgICAgICAgIGFsdD1cIlBob3RvIGJ5IERyZXcgQmVhbWVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtNlwiPlxuICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPEJlZEljb24gLz4gNFxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8QmF0aEljb24gLz4gMlxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8TGFuZFBsb3RJY29uIC8+IDM1MG3CslxuICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIGZvbnQtbWVkaXVtIHRhYnVsYXItbnVtc1wiPiQxMzUsMDAwPC9kaXY+XG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==