import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Recent from "./components/recent/Recent";
import Education from "./components/education/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Hero/>
      <Education/>
      <Recent/>
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
