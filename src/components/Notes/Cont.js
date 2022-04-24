import { Image } from "react-bootstrap";

export const Cont = ({ content }) => {
  return content?.map((cont) => {
    return (
      <>
        {cont.type === "title" ? (
          <h4 className="text-center">{cont.value}</h4>
        ) : (
          <></>
        )}
        {cont.type === "text" ? <p>{cont.value}</p> : <></>}
        {cont.type === "image" ? <Image src={cont.value} /> : <></>}
      </>
    );
  });
};
