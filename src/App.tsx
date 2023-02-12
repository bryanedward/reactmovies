import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button status={false} title="Comprar" year={1200} />
    </div>
  );
}

export default App;
