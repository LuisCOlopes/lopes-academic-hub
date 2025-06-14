
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ConferenceCard from './ConferenceCard';

const BrazilConferences: React.FC = () => {
  const { t } = useLanguage();

  const brazilConferences = [
    {
      name: 'COBEQ 2025 – Congresso Brasileiro de Engenharia Química',
      date: '6 a 10 de outubro de 2025',
      location: 'Belo Horizonte, MG',
      organization: 'Universidade Federal de Minas Gerais (UFMG) e Associação Brasileira de Engenharia Química (ABEQ)',
      topics: 'Desenvolvimento sustentável, economia circular, mineração urbana e segurança de processos',
      website: 'cobeq2025.com.br',
      country: 'Brasil'
    },
    {
      name: 'COBEM 2025 – Congresso Internacional de Engenharia Mecânica',
      date: '9 a 14 de novembro de 2025',
      location: 'Curitiba, PR',
      organization: 'Associação Brasileira de Engenharia e Ciências Mecânicas (ABCM)',
      topics: 'Inteligência Artificial para um Amanhã Sustentável',
      website: 'pt.wikipedia.org',
      country: 'Brasil'
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-playfair font-bold text-gray-900">
          🇧🇷 {t('brazilConferences')}
        </h2>
      </div>
      <div className="grid gap-6">
        {brazilConferences.map((conference, index) => (
          <ConferenceCard 
            key={index} 
            conference={conference} 
            borderColor="border-l-green-600"
          />
        ))}
      </div>
    </section>
  );
};

export default BrazilConferences;
