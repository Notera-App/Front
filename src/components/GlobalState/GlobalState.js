import { createGlobalState } from "react-hooks-global-state";
const { useGlobalState } = createGlobalState({
  //   dataB: JSON.parse(localStorage.getItem("dataB")),
  dataB: {
    sections: [
      {
        id: "React",
        name: "React",
        description:
          "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. ",
        concepts: [
          {
            title: "Historia de React",
            description: "La historia de React a traves del tiempo",
            content: [
              {
                value:
                  "React fue creado por Jordan Walke, un ingeniero de software de Facebook, quien liberó un primer prototipo de React llamado FaxJS. Este fue influenciado por XHP de HTML una librería de componentes para PHP. Este fue usado por primera vez en el Feed de Noticias de Facebook en 2011 y después en Instagram en 2012. Se volvió código abierto en la JSConf US in May 2013. React Native, permitió el desarrollo nativo para Android, iOS y UWP con React, esto fue anunciado por Facebook en la React Conf en febrero de 2015 y se volvió codigó abierto en marzo de 2015.",
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
          {
            title: "El Estado",
            description: "Características de React",
            content: [
              {
                value:
                  "El estado de un componente se define como una representación del mismo en un momento concreto, es decir, una instantánea del propio componente. Existen dos tipos de componentes con y sin estado, denominados statefull y stateless.",
                type: "text",
              },
            ],
          },
          {
            title: "Ciclos de Vida",
            description: "Características de React",
            content: [
              {
                value:
                  "El ciclo de vida es una serie de estados por los cuales pasan los componentes statefull a lo largo de su existencia. Se pueden clasificar en tres etapas de montaje o inicialización, actualización y destrucción. Dichas etapas tienen correspondencia en diversos métodos.",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        id: "Bases de Datos",
        name: "Bases de Datos",
        description: "Fundamentos de bases de datos",
        concepts: [
          {
            title: "Base de Datos",
            description: "Fundamentos de Bases de Datos",
            MapaConceptual: "https://i.ibb.co/GW63c1v/Mapa-Conceptual2.png",
            content: [
              {
                value: "Definicion de base de Datos",
                type: "title",
              },
              {
                value:
                  "Una base de datos se encarga no solo de almacenar datos, sino también de conectarlos entre sí en una unidad lógica. En términos generales, una base de datos es un conjunto de datos estructurados que pertenecen a un mismo contexto y, en cuanto a su función, se utiliza para administrar de forma electrónica grandes cantidades de información.",
                type: "text",
              },
              {
                value: "Clasificación de bases de datos",
                type: "title",
              },
              {
                value:
                  "Las bases de datos pueden clasificarse de varias maneras, de acuerdo al contexto que se esté manejando, la utilidad de las mismas o las necesidades que satisfagan.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },
});
export { useGlobalState };
