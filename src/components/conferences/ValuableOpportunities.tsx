
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ValuableOpportunities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
        {t('valuableOpportunities')}
      </h2>
      <p className="text-gray-600 mb-4">
        {t('opportunitiesDescription')}
      </p>
      <p className="text-sm text-gray-500">
        {t('additionalInfo')}
      </p>
    </div>
  );
};

export default ValuableOpportunities;
