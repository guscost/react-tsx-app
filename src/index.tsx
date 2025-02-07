import { createRoot } from "react-dom";

import { CardsDemo } from "./components/demo-cards/index";
import { Hero } from "./components/hero";

createRoot(document.getElementById("root")).render(
  <div className="p-4">
    <Hero />
    <CardsDemo />
  </div>,
);
