import { createGlobalState } from "react-hooks-global-state";
const { useGlobalState } = createGlobalState({
  //   dataB: JSON.parse(localStorage.getItem("dataB")),
  dataB: {
    sections: [
      {
        name: "Ciencias naturales",
        description: "Mi notas de ciencias naturales",
        concepts: [
          {
            title: "Célula procariota",
            description: "Tipo de celula",
            content: [
              {
                value:
                  "La primera categorización de las células se hace en base a la presencia o la ausencia de un núcleo. Así, según esta clasificación, encontramos a las células procariotas y las eucariotas. ",
                type: "info",
              },
            ],
          },
          {
            title: "Célula eucariota",
            description: "Tipo de celula",
            content: [
              {
                value:
                  "La célula eucariota sí tiene un núcleo que encapsula a la información genética, que se encuentra además ordenada en cromosomas, y sus organelos también cuentan con membrana. La síntesis de su ARN ocurre en el núcleo, y las proteínas son sintetizadas por los ribosomas en el citoplasma",
                type: "info",
              },
            ],
          },
          {
            title: "Célula vegetal",
            description: "Tipo de celula",
            content: [
              {
                value:
                  "Los organismos vegetales requieren de un soporte, proporcionado por la vacuola central que se llena de agua para generar turgencia y rigidez, así como esta también es proporcionada por sus paredes celulares de celulosa y lignina",
                type: "info",
              },
            ],
          },
        ],
      },
      {
        name: "Seccion 2",
        description: "Descripcion de la seccion 1",
        concepts: [
          { title: "Concepto 1 s2", description: "Descripcion del concepto 1" },
          { title: "Concepto 2 s2", description: "Descripcion del concepto 2" },
          { title: "Concepto 3 s2", description: "Descripcion del concepto 3" },
          { title: "Concepto 4 s2", description: "Descripcion del concepto 4" },
        ],
      },
    ],
  },
});
export { useGlobalState };
