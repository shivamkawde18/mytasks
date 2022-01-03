import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Button";
function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}

export default App;
