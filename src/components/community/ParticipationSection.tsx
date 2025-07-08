
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ParticipationSection = () => {
  const { t } = useLanguage();

  const participationOptions = [
    {
      icon: Calendar,
      title: t('events'),
      description: t('participateInSeminars')
    },
    {
      icon: Users,
      title: t('collaboration'),
      description: t('collaborateInProjects')
    },
    {
      icon: Award,
      title: t('mentoring'),
      description: t('receiveMentoring')
    }
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
        {t('howToParticipate')}
      </h2>
      <p className="text-gray-600 mb-6">
        {t('joinAcademicCommunity')}
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {participationOptions.map((option, index) => (
          <div key={index} className="p-4 bg-white rounded-lg">
            <option.icon className="h-6 w-6 text-academic-blue mb-2" />
            <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button className="mr-4" asChild>
          <Link to="/contact">{t('contactUs')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ParticipationSection;
