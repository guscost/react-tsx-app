import { useState } from "react";

export function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-8">
      <h1 className="text-2xl">React TSX App</h1>
      <p>
        A bundle-free React app scaffolding kit with shadcn/ui and all its
        dependencies ready to go.
      </p>
    </div>
  );
}
