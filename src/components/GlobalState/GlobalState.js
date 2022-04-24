import { createGlobalState } from "react-hooks-global-state";
const { useGlobalState } = createGlobalState({
  //   dataB: JSON.parse(localStorage.getItem("dataB")),
  dataB: {
    sections: [
      {
        id: "React",
        name: "React",
        description: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. ",
        concepts: [
          {
            title: "Historia de React",
            description: "La historia de React a traves del tiempo",
            content: [
              {
                value:
                "React fue creado por Jordan Walke, un ingeniero de software de Facebook, quien liberó un primer prototipo de React llamado FaxJS. Este fue influenciado por XHP de HTML una librería de componentes para PHP. Este fue usado por primera vez en el Feed de Noticias de Facebook en 2011 y después en Instagram en 2012. Se volvió código abierto en la JSConf US in May 2013. React Native, permitió el desarrollo nativo para Android, iOS y UWP con React, esto fue anunciado por Facebook en la React Conf en febrero de 2015 y se volvió codigó abierto en marzo de 2015. El 18 de Abril de 2017, Facebook anuncio React Fiber, un nuevo conjunto de algoritmos internos para la renderización, esto es opuesto al viejo algoritmos de renderizado de React.",
                type: "text",
              },
            ],
          },
          {
            title: "Virtual DOM",
            description: "Características de React",
            content: [
              {
                value:
                  "React mantiene un virtual DOM propio, en lugar de confiar solamente en el DOM del navegador. Esto deja a la biblioteca determinar qué partes del DOM han cambiado comparando contenidos entre la versión nueva y la almacenada en el virtual DOM, y utilizando el resultado para determinar cómo actualizar eficientemente el DOM del navegador. Propiedades (props) de react.",
                type: "text",
              },
            ],
          },
          {
            title: "Las propiedades",
            description: "Características de React",
            content: [
              {
                value:
                  "Las propiedades (también conocidas como 'props') pueden definirse como los atributos de configuración para dicho componente. Éstas son recibidas desde un nivel superior, normalmente al realizar la instancia del componente y por definición son inmutables.",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        id: "seccion 2",
        name: "Seccion 2",
        description: "Descripcion de la seccion 1",
        concepts: [
          {
            title: "Concepto 1 s2",
            description: "Descripcion del concepto 1",
            content: [],
          },
          {
            title: "Concepto 2 s2",
            description: "Descripcion del concepto 2",
            content: [],
          },
          {
            title: "Concepto 3 s2",
            description: "Descripcion del concepto 3",
            content: [],
          },
          {
            title: "Concepto 4 s2",
            description: "Descripcion del concepto 4",
            content: [],
          },
        ],
      },
    ],
  },
});
export { useGlobalState };
