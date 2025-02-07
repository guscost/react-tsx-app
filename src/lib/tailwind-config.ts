// Set the v3 shadcn config manually on the window object
(window as any).tailwind.config = {
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
    (window as any).tailwind.plugin(
      ({ addUtilities, matchUtilities, theme }: any) => {
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
        matchUtilities(
          {
            "fade-in": (value: any) => ({ "--tw-enter-opacity": value }),
            "fade-out": (value: any) => ({ "--tw-exit-opacity": value }),
          },
          { values: theme("animationOpacity") },
        );

        matchUtilities(
          {
            "zoom-in": (value: any) => ({ "--tw-enter-scale": value }),
            "zoom-out": (value: any) => ({ "--tw-exit-scale": value }),
          },
          { values: theme("animationScale") },
        );

        matchUtilities(
          {
            "spin-in": (value: any) => ({ "--tw-enter-rotate": value }),
            "spin-out": (value: any) => ({ "--tw-exit-rotate": value }),
          },
          { values: theme("animationRotate") },
        );

        matchUtilities(
          {
            "slide-in-from-top": (value: any) => ({
              "--tw-enter-translate-y": `-${value}`,
            }),
            "slide-in-from-bottom": (value: any) => ({
              "--tw-enter-translate-y": value,
            }),
            "slide-in-from-left": (value: any) => ({
              "--tw-enter-translate-x": `-${value}`,
            }),
            "slide-in-from-right": (value: any) => ({
              "--tw-enter-translate-x": value,
            }),
            "slide-out-to-top": (value: any) => ({
              "--tw-exit-translate-y": `-${value}`,
            }),
            "slide-out-to-bottom": (value: any) => ({
              "--tw-exit-translate-y": value,
            }),
            "slide-out-to-left": (value: any) => ({
              "--tw-exit-translate-x": `-${value}`,
            }),
            "slide-out-to-right": (value: any) => ({
              "--tw-exit-translate-x": value,
            }),
          },
          { values: theme("animationTranslate") },
        );

        matchUtilities(
          { duration: (value: any) => ({ animationDuration: value }) },
          {
            values: Object.fromEntries(
              Object.entries(theme("animationDuration")).filter(
                ([key]) => key !== "DEFAULT",
              ),
            ),
          },
        );

        matchUtilities(
          { delay: (value: any) => ({ animationDelay: value }) },
          { values: theme("animationDelay") },
        );

        matchUtilities(
          { ease: (value: any) => ({ animationTimingFunction: value }) },
          {
            values: Object.fromEntries(
              Object.entries(theme("animationTimingFunction")).filter(
                ([key]) => key !== "DEFAULT",
              ),
            ),
          },
        );

        addUtilities({
          ".running": { animationPlayState: "running" },
          ".paused": { animationPlayState: "paused" },
        });

        matchUtilities(
          { "fill-mode": (value: any) => ({ animationFillMode: value }) },
          { values: theme("animationFillMode") },
        );

        matchUtilities(
          { direction: (value: any) => ({ animationDirection: value }) },
          { values: theme("animationDirection") },
        );

        matchUtilities(
          { repeat: (value: any) => ({ animationIterationCount: value }) },
          { values: theme("animationRepeat") },
        );
      },
      {
        theme: {
          extend: {
            animationDelay: ({ theme }: any) => ({
              ...theme("transitionDelay"),
            }),
            animationDuration: ({ theme }: any) => ({
              0: "0ms",
              ...theme("transitionDuration"),
            }),
            animationTimingFunction: ({ theme }: any) => ({
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
            animationOpacity: ({ theme }: any) => ({
              DEFAULT: 0,
              ...theme("opacity"),
            }),
            animationTranslate: ({ theme }: any) => ({
              DEFAULT: "100%",
              ...theme("translate"),
            }),
            animationScale: ({ theme }: any) => ({
              DEFAULT: 0,
              ...theme("scale"),
            }),
            animationRotate: ({ theme }: any) => ({
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
                  transform:
                    "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))",
                },
              },
              exit: {
                to: {
                  opacity: "var(--tw-exit-opacity, 1)",
                  transform:
                    "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))",
                },
              },
            },
          },
        },
      },
    ),
  ],
};
