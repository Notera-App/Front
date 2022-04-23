import { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useGlobalState } from "../GlobalState/GlobalState";

export const Register_Course = () => {
  const [dataB, updateDataB] = useGlobalState("dataB");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let d = dataB;
    d.sections.push({ name: name, description: description });
    updateDataB(d);
    console.log(dataB);
  };
  return (
    <div>
      <Container>
        <Row>
          <h3 className="pt-4 text-center">Crear un nuevo curso</h3>
          <Col sm={8} className="pt m-auto shadow-sm rounded-lg" id="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Titulo del Curso:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el Titulo"
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción del Curso:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción del curso"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Crear
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
