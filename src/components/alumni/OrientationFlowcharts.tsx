
import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const OrientationFlowcharts = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('completedOrientations')}</h2>
      
      <Card className="p-6 mb-8">
        <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('completedOrientationsPart1')}</h3>
        <div className="text-center">
          <img 
            src="/lovable-uploads/8ea91021-e874-4bd2-891b-224d38f06d45.png" 
            alt={t('orientationFlowchart')} 
            className="mx-auto max-w-full h-auto rounded-lg"
            style={{ maxHeight: '800px' }}
          />
          <p className="text-sm text-ufu-blue mt-3">{t('orientationFlowchart')}</p>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('completedOrientationsPart2')}</h3>
        <div className="text-center">
          <img 
            src="/lovable-uploads/93fb63db-e504-4915-a620-08b7a5ae5fd6.png" 
            alt={t('orientationFlowchart2')} 
            className="mx-auto max-w-full h-auto rounded-lg"
            style={{ maxHeight: '800px' }}
          />
          <p className="text-sm text-ufu-blue mt-3">{t('orientationFlowchart2')}</p>
        </div>
      </Card>
    </div>
  );
};

export default OrientationFlowcharts;
