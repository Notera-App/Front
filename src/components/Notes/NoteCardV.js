import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { BiSitemap } from "react-icons/bi";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Cont } from "./Cont";
import { TextToVoice } from "../elements/TextToVoice";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import { FlipActivity } from "../elements/FlipActivity";
import { ConceptualMap } from "../elements/ConceptualMap";

//Estructura de la flip card
export const NoteCardV = ({ concept }) => {
  const [color, setColor] = useState("f4d06f");

  const handleChangeColor = (val) => {
    setColor(val);
  };

  return (
    <div className="Card-Container">
      <Form.Control
        className="color-pick-box"
        type="color"
        id="exampleColorInput"
        defaultValue="#CFDBD5"
        title="Elige el color de la Nota"
        onChange={(e) => handleChangeColor(e.target.value)}
      />
      <Card
        className="Note-Card"
        style={{
          backgroundColor: { color },
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">
            <h2>{concept.title}</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {concept.description}
          </Card.Subtitle>
          <Card.Text>
            <Cont content={concept.content} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Col className="m-auto" sm>
          <ConceptualMap concept={concept}>
          </ConceptualMap>          
          <FlipActivity concept={concept} />
          <TextToVoice title={concept.title} content={concept.content} />
          <Button className="icon-button" title="Cuestionario">
            <AiFillQuestionCircle />
          </Button>
        </Col>
      </Row>
    </div>
  );
};
