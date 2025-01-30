///<amd-module name='Hero'/>
import { useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world x{count}</h1>
      <button onClick={() => setCount(count + 1)}>Again!</button>
    </div>
  );
}
