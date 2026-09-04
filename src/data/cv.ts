/**
 * Fuente única de verdad del portafolio.
 * Todo el contenido sale de la hoja de vida — edita aquí, no en los componentes.
 */

export const profile = {
  name: 'Geovanny Enrique Villa Sánchez',
  first: 'Geovanny Enrique',
  last: 'Villa Sánchez',
  role: 'Ingeniero de Sistemas',
  roleNote: 'egresado · grado en trámite (dic. 2026)',
  tagline: ['Construyo software', 'que además', 'se defiende solo'],
  location: 'Barranquilla, Colombia',
  email: 'villasanchezg22@gmail.com',
  phone: '+57 350 267 4468',
  phoneHref: '+573502674468',
  linkedin: 'https://www.linkedin.com/in/kikevis',
  linkedinLabel: '@kikevis',
  github: 'https://github.com/kikevis',
  githubLabel: 'kikevis',
  company: 'TPrime',
  companyUrl: 'https://www.tprime.com.co/',
  available: 'Disponible para proyectos y posiciones full-time',
} as const

export const summary =
  'Ingeniero de Sistemas con más de 5 años de experiencia técnica unificando el desarrollo de software Full Stack, la arquitectura en la nube y la seguridad de la información. Especializado en el aseguramiento del ciclo de vida del software (DevSecOps), mitigación de vulnerabilidades web bajo el estándar OWASP, gestión de identidades (RBAC) y cumplimiento de directrices ISO/IEC 27001.'

export const summarySecond =
  'Experiencia demostrada administrando infraestructura Cloud en entornos Microsoft 365 y diseñando planes corporativos de concienciación digital para la reducción del riesgo humano — porque el eslabón más frágil casi nunca es el código.'

export const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '3', label: 'Organizaciones' },
  { value: '4', label: 'Titulaciones' },
  { value: '2', label: 'Frentes: dev + seguridad' },
] as const

export type Job = {
  company: string
  role: string
  period: string
  start: string
  end: string
  current?: boolean
  summary: string
  bullets: string[]
  tags: string[]
}

export const jobs: Job[] = [
  {
    company: 'SAINGE S.A.S',
    role: 'Analista TI',
    period: 'Abr 2026 — Jul 2026',
    start: '2026',
    end: '2026',
    current: true,
    summary:
      'Administración de la infraestructura cloud y del perímetro de seguridad de la operación corporativa.',
    bullets: [
      'Administración Cloud de Microsoft 365 mediante la gestión de SharePoint, OneDrive, control de permisos y auditorías.',
      'Diseño de infraestructura y redes orientadas a la conectividad corporativa y sistemas de seguridad CCTV.',
      'Liderazgo en transformación digital enfocado en la optimización de flujos de trabajo corporativos y seguridad digital.',
      'Soporte técnico de hardware especializado en el mantenimiento y optimización de estaciones de alto rendimiento.',
      'Desarrollo web y multimedia para la gestión de plataformas WordPress y optimización de activos con IA.',
    ],
    tags: ['Microsoft 365', 'SharePoint', 'RBAC', 'Redes', 'CCTV', 'WordPress'],
  },
  {
    company: 'Universidad de la Costa',
    role: 'Programador Full Stack',
    period: 'Abr 2022 — Abr 2025',
    start: '2022',
    end: '2025',
    summary:
      'Tres años construyendo y sosteniendo las plataformas académicas internas usadas a diario por la comunidad universitaria.',
    bullets: [
      'Desarrollo Full Stack en la plataforma Emma CUC mediante la creación y actualización de módulos con React y Django REST.',
      'Mantenimiento de software en Ágil CUC enfocado en la optimización de módulos con Bootstrap y CodeIgniter.',
      'Ingeniería de requerimientos y capacitación mediante reuniones interdepartamentales para el diseño de módulos y formación de usuarios.',
      'Soporte técnico y atención al cliente especializado en la resolución de incidencias dentro de las plataformas Emma y Ágil CUC.',
    ],
    tags: ['React', 'Django REST', 'CodeIgniter', 'Bootstrap', 'SQL', 'Git'],
  },
  {
    company: 'Fundación IDI',
    role: 'Webmaster',
    period: 'Mar 2020 — Dic 2021',
    start: '2020',
    end: '2021',
    summary:
      'Responsable end-to-end de la presencia web de la fundación: contenido, base de datos, respaldos y métricas.',
    bullets: [
      'Administración de CMS y webmastering mediante la creación y actualización continua de sitios web corporativos.',
      'Gestión y control de bases de datos enfocado en el mantenimiento de la integridad y rendimiento de los sitios web.',
      'Soporte técnico especializado orientado a la resolución de incidencias tecnológicas para clientes de la fundación.',
      'Políticas de backup y respaldo mediante la ejecución de copias de seguridad de páginas web, documentos y bases de datos.',
      'Análisis de datos con herramientas Google para el control y seguimiento de métricas e información digital.',
    ],
    tags: ['WordPress', 'CMS', 'MySQL', 'Backups', 'Analytics'],
  },
]

