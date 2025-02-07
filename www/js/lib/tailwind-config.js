// Set the v3 shadcn config manually on the window object
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3hELE1BQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHO0lBQ2hDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNuQixPQUFPLEVBQUU7UUFDUCxrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLGdDQUFnQztLQUNqQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsVUFBVSxFQUFFLDZCQUE2QjtpQkFDMUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFVBQVUsRUFBRSxnQ0FBZ0M7aUJBQzdDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsZ0NBQWdDO2lCQUM3QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsVUFBVSxFQUFFLGtDQUFrQztpQkFDL0M7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSw4QkFBOEI7aUJBQzNDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixVQUFVLEVBQUUsK0JBQStCO2lCQUM1QztnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLHlCQUF5QjtvQkFDbEMsVUFBVSxFQUFFLG9DQUFvQztpQkFDakQ7Z0JBQ0QsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsS0FBSyxFQUFFLG1CQUFtQjtn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RUFBRSxVQUFVO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRTtnQ0FDSixPQUFPLEVBQUUsNEJBQTRCO2dDQUNyQyxTQUFTLEVBQ1Asd01BQXdNOzZCQUMzTTt5QkFDRjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osRUFBRSxFQUFFO2dDQUNGLE9BQU8sRUFBRSwyQkFBMkI7Z0NBQ3BDLFNBQVMsRUFDUCxrTUFBa007NkJBQ3JNO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2V0IHRoZSB2MyBzaGFkY24gY29uZmlnIG1hbnVhbGx5IG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4od2luZG93IGFzIGFueSkudGFpbHdpbmQuY29uZmlnID0ge1xuICBkYXJrTW9kZTogW1wiY2xhc3NcIl0sXG4gIGNvbnRlbnQ6IFtcbiAgICBcIi4vcGFnZXMvKiovKi57anMsdHMsanN4LHRzeCxtZHh9XCIsXG4gICAgXCIuL2NvbXBvbmVudHMvKiovKi57anMsdHMsanN4LHRzeCxtZHh9XCIsXG4gICAgXCIuL2FwcC8qKi8qLntqcyx0cyxqc3gsdHN4LG1keH1cIixcbiAgXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcImhzbCh2YXIoLS1iYWNrZ3JvdW5kKSlcIixcbiAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1jYXJkKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1jYXJkLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBwb3BvdmVyOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tcG9wb3ZlcikpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tcG9wb3Zlci1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXByaW1hcnkpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNlY29uZGFyeSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBtdXRlZDoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLW11dGVkKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZW50OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tYWNjZW50KSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1hY2NlbnQtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3RydWN0aXZlOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tZGVzdHJ1Y3RpdmUpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWRlc3RydWN0aXZlLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IFwiaHNsKHZhcigtLWJvcmRlcikpXCIsXG4gICAgICAgIGlucHV0OiBcImhzbCh2YXIoLS1pbnB1dCkpXCIsXG4gICAgICAgIHJpbmc6IFwiaHNsKHZhcigtLXJpbmcpKVwiLFxuICAgICAgICBjaGFydDoge1xuICAgICAgICAgIFwiMVwiOiBcImhzbCh2YXIoLS1jaGFydC0xKSlcIixcbiAgICAgICAgICBcIjJcIjogXCJoc2wodmFyKC0tY2hhcnQtMikpXCIsXG4gICAgICAgICAgXCIzXCI6IFwiaHNsKHZhcigtLWNoYXJ0LTMpKVwiLFxuICAgICAgICAgIFwiNFwiOiBcImhzbCh2YXIoLS1jaGFydC00KSlcIixcbiAgICAgICAgICBcIjVcIjogXCJoc2wodmFyKC0tY2hhcnQtNSkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgICAgcHJpbWFyeTogXCJoc2wodmFyKC0tc2lkZWJhci1wcmltYXJ5KSlcIixcbiAgICAgICAgICBcInByaW1hcnktZm9yZWdyb3VuZFwiOiBcImhzbCh2YXIoLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgICAgYWNjZW50OiBcImhzbCh2YXIoLS1zaWRlYmFyLWFjY2VudCkpXCIsXG4gICAgICAgICAgXCJhY2NlbnQtZm9yZWdyb3VuZFwiOiBcImhzbCh2YXIoLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBib3JkZXI6IFwiaHNsKHZhcigtLXNpZGViYXItYm9yZGVyKSlcIixcbiAgICAgICAgICByaW5nOiBcImhzbCh2YXIoLS1zaWRlYmFyLXJpbmcpKVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICBsZzogXCJ2YXIoLS1yYWRpdXMpXCIsXG4gICAgICAgIG1kOiBcImNhbGModmFyKC0tcmFkaXVzKSAtIDJweClcIixcbiAgICAgICAgc206IFwiY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KVwiLFxuICAgICAgfSxcbiAgICAgIGtleWZyYW1lczoge1xuICAgICAgICBcImFjY29yZGlvbi1kb3duXCI6IHtcbiAgICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG86IHtcbiAgICAgICAgICAgIGhlaWdodDogXCJ2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJhY2NvcmRpb24tdXBcIjoge1xuICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgIGhlaWdodDogXCJ2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBcImFjY29yZGlvbi1kb3duXCI6IFwiYWNjb3JkaW9uLWRvd24gMC4ycyBlYXNlLW91dFwiLFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiBcImFjY29yZGlvbi11cCAwLjJzIGVhc2Utb3V0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gSW50ZXJwb2xhdGUgdGhlIHRhaWx3aW5kY3NzLWFuaW1hdGUgcGx1Z2luXG4gIHBsdWdpbnM6IFtcbiAgICAod2luZG93IGFzIGFueSkudGFpbHdpbmQucGx1Z2luKFxuICAgICAgKHsgYWRkVXRpbGl0aWVzLCBtYXRjaFV0aWxpdGllcywgdGhlbWUgfTogYW55KSA9PiB7XG4gICAgICAgIGFkZFV0aWxpdGllcyh7XG4gICAgICAgICAgXCJAa2V5ZnJhbWVzIGVudGVyXCI6IHRoZW1lKFwia2V5ZnJhbWVzLmVudGVyXCIpLFxuICAgICAgICAgIFwiQGtleWZyYW1lcyBleGl0XCI6IHRoZW1lKFwia2V5ZnJhbWVzLmV4aXRcIiksXG4gICAgICAgICAgXCIuYW5pbWF0ZS1pblwiOiB7XG4gICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImVudGVyXCIsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhlbWUoXCJhbmltYXRpb25EdXJhdGlvbi5ERUZBVUxUXCIpLFxuICAgICAgICAgICAgXCItLXR3LWVudGVyLW9wYWNpdHlcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItc2NhbGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItcm90YXRlXCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWVudGVyLXRyYW5zbGF0ZS14XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWVudGVyLXRyYW5zbGF0ZS15XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIuYW5pbWF0ZS1vdXRcIjoge1xuICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogXCJleGl0XCIsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhlbWUoXCJhbmltYXRpb25EdXJhdGlvbi5ERUZBVUxUXCIpLFxuICAgICAgICAgICAgXCItLXR3LWV4aXQtb3BhY2l0eVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1leGl0LXNjYWxlXCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWV4aXQtcm90YXRlXCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXhcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZXhpdC10cmFuc2xhdGUteVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJmYWRlLWluXCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZW50ZXItb3BhY2l0eVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICAgIFwiZmFkZS1vdXRcIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1leGl0LW9wYWNpdHlcIjogdmFsdWUgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25PcGFjaXR5XCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ6b29tLWluXCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZW50ZXItc2NhbGVcIjogdmFsdWUgfSksXG4gICAgICAgICAgICBcInpvb20tb3V0XCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZXhpdC1zY2FsZVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvblNjYWxlXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzcGluLWluXCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZW50ZXItcm90YXRlXCI6IHZhbHVlIH0pLFxuICAgICAgICAgICAgXCJzcGluLW91dFwiOiAodmFsdWU6IGFueSkgPT4gKHsgXCItLXR3LWV4aXQtcm90YXRlXCI6IHZhbHVlIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uUm90YXRlXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzbGlkZS1pbi1mcm9tLXRvcFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWVudGVyLXRyYW5zbGF0ZS15XCI6IGAtJHt2YWx1ZX1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLWluLWZyb20tYm90dG9tXCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXlcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtaW4tZnJvbS1sZWZ0XCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXhcIjogYC0ke3ZhbHVlfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtaW4tZnJvbS1yaWdodFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWVudGVyLXRyYW5zbGF0ZS14XCI6IHZhbHVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLW91dC10by10b3BcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS15XCI6IGAtJHt2YWx1ZX1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLW91dC10by1ib3R0b21cIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS15XCI6IHZhbHVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLW91dC10by1sZWZ0XCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZXhpdC10cmFuc2xhdGUteFwiOiBgLSR7dmFsdWV9YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJzbGlkZS1vdXQtdG8tcmlnaHRcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS14XCI6IHZhbHVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25UcmFuc2xhdGVcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IGR1cmF0aW9uOiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uRHVyYXRpb246IHZhbHVlIH0pIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoZW1lKFwiYW5pbWF0aW9uRHVyYXRpb25cIikpLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoW2tleV0pID0+IGtleSAhPT0gXCJERUZBVUxUXCIsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyBkZWxheTogKHZhbHVlOiBhbnkpID0+ICh7IGFuaW1hdGlvbkRlbGF5OiB2YWx1ZSB9KSB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbkRlbGF5XCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyBlYXNlOiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHZhbHVlIH0pIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoZW1lKFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIikpLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoW2tleV0pID0+IGtleSAhPT0gXCJERUZBVUxUXCIsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkVXRpbGl0aWVzKHtcbiAgICAgICAgICBcIi5ydW5uaW5nXCI6IHsgYW5pbWF0aW9uUGxheVN0YXRlOiBcInJ1bm5pbmdcIiB9LFxuICAgICAgICAgIFwiLnBhdXNlZFwiOiB7IGFuaW1hdGlvblBsYXlTdGF0ZTogXCJwYXVzZWRcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IFwiZmlsbC1tb2RlXCI6ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25GaWxsTW9kZTogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25GaWxsTW9kZVwiKSB9LFxuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgZGlyZWN0aW9uOiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uRGlyZWN0aW9uOiB2YWx1ZSB9KSB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbkRpcmVjdGlvblwiKSB9LFxuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgcmVwZWF0OiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHZhbHVlIH0pIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uUmVwZWF0XCIpIH0sXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aGVtZToge1xuICAgICAgICAgIGV4dGVuZDoge1xuICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICh7IHRoZW1lIH06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJ0cmFuc2l0aW9uRGVsYXlcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIDA6IFwiMG1zXCIsXG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwidHJhbnNpdGlvbkR1cmF0aW9uXCIpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAuLi50aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6IHtcbiAgICAgICAgICAgICAgbm9uZTogXCJub25lXCIsXG4gICAgICAgICAgICAgIGZvcndhcmRzOiBcImZvcndhcmRzXCIsXG4gICAgICAgICAgICAgIGJhY2t3YXJkczogXCJiYWNrd2FyZHNcIixcbiAgICAgICAgICAgICAgYm90aDogXCJib3RoXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgIG5vcm1hbDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgcmV2ZXJzZTogXCJyZXZlcnNlXCIsXG4gICAgICAgICAgICAgIGFsdGVybmF0ZTogXCJhbHRlcm5hdGVcIixcbiAgICAgICAgICAgICAgXCJhbHRlcm5hdGUtcmV2ZXJzZVwiOiBcImFsdGVybmF0ZS1yZXZlcnNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uT3BhY2l0eTogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBERUZBVUxUOiAwLFxuICAgICAgICAgICAgICAuLi50aGVtZShcIm9wYWNpdHlcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblRyYW5zbGF0ZTogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBERUZBVUxUOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJ0cmFuc2xhdGVcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblNjYWxlOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IDAsXG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwic2NhbGVcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJvdGF0ZTogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBERUZBVUxUOiBcIjMwZGVnXCIsXG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwicm90YXRlXCIpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRpb25SZXBlYXQ6IHtcbiAgICAgICAgICAgICAgMDogXCIwXCIsXG4gICAgICAgICAgICAgIDE6IFwiMVwiLFxuICAgICAgICAgICAgICBpbmZpbml0ZTogXCJpbmZpbml0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleWZyYW1lczoge1xuICAgICAgICAgICAgICBlbnRlcjoge1xuICAgICAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwidmFyKC0tdHctZW50ZXItb3BhY2l0eSwgMSlcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUzZCh2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS15LCAwKSwgMCkgc2NhbGUzZCh2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpKSByb3RhdGUodmFyKC0tdHctZW50ZXItcm90YXRlLCAwKSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleGl0OiB7XG4gICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwidmFyKC0tdHctZXhpdC1vcGFjaXR5LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZTNkKHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS15LCAwKSwgMCkgc2NhbGUzZCh2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpKSByb3RhdGUodmFyKC0tdHctZXhpdC1yb3RhdGUsIDApKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICksXG4gIF0sXG59O1xuIl19