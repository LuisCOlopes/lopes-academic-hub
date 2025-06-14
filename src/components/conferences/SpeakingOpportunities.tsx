
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SpeakingOpportunities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
        {t('speakingOpportunities')}
      </h2>
      <p className="text-gray-600 mb-4">
        {t('speakingOpportunitiesDescription')}
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">{t('keynoteSpeeches')}</h3>
          <p className="text-sm text-gray-600">{t('keynoteDescription')}</p>
        </div>
        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">{t('technicalSessions')}</h3>
          <p className="text-sm text-gray-600">{t('technicalDescription')}</p>
        </div>
        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">{t('panelDiscussions')}</h3>
          <p className="text-sm text-gray-600">{t('panelDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakingOpportunities;
