import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export const NavigationBar = () => {
  const handleLogin = () => {};
  return (
    <Navbar bg="Orange" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Logo Notera"
            src={logo}
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/sections">
              Mis cursos
            </Nav.Link>
            <Nav.Link as={Link} to="/concepts">
              Mis notas
            </Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/course-register">
                Crear nuevo curso
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/notes-register">
                Crear nueva nota
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={handleLogin}> Iniciar sesión</Button>
      </Container>
    </Navbar>
  );
};
