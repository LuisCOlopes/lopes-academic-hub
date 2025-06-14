
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ConferenceCard from './ConferenceCard';

const InternationalConferences: React.FC = () => {
  const { t } = useLanguage();

  const internationalConferences = [
    {
      name: 'AIChE Annual Meeting 2025',
      date: '2 a 7 de novembro de 2025',
      location: 'Boston, MA, EUA',
      organization: 'American Institute of Chemical Engineers (AIChE)',
      topics: 'Engenharia química, controle de processos, sustentabilidade, biotecnologia',
      website: 'skoge.folk.ntnu.no',
      country: 'EUA'
    },
    {
      name: 'DYCOPS 2025 – 14th IFAC Symposium on Dynamics and Control of Process Systems',
      date: '16 a 19 de junho de 2025',
      location: 'Bratislava, Eslováquia',
      organization: 'International Federation of Automatic Control (IFAC)',
      topics: 'Dinâmica e controle de sistemas de processos, incluindo biossistemas',
      website: 'skoge.folk.ntnu.no',
      country: 'Eslováquia'
    },
    {
      name: 'ESCAPE-35 – European Symposium on Computer-Aided Process Engineering',
      date: '6 a 9 de julho de 2025',
      location: 'Gent, Bélgica',
      organization: 'European Federation of Chemical Engineering (EFCE)',
      topics: 'Engenharia de processos assistida por computador, modelagem, simulação e otimização',
      website: 'skoge.folk.ntnu.no',
      country: 'Bélgica'
    },
    {
      name: '9th International Conference on Catalysis and Chemical Engineering (CCE-2025)',
      date: '24 a 26 de fevereiro de 2025',
      location: 'São Francisco, CA, EUA',
      organization: 'United Scientific Group',
      topics: 'Catálise, engenharia química, sustentabilidade',
      website: 'catalysis.unitedscientificgroup.org',
      country: 'EUA'
    },
    {
      name: '3rd International Conference on Catalysis, Chemical Engineering and Technology',
      date: '8 a 9 de outubro de 2025',
      location: 'Dubai, Emirados Árabes Unidos',
      organization: 'Inovine Conferences',
      topics: 'Catálise, engenharia química, tecnologias emergentes',
      website: 'catalysismeetings.org',
      country: 'Emirados Árabes Unidos'
    },
    {
      name: '10th World Conference on Chemistry and Chemical Engineering',
      date: '20 a 21 de novembro de 2025',
      location: 'Bangkok, Tailândia',
      organization: 'Eurasia Conferences',
      topics: 'Química, engenharia química, inovações tecnológicas',
      website: 'eurasiaconferences.com',
      country: 'Tailândia'
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-playfair font-bold text-gray-900">
          🌍 {t('internationalConferences')}
        </h2>
      </div>
      <div className="grid gap-6">
        {internationalConferences.map((conference, index) => (
          <ConferenceCard 
            key={index} 
            conference={conference} 
            borderColor="border-l-blue-600"
          />
        ))}
      </div>
    </section>
  );
};

export default InternationalConferences;
