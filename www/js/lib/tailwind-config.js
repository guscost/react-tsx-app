// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* global styles */
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(240 10% 3.9%);
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(240 10% 3.9%);
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(240 10% 3.9%);
  --primary: hsl(240 5.9% 10%);
  --primary-foreground: hsl(0 0% 98%);
  --secondary: hsl(240 4.8% 95.9%);
  --secondary-foreground: hsl(240 5.9% 10%);
  --muted: hsl(240 4.8% 95.9%);
  --muted-foreground: hsl(240 3.8% 46.1%);
  --accent: hsl(240 4.8% 95.9%);
  --accent-foreground: hsl(240 5.9% 10%);
  --destructive: hsl(0 84.2% 60.2%);
  --destructive-foreground: hsl(0 0% 98%);
  --border: hsl(240 5.9% 90%);
  --input: hsl(240 5.9% 90%);
  --ring: hsl(240 10% 3.9%);
  --chart-1: hsl(12 76% 61%);
  --chart-2: hsl(173 58% 39%);
  --chart-3: hsl(197 37% 24%);
  --chart-4: hsl(43 74% 66%);
  --chart-5: hsl(27 87% 67%);
  --radius: 0.6rem;
  --sidebar: hsl(0 0% 98%);
  --sidebar-foreground: hsl(240 5.3% 26.1%);
  --sidebar-primary: hsl(240 5.9% 10%);
  --sidebar-primary-foreground: hsl(0 0% 98%);
  --sidebar-accent: hsl(240 4.8% 95.9%);
  --sidebar-accent-foreground: hsl(240 5.9% 10%);
  --sidebar-border: hsl(220 13% 91%);
  --sidebar-ring: hsl(217.2 91.2% 59.8%);
}

