import { createRoot } from "react-dom";
import { ThemeProvider } from "next-themes";

import { CardsDemo } from "./components/demo-cards/index";
import { Title } from "./components/title";

createRoot(document.getElementById("root")).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="p-8">
      <Title />
      <CardsDemo />
    </div>
  </ThemeProvider>,
);
