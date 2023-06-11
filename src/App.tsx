import { useState } from "react";

import Board from "./components/Board";

import "./App.css";
import Score from "./components/Score";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
cardIds.sort(() => 0.5 - Math.random());

function App() {
  const [moves, setMoves] = useState(0);
  const [bestScore] = useState<number>(
    parseInt(localStorage.getItem("bestScore") || "0") ||
      Number.MAX_SAFE_INTEGER
  );

  return (
    <>
      <h1> Omok Clone </h1>
      <Score moves={moves}/>
      <Board cardIds={cardIds} setMoves={setMoves}/>
    </>
  );
}

export default App;
