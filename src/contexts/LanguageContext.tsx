
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
    news: 'Notícias'
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
    news: 'News'
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
    news: 'Noticias'
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
