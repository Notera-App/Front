import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalState } from "../GlobalState/GlobalState";
import { NoteCardV } from "../Notes/NoteCardV";

export const Home = () => {
  const [dataB] = useGlobalState("dataB");
  console.log(dataB);
  return (
    <Container>
      <Button variant="secondary" size="lg">
        Agregar nueva nota
      </Button>

      <Accordion defaultActiveKey="0">
        {dataB.sections.map((section, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{section.name}</Accordion.Header>
              <Accordion.Body>
                <Row lg={3}>
                  {section.concepts.map((concept) => {
                    return (
                      <Col>
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
