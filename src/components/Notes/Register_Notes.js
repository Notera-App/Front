import { Container, Row, Form, Col, Button} from "react-bootstrap";

export const Register_Notes = () => {
return (
  <div>
    <Container>
      <Row>
        <h3 className="pt-4 text-center">Crear una nueva nota</h3>
        <Col sm={9} className="pt m-auto rounded-lg" id="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titulo de la nota:</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el Titulo" />
              <Form.Text className="text-muted">
            
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripción de la Nota: (Opcional) </Form.Label>
              <Form.Control type="text" placeholder="Descripción del curso" />
            </Form.Group>    

            <h5>Crear Elementos para la creacion de las notas</h5>
            <div className="d-grid gap-2">
            <Button className="principal-button"  type="submit">
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
