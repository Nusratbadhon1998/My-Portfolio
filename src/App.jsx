import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
