
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Film, Music, BookOpen, MapPin } from 'lucide-react';

const Hobbies = () => {
  const { t } = useLanguage();

  const hobbies = [
    {
      title: t('cinema'),
      description: t('cinemaDescription'),
      icon: Film,
      activities: [t('classicMovies'), t('nationalCinema'), t('scienceFiction')]
    },
    {
      title: t('music'),
      description: t('musicDescription'),
      icon: Music,
      activities: [t('classicalGuitar'), t('brazilianMusic'), t('jazzAppreciation')]
    },
    {
      title: t('reading'),
      description: t('readingDescription'),
      icon: BookOpen,
      activities: [t('historicalFiction'), t('scienceFiction'), t('biographies')]
    },
    {
      title: t('travel'),
      description: t('travelDescription'),
      icon: MapPin,
      activities: [t('culturalExperiences'), t('academicConferences'), t('natureExploration')]
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('hobbiesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('hobbiesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <hobby.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {hobby.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    {hobby.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {t('workLifeBalance')}
          </h2>
          <p className="text-gray-600">
            {t('workLifeBalanceDescription')}
          </p>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Hobbies;
