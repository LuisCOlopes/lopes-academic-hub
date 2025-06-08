
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadershipPhilosophy from '@/components/leadership/LeadershipPhilosophy';
import MainPositions from '@/components/leadership/MainPositions';
import OtherPositions from '@/components/leadership/OtherPositions';
import CurrentInitiatives from '@/components/leadership/CurrentInitiatives';

const Leadership = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('leadershipTitle')}
          </h1>
          <p className="text-lg text-academic-gray-medium">
            {t('leadershipSubtitle')}
          </p>
        </div>

        <LeadershipPhilosophy />
        <MainPositions />
        <OtherPositions />
        <CurrentInitiatives />
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
