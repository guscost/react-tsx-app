// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* global styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;
    document.head.appendChild(globalStyles);
})();
// Set the tailwind v3 config on the window object
window.tailwind.config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    // Interpolate the tailwindcss-animate plugin
    plugins: [
        window.tailwind.plugin(({ addUtilities, matchUtilities, theme }) => {
            addUtilities({
                "@keyframes enter": theme("keyframes.enter"),
                "@keyframes exit": theme("keyframes.exit"),
                ".animate-in": {
                    animationName: "enter",
                    animationDuration: theme("animationDuration.DEFAULT"),
                    "--tw-enter-opacity": "initial",
                    "--tw-enter-scale": "initial",
                    "--tw-enter-rotate": "initial",
                    "--tw-enter-translate-x": "initial",
                    "--tw-enter-translate-y": "initial",
                },
                ".animate-out": {
                    animationName: "exit",
                    animationDuration: theme("animationDuration.DEFAULT"),
                    "--tw-exit-opacity": "initial",
                    "--tw-exit-scale": "initial",
                    "--tw-exit-rotate": "initial",
                    "--tw-exit-translate-x": "initial",
                    "--tw-exit-translate-y": "initial",
                },
            });
            matchUtilities({
                "fade-in": (value) => ({ "--tw-enter-opacity": value }),
                "fade-out": (value) => ({ "--tw-exit-opacity": value }),
            }, { values: theme("animationOpacity") });
            matchUtilities({
                "zoom-in": (value) => ({ "--tw-enter-scale": value }),
                "zoom-out": (value) => ({ "--tw-exit-scale": value }),
            }, { values: theme("animationScale") });
            matchUtilities({
                "spin-in": (value) => ({ "--tw-enter-rotate": value }),
                "spin-out": (value) => ({ "--tw-exit-rotate": value }),
            }, { values: theme("animationRotate") });
            matchUtilities({
                "slide-in-from-top": (value) => ({
                    "--tw-enter-translate-y": `-${value}`,
                }),
                "slide-in-from-bottom": (value) => ({
                    "--tw-enter-translate-y": value,
                }),
                "slide-in-from-left": (value) => ({
                    "--tw-enter-translate-x": `-${value}`,
                }),
                "slide-in-from-right": (value) => ({
                    "--tw-enter-translate-x": value,
                }),
                "slide-out-to-top": (value) => ({
                    "--tw-exit-translate-y": `-${value}`,
                }),
                "slide-out-to-bottom": (value) => ({
                    "--tw-exit-translate-y": value,
                }),
                "slide-out-to-left": (value) => ({
                    "--tw-exit-translate-x": `-${value}`,
                }),
                "slide-out-to-right": (value) => ({
                    "--tw-exit-translate-x": value,
                }),
            }, { values: theme("animationTranslate") });
            matchUtilities({ duration: (value) => ({ animationDuration: value }) }, {
                values: Object.fromEntries(Object.entries(theme("animationDuration")).filter(([key]) => key !== "DEFAULT")),
            });
            matchUtilities({ delay: (value) => ({ animationDelay: value }) }, { values: theme("animationDelay") });
            matchUtilities({ ease: (value) => ({ animationTimingFunction: value }) }, {
                values: Object.fromEntries(Object.entries(theme("animationTimingFunction")).filter(([key]) => key !== "DEFAULT")),
            });
            addUtilities({
                ".running": { animationPlayState: "running" },
                ".paused": { animationPlayState: "paused" },
            });
            matchUtilities({ "fill-mode": (value) => ({ animationFillMode: value }) }, { values: theme("animationFillMode") });
            matchUtilities({ direction: (value) => ({ animationDirection: value }) }, { values: theme("animationDirection") });
            matchUtilities({ repeat: (value) => ({ animationIterationCount: value }) }, { values: theme("animationRepeat") });
        }, {
            theme: {
                extend: {
                    animationDelay: ({ theme }) => ({
                        ...theme("transitionDelay"),
                    }),
                    animationDuration: ({ theme }) => ({
                        0: "0ms",
                        ...theme("transitionDuration"),
                    }),
                    animationTimingFunction: ({ theme }) => ({
                        ...theme("transitionTimingFunction"),
                    }),
                    animationFillMode: {
                        none: "none",
                        forwards: "forwards",
                        backwards: "backwards",
                        both: "both",
                    },
                    animationDirection: {
                        normal: "normal",
                        reverse: "reverse",
                        alternate: "alternate",
                        "alternate-reverse": "alternate-reverse",
                    },
                    animationOpacity: ({ theme }) => ({
                        DEFAULT: 0,
                        ...theme("opacity"),
                    }),
                    animationTranslate: ({ theme }) => ({
                        DEFAULT: "100%",
                        ...theme("translate"),
                    }),
                    animationScale: ({ theme }) => ({
                        DEFAULT: 0,
                        ...theme("scale"),
                    }),
                    animationRotate: ({ theme }) => ({
                        DEFAULT: "30deg",
                        ...theme("rotate"),
                    }),
                    animationRepeat: {
                        0: "0",
                        1: "1",
                        infinite: "infinite",
                    },
                    keyframes: {
                        enter: {
                            from: {
                                opacity: "var(--tw-enter-opacity, 1)",
                                transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))",
                            },
                        },
                        exit: {
                            to: {
                                opacity: "var(--tw-exit-opacity, 1)",
                                transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))",
                            },
                        },
                    },
                },
            },
        }),
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5RjFCLENBQUM7SUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsa0RBQWtEO0FBQ2pELE1BQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHO0lBQ2hDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNuQixPQUFPLEVBQUU7UUFDUCxrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLGdDQUFnQztLQUNqQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsVUFBVSxFQUFFLDZCQUE2QjtpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFVBQVUsRUFBRSxnQ0FBZ0M7aUJBQzdDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsZ0NBQWdDO2lCQUM3QztnQkFDRCxTQUFT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LENBQUM7b0JBQ0YsY0FBYyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLENBQUM7d0JBQ1YsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO3FCQUNsQixDQUFDO29CQUNGLGVBQWUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3BDLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7cUJBQ25CLENBQUM7b0JBQ0YsZUFBZSxFQUFFO3dCQUNmLENBQUMsRUFBRSxHQUFHO3dCQUNOLENBQUMsRUFBRSxHQUFHO3dCQUNOLFFBQVEsRUFBRSxVQUFVO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRTtnQ0FDSixPQUFPLEVBQUUsNEJBQTRCO2dDQUNyQyxTQUFTLEVBQ1Asd01BQXdNOzZCQUMzTTt5QkFDRjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osRUFBRSxFQUFFO2dDQUNGLE9BQU8sRUFBRSwyQkFBMkI7Z0NBQ3BDLFNBQVMsRUFDUCxrTUFBa007NkJBQ3JNO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwZW5kIGdsb2JhbCB0YWlsd2luZCBzdHlsZXNoZWV0XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWxTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGdsb2JhbFN0eWxlcy50eXBlID0gXCJ0ZXh0L3RhaWx3aW5kY3NzXCI7XG4gIGdsb2JhbFN0eWxlcy5pbm5lckhUTUwgPSBgLyogZ2xvYmFsIHN0eWxlcyAqL1xuQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuQGxheWVyIGJhc2Uge1xuICA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAwIDAlIDEwMCU7XG4gICAgLS1mb3JlZ3JvdW5kOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1jYXJkOiAwIDAlIDEwMCU7XG4gICAgLS1jYXJkLWZvcmVncm91bmQ6IDI0MCAxMCUgMy45JTtcbiAgICAtLXBvcG92ZXI6IDAgMCUgMTAwJTtcbiAgICAtLXBvcG92ZXItZm9yZWdyb3VuZDogMjQwIDEwJSAzLjklO1xuICAgIC0tcHJpbWFyeTogMjQwIDUuOSUgMTAlO1xuICAgIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLXNlY29uZGFyeTogMjQwIDQuOCUgOTUuOSU7XG4gICAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tbXV0ZWQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tbXV0ZWQtZm9yZWdyb3VuZDogMjQwIDMuOCUgNDYuMSU7XG4gICAgLS1hY2NlbnQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tYWNjZW50LWZvcmVncm91bmQ6IDI0MCA1LjklIDEwJTtcbiAgICAtLWRlc3RydWN0aXZlOiAwIDg0LjIlIDYwLjIlO1xuICAgIC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1ib3JkZXI6IDI0MCA1LjklIDkwJTtcbiAgICAtLWlucHV0OiAyNDAgNS45JSA5MCU7XG4gICAgLS1yaW5nOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1jaGFydC0xOiAxMiA3NiUgNjElO1xuICAgIC0tY2hhcnQtMjogMTczIDU4JSAzOSU7XG4gICAgLS1jaGFydC0zOiAxOTcgMzclIDI0JTtcbiAgICAtLWNoYXJ0LTQ6IDQzIDc0JSA2NiU7XG4gICAgLS1jaGFydC01OiAyNyA4NyUgNjclO1xuICAgIC0tcmFkaXVzOiAwLjVyZW07XG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiAyNDAgNS4zJSAyNi4xJTtcbiAgICAtLXNpZGViYXItcHJpbWFyeTogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tc2lkZWJhci1hY2NlbnQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1ib3JkZXI6IDIyMCAxMyUgOTElO1xuICAgIC0tc2lkZWJhci1yaW5nOiAyMTcuMiA5MS4yJSA1OS44JTtcbiAgfVxuICAuZGFyayB7XG4gICAgLS1iYWNrZ3JvdW5kOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLWNhcmQ6IDI0MCAxMCUgMy45JTtcbiAgICAtLWNhcmQtZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1wb3BvdmVyOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tcHJpbWFyeTogMCAwJSA5OCU7XG4gICAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IDI0MCA1LjklIDEwJTtcbiAgICAtLXNlY29uZGFyeTogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1tdXRlZDogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1tdXRlZC1mb3JlZ3JvdW5kOiAyNDAgNSUgNjQuOSU7XG4gICAgLS1hY2NlbnQ6IDI0MCAzLjclIDE1LjklO1xuICAgIC0tYWNjZW50LWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tZGVzdHJ1Y3RpdmU6IDAgNjIuOCUgMzAuNiU7XG4gICAgLS1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLWJvcmRlcjogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1pbnB1dDogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1yaW5nOiAyNDAgNC45JSA4My45JTtcbiAgICAtLWNoYXJ0LTE6IDIyMCA3MCUgNTAlO1xuICAgIC0tY2hhcnQtMjogMTYwIDYwJSA0NSU7XG4gICAgLS1jaGFydC0zOiAzMCA4MCUgNTUlO1xuICAgIC0tY2hhcnQtNDogMjgwIDY1JSA2MCU7XG4gICAgLS1jaGFydC01OiAzNDAgNzUlIDU1JTtcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiAyNDAgNC44JSA5NS45JTtcbiAgICAtLXNpZGViYXItcHJpbWFyeTogMjI0LjMgNzYuMyUgNDglO1xuICAgIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgMTAwJTtcbiAgICAtLXNpZGViYXItYWNjZW50OiAyNDAgMy43JSAxNS45JTtcbiAgICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tc2lkZWJhci1ib3JkZXI6IDI0MCAzLjclIDE1LjklO1xuICAgIC0tc2lkZWJhci1yaW5nOiAyMTcuMiA5MS4yJSA1OS44JTtcbiAgfVxufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcblxuLy8gU2V0IHRoZSB0YWlsd2luZCB2MyBjb25maWcgb24gdGhlIHdpbmRvdyBvYmplY3Rcbih3aW5kb3cgYXMgYW55KS50YWlsd2luZC5jb25maWcgPSB7XG4gIGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcbiAgY29udGVudDogW1xuICAgIFwiLi9wYWdlcy8qKi8qLntqcyx0cyxqc3gsdHN4LG1keH1cIixcbiAgICBcIi4vY29tcG9uZW50cy8qKi8qLntqcyx0cyxqc3gsdHN4LG1keH1cIixcbiAgICBcIi4vYXBwLyoqLyoue2pzLHRzLGpzeCx0c3gsbWR4fVwiLFxuICBdLFxuICB0aGVtZToge1xuICAgIGV4dGVuZDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiaHNsKHZhcigtLWJhY2tncm91bmQpKVwiLFxuICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLWNhcmQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWNhcmQtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBvcG92ZXI6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1wb3BvdmVyKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tc2Vjb25kYXJ5KSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG11dGVkOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tbXV0ZWQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLW11dGVkLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBhY2NlbnQ6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1hY2NlbnQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJ1Y3RpdmU6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1kZXN0cnVjdGl2ZSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tYm9yZGVyKSlcIixcbiAgICAgICAgaW5wdXQ6IFwiaHNsKHZhcigtLWlucHV0KSlcIixcbiAgICAgICAgcmluZzogXCJoc2wodmFyKC0tcmluZykpXCIsXG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgXCIxXCI6IFwiaHNsKHZhcigtLWNoYXJ0LTEpKVwiLFxuICAgICAgICAgIFwiMlwiOiBcImhzbCh2YXIoLS1jaGFydC0yKSlcIixcbiAgICAgICAgICBcIjNcIjogXCJoc2wodmFyKC0tY2hhcnQtMykpXCIsXG4gICAgICAgICAgXCI0XCI6IFwiaHNsKHZhcigtLWNoYXJ0LTQpKVwiLFxuICAgICAgICAgIFwiNVwiOiBcImhzbCh2YXIoLS1jaGFydC01KSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNpZGViYXItYmFja2dyb3VuZCkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBwcmltYXJ5OiBcImhzbCh2YXIoLS1zaWRlYmFyLXByaW1hcnkpKVwiLFxuICAgICAgICAgIFwicHJpbWFyeS1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBhY2NlbnQ6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50KSlcIixcbiAgICAgICAgICBcImFjY2VudC1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpKVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpKVwiLFxuICAgICAgICAgIHJpbmc6IFwiaHNsKHZhcigtLXNpZGViYXItcmluZykpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIGxnOiBcInZhcigtLXJhZGl1cylcIixcbiAgICAgICAgbWQ6IFwiY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KVwiLFxuICAgICAgICBzbTogXCJjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpXCIsXG4gICAgICB9LFxuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjoge1xuICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiB7XG4gICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjogXCJhY2NvcmRpb24tZG93biAwLjJzIGVhc2Utb3V0XCIsXG4gICAgICAgIFwiYWNjb3JkaW9uLXVwXCI6IFwiYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBJbnRlcnBvbGF0ZSB0aGUgdGFpbHdpbmRjc3MtYW5pbWF0ZSBwbHVnaW5cbiAgcGx1Z2luczogW1xuICAgICh3aW5kb3cgYXMgYW55KS50YWlsd2luZC5wbHVnaW4oXG4gICAgICAoeyBhZGRVdGlsaXRpZXMsIG1hdGNoVXRpbGl0aWVzLCB0aGVtZSB9OiBhbnkpID0+IHtcbiAgICAgICAgYWRkVXRpbGl0aWVzKHtcbiAgICAgICAgICBcIkBrZXlmcmFtZXMgZW50ZXJcIjogdGhlbWUoXCJrZXlmcmFtZXMuZW50ZXJcIiksXG4gICAgICAgICAgXCJAa2V5ZnJhbWVzIGV4aXRcIjogdGhlbWUoXCJrZXlmcmFtZXMuZXhpdFwiKSxcbiAgICAgICAgICBcIi5hbmltYXRlLWluXCI6IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6IFwiZW50ZXJcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGVtZShcImFuaW1hdGlvbkR1cmF0aW9uLkRFRkFVTFRcIiksXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItb3BhY2l0eVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1lbnRlci1zY2FsZVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1lbnRlci1yb3RhdGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXhcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXlcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIi5hbmltYXRlLW91dFwiOiB7XG4gICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImV4aXRcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGVtZShcImFuaW1hdGlvbkR1cmF0aW9uLkRFRkFVTFRcIiksXG4gICAgICAgICAgICBcIi0tdHctZXhpdC1vcGFjaXR5XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWV4aXQtc2NhbGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZXhpdC1yb3RhdGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZXhpdC10cmFuc2xhdGUteFwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS15XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImZhZGUtaW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1vcGFjaXR5XCI6IHZhbHVlIH0pLFxuICAgICAgICAgICAgXCJmYWRlLW91dFwiOiAodmFsdWU6IGFueSkgPT4gKHsgXCItLXR3LWV4aXQtb3BhY2l0eVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbk9wYWNpdHlcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInpvb20taW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1zY2FsZVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICAgIFwiem9vbS1vdXRcIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1leGl0LXNjYWxlXCI6IHZhbHVlIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uU2NhbGVcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNwaW4taW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1yb3RhdGVcIjogdmFsdWUgfSksXG4gICAgICAgICAgICBcInNwaW4tb3V0XCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZXhpdC1yb3RhdGVcIjogdmFsdWUgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25Sb3RhdGVcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNsaWRlLWluLWZyb20tdG9wXCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXlcIjogYC0ke3ZhbHVlfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtaW4tZnJvbS1ib3R0b21cIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1lbnRlci10cmFuc2xhdGUteVwiOiB2YWx1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJzbGlkZS1pbi1mcm9tLWxlZnRcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1lbnRlci10cmFuc2xhdGUteFwiOiBgLSR7dmFsdWV9YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJzbGlkZS1pbi1mcm9tLXJpZ2h0XCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXhcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLXRvcFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXlcIjogYC0ke3ZhbHVlfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLWJvdHRvbVwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXlcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLWxlZnRcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS14XCI6IGAtJHt2YWx1ZX1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLW91dC10by1yaWdodFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXhcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvblRyYW5zbGF0ZVwiKSB9LFxuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgZHVyYXRpb246ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25EdXJhdGlvbjogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWUoXCJhbmltYXRpb25EdXJhdGlvblwiKSkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChba2V5XSkgPT4ga2V5ICE9PSBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IGRlbGF5OiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uRGVsYXk6IHZhbHVlIH0pIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uRGVsYXlcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IGVhc2U6ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWUoXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiKSkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChba2V5XSkgPT4ga2V5ICE9PSBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRVdGlsaXRpZXMoe1xuICAgICAgICAgIFwiLnJ1bm5pbmdcIjogeyBhbmltYXRpb25QbGF5U3RhdGU6IFwicnVubmluZ1wiIH0sXG4gICAgICAgICAgXCIucGF1c2VkXCI6IHsgYW5pbWF0aW9uUGxheVN0YXRlOiBcInBhdXNlZFwiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgXCJmaWxsLW1vZGVcIjogKHZhbHVlOiBhbnkpID0+ICh7IGFuaW1hdGlvbkZpbGxNb2RlOiB2YWx1ZSB9KSB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbkZpbGxNb2RlXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyBkaXJlY3Rpb246ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25EaXJlY3Rpb246IHZhbHVlIH0pIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uRGlyZWN0aW9uXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyByZXBlYXQ6ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25SZXBlYXRcIikgfSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgZXh0ZW5kOiB7XG4gICAgICAgICAgICBhbmltYXRpb25EZWxheTogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAuLi50aGVtZShcInRyYW5zaXRpb25EZWxheVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICh7IHRoZW1lIH06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgMDogXCIwbXNcIixcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRpb25GaWxsTW9kZToge1xuICAgICAgICAgICAgICBub25lOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZm9yd2FyZHM6IFwiZm9yd2FyZHNcIixcbiAgICAgICAgICAgICAgYmFja3dhcmRzOiBcImJhY2t3YXJkc1wiLFxuICAgICAgICAgICAgICBib3RoOiBcImJvdGhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgbm9ybWFsOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICByZXZlcnNlOiBcInJldmVyc2VcIixcbiAgICAgICAgICAgICAgYWx0ZXJuYXRlOiBcImFsdGVybmF0ZVwiLFxuICAgICAgICAgICAgICBcImFsdGVybmF0ZS1yZXZlcnNlXCI6IFwiYWx0ZXJuYXRlLXJldmVyc2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb25PcGFjaXR5OiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IDAsXG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwib3BhY2l0eVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uVHJhbnNsYXRlOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAuLi50aGVtZShcInRyYW5zbGF0ZVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uU2NhbGU6ICh7IHRoZW1lIH06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgREVGQVVMVDogMCxcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJzY2FsZVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uUm90YXRlOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IFwiMzBkZWdcIixcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJyb3RhdGVcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJlcGVhdDoge1xuICAgICAgICAgICAgICAwOiBcIjBcIixcbiAgICAgICAgICAgICAgMTogXCIxXCIsXG4gICAgICAgICAgICAgIGluZmluaXRlOiBcImluZmluaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJ2YXIoLS10dy1lbnRlci1vcGFjaXR5LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKSBzY2FsZTNkKHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSkpIHJvdGF0ZSh2YXIoLS10dy1lbnRlci1yb3RhdGUsIDApKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4aXQ6IHtcbiAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJ2YXIoLS10dy1leGl0LW9wYWNpdHksIDEpXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlM2QodmFyKC0tdHctZXhpdC10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXksIDApLCAwKSBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpIHJvdGF0ZSh2YXIoLS10dy1leGl0LXJvdGF0ZSwgMCkpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKSxcbiAgXSxcbn07XG4iXX0=