export type AccentKey = "aurora" | "sunset" | "violet" | "forest";

export type AccentStyle = {
  glow: string;
  badge: string;
  tag: string;
  highlight: string;
  focus: string;
  ring: string;
};

export const accentStyles: Record<AccentKey, AccentStyle> = {
  aurora: {
    glow: "from-primary/30 via-primary/10 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-primary/60",
    ring: "ring-primary/25",
  },
  sunset: {
    glow: "from-secondary/30 via-secondary/15 to-primary/15",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-secondary/60",
    ring: "ring-secondary/25",
  },
  violet: {
    glow: "from-secondary/25 via-primary/10 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/15",
    tag: "border-white/15 bg-white/5 text-white/80",
    highlight: "text-white",
    focus: "focus-visible:ring-white/35",
    ring: "ring-white/15",
  },
  forest: {
    glow: "from-secondary/25 via-primary/15 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-primary/55",
    ring: "ring-primary/25",
  },
};

export type EventItem = {
  id: string;
  title: string;
  highlight: string;
  summary: string;
  description: string;
  date: string;
  year: string;
  location: string;
  hero: string;
  gallery: string[];
  link?: string;
  tags: string[];
  accent: AccentKey;
};

export const eventsData: EventItem[] = [
  {
    id: "guayaba-day",
    title: "Guayaba Day",
    highlight: "Nuestro festival para celebrar a la dev-comunidad.",
    summary:
      "Un día completo de workshops, paneles y sesiones de mentoring para activar a la comunidad Guayaba.",
    description:
      "Llevamos workshops, paneles y speed mentoring a la ESCIHU para que la comunidad creara, colaborara y lanzara side-projects. Durante la jornada conectamos mentores con estudiantes, abrimos espacios para networking y cerramos con un showcase de proyectos emergentes.",
    date: "12 de septiembre de 2024",
    year: "2024",
    location: "ESCIHU · Puebla",
    hero: "/events/guayabaday.webp",
    gallery: ["/events/githubConnect.webp"],
    link: "https://www.instagram.com/p/DAcMD2eOW3B/?img_index=3",
    tags: ["Workshops", "Mentorías", "Experiencias"],
    accent: "sunset",
  },
  {
    id: "cinsoft",
    title: "CinSoft 4ta edición",
    highlight: "Charlas, comunidad y mucha dev-energía en UAEH.",
    summary:
      "Charlamos con más de 400 estudiantes y profesionistas sobre cómo impulsar proyectos comunitarios desde la tecnología.",
    description:
      "Representamos a Guayaba Devs frente a más de 400 estudiantes y profesionales en la UAEH. Compartimos frameworks para lanzar proyectos con impacto, retroalimentamos pitches de nuevas iniciativas y establecimos alianzas con comunidades locales.",
    date: "30 de octubre de 2024",
    year: "2024",
    location: "UAEH · Tlahuelilpan, Hidalgo",
    hero: "/events/cinsoft1.webp",
    gallery: ["/events/cinsoft2.webp", "/events/cinsoft3.webp"],
    link: "https://www.instagram.com/p/DC-CDmFyz3r/?img_index=1",
    tags: ["Charlas", "Networking", "Comunidades"],
    accent: "aurora",
  },
  {
    id: "notion-github",
    title: "Campus Connect: Notion + GitHub",
    highlight: "Flujos colaborativos para comunidades latinoamericanas.",
    summary:
      "Mostramos cómo Notion y GitHub pueden automatizar la operación diaria de una comunidad tech.",
    description:
      "Mostramos cómo escalar comunidades tech con Notion + GitHub en un taller práctico. Armamos tableros en vivo para gestionar capítulos estudiantiles, automatizamos flujos de contenido y compartimos playbooks que hoy están usando comunidades aliadas en Latinoamérica.",
    date: "19 de marzo de 2024",
    year: "2024",
    location: "UNAM · Ciudad de México",
    hero: "/events/githubConnect.webp",
    gallery: [],
    link: "https://www.instagram.com/p/C4l7mWsLsEP/?img_index=1",
    tags: ["Productividad", "Integraciones", "Community Ops"],
    accent: "violet",
  },
  {
    id: "compufest",
    title: "Compu-Fest [0]",
    highlight: "Hack-room y showcase para devs nuevos y veteranos.",
    summary:
      "Hack-room, live coding y UX labs para que la comunidad del sur conectara y mostrara sus proyectos.",
    description:
      "Creamos un espacio para que quienes aman construir pudieran conectar con personas que comparten el mismo hype. Hubo hack-room, sesiones de live coding, laboratorios de UX y un hiring corner para vincular talento con empresas locales. Cerramos con demo-day y retros de aprendizajes.",
    date: "6 de julio de 2024",
    year: "2024",
    location: "UNAM · CDMX",
    hero: "/events/compu-fest.webp",
    gallery: ["/events/compu-fest2.webp"],
    link: "https://www.instagram.com/p/DBDJYa1OC5I/",
    tags: ["Hack room", "Showcase", "Community"],
    accent: "forest",
  },
];

export const getEventById = (id: string) =>
  eventsData.find((event) => event.id === id);
