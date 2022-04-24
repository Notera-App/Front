import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { FlipCard } from "../Notes/FlipCard";

export const FlipActivity = ({ concept }) => {
  const [show, setShow] = useState(false);
  const [actualFlip, setActualFlip] = useState({
    front: {},
    back: {},
    st: false,
  });
  const [flips, setFlips] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nextFlip = () => {
    if (flips.length > 0) {
      setActualFlip(flips.pop());
    }
  };

  useEffect(() => {
    if (concept.content.length === 1) {
      let f = flips;
      f.push({
        front: { value: concept.title, type: "title" },
        back: concept.content[0],
        st: false,
      });
      setFlips(f);
      nextFlip();
    } else {
      concept.content.forEach((element, index) => {
        if (
          element.type === "title" &&
          concept.content[index + 1]?.type === "text"
        ) {
          let f = flips;
          f.push({
            front: { value: element.value, type: "title" },
            back: concept.content[index + 1],
            st: false,
          });
          setFlips(f);
        }
      });
      nextFlip();
    }
    console.log(flips.length);
  }, []);

  return (
    <>
      <Button className="icon-button" title="Voltear Card" onClick={handleShow}>
        <MdOutlineFlipCameraAndroid />
      </Button>

      <Modal show={show} onHide={handleClose} className="Modal-Flip">
        <Modal.Header closeButton className="Modal-Flip-Header">
          <Modal.Title>Actividad Flip</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal-Flip-Body">
          <FlipCard {...actualFlip} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
          {flips.length > 1 ? (
            <Button variant="primary" onClick={nextFlip}>
              Siguiente
            </Button>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
