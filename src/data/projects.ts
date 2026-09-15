// Fuente única de datos de la sección Proyectos (#proyectos).
//
// Para agregar un proyecto: copiá un objeto, cambiale los textos y el id.
// Para destacar uno: ponle `featured: true` (solo uno; si ninguno lo tiene,
// se destaca automáticamente el primero).
//
// Campos por proyecto:
//   id       -> identificador único (se usa como key de React)
//   bar      -> texto en la barra superior del mockup
//   chip     -> etiqueta sobre el título
//   title    -> nombre del proyecto
//   desc     -> problema que tenía el cliente
//   tags     -> lista corta de features (1 a 3 funciona mejor)
//   result   -> resultado logrado (lo antepone "Resultado:")
//   link     -> opcional. URL del sitio publicado. Si existe, muestra el
//               botón "Ver el sitio". No se muestra si el proyecto es upcoming.
//   linkLabel-> opcional. Default: "Ver el sitio"
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
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
}

export const PROJECTS: Project[] = [
  {
    featured: true,
    id: "mena-car-wash",
    bar: "Presencia online",
    chip: "Landing page",
    title: "MENA Car Wash",
    desc: "Sin página propia, los turnos se coordinaban por teléfono y los precios vivían en Instagram: cada cliente nuevo tenía que escribir para saber si estaban abiertos.",
    tags: ["Landing page", "Precios en vivo", "Reservas por WhatsApp"],
    result:
      "los clientes ven servicios y precios actualizados por tipo de vehículo y reservan su turno directo por WhatsApp en un clic.",
    image: "/proyects/mena-carwash.webp",
    imageAlt: "MENA Car Wash",
    link: "https://mena-carwash.codo-code.dev",
  },
  {
    id: "vessel-cafe",
    bar: "Presencia online",
    chip: "Landing page",
    title: "Vessel Café",
    desc: "El menú y los precios expiraban cada 24 horas en las historias y los clientes terminaban pidiendo el horario por mensaje directo.",
    tags: ["Landing page", "Menú con precios", "Calendario de eventos"],
    result:
      "los clientes ven el menú completo con precios, los horarios de la semana y los próximos eventos en un solo lugar, actualizado sin esperar una historia del día.",
    image: "/proyects/vessel-cafe.webp",
    imageAlt: "Vessel Café",
    link: "https://vessel-cafe.codo-code.dev",
  },
  {
    id: "siete-chukis",
    bar: "Presencia online",
    chip: "Landing page",
    title: "Los Siete Chukis",
    desc: "Heladería artesanal sin presencia digital: los precios, sabores y turnos se manejaban por Instagram y WhatsApp sin un solo lugar centralizado.",
    tags: ["Landing page", "Catálogo de productos"],
    result:
      "los clientes ven el catálogo completo de helados, milkshakes y tortas con precios, reservan turnos por WhatsApp y descubren la ubicación y horarios actualizados.",
    image: "/proyects/siete-chukis.webp",
    imageAlt: "Los Siete Chukis",
    link: "https://siete-chukis.codo-code.dev",
  },
  {
    id: "team-rayo-gym",
    bar: "Gestión deportiva",
    chip: "Web app",
    title: "Team Rayo · Gimnasio",
    desc: "Alumnos, cuotas, asistencia y actividades dispersos entre planillas y una web desactualizada.",
    tags: ["Gestión de alumnos", "Control de cuotas", "Asistencia"],
    result:
      "el gimnasio puede administrar sus alumnos y actividades desde un único lugar, mientras la landing muestra información actualizada sobre horarios, planes y próximos eventos.",
    image: "/proyects/team-rayo.webp",
    imageAlt: "Team Rayo",
    link: "https://team-rayo.codo-code.dev",
  },
  {
    id: "lab-cv-laboratorio-dental",
    bar: "Gestión interna",
    chip: "Web app",
    title: "Lab Cv · Laboratorio Dental",
    desc: "Órdenes de trabajo en papel por sucursal y remitos cargados a mano: cada cobro era media hora de tipeo.",
    tags: ["Gestión de trabajo", "Gestión de remitos"],
    result:
      "las órdenes se siguen por estado en cada sucursal y el equipo genera remitos con totales en segundos.",
    image: "/proyects/lab-cv.webp",
    imageAlt: "Lab Cv",
  },
];
