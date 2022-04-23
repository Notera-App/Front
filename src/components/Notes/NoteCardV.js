import { Accordion, Button, Card, Container } from "react-bootstrap";

export const NoteCardV = ({ concept }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{concept.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {concept.description}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};
