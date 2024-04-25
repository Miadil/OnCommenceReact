import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const pouletClick = () => setCount((count) => count + 1);

  useEffect(() => {
    console.log("je suis dans le useEffect");
  }, [count]);

  return (
    <>
      {console.log("je suis dans le return")}
      <NavBar firstName="Abdou" age="32" />
      <p> {count}</p>
      <button onClick={pouletClick}>add +1 </button>
    </>
  );
}

export default App;
