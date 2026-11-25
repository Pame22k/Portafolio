export const profile = {
  name: "Pamela Raquel Ortiz Cruz",
  shortName: "Pamela Ortiz",
  role: "Futura estudiante de Economía Empresarial",
  tagline: "Convierto ideas en oportunidades combinando estrategia, creatividad y tecnología.",
  email: "2pamelaortiz2@gmail.com",
  github: "https://github.com/Pame22k",
  repo: "https://github.com/Pame22k/Portafolio",
};

export const about = {
  paragraphs: [
    "Soy una persona creativa, analítica y organizada, interesada en los negocios, el análisis y la innovación. Me gusta participar en proyectos, aportar ideas, asumir responsabilidades y trabajar en equipo.",
    "Tengo iniciativa para liderar, diseñar propuestas y buscar soluciones a diferentes problemas. Me interesa combinar el pensamiento estratégico con la creatividad y la tecnología para transformar ideas en oportunidades.",
  ],
  interests: ["Negocios", "Análisis de datos", "Innovación", "Tecnología", "Diseño y presentación de ideas"],
  strengths: [
    "Pensamiento analítico",
    "Creatividad e innovación",
    "Liderazgo",
    "Organización",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Pensamiento estratégico",
    "Trabajo en equipo",
  ],
  academicGoals:
    "Ingresar en 2027 a la Universidad Dr. José Matías Delgado para estudiar la Licenciatura en Economía Empresarial.",
  professionalGoals:
    "Desarrollarme en el ámbito empresarial, asumir nuevos retos y llegar a ocupar puestos estratégicos en empresas reconocidas. Quiero fortalecer mis conocimientos en análisis de datos, gestión empresarial y toma de decisiones, y complementar mi formación con experiencias internacionales y especializaciones.",
};

export type ExperienceItem = {
  icon: "trophy" | "heart" | "book" | "recycle" | "gamepad" | "smartphone" | "compass";
  title: string;
  tag: string;
  text: string;
  href?: string;
};

export const experience: { group: string; intro: string; items: ExperienceItem[] }[] = [
  {
    group: "Reconocimientos y voluntariado",
    intro: "Logros y compromiso con la comunidad.",
    items: [
      { icon: "trophy", tag: "Reconocimiento", title: "Competencia CIMAT: primer lugar", text: "Participé con mi equipo en CIMAT, una competencia de proyectos matemáticos, y obtuvimos el primer lugar con el proyecto XYLA.", href: "/proyectos/xyla" },
      { icon: "book", tag: "Tutorías", title: "Tutora de niños de tercer grado", text: "Di tutorías a niños de tercer grado a través de un programa del Banco Promerica, otorgado por mis buenas calificaciones. Fue como un voluntariado, pero remunerado." },
      { icon: "heart", tag: "Voluntariado", title: "Hogar para adultos mayores", text: "Participé en actividades de voluntariado en un hogar para adultos mayores." },
    ],
  },
  {
    group: "Proyectos de innovación y tecnología",
    intro: "Propuestas que diseñé, presenté y desarrollé junto a mis equipos.",
    items: [
      { icon: "recycle", tag: "Innovación", title: "SortlyScan", text: "Plataforma para que los niños aprendan a reciclar escaneando residuos con la cámara. Me encargué del diseño, el pitch y la defensa.", href: "/proyectos/sortlyscan" },
      { icon: "gamepad", tag: "Videojuego educativo", title: "XYLA", text: "Videojuego de matemática para séptimo a noveno grado. Participé en el diseño, el pitch, la narrativa y la programación.", href: "/proyectos/xyla" },
      { icon: "smartphone", tag: "IA y Machine Learning", title: "Sentinel", text: "App que detecta somnolencia al volante. Participé en el diseño, la programación y el scanner con Machine Learning.", href: "/proyectos/sentinel" },
      { icon: "compass", tag: "Emprendimiento", title: "PlanU", text: "Plataforma web de orientación vocacional para estudiantes de bachillerato.", href: "/proyectos/planu" },
    ],
  },
];

export const skills = {
  personal: [
    "Pensamiento analítico",
    "Creatividad e innovación",
    "Liderazgo",
    "Organización",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Pensamiento estratégico",
    "Trabajo en equipo",
    "Diseño y presentación de ideas",
  ],
  technical: [
    { title: "Lenguajes de programación", icon: "code", used: ["Python", "JavaScript", "Dart"] },
    { title: "Desarrollo web y de apps", icon: "globe", used: ["Tailwind CSS", "Flutter"] },
    { title: "Inteligencia artificial y Machine Learning", icon: "brain", used: ["Teachable Machine", "TensorFlow", "Google Colab"] },
    { title: "Herramientas tecnológicas", icon: "wrench", used: ["Microsoft Office", "GitHub", "Figma", "Firebase"] },
  ],
};

export const education = {
  timeline: [
    { status: "Finalizado", place: "Colegio Villanueva", degree: "Bachillerato", period: "2025–2026" },
    { status: "Próximo ingreso", place: "Universidad Dr. José Matías Delgado", degree: "Licenciatura en Economía Empresarial", period: "Período previsto: 2027–2031" },
  ],
  certifications: [
    "Microsoft Office Specialist (MOS) Excel Specialist",
    "Microsoft Office Specialist (MOS) Excel Expert",
    "TOEIC",
    "Cursos de Platzi",
  ],
  courses: [
    "Preparación y formación MOS Excel Specialist",
    "Preparación y formación MOS Excel Expert",
    "English Conversation Club de TELUS",
    "Cursos de liderazgo",
    "Cursos de Platzi en diferentes áreas",
  ],
};
