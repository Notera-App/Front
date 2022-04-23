import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Router className="App">
      <NavigationBar />
      <header>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </header>
    </Router>
  );
}

function Home() {
  return <>asdasd</>;
}

export default App;
