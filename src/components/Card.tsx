import React from "react";
import classnames from "classnames";
import "@/scss/card.scss"

type CardProps = {
  image: string;
  onClick: (id: number) => void;
  id: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};
const Card = (props: CardProps) => {
  const cardBack = "src/assets/omok-imgs/cardback.png";

  const handleClick = () => {
    console.log("clicked", props.image);
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };
  return (
    <div
      className={classnames("card", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face">
        <img src={cardBack} alt="card-back" />
      </div>

      <div className="card-face card-back-face">
        <img src={props.image} alt="card"/>
      </div>
    </div>
  );
};

export default Card;
