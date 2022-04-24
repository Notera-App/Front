import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextToVoice } from "../elements/TextToVoice";
import { useGlobalState } from "../GlobalState/GlobalState";
import { FlipCard } from "../Notes/FlipCard";
import { NoteCardV } from "../Notes/NoteCardV";
import SpeechtoText from "../elements/voiceToText";


//Vista principal de la aplicacion.
export const Home = () => {
  const [dataB] = useGlobalState("dataB");
  console.log(dataB);
  return (
    <Container>
      <div className="d-grid gap-2">
        <Button
          className="principal-button"
          as={Link}
          to="/notes-register"
          size="lg"
        >
          Agregar nueva nota
        </Button>
      </div>

      <Accordion defaultActiveKey={[0]} alwaysOpen>
        {dataB?.sections?.map((section, index) => {
          return (
            <Accordion.Item
              className="sections"
              eventKey={index}
              key={section.name}
            >
              <Accordion.Header>{section.name}</Accordion.Header>
              <Accordion.Body>
                <Row xs="1" sm="1" md="2" lg="3">
                  {section?.concepts?.map((concept) => {
                    return (
                      <Col key={concept.title}>
                        <NoteCardV concept={concept} />
                      </Col>
                    );
                  })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};
