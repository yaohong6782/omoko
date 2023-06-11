import React, { useState, useRef, useEffect } from "react";
import Card from "@/components/Card";

import "@/scss/board.scss";

type BoardProps = {
  setMoves: any;
  cardIds: Array<number>;
};
const Board = (props: BoardProps) => {
  const imageNames = [
    "SandHelm.png",
    "SpiritOfRock.png",
    "Stonepy.png",
    "Squirrelnon.png",
    "ThunderCloudSpirit.png",
    "StoneGolem.png",
  ];

  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);

  //   const timeout = useRef(setTimeout(() => {}));
  const timeout = useRef<number | null>(null);
  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const evalute = () => {
    const [first, second] = openCards;
    enable();

    // check if both cards opened are equal
    if ((first % 6) + 1 === (second % 6) + 1) {
      console.log("matched");
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }

    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  useEffect(() => {
    let evaluteTimeout: number | undefined;
    if (openCards.length === 2) {
      evaluteTimeout = setTimeout(evalute, 300);
    }
    return () => {
      clearTimeout(evaluteTimeout);
    };
  }, [openCards]);

  useEffect(() => {
    if (clearedCards.length === props.cardIds.length) {
      console.log("game over!");
    }
  }, [clearedCards]);

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, id]);
      props.setMoves((moves: number) => moves+1 )
      disable();
    } else {
      setOpenCards([id]);
      enable();
    }
  };

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const checkIsInactive = (id: number) => {
    return clearedCards.includes(id);
  };
  return (
    <div className={"board"}>
      {props.cardIds.map((i, idx: number) => {
        const imageName = imageNames[i % imageNames.length];
        const imagePath = `src/assets/omok-imgs/${imageName}`;
        return (
          <Card
            key={idx}
            image={imagePath}
            id={i}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(i)}
            isFlipped={checkIsFlipped(i)}
            onClick={handleCardClick}
          />
        );
      })}
    </div>
  );
};

export default Board;
