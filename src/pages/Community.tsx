
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import CommunityStats from '@/components/community/CommunityStats';
import CommunityInitiatives from '@/components/community/CommunityInitiatives';
import AssociationsSection from '@/components/community/AssociationsSection';
import ParticipationSection from '@/components/community/ParticipationSection';

const Community = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('communityTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('communitySubtitle')}
          </p>
        </div>

        <CommunityStats />
        <CommunityInitiatives />
        <AssociationsSection />
        <ParticipationSection />
      </div>
    </AcademicLayout>
  );
};

export default Community;
