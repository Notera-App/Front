import { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalState/GlobalState";

export const Register_Notes = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);
  const [dataB, updateDataB] = useGlobalState("dataB");
  const [section, setSection] = useState(dataB.sections[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataBtoUpdate = dataB;
    console.log(section);
    dataBtoUpdate.sections
      .filter((sectionD) => sectionD.id === section)[0]
      ?.concepts.push({
        title: title,
        description: description,
        content: content,
      });
    updateDataB(dataBtoUpdate);
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Row>
          <h3 className="pt-4 text-center">Crear una nueva nota</h3>
          <Col sm={9} className="pt m-auto rounded-lg" id="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Curso al que pertenece:</Form.Label>
                <Form.Select onChange={(e) => setSection(e.target.value)}>
                  {dataB?.sections?.map((sectionD) => (
                    <option value={sectionD.id}>{sectionD.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Titulo de la nota:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el Titulo"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción de la Nota: (Opcional) </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción del curso"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <h5>Crear Elementos para la creacion de las notas</h5>
              <div className="d-grid gap-2">
                <Button className="principal-button" type="submit">
                  Crear Nueva Nota
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
