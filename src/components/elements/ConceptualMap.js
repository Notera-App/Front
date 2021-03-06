import { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { BiSitemap } from "react-icons/bi";

//Ventana emergente donde se visualizara el mapa conceptual.
export const ConceptualMap = ({ concept }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="icon-button"
        title="Mapa Conceptual"
        onClick={handleShow}
      >
        <BiSitemap />
      </Button>
      {concept.MapaConceptual ? (
        <Modal show={show} onHide={handleClose} className="fullscreen-modal">
          <Modal.Header closeButton className="Modal-Conceptual-Header">
            <Modal.Title>Mapa Conceptual - {concept.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal-Conceptual-Body">
            <Image fluid src={concept?.MapaConceptual} alt="Mapa Conceptual" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Salir
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )
      }
    </>
  );
};