.dark {
  --background: hsl(240 10% 3.9%);
  --foreground: hsl(0 0% 98%);
  --card: hsl(240 10% 3.9%);
  --card-foreground: hsl(0 0% 98%);
  --popover: hsl(240 10% 3.9%);
  --popover-foreground: hsl(0 0% 98%);
  --primary: hsl(0 0% 98%);
  --primary-foreground: hsl(240 5.9% 10%);
  --secondary: hsl(240 3.7% 15.9%);
  --secondary-foreground: hsl(0 0% 98%);
  --muted: hsl(240 3.7% 15.9%);
  --muted-foreground: hsl(240 5% 64.9%);
  --accent: hsl(240 3.7% 15.9%);
  --accent-foreground: hsl(0 0% 98%);
  --destructive: hsl(0 62.8% 30.6%);
  --destructive-foreground: hsl(0 0% 98%);
  --border: hsl(240 3.7% 15.9%);
  --input: hsl(240 3.7% 15.9%);
  --ring: hsl(240 4.9% 83.9%);
  --chart-1: hsl(220 70% 50%);
  --chart-2: hsl(160 60% 45%);
  --chart-3: hsl(30 80% 55%);
  --chart-4: hsl(280 65% 60%);
  --chart-5: hsl(340 75% 55%);
  --sidebar: hsl(240 5.9% 10%);
  --sidebar-foreground: hsl(240 4.8% 95.9%);
  --sidebar-primary: hsl(224.3 76.3% 48%);
  --sidebar-primary-foreground: hsl(0 0% 100%);
  --sidebar-accent: hsl(240 3.7% 15.9%);
  --sidebar-accent-foreground: hsl(240 4.8% 95.9%);
  --sidebar-border: hsl(240 3.7% 15.9%);
  --sidebar-ring: hsl(217.2 91.2% 59.8%);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;
    document.head.appendChild(globalStyles);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0oxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYC8qIGdsb2JhbCBzdHlsZXMgKi9cbkBpbXBvcnQgXCJ0YWlsd2luZGNzc1wiO1xuXG5AcGx1Z2luIFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiO1xuXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XG5cbkB0aGVtZSB7XG4gIC0tZm9udC1zYW5zOiB2YXIoLS1mb250LWdlaXN0LXNhbnMpO1xuICAtLWZvbnQtbW9ubzogdmFyKC0tZm9udC1nZWlzdC1tb25vKTtcbn1cblxuOnJvb3Qge1xuICAtLWJhY2tncm91bmQ6IGhzbCgwIDAlIDEwMCUpO1xuICAtLWZvcmVncm91bmQ6IGhzbCgyNDAgMTAlIDMuOSUpO1xuICAtLWNhcmQ6IGhzbCgwIDAlIDEwMCUpO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogaHNsKDI0MCAxMCUgMy45JSk7XG4gIC0tcG9wb3ZlcjogaHNsKDAgMCUgMTAwJSk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBoc2woMjQwIDEwJSAzLjklKTtcbiAgLS1wcmltYXJ5OiBoc2woMjQwIDUuOSUgMTAlKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IGhzbCgwIDAlIDk4JSk7XG4gIC0tc2Vjb25kYXJ5OiBoc2woMjQwIDQuOCUgOTUuOSUpO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBoc2woMjQwIDUuOSUgMTAlKTtcbiAgLS1tdXRlZDogaHNsKDI0MCA0LjglIDk1LjklKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBoc2woMjQwIDMuOCUgNDYuMSUpO1xuICAtLWFjY2VudDogaHNsKDI0MCA0LjglIDk1LjklKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogaHNsKDI0MCA1LjklIDEwJSk7XG4gIC0tZGVzdHJ1Y3RpdmU6IGhzbCgwIDg0LjIlIDYwLjIlKTtcbiAgLS1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kOiBoc2woMCAwJSA5OCUpO1xuICAtLWJvcmRlcjogaHNsKDI0MCA1LjklIDkwJSk7XG4gIC0taW5wdXQ6IGhzbCgyNDAgNS45JSA5MCUpO1xuICAtLXJpbmc6IGhzbCgyNDAgMTAlIDMuOSUpO1xuICAtLWNoYXJ0LTE6IGhzbCgxMiA3NiUgNjElKTtcbiAgLS1jaGFydC0yOiBoc2woMTczIDU4JSAzOSUpO1xuICAtLWNoYXJ0LTM6IGhzbCgxOTcgMzclIDI0JSk7XG4gIC0tY2hhcnQtNDogaHNsKDQzIDc0JSA2NiUpO1xuICAtLWNoYXJ0LTU6IGhzbCgyNyA4NyUgNjclKTtcbiAgLS1yYWRpdXM6IDAuNnJlbTtcbiAgLS1zaWRlYmFyOiBoc2woMCAwJSA5OCUpO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogaHNsKDI0MCA1LjMlIDI2LjElKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IGhzbCgyNDAgNS45JSAxMCUpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBoc2woMCAwJSA5OCUpO1xuICAtLXNpZGViYXItYWNjZW50OiBoc2woMjQwIDQuOCUgOTUuOSUpO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IGhzbCgyNDAgNS45JSAxMCUpO1xuICAtLXNpZGViYXItYm9yZGVyOiBoc2woMjIwIDEzJSA5MSUpO1xuICAtLXNpZGViYXItcmluZzogaHNsKDIxNy4yIDkxLjIlIDU5LjglKTtcbn1cblxuLmRhcmsge1xuICAtLWJhY2tncm91bmQ6IGhzbCgyNDAgMTAlIDMuOSUpO1xuICAtLWZvcmVncm91bmQ6IGhzbCgwIDAlIDk4JSk7XG4gIC0tY2FyZDogaHNsKDI0MCAxMCUgMy45JSk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBoc2woMCAwJSA5OCUpO1xuICAtLXBvcG92ZXI6IGhzbCgyNDAgMTAlIDMuOSUpO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogaHNsKDAgMCUgOTglKTtcbiAgLS1wcmltYXJ5OiBoc2woMCAwJSA5OCUpO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogaHNsKDI0MCA1LjklIDEwJSk7XG4gIC0tc2Vjb25kYXJ5OiBoc2woMjQwIDMuNyUgMTUuOSUpO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBoc2woMCAwJSA5OCUpO1xuICAtLW11dGVkOiBoc2woMjQwIDMuNyUgMTUuOSUpO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IGhzbCgyNDAgNSUgNjQuOSUpO1xuICAtLWFjY2VudDogaHNsKDI0MCAzLjclIDE1LjklKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogaHNsKDAgMCUgOTglKTtcbiAgLS1kZXN0cnVjdGl2ZTogaHNsKDAgNjIuOCUgMzAuNiUpO1xuICAtLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IGhzbCgwIDAlIDk4JSk7XG4gIC0tYm9yZGVyOiBoc2woMjQwIDMuNyUgMTUuOSUpO1xuICAtLWlucHV0OiBoc2woMjQwIDMuNyUgMTUuOSUpO1xuICAtLXJpbmc6IGhzbCgyNDAgNC45JSA4My45JSk7XG4gIC0tY2hhcnQtMTogaHNsKDIyMCA3MCUgNTAlKTtcbiAgLS1jaGFydC0yOiBoc2woMTYwIDYwJSA0NSUpO1xuICAtLWNoYXJ0LTM6IGhzbCgzMCA4MCUgNTUlKTtcbiAgLS1jaGFydC00OiBoc2woMjgwIDY1JSA2MCUpO1xuICAtLWNoYXJ0LTU6IGhzbCgzNDAgNzUlIDU1JSk7XG4gIC0tc2lkZWJhcjogaHNsKDI0MCA1LjklIDEwJSk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBoc2woMjQwIDQuOCUgOTUuOSUpO1xuICAtLXNpZGViYXItcHJpbWFyeTogaHNsKDIyNC4zIDc2LjMlIDQ4JSk7XG4gIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IGhzbCgwIDAlIDEwMCUpO1xuICAtLXNpZGViYXItYWNjZW50OiBoc2woMjQwIDMuNyUgMTUuOSUpO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IGhzbCgyNDAgNC44JSA5NS45JSk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IGhzbCgyNDAgMy43JSAxNS45JSk7XG4gIC0tc2lkZWJhci1yaW5nOiBoc2woMjE3LjIgOTEuMiUgNTkuOCUpO1xufVxuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1jb2xvci1jYXJkLWZvcmVncm91bmQ6IHZhcigtLWNhcmQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zZWNvbmRhcnk6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xuICAtLWNvbG9yLW11dGVkLWZvcmVncm91bmQ6IHZhcigtLW11dGVkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWFjY2VudDogdmFyKC0tYWNjZW50KTtcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogdmFyKC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItcmluZzogdmFyKC0tcmluZyk7XG4gIC0tY29sb3ItY2hhcnQtMTogdmFyKC0tY2hhcnQtMSk7XG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XG4gIC0tY29sb3ItY2hhcnQtMzogdmFyKC0tY2hhcnQtMyk7XG4gIC0tY29sb3ItY2hhcnQtNDogdmFyKC0tY2hhcnQtNCk7XG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XG4gIC0tcmFkaXVzLXNtOiBjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpO1xuICAtLXJhZGl1cy1tZDogY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KTtcbiAgLS1yYWRpdXMtbGc6IHZhcigtLXJhZGl1cyk7XG4gIC0tcmFkaXVzLXhsOiBjYWxjKHZhcigtLXJhZGl1cykgKyA0cHgpO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWFuaW1hdGUtYWNjb3JkaW9uLWRvd246IGFjY29yZGlvbi1kb3duIDAuMnMgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tdXA6IGFjY29yZGlvbi11cCAwLjJzIGVhc2Utb3V0O1xuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbkBsYXllciBiYXNlIHtcbiAgKiB7XG4gICAgQGFwcGx5IGJvcmRlci1ib3JkZXIgb3V0bGluZS1yaW5nLzUwO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcbiJdfQ==