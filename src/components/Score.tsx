import React, { useEffect, useState } from "react";

type ScoreProps = {
  moves: number;
};

const Score = (props: ScoreProps) => {


  return (
    <>
      <div>Score</div>
      <span>Moves : {props.moves}</span>
    </>
  );
};

export default Score;
