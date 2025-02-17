// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* global styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  touch-action: manipulation;
}

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkYxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLGtEQUFrRDtBQUNqRCxNQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRztJQUNoQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDbkIsT0FBTyxFQUFFO1FBQ1Asa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxnQ0FBZ0M7S0FDakM7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLHdCQUF3QjtnQkFDcEMsVUFBVSxFQUFFLHdCQUF3QjtnQkFDcEMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFVBQVUsRUFBRSw2QkFBNkI7aUJBQzFDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsZ0NBQWdDO2lCQUM3QztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsVUFBVSxFQUFFLGdDQUFnQztpQkFDN0M7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLFVBQVUsRUFBRSxrQ0FBa0M7aUJBQy9DO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUsOEJBQThCO2lCQUMzQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsVUFBVSxFQUFFLCtCQUErQjtpQkFDNUM7Z0JBQ0QsV0FBVyxFQUFFO29CQUNYLE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLFVBQVUsRUFBRSxvQ0FBb0M7aUJBQ2pEO2dCQUNELE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUscUJBQXFCO29CQUMxQixHQUFHLEVBQUUscUJBQXFCO29CQUMxQixHQUFHLEVBQUUscUJBQXFCO29CQUMxQixHQUFHLEVBQUUscUJBQXFCO29CQUMxQixHQUFHLEVBQUUscUJBQXFCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsVUFBVSxFQUFFLGdDQUFnQztvQkFDNUMsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsb0JBQW9CLEVBQUUsd0NBQXdDO29CQUM5RCxNQUFNLEVBQUUsNEJBQTRCO29CQUNwQyxtQkFBbUIsRUFBRSx1Q0FBdUM7b0JBQzVELE1BQU0sRUFBRSw0QkFBNEI7b0JBQ3BDLElBQUksRUFBRSwwQkFBMEI7aUJBQ2pDO2FBQ0Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osRUFBRSxFQUFFLGVBQWU7Z0JBQ25CLEVBQUUsRUFBRSwyQkFBMkI7Z0JBQy9CLEVBQUUsRUFBRSwyQkFBMkI7YUFDaEM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCLEVBQUU7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsR0FBRztxQkFDWjtvQkFDRCxFQUFFLEVBQUU7d0JBQ0YsTUFBTSxFQUFFLHVDQUF1QztxQkFDaEQ7aUJBQ0Y7Z0JBQ0QsY0FBYyxFQUFFO29CQUNkLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsdUNBQXVDO3FCQUNoRDtvQkFDRCxFQUFFLEVBQUU7d0JBQ0YsTUFBTSxFQUFFLEdBQUc7cUJBQ1o7aUJBQ0Y7YUFDRjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0IsRUFBRSw4QkFBOEI7Z0JBQ2hELGNBQWMsRUFBRSw0QkFBNEI7YUFDN0M7U0FDRjtLQUNGO0lBRUQsNkNBQTZDO0lBQzdDLE9BQU8sRUFBRTtRQUNOLE1BQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUM3QixDQUFDLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQU8sRUFBRSxFQUFFO1lBQy9DLFlBQVksQ0FBQztnQkFDWCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUMsYUFBYSxFQUFFO29CQUNiLGFBQWEsRUFBRSxPQUFPO29CQUN0QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsMkJBQTJCLENBQUM7b0JBQ3JELG9CQUFvQixFQUFFLFNBQVM7b0JBQy9CLGtCQUFrQixFQUFFLFNBQVM7b0JBQzdCLG1CQUFtQixFQUFFLFNBQVM7b0JBQzlCLHdCQUF3QixFQUFFLFNBQVM7b0JBQ25DLHdCQUF3QixFQUFFLFNBQVM7aUJBQ3BDO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxhQUFhLEVBQUUsTUFBTTtvQkFDckIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLDJCQUEyQixDQUFDO29CQUNyRCxtQkFBbUIsRUFBRSxTQUFTO29CQUM5QixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3Qix1QkFBdUIsRUFBRSxTQUFTO29CQUNsQyx1QkFBdUIsRUFBRSxTQUFTO2lCQUNuQzthQUNGLENBQUMsQ0FBQztZQUNILGNBQWMsQ0FDWjtnQkFDRSxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDNUQsVUFBVSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDN0QsRUFDRCxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUN0QyxDQUFDO1lBRUYsY0FBYyxDQUNaO2dCQUNFLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUMxRCxVQUFVLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMzRCxFQUNELEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQ3BDLENBQUM7WUFFRixjQUFjLENBQ1o7Z0JBQ0UsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzNELFVBQVUsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzVELEVBQ0QsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FDckMsQ0FBQztZQUVGLGNBQWMsQ0FDWjtnQkFDRSxtQkFBbUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsd0JBQXdCLEVBQUUsSUFBSSxLQUFLLEVBQUU7aUJBQ3RDLENBQUM7Z0JBQ0Ysc0JBQXNCLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLHdCQUF3QixFQUFFLEtBQUs7aUJBQ2hDLENBQUM7Z0JBQ0Ysb0JBQW9CLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLHdCQUF3QixFQUFFLElBQUksS0FBSyxFQUFFO2lCQUN0QyxDQUFDO2dCQUNGLHFCQUFxQixFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN0Qyx3QkFBd0IsRUFBRSxLQUFLO2lCQUNoQyxDQUFDO2dCQUNGLGtCQUFrQixFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyx1QkFBdUIsRUFBRSxJQUFJLEtBQUssRUFBRTtpQkFDckMsQ0FBQztnQkFDRixxQkFBcUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDdEMsdUJBQXVCLEVBQUUsS0FBSztpQkFDL0IsQ0FBQztnQkFDRixtQkFBbUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsdUJBQXVCLEVBQUUsSUFBSSxLQUFLLEVBQUU7aUJBQ3JDLENBQUM7Z0JBQ0Ysb0JBQW9CLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLHVCQUF1QixFQUFFLEtBQUs7aUJBQy9CLENBQUM7YUFDSCxFQUNELEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQ3hDLENBQUM7WUFFRixjQUFjLENBQ1osRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzVEO2dCQUNFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUMvQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQzdCLENBQ0Y7YUFDRixDQUNGLENBQUM7WUFFRixjQUFjLENBQ1osRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUN0RCxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUNwQyxDQUFDO1lBRUYsY0FBYyxDQUNaLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUM5RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDckQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUM3QixDQUNGO2FBQ0YsQ0FDRixDQUFDO1lBRUYsWUFBWSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRTtnQkFDN0MsU0FBUyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFO2FBQzVDLENBQUMsQ0FBQztZQUVILGNBQWMsQ0FDWixFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDL0QsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FDdkMsQ0FBQztZQUVGLGNBQWMsQ0FDWixFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDOUQsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FDeEMsQ0FBQztZQUVGLGNBQWMsQ0FDWixFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDaEUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FDckMsQ0FBQztRQUNKLENBQUMsRUFDRDtZQUNFLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUU7b0JBQ04sY0FBYyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7cUJBQzVCLENBQUM7b0JBQ0YsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLEVBQUUsS0FBSzt3QkFDUixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztxQkFDL0IsQ0FBQztvQkFDRix1QkFBdUIsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQzVDLEdBQUcsS0FBSyxDQUFDLDBCQUEwQixDQUFDO3FCQUNyQyxDQUFDO29CQUNGLGlCQUFpQixFQUFFO3dCQUNqQixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsU0FBUyxFQUFFLFdBQVc7d0JBQ3RCLElBQUksRUFBRSxNQUFNO3FCQUNiO29CQUNELGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUUsUUFBUTt3QkFDaEIsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLFNBQVMsRUFBRSxXQUFXO3dCQUN0QixtQkFBbUIsRUFBRSxtQkFBbUI7cUJBQ3pDO29CQUNELGdCQUFnQixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDckMsT0FBTyxFQUFFLENBQUM7d0JBQ1YsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO3FCQUNwQixDQUFDO29CQUNGLGtCQUFrQixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLE1BQU07d0JBQ2YsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO3FCQUN0QixDQUFDO29CQUNGLGNBQWMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ25DLE9BQU8sRUFBRSxDQUFDO3dCQUNWLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDbEIsQ0FBQztvQkFDRixlQUFlLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO3FCQUNuQixDQUFDO29CQUNGLGVBQWUsRUFBRTt3QkFDZixDQUFDLEVBQUUsR0FBRzt3QkFDTixDQUFDLEVBQUUsR0FBRzt3QkFDTixRQUFRLEVBQUUsVUFBVTtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUU7Z0NBQ0osT0FBTyxFQUFFLDRCQUE0QjtnQ0FDckMsU0FBUyxFQUNQLHdNQUF3TTs2QkFDM007eUJBQ0Y7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLEVBQUUsRUFBRTtnQ0FDRixPQUFPLEVBQUUsMkJBQTJCO2dDQUNwQyxTQUFTLEVBQ1Asa01BQWtNOzZCQUNyTTt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYC8qIGdsb2JhbCBzdHlsZXMgKi9cbkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuXG5odG1sIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuQGxheWVyIGJhc2Uge1xuICA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAwIDAlIDEwMCU7XG4gICAgLS1mb3JlZ3JvdW5kOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1jYXJkOiAwIDAlIDEwMCU7XG4gICAgLS1jYXJkLWZvcmVncm91bmQ6IDI0MCAxMCUgMy45JTtcbiAgICAtLXBvcG92ZXI6IDAgMCUgMTAwJTtcbiAgICAtLXBvcG92ZXItZm9yZWdyb3VuZDogMjQwIDEwJSAzLjklO1xuICAgIC0tcHJpbWFyeTogMjQwIDUuOSUgMTAlO1xuICAgIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLXNlY29uZGFyeTogMjQwIDQuOCUgOTUuOSU7XG4gICAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tbXV0ZWQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tbXV0ZWQtZm9yZWdyb3VuZDogMjQwIDMuOCUgNDYuMSU7XG4gICAgLS1hY2NlbnQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tYWNjZW50LWZvcmVncm91bmQ6IDI0MCA1LjklIDEwJTtcbiAgICAtLWRlc3RydWN0aXZlOiAwIDg0LjIlIDYwLjIlO1xuICAgIC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1ib3JkZXI6IDI0MCA1LjklIDkwJTtcbiAgICAtLWlucHV0OiAyNDAgNS45JSA5MCU7XG4gICAgLS1yaW5nOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1jaGFydC0xOiAxMiA3NiUgNjElO1xuICAgIC0tY2hhcnQtMjogMTczIDU4JSAzOSU7XG4gICAgLS1jaGFydC0zOiAxOTcgMzclIDI0JTtcbiAgICAtLWNoYXJ0LTQ6IDQzIDc0JSA2NiU7XG4gICAgLS1jaGFydC01OiAyNyA4NyUgNjclO1xuICAgIC0tcmFkaXVzOiAwLjVyZW07XG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiAyNDAgNS4zJSAyNi4xJTtcbiAgICAtLXNpZGViYXItcHJpbWFyeTogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tc2lkZWJhci1hY2NlbnQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1ib3JkZXI6IDIyMCAxMyUgOTElO1xuICAgIC0tc2lkZWJhci1yaW5nOiAyMTcuMiA5MS4yJSA1OS44JTtcbiAgfVxuICAuZGFyayB7XG4gICAgLS1iYWNrZ3JvdW5kOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLWNhcmQ6IDI0MCAxMCUgMy45JTtcbiAgICAtLWNhcmQtZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1wb3BvdmVyOiAyNDAgMTAlIDMuOSU7XG4gICAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tcHJpbWFyeTogMCAwJSA5OCU7XG4gICAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IDI0MCA1LjklIDEwJTtcbiAgICAtLXNlY29uZGFyeTogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMCAwJSA5OCU7XG4gICAgLS1tdXRlZDogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1tdXRlZC1mb3JlZ3JvdW5kOiAyNDAgNSUgNjQuOSU7XG4gICAgLS1hY2NlbnQ6IDI0MCAzLjclIDE1LjklO1xuICAgIC0tYWNjZW50LWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAgIC0tZGVzdHJ1Y3RpdmU6IDAgNjIuOCUgMzAuNiU7XG4gICAgLS1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kOiAwIDAlIDk4JTtcbiAgICAtLWJvcmRlcjogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1pbnB1dDogMjQwIDMuNyUgMTUuOSU7XG4gICAgLS1yaW5nOiAyNDAgNC45JSA4My45JTtcbiAgICAtLWNoYXJ0LTE6IDIyMCA3MCUgNTAlO1xuICAgIC0tY2hhcnQtMjogMTYwIDYwJSA0NSU7XG4gICAgLS1jaGFydC0zOiAzMCA4MCUgNTUlO1xuICAgIC0tY2hhcnQtNDogMjgwIDY1JSA2MCU7XG4gICAgLS1jaGFydC01OiAzNDAgNzUlIDU1JTtcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogMjQwIDUuOSUgMTAlO1xuICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiAyNDAgNC44JSA5NS45JTtcbiAgICAtLXNpZGViYXItcHJpbWFyeTogMjI0LjMgNzYuMyUgNDglO1xuICAgIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgMTAwJTtcbiAgICAtLXNpZGViYXItYWNjZW50OiAyNDAgMy43JSAxNS45JTtcbiAgICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IDI0MCA0LjglIDk1LjklO1xuICAgIC0tc2lkZWJhci1ib3JkZXI6IDI0MCAzLjclIDE1LjklO1xuICAgIC0tc2lkZWJhci1yaW5nOiAyMTcuMiA5MS4yJSA1OS44JTtcbiAgfVxufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcblxuLy8gU2V0IHRoZSB0YWlsd2luZCB2MyBjb25maWcgb24gdGhlIHdpbmRvdyBvYmplY3Rcbih3aW5kb3cgYXMgYW55KS50YWlsd2luZC5jb25maWcgPSB7XG4gIGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcbiAgY29udGVudDogW1xuICAgIFwiLi9wYWdlcy8qKi8qLntqcyx0cyxqc3gsdHN4LG1keH1cIixcbiAgICBcIi4vY29tcG9uZW50cy8qKi8qLntqcyx0cyxqc3gsdHN4LG1keH1cIixcbiAgICBcIi4vYXBwLyoqLyoue2pzLHRzLGpzeCx0c3gsbWR4fVwiLFxuICBdLFxuICB0aGVtZToge1xuICAgIGV4dGVuZDoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiaHNsKHZhcigtLWJhY2tncm91bmQpKVwiLFxuICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLWNhcmQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWNhcmQtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBvcG92ZXI6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1wb3BvdmVyKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tc2Vjb25kYXJ5KSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG11dGVkOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tbXV0ZWQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLW11dGVkLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBhY2NlbnQ6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1hY2NlbnQpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJ1Y3RpdmU6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1kZXN0cnVjdGl2ZSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tYm9yZGVyKSlcIixcbiAgICAgICAgaW5wdXQ6IFwiaHNsKHZhcigtLWlucHV0KSlcIixcbiAgICAgICAgcmluZzogXCJoc2wodmFyKC0tcmluZykpXCIsXG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgXCIxXCI6IFwiaHNsKHZhcigtLWNoYXJ0LTEpKVwiLFxuICAgICAgICAgIFwiMlwiOiBcImhzbCh2YXIoLS1jaGFydC0yKSlcIixcbiAgICAgICAgICBcIjNcIjogXCJoc2wodmFyKC0tY2hhcnQtMykpXCIsXG4gICAgICAgICAgXCI0XCI6IFwiaHNsKHZhcigtLWNoYXJ0LTQpKVwiLFxuICAgICAgICAgIFwiNVwiOiBcImhzbCh2YXIoLS1jaGFydC01KSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNpZGViYXItYmFja2dyb3VuZCkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBwcmltYXJ5OiBcImhzbCh2YXIoLS1zaWRlYmFyLXByaW1hcnkpKVwiLFxuICAgICAgICAgIFwicHJpbWFyeS1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBhY2NlbnQ6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50KSlcIixcbiAgICAgICAgICBcImFjY2VudC1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpKVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpKVwiLFxuICAgICAgICAgIHJpbmc6IFwiaHNsKHZhcigtLXNpZGViYXItcmluZykpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIGxnOiBcInZhcigtLXJhZGl1cylcIixcbiAgICAgICAgbWQ6IFwiY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KVwiLFxuICAgICAgICBzbTogXCJjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpXCIsXG4gICAgICB9LFxuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjoge1xuICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiB7XG4gICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjogXCJhY2NvcmRpb24tZG93biAwLjJzIGVhc2Utb3V0XCIsXG4gICAgICAgIFwiYWNjb3JkaW9uLXVwXCI6IFwiYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBJbnRlcnBvbGF0ZSB0aGUgdGFpbHdpbmRjc3MtYW5pbWF0ZSBwbHVnaW5cbiAgcGx1Z2luczogW1xuICAgICh3aW5kb3cgYXMgYW55KS50YWlsd2luZC5wbHVnaW4oXG4gICAgICAoeyBhZGRVdGlsaXRpZXMsIG1hdGNoVXRpbGl0aWVzLCB0aGVtZSB9OiBhbnkpID0+IHtcbiAgICAgICAgYWRkVXRpbGl0aWVzKHtcbiAgICAgICAgICBcIkBrZXlmcmFtZXMgZW50ZXJcIjogdGhlbWUoXCJrZXlmcmFtZXMuZW50ZXJcIiksXG4gICAgICAgICAgXCJAa2V5ZnJhbWVzIGV4aXRcIjogdGhlbWUoXCJrZXlmcmFtZXMuZXhpdFwiKSxcbiAgICAgICAgICBcIi5hbmltYXRlLWluXCI6IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6IFwiZW50ZXJcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGVtZShcImFuaW1hdGlvbkR1cmF0aW9uLkRFRkFVTFRcIiksXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItb3BhY2l0eVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1lbnRlci1zY2FsZVwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1lbnRlci1yb3RhdGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXhcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXlcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIi5hbmltYXRlLW91dFwiOiB7XG4gICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImV4aXRcIixcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGVtZShcImFuaW1hdGlvbkR1cmF0aW9uLkRFRkFVTFRcIiksXG4gICAgICAgICAgICBcIi0tdHctZXhpdC1vcGFjaXR5XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgXCItLXR3LWV4aXQtc2NhbGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZXhpdC1yb3RhdGVcIjogXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBcIi0tdHctZXhpdC10cmFuc2xhdGUteFwiOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS15XCI6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImZhZGUtaW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1vcGFjaXR5XCI6IHZhbHVlIH0pLFxuICAgICAgICAgICAgXCJmYWRlLW91dFwiOiAodmFsdWU6IGFueSkgPT4gKHsgXCItLXR3LWV4aXQtb3BhY2l0eVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbk9wYWNpdHlcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInpvb20taW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1zY2FsZVwiOiB2YWx1ZSB9KSxcbiAgICAgICAgICAgIFwiem9vbS1vdXRcIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1leGl0LXNjYWxlXCI6IHZhbHVlIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uU2NhbGVcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNwaW4taW5cIjogKHZhbHVlOiBhbnkpID0+ICh7IFwiLS10dy1lbnRlci1yb3RhdGVcIjogdmFsdWUgfSksXG4gICAgICAgICAgICBcInNwaW4tb3V0XCI6ICh2YWx1ZTogYW55KSA9PiAoeyBcIi0tdHctZXhpdC1yb3RhdGVcIjogdmFsdWUgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25Sb3RhdGVcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNsaWRlLWluLWZyb20tdG9wXCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXlcIjogYC0ke3ZhbHVlfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtaW4tZnJvbS1ib3R0b21cIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1lbnRlci10cmFuc2xhdGUteVwiOiB2YWx1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJzbGlkZS1pbi1mcm9tLWxlZnRcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1lbnRlci10cmFuc2xhdGUteFwiOiBgLSR7dmFsdWV9YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJzbGlkZS1pbi1mcm9tLXJpZ2h0XCI6ICh2YWx1ZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBcIi0tdHctZW50ZXItdHJhbnNsYXRlLXhcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLXRvcFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXlcIjogYC0ke3ZhbHVlfWAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLWJvdHRvbVwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXlcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwic2xpZGUtb3V0LXRvLWxlZnRcIjogKHZhbHVlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIFwiLS10dy1leGl0LXRyYW5zbGF0ZS14XCI6IGAtJHt2YWx1ZX1gLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcInNsaWRlLW91dC10by1yaWdodFwiOiAodmFsdWU6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgXCItLXR3LWV4aXQtdHJhbnNsYXRlLXhcIjogdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvblRyYW5zbGF0ZVwiKSB9LFxuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgZHVyYXRpb246ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25EdXJhdGlvbjogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWUoXCJhbmltYXRpb25EdXJhdGlvblwiKSkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChba2V5XSkgPT4ga2V5ICE9PSBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IGRlbGF5OiAodmFsdWU6IGFueSkgPT4gKHsgYW5pbWF0aW9uRGVsYXk6IHZhbHVlIH0pIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uRGVsYXlcIikgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaFV0aWxpdGllcyhcbiAgICAgICAgICB7IGVhc2U6ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWUoXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiKSkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChba2V5XSkgPT4ga2V5ICE9PSBcIkRFRkFVTFRcIixcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRVdGlsaXRpZXMoe1xuICAgICAgICAgIFwiLnJ1bm5pbmdcIjogeyBhbmltYXRpb25QbGF5U3RhdGU6IFwicnVubmluZ1wiIH0sXG4gICAgICAgICAgXCIucGF1c2VkXCI6IHsgYW5pbWF0aW9uUGxheVN0YXRlOiBcInBhdXNlZFwiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hdGNoVXRpbGl0aWVzKFxuICAgICAgICAgIHsgXCJmaWxsLW1vZGVcIjogKHZhbHVlOiBhbnkpID0+ICh7IGFuaW1hdGlvbkZpbGxNb2RlOiB2YWx1ZSB9KSB9LFxuICAgICAgICAgIHsgdmFsdWVzOiB0aGVtZShcImFuaW1hdGlvbkZpbGxNb2RlXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyBkaXJlY3Rpb246ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25EaXJlY3Rpb246IHZhbHVlIH0pIH0sXG4gICAgICAgICAgeyB2YWx1ZXM6IHRoZW1lKFwiYW5pbWF0aW9uRGlyZWN0aW9uXCIpIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hVdGlsaXRpZXMoXG4gICAgICAgICAgeyByZXBlYXQ6ICh2YWx1ZTogYW55KSA9PiAoeyBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdmFsdWUgfSkgfSxcbiAgICAgICAgICB7IHZhbHVlczogdGhlbWUoXCJhbmltYXRpb25SZXBlYXRcIikgfSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgZXh0ZW5kOiB7XG4gICAgICAgICAgICBhbmltYXRpb25EZWxheTogKHsgdGhlbWUgfTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAuLi50aGVtZShcInRyYW5zaXRpb25EZWxheVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICh7IHRoZW1lIH06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgMDogXCIwbXNcIixcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmltYXRpb25GaWxsTW9kZToge1xuICAgICAgICAgICAgICBub25lOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZm9yd2FyZHM6IFwiZm9yd2FyZHNcIixcbiAgICAgICAgICAgICAgYmFja3dhcmRzOiBcImJhY2t3YXJkc1wiLFxuICAgICAgICAgICAgICBib3RoOiBcImJvdGhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgbm9ybWFsOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICByZXZlcnNlOiBcInJldmVyc2VcIixcbiAgICAgICAgICAgICAgYWx0ZXJuYXRlOiBcImFsdGVybmF0ZVwiLFxuICAgICAgICAgICAgICBcImFsdGVybmF0ZS1yZXZlcnNlXCI6IFwiYWx0ZXJuYXRlLXJldmVyc2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb25PcGFjaXR5OiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IDAsXG4gICAgICAgICAgICAgIC4uLnRoZW1lKFwib3BhY2l0eVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uVHJhbnNsYXRlOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAuLi50aGVtZShcInRyYW5zbGF0ZVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uU2NhbGU6ICh7IHRoZW1lIH06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgREVGQVVMVDogMCxcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJzY2FsZVwiKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5pbWF0aW9uUm90YXRlOiAoeyB0aGVtZSB9OiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIERFRkFVTFQ6IFwiMzBkZWdcIixcbiAgICAgICAgICAgICAgLi4udGhlbWUoXCJyb3RhdGVcIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJlcGVhdDoge1xuICAgICAgICAgICAgICAwOiBcIjBcIixcbiAgICAgICAgICAgICAgMTogXCIxXCIsXG4gICAgICAgICAgICAgIGluZmluaXRlOiBcImluZmluaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJ2YXIoLS10dy1lbnRlci1vcGFjaXR5LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKSBzY2FsZTNkKHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSkpIHJvdGF0ZSh2YXIoLS10dy1lbnRlci1yb3RhdGUsIDApKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4aXQ6IHtcbiAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJ2YXIoLS10dy1leGl0LW9wYWNpdHksIDEpXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlM2QodmFyKC0tdHctZXhpdC10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXksIDApLCAwKSBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpIHJvdGF0ZSh2YXIoLS10dy1leGl0LXJvdGF0ZSwgMCkpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKSxcbiAgXSxcbn07XG4iXX0=