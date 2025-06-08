
import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const GeneralStatistics = () => {
  const { t } = useLanguage();

  return (
    <Card className="p-6 bg-ufu-light">
      <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-4">{t('generalStatistics')}</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-ufu-navy mb-2">31</div>
          <div className="text-ufu-blue">{t('totalPostgraduateOrientations')}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-ufu-navy mb-2">18</div>
          <div className="text-ufu-blue">{t('specialistsFormed')}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-ufu-navy mb-2">11</div>
          <div className="text-ufu-blue">{t('doctorsFormed')}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-ufu-navy mb-2">20</div>
          <div className="text-ufu-blue">{t('mastersFormed')}</div>
        </div>
      </div>
    </Card>
  );
};

export default GeneralStatistics;
