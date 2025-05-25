
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre',
    research: 'Pesquisa',
    teaching: 'Ensino',
    publications: 'Publicações',
    contact: 'Contato',
    
    // Home page
    welcome: 'Bem-vindo',
    professor: 'Professor',
    chemicalEngineering: 'Engenharia Química',
    federalUniversity: 'Universidade Federal de Uberlândia',
    bio: 'Sou Professor da Faculdade de Engenharia Química da Universidade Federal de Uberlândia, dedicado ao ensino e pesquisa em processos químicos industriais e desenvolvimento sustentável.',
    viewFullProfile: 'Ver Perfil Completo',
    contactInfo: 'Informações de Contato',
    researchInterests: 'Áreas de Interesse',
    processEngineering: 'Engenharia de Processos',
    sustainability: 'Sustentabilidade',
    industrialChemistry: 'Química Industrial',
    
    // Academic sections
    awards: 'Prêmios e Bolsas',
    service: 'Serviços',
    leadership: 'Liderança',
    projects: 'Projetos',
    team: 'Equipe',
    opportunities: 'Oportunidades',
    alumni: 'Ex-Alunos',
    community: 'Comunidade',
    podcast: 'Podcast',
    conferences: 'Conferências',
    workshops: 'Workshops',
    consulting: 'Consultoria',
    media: 'Mídia',
    blog: 'Blog',
    news: 'Notícias',
    
    // Page titles and content
    awardsTitle: 'Prêmios e Reconhecimentos',
    serviceTitle: 'Serviços à Comunidade',
    leadershipTitle: 'Liderança Acadêmica',
    projectsTitle: 'Projetos de Pesquisa',
    teamTitle: 'Nossa Equipe',
    opportunitiesTitle: 'Oportunidades de Pesquisa',
    alumniTitle: 'Ex-Alunos',
    communityTitle: 'Engajamento Comunitário',
    podcastTitle: 'Podcast Acadêmico',
    conferencesTitle: 'Conferências e Eventos',
    workshopsTitle: 'Workshops e Cursos',
    consultingTitle: 'Serviços de Consultoria',
    mediaTitle: 'Na Mídia',
    newsTitle: 'Notícias e Atualizações',
    blogTitle: 'Blog Acadêmico',
    
    // Contact page
    contactTitle: 'Contato',
    contactSubtitle: 'Entre em contato para colaborações, consultas ou questões acadêmicas',
    contactInformation: 'Informações de Contato',
    email: 'Email',
    phone: 'Telefone',
    office: 'Escritório',
    officeAddress: 'Endereço do Escritório',
    officeHours: 'Horário de Atendimento',
    scheduleMeeting: 'Agendar Reunião',
    sendMessage: 'Enviar Mensagem',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    emailAddress: 'Endereço de Email',
    institution: 'Instituição/Organização',
    subject: 'Assunto',
    message: 'Mensagem',
    clearForm: 'Limpar Formulário',
    officeHoursText: 'Segunda - Sexta: 8:00 - 18:00\nSábado: Apenas com agendamento',
    officeAddressText: 'Faculdade de Engenharia Química\nUniversidade Federal de Uberlândia\nAv. João Naves de Ávila, 2121\nCampus Santa Mônica - Bloco 1K\nUberlândia, MG - 38400-902\nBrasil',
    noteText: 'Para assuntos urgentes, ligue diretamente. Geralmente respondo emails em 24-48 horas durante dias úteis.',
    
    // About page
    aboutTitle: 'Sobre Prof. Luís Cláudio Oliveira Lopes',
    aboutSubtitle: 'Professor de Engenharia Química na Universidade Federal de Uberlândia',
    biography: 'Biografia',
    education: 'Formação',
    biographyText: 'Prof. Luís Cláudio Oliveira Lopes é um distinto Professor da Faculdade de Engenharia Química da Universidade Federal de Uberlândia (UFU). Com mais de 30 anos de experiência em academia e pesquisa, estabeleceu-se como um especialista líder em engenharia de processos químicos e práticas industriais sustentáveis.',
    
    // Education details
    phdChemical: 'Doutorado em Engenharia Química',
    phdInstitution: 'Lehigh University (EUA), 2000',
    specialization: 'Aperfeiçoamento em Engenharia Química e Processos Petroquímicos',
    specializationInstitution: 'Sogesta SpA, Università di Bologna (Itália), 1991',
    mscChemical: 'Mestrado em Engenharia Química',
    mscInstitution: 'COPPE/Universidade Federal do Rio de Janeiro, 1990',
    bscChemical: 'Graduação em Engenharia Química',
    bscInstitution: 'Universidade Federal da Bahia, 1987',
    
    // Research interests
    processEngineeringOpt: 'Engenharia de Processos e Otimização',
    sustainableProcesses: 'Processos Químicos Sustentáveis',
    autonomousTech: 'Desenvolvimento de Tecnologia Autônoma',
    processControl: 'Controle e Automação de Processos',
    energyTransition: 'Transição Energética',
    processSafety: 'Segurança de Processos e Controle Tolerante',
    
    // Translated sidebar items
    requestMeeting: 'Solicitar Reunião',
    studentResources: 'Material Educacional',
    speakingEngagements: 'Palestras',
    getInvolved: 'Participe',
    hobbies: 'Hobbies',
    
    // Common phrases
    learnMore: 'Saiba Mais',
    readMore: 'Ler Mais',
    viewAll: 'Ver Todos',
    contactUs: 'Fale Conosco',
    cv: 'Currículo'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    research: 'Research',
    teaching: 'Teaching',
    publications: 'Publications',
    contact: 'Contact',
    
    // Home page
    welcome: 'Welcome',
    professor: 'Professor',
    chemicalEngineering: 'Chemical Engineering',
    federalUniversity: 'Federal University of Uberlândia',
    bio: 'I am a Professor at the Faculty of Chemical Engineering at the Federal University of Uberlândia, dedicated to teaching and research in industrial chemical processes and sustainable development.',
    viewFullProfile: 'View Full Profile',
    contactInfo: 'Contact Information',
    researchInterests: 'Research Interests',
    processEngineering: 'Process Engineering',
    sustainability: 'Sustainability',
    industrialChemistry: 'Industrial Chemistry',
    
    // Academic sections
    awards: 'Awards & Fellowships',
    service: 'Service',
    leadership: 'Leadership',
    projects: 'Projects',
    team: 'Team',
    opportunities: 'Opportunities',
    alumni: 'Alumni',
    community: 'Community',
    podcast: 'Podcast',
    conferences: 'Conferences',
    workshops: 'Workshops',
    consulting: 'Consulting',
    media: 'Media',
    blog: 'Blog',
    news: 'News',
    
    // Page titles and content
    awardsTitle: 'Awards and Recognition',
    serviceTitle: 'Community Service',
    leadershipTitle: 'Academic Leadership',
    projectsTitle: 'Research Projects',
    teamTitle: 'Our Team',
    opportunitiesTitle: 'Research Opportunities',
    alumniTitle: 'Alumni Network',
    communityTitle: 'Community Engagement',
    podcastTitle: 'Academic Podcast',
    conferencesTitle: 'Conferences and Events',
    workshopsTitle: 'Workshops and Courses',
    consultingTitle: 'Consulting Services',
    mediaTitle: 'In the Media',
    newsTitle: 'News and Updates',
    blogTitle: 'Academic Blog',
    
    // Contact page
    contactTitle: 'Contact',
    contactSubtitle: 'Get in touch for collaborations, consultations, or academic inquiries',
    contactInformation: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    office: 'Office',
    officeAddress: 'Office Address',
    officeHours: 'Office Hours',
    scheduleMeeting: 'Schedule a Meeting',
    sendMessage: 'Send a Message',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    institution: 'Institution/Organization',
    subject: 'Subject',
    message: 'Message',
    clearForm: 'Clear Form',
    officeHoursText: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: By appointment only',
    officeAddressText: 'Faculty of Chemical Engineering\nFederal University of Uberlândia\nAv. João Naves de Ávila, 2121\nCampus Santa Mônica - Block 1K\nUberlândia, MG - 38400-902\nBrazil',
    noteText: 'For urgent matters, please call directly. I typically respond to emails within 24-48 hours during business days.',
    
    // About page
    aboutTitle: 'About Prof. Luís Cláudio Oliveira Lopes',
    aboutSubtitle: 'Professor of Chemical Engineering at Federal University of Uberlândia',
    biography: 'Biography',
    education: 'Education',
    biographyText: 'Prof. Luís Cláudio Oliveira Lopes is a distinguished Professor in the Faculty of Chemical Engineering at the Federal University of Uberlândia (UFU). With over 30 years of experience in academia and research, he has established himself as a leading expert in chemical process engineering and sustainable industrial practices.',
    
    // Education details
    phdChemical: 'Ph.D. in Chemical Engineering',
    phdInstitution: 'Lehigh University (USA), 2000',
    specialization: 'Specialization in Chemical Engineering and Petrochemical Processes',
    specializationInstitution: 'Sogesta SpA, Università di Bologna (Italy), 1991',
    mscChemical: 'M.Sc. in Chemical Engineering',
    mscInstitution: 'COPPE/Federal University of Rio de Janeiro, 1990',
    bscChemical: 'B.Sc. in Chemical Engineering',
    bscInstitution: 'Federal University of Bahia, 1987',
    
    // Research interests
    processEngineeringOpt: 'Process Engineering & Optimization',
    sustainableProcesses: 'Sustainable Chemical Processes',
    autonomousTech: 'Autonomous Technology Development',
    processControl: 'Process Control & Automation',
    energyTransition: 'Energy Transition',
    processSafety: 'Process Safety & Tolerant Control',
    
    // Translated sidebar items
    requestMeeting: 'Request Meeting',
    studentResources: 'Student Resources',
    speakingEngagements: 'Speaking Engagements',
    getInvolved: 'Get Involved',
    hobbies: 'Hobbies',
    
    // Common phrases
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    contactUs: 'Contact Us',
    cv: 'CV'
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de',
    research: 'Investigación',
    teaching: 'Enseñanza',
    publications: 'Publicaciones',
    contact: 'Contacto',
    
    // Home page
    welcome: 'Bienvenido',
    professor: 'Profesor',
    chemicalEngineering: 'Ingeniería Química',
    federalUniversity: 'Universidad Federal de Uberlândia',
    bio: 'Soy Profesor de la Facultad de Ingeniería Química de la Universidad Federal de Uberlândia, dedicado a la enseñanza e investigación en procesos químicos industriales y desarrollo sostenible.',
    viewFullProfile: 'Ver Perfil Completo',
    contactInfo: 'Información de Contacto',
    researchInterests: 'Áreas de Interés',
    processEngineering: 'Ingeniería de Procesos',
    sustainability: 'Sostenibilidad',
    industrialChemistry: 'Química Industrial',
    
    // Academic sections
    awards: 'Premios y Becas',
    service: 'Servicios',
    leadership: 'Liderazgo',
    projects: 'Proyectos',
    team: 'Equipo',
    opportunities: 'Oportunidades',
    alumni: 'Egresados',
    community: 'Comunidad',
    podcast: 'Podcast',
    conferences: 'Conferencias',
    workshops: 'Talleres',
    consulting: 'Consultoría',
    media: 'Medios',
    blog: 'Blog',
    news: 'Noticias',
    
    // Page titles and content
    awardsTitle: 'Premios y Reconocimientos',
    serviceTitle: 'Servicio a la Comunidad',
    leadershipTitle: 'Liderazgo Académico',
    projectsTitle: 'Proyectos de Investigación',
    teamTitle: 'Nuestro Equipo',
    opportunitiesTitle: 'Oportunidades de Investigación',
    alumniTitle: 'Red de Egresados',
    communityTitle: 'Compromiso Comunitario',
    podcastTitle: 'Podcast Académico',
    conferencesTitle: 'Conferencias y Eventos',
    workshopsTitle: 'Talleres y Cursos',
    consultingTitle: 'Servicios de Consultoría',
    mediaTitle: 'En los Medios',
    newsTitle: 'Noticias y Actualizaciones',
    blogTitle: 'Blog Académico',
    
    // Contact page
    contactTitle: 'Contacto',
    contactSubtitle: 'Póngase en contacto para colaboraciones, consultas o consultas académicas',
    contactInformation: 'Información de Contacto',
    email: 'Correo',
    phone: 'Teléfono',
    office: 'Oficina',
    officeAddress: 'Dirección de la Oficina',
    officeHours: 'Horario de Oficina',
    scheduleMeeting: 'Programar Reunión',
    sendMessage: 'Enviar Mensaje',
    firstName: 'Nombre',
    lastName: 'Apellido',
    emailAddress: 'Dirección de Correo',
    institution: 'Institución/Organización',
    subject: 'Asunto',
    message: 'Mensaje',
    clearForm: 'Limpiar Formulario',
    officeHoursText: 'Lunes - Viernes: 8:00 - 18:00\nSábado: Solo con cita previa',
    officeAddressText: 'Facultad de Ingeniería Química\nUniversidad Federal de Uberlândia\nAv. João Naves de Ávila, 2121\nCampus Santa Mônica - Bloque 1K\nUberlândia, MG - 38400-902\nBrasil',
    noteText: 'Para asuntos urgentes, llame directamente. Normalmente respondo correos en 24-48 horas durante días hábiles.',
    
    // About page
    aboutTitle: 'Acerca del Prof. Luís Cláudio Oliveira Lopes',
    aboutSubtitle: 'Profesor de Ingeniería Química en la Universidad Federal de Uberlândia',
    biography: 'Biografía',
    education: 'Educación',
    biographyText: 'El Prof. Luís Cláudio Oliveira Lopes es un distinguido Profesor en la Facultad de Ingeniería Química de la Universidad Federal de Uberlândia (UFU). Con más de 30 años de experiencia en academia e investigación, se ha establecido como un experto líder en ingeniería de procesos químicos y prácticas industriales sostenibles.',
    
    // Education details
    phdChemical: 'Doctorado en Ingeniería Química',
    phdInstitution: 'Lehigh University (EUA), 2000',
    specialization: 'Especialización en Ingeniería Química y Procesos Petroquímicos',
    specializationInstitution: 'Sogesta SpA, Università di Bologna (Italia), 1991',
    mscChemical: 'Maestría en Ingeniería Química',
    mscInstitution: 'COPPE/Universidad Federal de Río de Janeiro, 1990',
    bscChemical: 'Licenciatura en Ingeniería Química',
    bscInstitution: 'Universidad Federal de Bahía, 1987',
    
    // Research interests
    processEngineeringOpt: 'Ingeniería de Procesos y Optimización',
    sustainableProcesses: 'Procesos Químicos Sostenibles',
    autonomousTech: 'Desarrollo de Tecnología Autónoma',
    processControl: 'Control y Automatización de Procesos',
    energyTransition: 'Transición Energética',
    processSafety: 'Seguridad de Procesos y Control Tolerante',
    
    // Translated sidebar items
    requestMeeting: 'Solicitar Reunión',
    studentResources: 'Recursos Estudiantiles',
    speakingEngagements: 'Conferencias',
    getInvolved: 'Participar',
    hobbies: 'Aficiones',
    
    // Common phrases
    learnMore: 'Aprender Más',
    readMore: 'Leer Más',
    viewAll: 'Ver Todo',
    contactUs: 'Contáctanos',
    cv: 'CV'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
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
