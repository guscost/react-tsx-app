import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { ThemeProvider } from "next-themes";
import { Link, Route, Switch } from "wouter";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";
import { CardsDemo } from "@/components/demo-cards/index";
import { FormDemo } from "@/components/demo-form/index";
import { KanbanBoard } from "@/components/demo-kanban/KanbanBoard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="p-8">
        <Title />

        <div className="flex gap-2 my-4">
          <Link href="/">
            <Button>Cards</Button>
          </Link>
          <Link href="/form">
            <Button>Form</Button>
          </Link>
          <Link href="/drag-n-drop">
            <Button>Drag 'n Drop</Button>
          </Link>
        </div>

        <Switch>
          <Route path="/">
            <CardsDemo />
          </Route>
          <Route path="/form">
            <FormDemo />
          </Route>
          <Route path="/drag-n-drop">
            <KanbanBoard />
            <h2 className="my-2">
              @dnd-kit demo from{" "}
              <a
                href="https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui"
                className="underline"
              >
                react-dnd-kit-tailwind-shadcn-ui
              </a>
              .
            </h2>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  </StrictMode>,
);
