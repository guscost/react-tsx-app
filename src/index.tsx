import { createRoot } from "react-dom";
import Hero from "Hero";

createRoot(document.getElementById("root")).render(
  <div className="p-4">
    <Hero />
    <div className="mt-2">
      <em>Have a nice day!</em>
    </div>
  </div>,
);