export type SkillGroup = {
  id: string
  title: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'dev',
    title: 'Desarrollo',
    note: 'Del modelo de datos al pixel',
    items: ['React', 'TypeScript', 'Django', 'Django REST', 'CodeIgniter', 'PHP', 'SQL', 'Bootstrap', 'Tailwind', 'WordPress', 'Git'],
  },
  {
    id: 'sec',
    title: 'Ciberseguridad',
    note: 'DevSecOps y gestión del riesgo',
    items: ['OWASP Top 10', 'ISO/IEC 27001', 'RBAC / IAM', 'Hardening', 'Gestión de vulnerabilidades', 'Logs y monitoreo', 'Concienciación (awareness)', 'Políticas de backup'],
  },
  {
    id: 'cloud',
    title: 'Cloud e Infraestructura',
    note: 'Operación y continuidad',
    items: ['Microsoft 365', 'SharePoint', 'OneDrive', 'Vercel', 'Cloudflare', 'Redes', 'CCTV', 'Hardware', 'Auditorías de permisos'],
  },
  {
    id: 'ops',
    title: 'Producto y Personas',
    note: 'Lo que hace que un sistema se use',
    items: ['Ingeniería de requerimientos', 'Capacitación de usuarios', 'Soporte especializado', 'Analítica digital', 'IA aplicada (Claude)', 'Inglés intermedio'],
  },
]

export type Credential = {
  title: string
  org: string
  year: string
  status?: 'progreso' | 'completado'
  note?: string
}

export const education: Credential[] = [
  {
    title: 'Ingeniería de Sistemas',
    org: 'Corporación Universitaria Americana',
    year: '2026',
    status: 'progreso',
    note: 'Plan de estudios culminado. Ceremonia de grado prevista para finales de 2026.',
  },
  {
    title: 'Tecnología en Análisis y Sistemas de Información',
    org: 'SENA',
    year: '2017',
    status: 'completado',
  },
  {
    title: 'Técnico en Sistemas',
    org: 'SENA',
    year: '2015',
    status: 'completado',
  },
  {
    title: 'Bachiller Académico',
    org: 'I. E. D. San José',
    year: '2015',
    status: 'completado',
  },
]

export const certifications: Credential[] = [
  {
    title: 'Diplomado en Seguridad Informática',
    org: 'Formación complementaria',
    year: '2026',
    status: 'progreso',
    note: 'Cursado y aprobado. Certificado en expedición.',
  },
  {
    title: 'Bootcamp en Ciberseguridad',
    org: 'MinTIC · Universidad Libre · Etraining',
    year: '2025',
    status: 'completado',
  },
]

export const capabilities = [
  {
    n: '01',
    title: 'Desarrollo Full Stack seguro',
    body: 'Aplicaciones con React y Django que se diseñan desde el principio contra el OWASP Top 10: validación, control de sesión, permisos por rol y superficie mínima de ataque.',
  },
  {
    n: '02',
    title: 'Arquitectura Cloud y Microsoft 365',
    body: 'Gobierno de identidades y permisos, auditorías de acceso, políticas de respaldo y continuidad sobre SharePoint, OneDrive y el resto del tenant.',
  },
  {
    n: '03',
    title: 'Gestión del riesgo humano',
    body: 'Planes corporativos de concienciación digital, capacitación de usuarios y procedimientos alineados a ISO/IEC 27001 para bajar el riesgo donde de verdad ocurre.',
  },
  {
    n: '04',
    title: 'Infraestructura y soporte crítico',
    body: 'Redes, CCTV, estaciones de alto rendimiento y monitoreo de logs: la capa que sostiene todo lo demás cuando algo se cae a las 2 a. m.',
  },
] as const

export const navItems = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'stack', label: 'Stack' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
] as const
