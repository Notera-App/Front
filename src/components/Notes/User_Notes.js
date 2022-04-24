import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Offcanvas,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalState } from "../GlobalState/GlobalState";
import { useState } from "react";
import { NoteCardV } from "../Notes/NoteCardV";
import { NoteFlipCard } from "../Notes/NoteFlipCard";
import { MdManageSearch } from "react-icons/md";

export const User_Notes = () => {
  const [dataB] = useGlobalState("dataB");
  const [show, setShow] = useState(false);
  console.log(dataB);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleSearchStringChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchCategory = (e) => {
    // console.log("Buscando por categoria");
    // console.log(e.target.name);
    setCategory(e.target.name);
  };
  return (
    <Container className="Principal-Container">
      <Button
        className="floating-button p-0 m-0"
        variant="warning"
        onClick={handleShow}
      >
        <MdManageSearch color="white" size={30} />
      </Button>
      <Offcanvas
        className="bg-Black text-Peach"
        show={show}
        onHide={handleClose}
        scroll="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">
            Filtrar Notas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            Filtrar por nombre
            <Form.Control
              className="x  "
              type="search"
              value={searchString}
              onChange={handleSearchStringChange}
            />
            <Button
              className="secondary-button mt-4 mb-2"
              name=""
              onClick={handleSearchCategory}
            >
              Todos los cursos
            </Button>
            {dataB?.sections?.map((section, index) => (
              <Button
                className="secondary-button"
                name={section.name}
                onClick={handleSearchCategory}
              >
                {section.name}
              </Button>
            ))}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Accordion defaultActiveKey="0">
        <Row xs="1" sm="2" md="2" lg="3">
          {dataB?.sections
           /* Filtro para categoria de Cursos */
            .filter(
              (section) =>                
                // section.name.toLowerCase().includes(searchString.toLowerCase())&& 
              section.name.includes(category)              
            )
            .map((section, index) => {
              return (
                <>
                  {section?.concepts
                    /* Filtro para nombre de Lecciones */
                    ?.filter(
                      (concept) =>
                        concept.title
                          .toLowerCase()
                          .includes(searchString.toLowerCase())  
                    )
                    .map((concept) => {
                      return (
                        <Col className="mr-1 mb-1 mt-1" key={concept.title}>
                          {/* <NoteCardV concept={concept} /> */}
                          <NoteFlipCard concept={concept} />
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
