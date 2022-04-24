
import React, { useState } from "react";
import { PhotoshopPicker } from "react-color";

//Funcion encargada de cambiar el color de las notas.
export const ColorPicker = ({ concept }) => {
    const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <PhotoshopPicker
        color={color}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
      <div
        style={{
          backgroundColor: color,
          height: "300px",
          transition: "ease all 500ms"
        }}
      />
    </div>
  );
};
