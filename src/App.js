import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Container} from "react-bootstrap";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Home } from "./components/home/Home";
import { Register_Course } from "./components/Courses/Register_Course";
import { Register_Notes } from "./components/Notes/Register_Notes";
import { User_Notes } from "./components/Notes/User_Notes";
import { Courses } from "./components/Courses/Courses";

function App() {
  return (
    <Router className="App">
      <NavigationBar />
      <header>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sections" element={<Courses />} />
            <Route path="/course-register" element={<Register_Course />} />
            <Route path="/notes-register" element={<Register_Notes />} />
            <Route path="/concepts" element={<User_Notes />} />
          </Routes>
        </Container>
      </header>
    </Router>
  );
}

export default App;
