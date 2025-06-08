
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import AlumniStats from '@/components/alumni/AlumniStats';
import OrientationFlowcharts from '@/components/alumni/OrientationFlowcharts';
import SupervisedStudents from '@/components/alumni/SupervisedStudents';
import MastersStudents from '@/components/alumni/MastersStudents';
import SpecialistStudents from '@/components/alumni/SpecialistStudents';
import GeneralStatistics from '@/components/alumni/GeneralStatistics';

const Alumni = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('alumniTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('alumniSubtitle')}
            </p>
          </div>

          <AlumniStats />
          <OrientationFlowcharts />
          <SupervisedStudents />
          <MastersStudents />
          <SpecialistStudents />
          <GeneralStatistics />
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
