import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginButton } from "../Auth/Login";
import { LogoutButton } from "../Auth/Logout";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../../assets/Logo.png";

export const NavigationBar = () => {
  const handleLogin = () => {};
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Navbar bg="DarkGray" expand="lg">
      <Container>
        <Navbar.Brand className="text-Silver" as={Link} to="/">
          <img
            alt="Logo Notera"
            src={logo}
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-Silver">
            <Nav.Link className="text-Silver" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-Silver" as={Link} to="/sections">
              Mis cursos
            </Nav.Link>
            <Nav.Link className="text-Silver" as={Link} to="/concepts">
              Mis notas
            </Nav.Link>
            <NavDropdown className="text-Silver" title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/course-register">
                Crear nuevo curso
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/notes-register">
                Crear nueva nota
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {isAuthenticated ? <p>Logged: {user.email}</p> : <LoginButton />}
      </Container>
    </Navbar>
  );
};
