import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import { BiSitemap } from "react-icons/bi";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";


export const NoteCardV = ({ concept }) => {
  return (
    <Card className="Note-Card">
      <Card.Body>
        <Card.Title className="text-center">{concept.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {concept.description}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Row>
          <Col className="m-auto" sm>
            <Button className="icon-button p-auto" title="Mapa Conceptual">
              <BiSitemap/>   
            </Button>  
            <Button className="icon-button" title="Voltear Card">
              <MdOutlineFlipCameraAndroid/> 
            </Button>
            <Button className="icon-button" title="Convertir en Audio">
              <AiTwotoneSound/> 
            </Button>        
            <Button className="icon-button" title="Cuestionario">
              <AiFillQuestionCircle/> 
            </Button>        
          </Col>  
        </Row>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};
