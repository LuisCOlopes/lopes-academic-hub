
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre',
    research: 'Pesquisa',
    projects: 'Projetos',
    opportunities: 'Oportunidades',
    requestMeeting: 'Solicitar Reunião',
    teaching: 'Ensino',
    studentResources: 'Material Educacional',
    publications: 'Publicações',
    conferences: 'Conferências',
    speaking: 'Palestras',
    workshops: 'Workshops',
    consulting: 'Consultoria',
    team: 'Equipe',
    alumni: 'Ex-Alunos',
    awards: 'Prêmios',
    service: 'Serviços',
    leadership: 'Liderança',
    getInvolved: 'Participe',
    community: 'Comunidade',
    podcast: 'Podcast',
    media: 'Mídia',
    hobbies: 'Hobbies',
    contact: 'Contato',
    news: 'Notícias',
    blog: 'Blog',
    
    // Landing Page
    professor: 'Professor Titular',
    chemicalEngineering: 'Engenharia Química',
    federalUniversity: 'Universidade Federal de Uberlândia',
    bio: 'Professor Titular da Faculdade de Engenharia Química da Universidade Federal de Uberlândia, atuando na área de Engenharia de Processos Químicos (PSE, da sigla em inglês), modelagem, controle e Otimização de processos químicos industriais, segurança e desenvolvimento de processos sustentáveis.',
    viewFullProfile: 'Ver Perfil Completo',
    exploreMyAcademicWork: 'Explore Meu Trabalho Acadêmico',
    researchDescription: 'Explore minhas pesquisas em Engenharia de Processos - PSE(Process Systems Engineering)',
    publicationsDescription: 'Artigos científicos e contribuições para a pesquisa',
    teachingDescription: 'Cursos e recursos educacionais',
    newsDescription: 'Últimas novidades e atualizações',
    learnMore: 'Saiba Mais',
    researchHighlights: 'Destaques da Pesquisa',
    researchFocus: 'Minha pesquisa foca em Engenharia de Sistemas de Processos (PSE), controle de processos, modelagem e otimização de processos químicos, Inteligência Artificial aplicada à segurança de processos, e desenvolvimento de tecnologias ambientalmente amigáveis para a indústria química.',
    processControl: 'Controle e Otimização de Processos',
    industrialSafety: 'Segurança Industrial de Processos Químicos',
    wasteManagement: 'Gestão de Resíduos Industriais',
    greenTechnology: 'Desenvolvimento de Tecnologia Verde',
    exploreMyResearch: 'Explore Minha Pesquisa',
    yearsOfExperience: 'Anos de Experiência',
    researchFunding: 'Financiamento de Pesquisa',
    interestedInCollaboration: 'Interessado em Colaboração?',
    contactMe: 'Entre em Contato',
    
    // About Page
    aboutTitle: 'Sobre o Professor',
    aboutSubtitle: 'Dedicado ao avanço da engenharia química através da pesquisa e ensino',
    biography: 'Biografia',
    education: 'Formação',
    researchInterests: 'Áreas de Pesquisa',
    
    // Contact Page
    contactTitle: 'Contato',
    contactSubtitle: 'Entre em contato para discussões acadêmicas, colaborações ou consultas',
    contactInformation: 'Informações de Contato',
    email: 'E-mail',
    phone: 'Telefone',
    officeAddress: 'Endereço do Escritório',
    officeAddressText: 'Faculdade de Engenharia Química\nUniversidade Federal de Uberlândia\nAv. João Naves de Ávila, 2121\nUberlândia, MG - 38400-902',
    officeHours: 'Horário de Atendimento',
    officeHoursText: 'Segunda a Sexta: 8:00 - 17:00\nPor agendamento',
    scheduleMeeting: 'Agendar Reunião',
    sendMessage: 'Enviar Mensagem',
    firstName: 'Primeiro Nome',
    lastName: 'Sobrenome',
    emailAddress: 'Endereço de E-mail',
    institution: 'Instituição',
    subject: 'Assunto',
    message: 'Mensagem',
    clearForm: 'Limpar Formulário',
    noteText: 'Respondo geralmente dentro de 48 horas. Para questões urgentes, use o telefone.',
    contactInfo: 'Informações de Contato',
    
    // Research Page
    researchTitle: 'Pesquisa',
    currentResearch: 'Pesquisa Atual',
    researchMetrics: 'Métricas de Pesquisa',
    citations: 'Citações',
    students: 'Estudantes Orientados',
    funding: 'Financiamento',
    
    // Teaching Page
    teachingTitle: 'Ensino',
    currentCourses: 'Disciplinas Atuais',
    teachingResources: 'Recursos Didáticos',
    lectureNotes: 'Notas de Aula',
    problemSets: 'Conjuntos de Problemas',
    courseMaterials: 'Materiais do Curso',
    
    // Community Page
    communityTitle: 'Comunidade Acadêmica',
    
    // Conferences Page
    conferencesTitle: 'Conferências',
    
    // Publications Page
    publicationsTitle: 'Publicações',
    
    // Projects Page
    projectsTitle: 'Projetos',
    
    // Opportunities Page
    opportunitiesTitle: 'Oportunidades',
    
    // Team Page
    teamTitle: 'Equipe',
    
    // Awards Page
    awardsTitle: 'Prêmios',
    
    // Service Page
    serviceTitle: 'Serviços',
    
    // Leadership Page
    leadershipTitle: 'Liderança',
    
    // Alumni Page
    alumniTitle: 'Ex-Alunos',
    
    // Get Involved Page
    getInvolvedTitle: 'Participe',
    
    // Meeting Page
    meetingTitle: 'Solicitar Reunião',
    
    // Material Page
    materialTitle: 'Material Educacional',
    
    // News Page
    newsTitle: 'Notícias',
    
    // Media Page
    mediaTitle: 'Mídia'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    research: 'Research',
    projects: 'Projects',
    opportunities: 'Opportunities',
    requestMeeting: 'Request Meeting',
    teaching: 'Teaching',
    studentResources: 'Educational Materials',
    publications: 'Publications',
    conferences: 'Conferences',
    speaking: 'Speaking Engagements',
    workshops: 'Workshops',
    consulting: 'Consulting',
    team: 'Team',
    alumni: 'Alumni',
    awards: 'Awards',
    service: 'Service',
    leadership: 'Leadership',
    getInvolved: 'Get Involved',
    community: 'Community',
    podcast: 'Podcast',
    media: 'Media',
    hobbies: 'Hobbies',
    contact: 'Contact',
    news: 'News',
    blog: 'Blog',
    
    // Landing Page
    professor: 'Full Professor',
    chemicalEngineering: 'Chemical Engineering',
    federalUniversity: 'Federal University of Uberlândia',
    bio: 'Full Professor at the Faculty of Chemical Engineering, Federal University of Uberlândia, working in the area of Process Systems Engineering (PSE), modeling, control and optimization of industrial chemical processes, safety and development of sustainable processes.',
    viewFullProfile: 'View Full Profile',
    exploreMyAcademicWork: 'Explore My Academic Work',
    researchDescription: 'Explore my research in PSE(Process Systems Engineering)',
    publicationsDescription: 'Scientific articles and research contributions',
    teachingDescription: 'Courses and educational resources',
    newsDescription: 'Latest news and updates',
    learnMore: 'Learn More',
    researchHighlights: 'Research Highlights',
    researchFocus: 'My research focuses on Process System Engineering (PSE), process control, modeling and optimization of chemical processes, Artificial Intelligence applied to safety of processes, and the development of environmentally friendly technologies for the chemical industry.',
    processControl: 'Process Control and Optimization',
    industrialSafety: 'Industrial Safety of Chemical Processes',
    wasteManagement: 'Industrial Waste Management',
    greenTechnology: 'Green Technology Development',
    exploreMyResearch: 'Explore My Research',
    yearsOfExperience: 'Years of Experience',
    researchFunding: 'Research Funding',
    interestedInCollaboration: 'Interested in Collaboration?',
    contactMe: 'Contact Me',
    
    // About Page
    aboutTitle: 'About Professor',
    aboutSubtitle: 'Dedicated to advancing chemical engineering through research and teaching',
    biography: 'Biography',
    education: 'Education',
    researchInterests: 'Research Interests',
    
    // Contact Page
    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch for academic discussions, collaborations, or consultations',
    contactInformation: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    officeAddress: 'Office Address',
    officeAddressText: 'Faculty of Chemical Engineering\nFederal University of Uberlândia\nAv. João Naves de Ávila, 2121\nUberlândia, MG - 38400-902',
    officeHours: 'Office Hours',
    officeHoursText: 'Monday to Friday: 8:00 AM - 5:00 PM\nBy appointment',
    scheduleMeeting: 'Schedule Meeting',
    sendMessage: 'Send Message',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    institution: 'Institution',
    subject: 'Subject',
    message: 'Message',
    clearForm: 'Clear Form',
    noteText: 'I typically respond within 48 hours. For urgent matters, please call.',
    contactInfo: 'Contact Information',
    
    // Research Page
    researchTitle: 'Research',
    currentResearch: 'Current Research',
    researchMetrics: 'Research Metrics',
    citations: 'Citations',
    students: 'Students Supervised',
    funding: 'Funding',
    
    // Teaching Page
    teachingTitle: 'Teaching',
    currentCourses: 'Current Courses',
    teachingResources: 'Teaching Resources',
    lectureNotes: 'Lecture Notes',
    problemSets: 'Problem Sets',
    courseMaterials: 'Course Materials',
    
    // Community Page
    communityTitle: 'Academic Community',
    
    // Conferences Page
    conferencesTitle: 'Conferences',
    
    // Publications Page
    publicationsTitle: 'Publications',
    
    // Projects Page
    projectsTitle: 'Projects',
    
    // Opportunities Page
    opportunitiesTitle: 'Opportunities',
    
    // Team Page
    teamTitle: 'Team',
    
    // Awards Page
    awardsTitle: 'Awards',
    
    // Service Page
    serviceTitle: 'Service',
    
    // Leadership Page
    leadershipTitle: 'Leadership',
    
    // Alumni Page
    alumniTitle: 'Alumni',
    
    // Get Involved Page
    getInvolvedTitle: 'Get Involved',
    
    // Meeting Page
    meetingTitle: 'Request Meeting',
    
    // Material Page
    materialTitle: 'Educational Materials',
    
    // News Page
    newsTitle: 'News',
    
    // Media Page
    mediaTitle: 'Media'
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de',
    research: 'Investigación',
    projects: 'Proyectos',
    opportunities: 'Oportunidades',
    requestMeeting: 'Solicitar Reunión',
    teaching: 'Enseñanza',
    studentResources: 'Material Educativo',
    publications: 'Publicaciones',
    conferences: 'Conferencias',
    speaking: 'Conferencias Magistrales',
    workshops: 'Talleres',
    consulting: 'Consultoría',
    team: 'Equipo',
    alumni: 'Egresados',
    awards: 'Premios',
    service: 'Servicios',
    leadership: 'Liderazgo',
    getInvolved: 'Participa',
    community: 'Comunidad',
    podcast: 'Podcast',
    media: 'Medios',
    hobbies: 'Pasatiempos',
    contact: 'Contacto',
    news: 'Noticias',
    blog: 'Blog',
    
    // Landing Page
    professor: 'Profesor Titular',
    chemicalEngineering: 'Ingeniería Química',
    federalUniversity: 'Universidad Federal de Uberlândia',
    bio: 'Profesor Titular de la Facultad de Ingeniería Química de la Universidad Federal de Uberlândia, trabajando en el área de Ingeniería de Sistemas de Procesos (PSE, por sus siglas en inglés), modelado, control y optimización de procesos químicos industriales, seguridad y desarrollo de procesos sostenibles.',
    viewFullProfile: 'Ver Perfil Completo',
    exploreMyAcademicWork: 'Explora Mi Trabajo Académico',
    researchDescription: 'Explora mi investigación en PSE(Process Systems Engineering)',
    publicationsDescription: 'Artículos científicos y contribuciones a la investigación',
    teachingDescription: 'Cursos y recursos educativos',
    newsDescription: 'Últimas noticias y actualizaciones',
    learnMore: 'Saber Más',
    researchHighlights: 'Aspectos Destacados de la Investigación',
    researchFocus: 'Mi investigación se centra en la Ingeniería de Sistemas de Procesos (PSE), control de procesos, modelado y optimización de procesos químicos, Inteligencia Artificial aplicada a la seguridad de procesos, y el desarrollo de tecnologías ambientalmente amigables para la industria química.',
    processControl: 'Control y Optimización de Procesos',
    industrialSafety: 'Seguridad Industrial de Procesos Químicos',
    wasteManagement: 'Gestión de Residuos Industriales',
    greenTechnology: 'Desarrollo de Tecnología Verde',
    exploreMyResearch: 'Explora Mi Investigación',
    yearsOfExperience: 'Años de Experiencia',
    researchFunding: 'Financiamiento de Investigación',
    interestedInCollaboration: '¿Interesado en Colaboración?',
    contactMe: 'Contáctame',
    
    // About Page
    aboutTitle: 'Acerca del Profesor',
    aboutSubtitle: 'Dedicado al avance de la ingeniería química a través de la investigación y la enseñanza',
    biography: 'Biografía',
    education: 'Educación',
    researchInterests: 'Intereses de Investigación',
    
    // Contact Page
    contactTitle: 'Contacto',
    contactSubtitle: 'Ponte en contacto para discusiones académicas, colaboraciones o consultas',
    contactInformation: 'Información de Contacto',
    email: 'Correo Electrónico',
    phone: 'Teléfono',
    officeAddress: 'Dirección de la Oficina',
    officeAddressText: 'Facultad de Ingeniería Química\nUniversidad Federal de Uberlândia\nAv. João Naves de Ávila, 2121\nUberlândia, MG - 38400-902',
    officeHours: 'Horario de Oficina',
    officeHoursText: 'Lunes a Viernes: 8:00 AM - 5:00 PM\nCon cita previa',
    scheduleMeeting: 'Programar Reunión',
    sendMessage: 'Enviar Mensaje',
    firstName: 'Nombre',
    lastName: 'Apellido',
    emailAddress: 'Dirección de Correo Electrónico',
    institution: 'Institución',
    subject: 'Asunto',
    message: 'Mensaje',
    clearForm: 'Limpiar Formulario',
    noteText: 'Generalmente respondo dentro de 48 horas. Para asuntos urgentes, por favor llama.',
    contactInfo: 'Información de Contacto',
    
    // Research Page
    researchTitle: 'Investigación',
    currentResearch: 'Investigación Actual',
    researchMetrics: 'Métricas de Investigación',
    citations: 'Citas',
    students: 'Estudiantes Supervisados',
    funding: 'Financiamiento',
    
    // Teaching Page
    teachingTitle: 'Enseñanza',
    currentCourses: 'Cursos Actuales',
    teachingResources: 'Recursos Didácticos',
    lectureNotes: 'Notas de Clase',
    problemSets: 'Conjuntos de Problemas',
    courseMaterials: 'Materiales del Curso',
    
    // Community Page
    communityTitle: 'Comunidad Académica',
    
    // Conferences Page
    conferencesTitle: 'Conferencias',
    
    // Publications Page
    publicationsTitle: 'Publicaciones',
    
    // Projects Page
    projectsTitle: 'Proyectos',
    
    // Opportunities Page
    opportunitiesTitle: 'Oportunidades',
    
    // Team Page
    teamTitle: 'Equipo',
    
    // Awards Page
    awardsTitle: 'Premios',
    
    // Service Page
    serviceTitle: 'Servicios',
    
    // Leadership Page
    leadershipTitle: 'Liderazgo',
    
    // Alumni Page
    alumniTitle: 'Egresados',
    
    // Get Involved Page
    getInvolvedTitle: 'Participa',
    
    // Meeting Page
    meetingTitle: 'Solicitar Reunión',
    
    // Material Page
    materialTitle: 'Material Educativo',
    
    // News Page
    newsTitle: 'Noticias',
    
    // Media Page
    mediaTitle: 'Medios'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('preferred-language') || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
