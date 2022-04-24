import { Badge, Container, ListGroup, Row } from "react-bootstrap";
import { FlipActivityForCourse } from "../elements/FlipActivityForCourse";
import { useGlobalState } from "../GlobalState/GlobalState";

export const Courses = () => {
  const [dataB] = useGlobalState("dataB");
  return (
    <ListGroup as="ul" className="mt-4">
      {dataB?.sections?.map((section, index) => {
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
              <Badge bg="warning" pill>
                Número de notas: {section.concepts.length}
              </Badge>
            </ListGroup.Item>
            <FlipActivityForCourse section={section} />
          </>
        );
      })}
    </ListGroup>
  );
};
