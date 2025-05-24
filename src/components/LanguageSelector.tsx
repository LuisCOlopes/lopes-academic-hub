
import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const flags = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(flags).map(([lang, flag]) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as Language)}
          className={`text-2xl p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
            language === lang 
              ? 'bg-white/20 scale-110 shadow-lg' 
              : 'hover:bg-white/10'
          }`}
          title={lang.toUpperCase()}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
