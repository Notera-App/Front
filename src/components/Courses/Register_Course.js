import { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalState/GlobalState";

//Funcion encargada de registrar un curso.
export const Register_Course = () => {
  const navigate = useNavigate();
  const [dataB, updateDataB] = useGlobalState("dataB");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataBtoUpdate = dataB;
    dataBtoUpdate.sections.push({
      id: name,
      name: name,
      description: description,
      concepts: [],
    });
    updateDataB(dataBtoUpdate);
    navigate("/");
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
              <div className="d-grid gap-2">
                <Button className="principal-button" type="submit">
                  Crear Nuevo Curso
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
