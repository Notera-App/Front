import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalState } from "../GlobalState/GlobalState";
import { NoteCardV } from "../Notes/NoteCardV";

export const User_Notes = () => {
  const [dataB] = useGlobalState("dataB");
  console.log(dataB);
  return (
    <Container className="Principal-Container">
      <Accordion defaultActiveKey="0">
        <Row lg="3">
          {dataB?.sections?.map((section, index) => {
            return (
              <>                
                {section?.concepts?.map((concept) => {
                  return (
                    <Col className="mr-1 mb-1 mt-1" key={concept.title}>
                      <NoteCardV concept={concept} />
                    </Col>
                  );
                })}
              </>
            );
          })}
        </Row>
      </Accordion>
    </Container>
  );
};
