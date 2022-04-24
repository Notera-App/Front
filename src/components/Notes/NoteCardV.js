import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import { BiSitemap } from "react-icons/bi";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Cont } from "./Cont";
import { TextToVoice } from "../elements/TextToVoice";

export const NoteCardV = ({ concept }) => {
  console.log(concept);
  return (
    <Card className="Note-Card">
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
        <Row>
          <Col className="m-auto" sm>
            <Button className="icon-button p-auto" title="Mapa Conceptual">
              <BiSitemap />
            </Button>
            <Button className="icon-button" title="Voltear Card">
              <MdOutlineFlipCameraAndroid />
            </Button>
            <TextToVoice title={concept.title} content={concept.content} />
            <Button className="icon-button" title="Cuestionario">
              <AiFillQuestionCircle />
            </Button>
          </Col>
        </Row>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};
