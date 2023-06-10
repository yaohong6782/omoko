import React, { useState } from "react";
import Card from "@/components/Card";

import "@/scss/board.scss";

type BoardProps = {
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

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, id]);
    } else {
      setOpenCards([id]);
    }
  };

  const checkIsFlipped = (id:number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  }
  return (
    <div className={"board"}>
      {props.cardIds.map((i, idx: number) => {
        const imageName = imageNames[idx % imageNames.length];
        const imagePath = `src/assets/omok-imgs/${imageName}`;
        return (
          <Card
            key={i}
            image={imagePath}
            id={idx}
            isDisabled={true}
            isInactive={false}
            isFlipped={true}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default Board;
