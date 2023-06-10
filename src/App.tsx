import { useState } from "react";
import Cards from "@/components/Cards";
import Board from "./components/Board";

import "./App.css";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
cardIds.sort(() => 0.5 - Math.random());

function App() {
  const [bestScore] = useState<number>(
    parseInt(localStorage.getItem("bestScore") || "0") ||
      Number.MAX_SAFE_INTEGER
  );
  const [moves] = useState<number>(0);
  return (
    <>
      <h1> Omok Clone </h1>

      <Board cardIds={cardIds} />
    </>
  );
}

export default App;
