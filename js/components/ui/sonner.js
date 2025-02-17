define(["require", "exports", "react/jsx-runtime", "next-themes", "sonner"], function (require, exports, jsx_runtime_1, next_themes_1, sonner_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toaster = void 0;
    const Toaster = ({ ...props }) => {
        const { theme = "system" } = (0, next_themes_1.useTheme)();
        return ((0, jsx_runtime_1.jsx)(sonner_1.Toaster, { theme: theme, className: "toaster group", toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }, ...props }));
    };
    exports.Toaster = Toaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBT2IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFnQixFQUFFLEVBQUU7UUFDN0MsTUFBTSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUV4QyxPQUFPLENBQ0wsdUJBQUMsZ0JBQU0sSUFDTCxLQUFLLEVBQUUsS0FBOEIsRUFDckMsU0FBUyxFQUFDLGVBQWUsRUFDekIsWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQ0gsdUlBQXVJO29CQUN6SSxXQUFXLEVBQUUsc0NBQXNDO29CQUNuRCxZQUFZLEVBQ1Ysa0VBQWtFO29CQUNwRSxZQUFZLEVBQ1YsOERBQThEO2lCQUNqRTthQUNGLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVPLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBUb2FzdGVyIGFzIFNvbm5lciB9IGZyb20gXCJzb25uZXJcIjtcblxudHlwZSBUb2FzdGVyUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU29ubmVyPjtcblxuY29uc3QgVG9hc3RlciA9ICh7IC4uLnByb3BzIH06IFRvYXN0ZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lID0gXCJzeXN0ZW1cIiB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTb25uZXJcbiAgICAgIHRoZW1lPXt0aGVtZSBhcyBUb2FzdGVyUHJvcHNbXCJ0aGVtZVwiXX1cbiAgICAgIGNsYXNzTmFtZT1cInRvYXN0ZXIgZ3JvdXBcIlxuICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICB0b2FzdDpcbiAgICAgICAgICAgIFwiZ3JvdXAgdG9hc3QgZ3JvdXAtWy50b2FzdGVyXTpiZy1iYWNrZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06dGV4dC1mb3JlZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06Ym9yZGVyLWJvcmRlciBncm91cC1bLnRvYXN0ZXJdOnNoYWRvdy1sZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImdyb3VwLVsudG9hc3RdOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICAgIGFjdGlvbkJ1dHRvbjpcbiAgICAgICAgICAgIFwiZ3JvdXAtWy50b2FzdF06YmctcHJpbWFyeSBncm91cC1bLnRvYXN0XTp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjpcbiAgICAgICAgICAgIFwiZ3JvdXAtWy50b2FzdF06YmctbXV0ZWQgZ3JvdXAtWy50b2FzdF06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUb2FzdGVyIH07XG4iXX0=