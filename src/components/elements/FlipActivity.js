import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { FlipCard } from "../Notes/FlipCard";

export const FlipActivity = ({ concept }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="icon-button" title="Voltear Card" onClick={handleShow}>
        <MdOutlineFlipCameraAndroid />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actividad Flip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlipCard
            front={{ value: concept.title, type: "title" }}
            back={concept.content[0]}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
