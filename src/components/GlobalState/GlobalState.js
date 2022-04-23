import { createGlobalState } from "react-hooks-global-state";
const { useGlobalState } = createGlobalState({
  //   dataB: JSON.parse(localStorage.getItem("dataB")),
  dataB: {
    sections: [
      {
        name: "Seccion 1",
        description: "Descripcion de la seccion 1",
        concepts: [
          { title: "Concepto 1 s1", description: "Descripcion del concepto 1" },
          { title: "Concepto 2 s1", description: "Descripcion del concepto 2" },
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
