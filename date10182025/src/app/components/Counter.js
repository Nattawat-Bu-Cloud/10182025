"use client";
import { useState } from "react";

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
      <button type="button" onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
}
