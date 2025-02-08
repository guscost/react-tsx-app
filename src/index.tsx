import { createRoot } from "react-dom";
import { ThemeProvider } from "next-themes";

import { Title } from "./components/title";
import { CardsDemo } from "./components/demo-cards/index";
import { KanbanBoard } from "./components/demo-kanban/KanbanBoard";

createRoot(document.getElementById("root")).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="p-8">
      <Title />
      <CardsDemo />

      <h2 className="text-lg mt-12 mb-8">
        @dnd-kit demo from{" "}
        <a
          href="https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui"
          className="underline"
        >
          react-dnd-kit-tailwind-shadcn-ui
        </a>
        .
      </h2>

      <KanbanBoard />
    </div>
  </ThemeProvider>,
);
