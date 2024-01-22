import { useState } from "react";
import Home from "./Home";

function App() {
  const [a, seta] = useState(0);
  return (
    <div className="app">
      <Home />
      <h1>{a}</h1>
      <button onClick={() => seta((t) => t + 1)}>+</button>
      <button onClick={() => seta((t) => t - 1)}>-</button>
    </div>
  );
}

export default App;
