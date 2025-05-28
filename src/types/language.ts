
export type Language = 'pt' | 'en' | 'es';

export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}
