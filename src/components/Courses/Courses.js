import { Badge, Container, ListGroup, Offcanvas, Form, Button } from "react-bootstrap";
import { FlipActivityForCourse } from "../elements/FlipActivityForCourse";
import { useGlobalState } from "../GlobalState/GlobalState";
import { useState } from "react";
import { MdManageSearch } from "react-icons/md";

export const Courses = () => {
  const [dataB] = useGlobalState("dataB");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");

  //Funcion encargada de evitar que la pagina se recarge, debido a que es una single page application
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };
  // Funcion encargada de filtrar categorias por el nombre.
  const handleSearchStringChange = (e) => {
    setSearchString(e.target.value);
  };

  // Funcion encargada de filtrar las diferentes categorias dentro de las secciones.
  const handleSearchCategory = (e) => {
    handleClose()
    setCategory(e.target.name);
  };

  //Lista de cursos
  return (
    <Container className="Principal-Container">
       <Button
        className="floating-button p-0 m-0"
        variant="dark"
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
          <Offcanvas.Title className="text-center text-Silver">
            Filtrar Notas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="text-Silver" onSubmit={handleSubmit}>
            Filtrar por nombre
            <Form.Control            
              className="x text-Silver"
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

   
    <ListGroup as="ul" className="mt-4">
      {dataB?.sections?.filter(
        (section) =>                
          // section.name.toLowerCase().includes(searchString.toLowerCase())&& 
        section.name.includes(category)&&
        section.name.toLowerCase().includes(searchString.toLowerCase())                
      ).map((section, index) => {
        return (
          <>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={section.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{section.name}</div>
                {section.description}
              </div>
              <Badge bg="dark" pill>
                Número de notas: {section.concepts.length}
              </Badge>
            </ListGroup.Item>
            <FlipActivityForCourse section={section} />
          </>


        );
      })}
    </ListGroup>
    </Container>
  );
};
