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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actividad Flip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlipCard {...actualFlip} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={nextFlip}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
