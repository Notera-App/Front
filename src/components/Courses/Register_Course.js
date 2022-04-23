import { Container, Row, Form, Col, Button } from "react-bootstrap";

export const Register_Course = () => {
  return (
    <div>
      <Container>
        <Row>
          <h3 className="pt-4 text-center">Crear un nuevo curso</h3>
          <Col sm={8} className="pt m-auto shadow-sm rounded-lg" id="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Titulo del Curso:</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el Titulo" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción del Curso:</Form.Label>
                <Form.Control type="text" placeholder="Descripción del curso" />
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
