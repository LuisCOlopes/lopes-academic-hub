
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ConferenceCard from './ConferenceCard';

const RecentConferences: React.FC = () => {
  const { t } = useLanguage();

  const recentConferences = [
    {
      name: 'International Conference on Sustainable Engineering',
      date: '2024-06-15 to 2024-06-18',
      location: 'São Paulo, Brazil',
      topic: 'Green Chemical Processes in Industry 4.0',
      status: 'completed'
    },
    {
      name: 'Brazilian Chemical Engineering Congress',
      date: '2024-09-10 to 2024-09-13',
      location: 'Rio de Janeiro, Brazil',
      topic: 'Process Optimization and Control',
      status: 'completed'
    },
    {
      name: 'World Congress on Chemical Engineering',
      date: '2023-10-15 to 2023-10-18',
      location: 'Barcelona, Spain',
      topic: 'Sustainable Process Design',
      materials: ['Presentation Slides', 'Paper']
    },
    {
      name: 'Latin American Process Engineering Symposium',
      date: '2023-07-20 to 2023-07-23',
      location: 'Buenos Aires, Argentina',
      topic: 'Innovation in Chemical Engineering Education',
      materials: ['Video Recording', 'Extended Abstract']
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        {t('recentConferences')}
      </h2>
      <div className="grid gap-6">
        {recentConferences.map((conference, index) => (
          <ConferenceCard 
            key={index} 
            conference={conference} 
            borderColor="border-l-academic-blue"
          />
        ))}
      </div>
    </section>
  );
};

export default RecentConferences;
