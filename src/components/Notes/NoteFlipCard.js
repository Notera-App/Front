import ReactCardFlip from "react-card-flip";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BiSitemap } from "react-icons/bi";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Cont } from "./Cont";
import { useState } from "react";

export const NoteFlipCard = ({ concept }) => {
  const [isFlipped, setFlip] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlip(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Parte Frontal de la Card */}
      <button className="m-0 p-0" onClick={handleClick}>
        <Card className="Note-Card">
          <Card.Body>
            <Card.Title className="text-center">{concept.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {concept.description}
            </Card.Subtitle>
            <Card.Text>
              <Cont content={concept.content} />
            </Card.Text>
          </Card.Body>
        </Card>
      </button>
      {/* Parte Trasera de la Card */}
      <button className="m-0 p-0" onClick={handleClick}>
        <Card className="Note-Card">
          <Card.Body>
            <Card.Title className="text-center">
              {concept.title} Back
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {concept.description}
            </Card.Subtitle>
            <Card.Text>
              <Cont content={concept.content} />
            </Card.Text>
          </Card.Body>
        </Card>
      </button>
    </ReactCardFlip>
  );
};
