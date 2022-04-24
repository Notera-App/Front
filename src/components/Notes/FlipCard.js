import ReactCardFlip from "react-card-flip";
import { Card, Image } from "react-bootstrap";
import { Cont } from "./Cont";
import { useState } from "react";

export const FlipCard = ({ front, back }) => {
  const [isFlipped, setFlip] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlip(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Parte Frontal de la Card */}
      <button className="m-0 p-0" onClick={handleClick} className="FlipCard">
        {front.type === "title" ? (
          <h3 className="text-center">{front.value}</h3>
        ) : (
          <></>
        )}
        {front.type === "text" ? <p>{front.value}</p> : <></>}
        {front.type === "image" ? <Image fluid src={front.value} /> : <></>}
      </button>
      {/* Parte Trasera de la Card */}
      <button className="m-0 p-0" onClick={handleClick} className="FlipCard">
        {back.type === "title" ? (
          <h4 className="text-center">{front.value}</h4>
        ) : (
          <></>
        )}
        {back.type === "text" ? <p>{front.value}</p> : <></>}
        {back.type === "image" ? <Image fluid src={front.value} /> : <></>}
      </button>
    </ReactCardFlip>
  );
};
