export type Evidence = { src: string; alt: string; caption: string };
export type ProjectFile = { label: string; href: string; file?: string };
export type Project = {
  slug: string;
  kind: "curso" | "personal";
  badge: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  objective: string;
  role: string[];
  process: string[];
  tech: string[];
  evidence: Evidence[];
  results: string[];
  learnings: string[];
  files: ProjectFile[];
  note?: string;
  pending: string[];
  story?: string[];
  features?: { title: string; items: string[] };
  links?: { label: string; href: string }[];
  codeFile?: { path: string; title: string; language: string };
};

const REPO = "https://github.com/Pame22k/Portafolio";
const RAW = `${REPO}/blob/main`;

export const projects: Project[] = [
  /* ───────────── ACTIVIDADES DEL CURSO ───────────── */
  {
    slug: "regresion-lineal",
    kind: "curso",
    badge: "Actividad 1 · Semana 3",
    title: "Regresión lineal",
    summary: "Modelo que predice un puntaje a partir de las horas de estudio, con métricas, validación de entrada y gráfica.",
    description:
      "Ejercicio de Machine Learning supervisado desarrollado en Google Colab con Python. Se construye una tabla de horas de estudio y puntajes, se entrena un modelo de regresión lineal y se usa para predecir el puntaje de una cantidad de horas ingresada por el usuario.",
    problem:
      "Estimar cuánto puntaje se espera obtener según las horas dedicadas al estudio, y evitar predicciones fuera del rango de datos con el que se entrenó el modelo.",
    objective:
      "Aplicar regresión lineal con scikit-learn, evaluar el modelo con R² y MSE, y visualizar la recta de regresión junto con una predicción.",
    role: ["Desarrollo y ejecución del ejercicio en Python (notebook de Colab exportado a .py)."],
    process: [
      "Se creó una tabla base con 10 registros (HORAS_ESTUDIO y SCORE).",
      "Con semilla 42 se generaron 20 registros adicionales: horas aleatorias entre 1 y 10, más un ruido uniforme entre −1 y 1, limitado al rango 0–10. En total, 30 registros (datos sintéticos de práctica).",
      "Se entrenó un LinearRegression con las horas como variable X y el score como y.",
      "Se calcularon pendiente, intercepto, R² y MSE.",
      "Una función validar_horas() rechaza valores menores o mayores que el rango disponible (1 a 10 horas) antes de predecir.",
      "Si el valor es válido, se predice el score y se grafican los datos, la recta y el punto predicho.",
    ],
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Google Colab"],
    evidence: [
      { src: "/evidencias/reg-grafica.png", alt: "Gráfica de la regresión lineal con datos, recta y predicción", caption: "Gráfica obtenida al ejecutar regresionlineal.py con 5.5 horas de entrada." },
    ],
    results: [
      "Pendiente: 0.874 · Intercepto: 0.765.",
      "R² = 0.942 y MSE = 0.287 sobre los 30 registros.",
      "Ejemplo de predicción: con 5.5 horas de estudio, el score predicho es 5.57.",
      "Estos valores salen de ejecutar el código del repositorio (semilla 42). Son datos sintéticos de práctica, no resultados de estudiantes reales.",
    ],
    learnings: [
      "Cómo entrenar y evaluar un modelo de regresión lineal con scikit-learn.",
      "Qué indican R² y el error cuadrático medio.",
      "Por qué es importante validar que el dato ingresado esté dentro del rango con el que se entrenó el modelo.",
    ],
    files: [
      { label: "regresionlineal.py", href: `${RAW}/regresionlineal.py`, file: "/codigo/regresionlineal.py" },
      { label: "Notebook en Google Colab", href: "https://colab.research.google.com/drive/1v9XI5IMs_5Wi7SqDt4CQM1RyacENnzRw" },
    ],
    pending: [],
    codeFile: { path: "codigo/regresionlineal.py", title: "regresionlineal.py", language: "python" },
  },
  {
    slug: "laberinto-sivarland",
    kind: "curso",
    badge: "Actividad 2 · Semana 4",
    title: "Laberinto · SIVARLAND",
    summary: "Juego en pygame: conduces una coaster por laberintos generados con DFS y con ruta óptima calculada con BFS.",
    description:
      "SIVARLAND es un videojuego de laberinto hecho en Python con pygame. El jugador conduce una coaster (microbús) por la ciudad, recoge pasajeros y llega a la terminal. Tiene menú, selector de nivel, instrucciones y tres niveles con mecánicas distintas.",
    problem:
      "Crear laberintos que siempre tengan solución, permitir que el jugador los recorra y calcular la mejor ruta desde cualquier posición hasta la meta, incluso cuando el laberinto cambia mientras se juega.",
    objective:
      "Implementar algoritmos de recorrido y búsqueda sobre una estructura de árbol/grafo de celdas, y construir con ellos un juego completo e interactivo.",
    role: [
      "Desarrollo del juego del laberinto en Python con pygame.",
    ],
    process: [
      "Cada celda guarda sus 4 paredes (N, E, S, O). Una clase Laberinto las genera, resuelve y modifica.",
      "Generación con DFS iterativo (backtracking): desde el inicio se avanza a un vecino no visitado tumbando la pared entre ambos; si no hay vecinos, se retrocede. Así se conectan todas las celdas y siempre existe camino.",
      "Ruta óptima con BFS: explora desde la posición actual con una cola y guarda el «padre» de cada celda para reconstruir el camino más corto hasta la meta (botón «Ver ruta óptima»).",
      "Nivel 1, Ruta Centro: laberinto normal.",
      "Nivel 2, Tormenta Eléctrica: las paredes cambian por completo cada 5 segundos y chocar con una pared da una descarga que suma 2 segundos.",
      "Nivel 3, Ruta Nocturna: oscuridad; solo se ve lo que alumbran los faros.",
      "Controles: flechas o WASD, P para generar otro laberinto, ESC para volver al menú.",
    ],
    tech: ["Python", "pygame", "DFS", "BFS", "Programación orientada a objetos"],
    evidence: [
      { src: "/evidencias/lab-menu.png", alt: "Menú principal de SIVARLAND", caption: "Menú principal: Jugar, Elegir nivel, Cómo jugar y Salir." },
      { src: "/evidencias/lab-nivel2.png", alt: "Nivel 2 Tormenta Eléctrica", caption: "Nivel 2 · Tormenta Eléctrica, con contador de pasajeros, movimientos, tiempo y descargas." },
      { src: "/evidencias/lab-nivel3.png", alt: "Nivel 3 Ruta Nocturna", caption: "Nivel 3 · Ruta Nocturna, con visibilidad limitada por los faros." },
    ],
    results: [
      "Juego funcional con menú, tres niveles y botón de ruta óptima.",
      "Por construcción del DFS, todos los laberintos generados tienen solución, y el BFS devuelve el camino más corto.",
    ],
    learnings: [
      "Cómo representar un laberinto como estructura de celdas conectadas (un árbol/grafo).",
      "La diferencia entre DFS (genera caminos largos y profundos) y BFS (encuentra el camino más corto).",
      "Cómo organizar un juego en clases (Laberinto, Boton, Juego) y estados (menú, jugando, fin).",
    ],
    files: [{ label: "laberinto.py", href: `${RAW}/laberinto%20(1).py`, file: "/codigo/laberinto.py" }],
    note:
      "Nota técnica: el laberinto se genera con DFS (búsqueda en profundidad), que construye un árbol de expansión de las celdas, y se resuelve con BFS (búsqueda en anchura), que recorre ese árbol por niveles para hallar el camino más corto.",
    pending: [],
    codeFile: { path: "codigo/laberinto.py", title: "laberinto.py", language: "python" },
  },
  {
    slug: "ai-challenge-kmeans-knn",
    kind: "curso",
    badge: "Actividad 3 · AI Challenge",
    title: "AI Challenge · K-Means y KNN",
    summary: "Agrupa a 500 estudiantes con K-Means y predice si aprueban con KNN, comparando con y sin normalización.",
    description:
      "Desafío de Machine Learning en Python con un conjunto de 500 estudiantes simulados, con horas de estudio, asistencia y tareas. Con K-Means se descubren grupos de hábitos y con KNN se predice si un estudiante aprueba (nota ≥ 60).",
    problem:
      "Identificar perfiles de estudiantes según sus hábitos de estudio y predecir si un estudiante nuevo aprobará o reprobará.",
    objective:
      "Entender y aplicar K-Means (aprendizaje no supervisado) y KNN (aprendizaje supervisado), y comprobar el efecto de normalizar los datos y de elegir distintos valores de k.",
    role: ["Implementación y análisis de los dos algoritmos en Python."],
    process: [
      "Se generaron 500 estudiantes con semilla 42: horas (0–20), asistencia (40–100) y tareas (20–100). La nota depende de esas tres variables más un poco de azar. «Aprobó» = 1 si la nota es 60 o más.",
      "K-Means: se normalizaron las 3 variables con StandardScaler y se agrupó en 3 y en 4 grupos, mostrando el promedio de cada grupo y una gráfica de horas contra asistencia.",
      "KNN: no se usa la nota como variable, porque «aprobó» sale de ella. Se dividió 75 % entrenamiento (375) y 25 % prueba (125).",
      "Se probaron k = 1, 3, 5, 7, 11, 15 y 21, con y sin normalización, y se graficó la exactitud.",
      "Desafío final: predecir a un estudiante con 4 horas, 55 % de asistencia y 50 % de tareas usando el mejor k.",
    ],
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "K-Means", "KNN"],
    evidence: [
      { src: "/evidencias/ai-codigo.png", alt: "Código de KNN en VS Code", caption: "Código del experimento de KNN (con y sin normalización) en VS Code." },
      { src: "/evidencias/ai-kmeans3.png", alt: "Gráfica K-Means con 3 grupos", caption: "K-Means con 3 grupos (horas de estudio contra asistencia)." },
      { src: "/evidencias/ai-kmeans4.png", alt: "Gráfica K-Means con 4 grupos", caption: "K-Means con 4 grupos." },
      { src: "/evidencias/ai-knn-k.png", alt: "Exactitud de KNN según k", caption: "Exactitud de KNN según k, con y sin normalizar." },
    ],
    results: [
      "253 estudiantes aprobados y 247 reprobados en los datos generados.",
      "K-Means (3 grupos): un grupo con muchas horas y notas altas (promedio 75.2), otro con pocas horas y tareas bajas (49.8) y otro con muchas tareas pero pocas horas (55.2).",
      "KNN con normalización alcanzó entre 88.0 % y 91.2 %; sin normalizar, entre 82.4 % y 86.4 %. La normalización mejoró la exactitud en todos los k probados.",
      "Mejor k: 3, con 91.2 % de exactitud.",
      "Desafío final (4 h, 55 %, 50 %): el modelo predice REPRUEBA, con 100 % de probabilidad de reprobar.",
      "Los números salen de ejecutar el código del repositorio con semilla 42; los datos son simulados.",
    ],
    learnings: [
      "Diferencia entre aprendizaje no supervisado (K-Means, sin etiquetas) y supervisado (KNN, con etiqueta).",
      "Por qué conviene normalizar cuando las variables tienen escalas distintas.",
      "Cómo elegir k comparando la exactitud en un conjunto de prueba.",
    ],
    files: [{ label: "actividad_kmeans_knn_2482.py", href: `${RAW}/actividad_kmeans_knn_2482.py`, file: "/codigo/actividad_kmeans_knn_2482.py" }],
    pending: [],
    codeFile: { path: "codigo/actividad_kmeans_knn_2482.py", title: "actividad_kmeans_knn_2482.py", language: "python" },
  },
  {
    slug: "hotspots-comerciales",
    kind: "curso",
    badge: "Actividad 4 · Hotspots Comerciales",
    title: "Hotspots Comerciales · Gasolineras UNO",
    summary: "App en Streamlit con datos reales de OpenStreetMap: agrupa estaciones UNO de La Libertad con K-Means y analiza ubicaciones nuevas con KNN.",
    description:
      "Prototipo académico que analiza la distribución de las estaciones de servicio UNO en el departamento de La Libertad, El Salvador. Los datos se consultan a OpenStreetMap (Overpass API) y se exploran en una aplicación web interactiva con un mapa.",
    problem:
      "Entender cómo se agrupan geográficamente las estaciones UNO y a qué grupo pertenecería una ubicación propuesta, como apoyo exploratorio para analizar zonas comerciales.",
    objective:
      "Aplicar K-Means y KNN a datos geográficos reales y presentar el resultado en una app con controles y un mapa interactivo.",
    role: ["Desarrollo del análisis y de la aplicación (código en el .zip del repositorio)."],
    process: [
      "Consulta Overpass: estaciones (amenity=fuel) de La Libertad cuya marca, nombre u operador contenga «UNO».",
      "Los datos se descargan desde la app («Consultar OpenStreetMap») o se cargan desde un GeoJSON exportado de overpass-turbo.",
      "K-Means: las coordenadas se convierten a kilómetros (aproximación equirectangular) y se agrupa con K entre 2 y 6. Para comparar valores de K se usa el coeficiente silhouette.",
      "KNN: usa distancia Haversine y los grupos de K-Means como pseudoetiquetas. Dada una latitud y longitud propuestas, indica a qué grupo pertenece, según sus vecinos más cercanos.",
      "Mapa interactivo con Folium: puntos por grupo, centroides, ubicación propuesta y líneas a los vecinos.",
      "También incluye un notebook (hotspots_uno.ipynb) y el README del proyecto con el método y sus limitaciones.",
    ],
    tech: ["Python", "Streamlit", "Folium", "OpenStreetMap / Overpass API", "pandas", "scikit-learn", "K-Means", "KNN"],
    evidence: [
      { src: "/evidencias/hot-mapa.png", alt: "Mapa interactivo con grupos y ubicación propuesta", caption: "Mapa interactivo: grupos, centroides y ubicación propuesta." },
      { src: "/evidencias/hot-resumen.png", alt: "Resumen de la app de Hotspots", caption: "Aplicación en Streamlit: 25 estaciones UNO y 5 municipios informados en OSM." },
      { src: "/evidencias/hot-silhouette.png", alt: "Comparación de silhouette por K", caption: "Comparación de valores de K con silhouette." },
    ],
    results: [
      "25 estaciones UNO encontradas en OpenStreetMap, con 5 municipios informados.",
      "Silhouette por K: 0.565 (K=2), 0.591 (K=3), 0.597 (K=4), 0.587 (K=5) y 0.619 (K=6).",
      "Para la ubicación de ejemplo (13.732065, −89.337749) con 3 vecinos, KNN la asigna al grupo 1.",
      "Limitaciones declaradas en el proyecto: los grupos son pseudoetiquetas (no zonas comerciales verificadas), la cantidad de datos depende de la cobertura de OSM, y las distancias son en línea recta. No predice ventas ni viabilidad comercial.",
    ],
    learnings: [
      "Cómo obtener y limpiar datos reales de una fuente abierta (OSM).",
      "Qué mide el silhouette y por qué los grupos de K-Means no son «verdades» sino una forma de explorar los datos.",
      "Cómo construir una app interactiva con Streamlit y mapas con Folium.",
    ],
    files: [
      { label: "Hotspots_UNO_La_Libertad.zip", href: `${RAW}/Hotspots_UNO_La_Libertad.zip` },
      { label: "analisis.py (K-Means, KNN y consulta OSM)", href: "/codigo/hotspots_analisis.py", file: "/codigo/hotspots_analisis.py" },
      { label: "app.py (aplicación Streamlit)", href: "/codigo/hotspots_app.py", file: "/codigo/hotspots_app.py" },
    ],
    pending: [],
    codeFile: { path: "codigo/hotspots_analisis.py", title: "analisis.py", language: "python" },
  },

  /* ───────────── PROYECTOS PERSONALES ───────────── */
  {
    slug: "sortlyscan",
    kind: "personal",
    badge: "Proyecto personal · Innovación",
    title: "SortlyScan",
    summary: "Plataforma que enseña a los niños a reciclar: escanean un residuo con la cámara y reciben al instante dónde depositarlo.",
    description: "Proyecto de innovación sobre reciclaje e inteligencia artificial para reconocer y clasificar residuos.",
    problem: "",
    objective: "",
    role: ["Encargada del diseño de la propuesta.", "Elaboración del pitch.", "Defensa y presentación del proyecto."],
    process: [],
    tech: [],
    evidence: [{ src: "/evidencias/sortlyscan.jpg", alt: "Pamela presentando SortlyScan en un escenario", caption: "Presentación del proyecto SortlyScan." }],
    results: [],
    learnings: [],
    files: [],
    pending: [],
    story: [
      "SortlyScan nació de una pregunta: ¿estamos formando personas que sepan reciclar o solo personas que sepan hablar de reciclaje? En las escuelas el reciclaje suele quedarse en teoría, sin práctica real ni seguimiento, y ante algo tan simple como una botella, los niños dudan.",
      "SortlyScan convierte esa teoría en acción. Con la cámara de un dispositivo, el niño escanea cualquier residuo y recibe al instante una guía clara sobre dónde depositarlo.",
    ],
    features: {
      title: "Cómo funciona",
      items: [
        "Escaneo de residuos con la cámara y guía inmediata de dónde depositarlos.",
        "Cada acción se registra en la plataforma, para ver cuánto recicla cada estudiante y cada sección en tiempo real.",
        "Puntos, retos y rankings que hacen del reciclaje una experiencia motivadora y constante.",
        "Tres pilares de valor: educación práctica, medición de resultados para la escuela y gamificación.",
        "Modelo de negocio con suscripciones trimestrales o anuales para escuelas: Plan Basic, Standard y Premium Campus.",
      ],
    },
  },
  {
    slug: "xyla",
    kind: "personal",
    badge: "Proyecto personal · Videojuego educativo",
    title: "XYLA",
    summary: "Videojuego educativo de matemática para séptimo, octavo y noveno grado, pensado para que las niñas pierdan el miedo a las matemáticas.",
    description: "Videojuego educativo donde resolver un problema matemático es la llave para desbloquear misiones y avanzar de nivel.",
    problem: "",
    objective: "",
    role: ["Diseño del proyecto.", "Elaboración del pitch.", "Desarrollo de la historia y la narrativa del proyecto.", "Colaboración en programación."],
    process: [],
    tech: [],
    evidence: [{ src: "/evidencias/xyla.jpg", alt: "Equipo de XYLA en el evento CIMAT", caption: "El equipo de XYLA en CIMAT." }],
    results: [],
    learnings: [],
    files: [],
    pending: [],
    links: [{ label: "Jugar XYLA", href: "https://xylaproyect.netlify.app/" }],
    story: [
      "XYLA nació de una realidad que vivimos en nuestras aulas: no todas las estudiantes llegan con las mismas bases en matemática, y esos vacíos pueden convertirse en obstáculos en temas como álgebra o geometría. Nos preguntamos cómo practicar sin que se sienta como otra tarea más.",
      "La respuesta fue un videojuego donde la estudiante puede practicar, equivocarse, volver a intentarlo y avanzar a su propio ritmo, fortaleciendo sus habilidades, su confianza y su interés por el mundo STEAM. Somos un equipo de seis estudiantes.",
    ],
    features: {
      title: "Cómo funciona",
      items: [
        "Tres áreas: Operaciones Aritméticas, Álgebra y Geometría, con niveles de dificultad progresiva.",
        "Un robot acompaña a la estudiante y le explica cada tema; la teoría está dentro del juego.",
        "Si se equivoca, recibe retroalimentación y puede volver a intentarlo: el error es parte del aprendizaje.",
        "Reto final de programación: escribe el código de su propia calculadora digital y desbloquea un certificado digital.",
        "Lo probamos con estudiantes de tercer ciclo para observar cómo interactuaban con los retos.",
        "La docente puede asignar un mundo o el reto final como tarea.",
      ],
    },
  },
  {
    slug: "sentinel",
    kind: "personal",
    badge: "Proyecto personal · IA y Machine Learning",
    title: "Sentinel",
    summary: "App móvil que detecta signos de sueño al volante en tiempo real y alerta al conductor antes de que sea demasiado tarde.",
    description: "Aplicación móvil que usa la cámara y un modelo de inteligencia artificial para detectar fatiga y somnolencia en conductores.",
    problem: "",
    objective: "",
    role: ["Diseño del proyecto.", "Programación.", "Desarrollo de un scanner mediante Machine Learning."],
    process: [],
    tech: ["Teachable Machine", "Flutter", "Dart", "TensorFlow", "Firebase"],
    evidence: [{ src: "/evidencias/sentinel.jpg", alt: "Equipo de Sentinel en el Digital Talent Project", caption: "El equipo de Sentinel en el Digital Talent Project." }],
    results: [],
    learnings: [],
    files: [],
    pending: [],
    story: [
      "La fatiga y la somnolencia al volante son una de las principales causas de accidentes en el mundo. Sentinel busca actuar en el momento en que el conductor empieza a mostrar signos de sueño, y no después.",
      "Al abrir la app, el usuario inicia sesión y entra a Monitoreo: la cámara se activa y analiza el rostro del conductor mientras maneja.",
    ],
    features: {
      title: "Cómo funciona",
      items: [
        "Detecta signos de fatiga, como parpadeos prolongados o movimientos de cabeza, y activa una alarma sonora.",
        "La alarma no se apaga sola: el conductor debe apagarla manualmente, para confirmar que está despierto.",
        "Si el conductor no responde, la app puede enviar un mensaje de emergencia a sus contactos registrados.",
        "Incluye contactos de emergencia, edición de perfil y ajustes de la alarma.",
        "Teachable Machine se usó para entrenar el modelo de IA; Flutter y Dart para la app; TensorFlow para el análisis; y Firebase para autenticación y almacenamiento.",
      ],
    },
  },
  {
    slug: "planu",
    kind: "personal",
    badge: "Proyecto personal · Emprendimiento",
    title: "PlanU",
    summary: "Plataforma web de orientación vocacional para estudiantes de bachillerato de El Salvador.",
    description: "Propuesta de innovación y emprendimiento: una plataforma digital para ayudar a los bachilleres a elegir su carrera con información y guía.",
    problem: "",
    objective: "",
    role: ["Participación en el desarrollo de la propuesta de emprendimiento y su presentación (pitch)."],
    process: [],
    tech: ["Figma"],
    evidence: [],
    results: [],
    learnings: [],
    files: [],
    pending: [],
    links: [{ label: "Ver la landing page en Figma", href: "https://www.figma.com/make/Zb0a1s1CTifa7V359TtGkn/Landing-Page-para-planU?code-node-id=0-9&p=f&t=4jTSFCoQQjm6h2FU-0&fullscreen=1" }],
    story: [
      "Elegir una carrera a los 17 años puede sentirse como apostar el futuro. Muchos estudiantes escogen basándose en mitos, presiones o tests que no se ajustan a su contexto. PlanU propone una orientación vocacional digital, personalizada y adaptada a la realidad de El Salvador.",
    ],
    features: {
      title: "Qué ofrece",
      items: [
        "Un asistente virtual que guía al estudiante en un recorrido por la plataforma.",
        "Tres módulos de exámenes de aptitudes y habilidades blandas, basados en metodologías como el modelo CHASIDE.",
        "Directorio de universidades con información del proceso de admisión y de las carreras.",
        "Foro de «Experiencias», con testimonios de universitarios para los bachilleres.",
        "Modelo de negocio: diagnósticos básicos gratuitos y suscripción Premium para un plan de metas personalizado, además de alianzas con universidades.",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const courseProjects = projects.filter((p) => p.kind === "curso");
export const personalProjects = projects.filter((p) => p.kind === "personal");
