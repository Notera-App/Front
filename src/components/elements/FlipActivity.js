// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import { MdOutlineFlipCameraAndroid } from "react-icons/md";
// import { FlipCard } from "../Notes/FlipCard";

// export const FlipActivity = ({ concept }) => {
//   const nextFlip = () => {

//   };
//   const [show, setShow] = useState(false);
//   const [actualFlip, setActualFlip] = useState({
//     front: {},
//     back: {},
//     st: false,
//   });

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   let flips = [];
//   if (concept.content.length === 1) {
//     flips = [
//       {
//         front: { value: concept.title, type: "title" },
//         back: concept.content[0],
//       },
//     ];
//   } else {
//     concept.content.forEach((element, index) => {
//       if (
//         element.type === "title" &&
//         concept.content[index + 1]?.type === "text"
//       ) {
//         flips.push({
//           front: { value: element.value, type: "title" },
//           back: concept.content[index + 1],
//         });
//       }
//     });
//   }

//   console.log(flips);

//   return (
//     <>
//       <Button className="icon-button" title="Voltear Card" onClick={handleShow}>
//         <MdOutlineFlipCameraAndroid />
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Actividad Flip</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <FlipCard />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
