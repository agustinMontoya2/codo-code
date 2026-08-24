// Fuente única de datos de la sección Proyectos (#proyectos).
//
// Para agregar un proyecto: copiá un objeto, cambiale los textos y el id.
// Para destacar uno: ponle `featured: true` (solo uno; si ninguno lo tiene,
// se destaca automáticamente el primero).
//
// Campos por proyecto:
//   id       -> identificador único (se usa como key de React)
//   visual   -> mockup decorativo: "store" | "calendar" | "bars"
//               | "document" | "activity"
//               (clave inválida cae a "store")
//   bar      -> texto en la barra superior del mockup
//   chip     -> etiqueta sobre el título
//   title    -> nombre del proyecto
//   desc     -> problema que tenía el cliente
//   tags     -> lista corta de features (1 a 3 funciona mejor)
//   result   -> resultado logrado (lo antepone "Resultado:")
//   linkLabel-> opcional. Default: "Ver el proyecto"
//   upcoming -> opcional. Proyecto próximo: muestra el chip "Próximamente"
//               y oculta el botón inferior.
//   image    -> opcional. Captura real del proyecto, ruta pública desde
//               /public (ej. "/proyectos/kiosco-pono.webp"). Si existe,
//               reemplaza el mockup decorativo del visual.
//   imageAlt -> opcional. Texto alternativo de la captura. Default: title.

export interface Project {
  id: string;
  bar: string;
  chip: string;
  title: string;
  desc: string;
  tags: string[];
  result: string;
  featured?: boolean;
  upcoming?: boolean;
  image?: string;
  imageAlt?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "kiosco-pono",
    featured: true,
    upcoming: true,
    bar: "Tienda online",
    chip: "Tienda online",
    title: "Kiosco Pono · Tienda online",
    desc: "La administración de la tienda se hacia compleja. Los clientes debian consultar los productos presencialmente y no habia gestion de stock.",
    tags: [
      "Tienda online",
      "Administración de productos",
      "Gestion de usuarios",
    ],
    result:
      "los clientes pueden consultar productos y solicitarlos sin salir de casa, y los vendedores pueden gestionar productos de forma eficiente.",
    image: "/proyects/kiosco-pono.webp",
  },
  {
    id: "lab-cv-laboratorio-dental",
    bar: "Gestión interna",
    chip: "Web app",
    title: "Lab Cv · Laboratorio Dental",
    desc: "El laboratorio manejaba las órdenes de trabajo por sucursal en papel y armaba los remitos a mano.",
    tags: ["Gestión de trabajo", "Gestion de remitos"],
    result:
      "las órdenes se siguen por estado en cada sucursal y el equipo genera remitos con totales en segundos.",
    image: "/proyects/lab-cv.webp",
    imageAlt: "Lab Cv",
  },
  {
    id: "team-rayo-gym",
    bar: "Gestión deportiva",
    chip: "Web app",
    title: "Team Rayo · Gimnasio",
    desc: "El gimnasio necesitaba centralizar la gestión de sus alumnos, cuotas, asistencia y actividades deportivas, además de mantener actualizada su presencia online.",
    tags: ["Gestión de alumnos", "Control de cuotas", "Asistencia"],
    result:
      "el gimnasio puede administrar sus alumnos y actividades desde un único lugar, mientras la landing muestra información actualizada sobre horarios, planes y próximos eventos.",
    image: "/proyects/team-rayo.webp",
    imageAlt: "Team Rayo",
  },
];
