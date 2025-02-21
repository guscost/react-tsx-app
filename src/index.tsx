import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { App } from "@/components/app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
