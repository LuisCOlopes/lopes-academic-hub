
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BrazilConferences from '@/components/conferences/BrazilConferences';
import InternationalConferences from '@/components/conferences/InternationalConferences';
import RecentConferences from '@/components/conferences/RecentConferences';
import SpeakingOpportunities from '@/components/conferences/SpeakingOpportunities';
import ValuableOpportunities from '@/components/conferences/ValuableOpportunities';

const Conferences = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('conferencesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('conferencesSubtitle')}
          </p>
        </div>

        <Tabs defaultValue="conferences2025" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="conferences2025">{t('conferences2025')}</TabsTrigger>
            <TabsTrigger value="recent">{t('recentConferences')}</TabsTrigger>
          </TabsList>

          <TabsContent value="conferences2025" className="space-y-8 mt-6">
            <BrazilConferences />
            <InternationalConferences />
            <ValuableOpportunities />
          </TabsContent>

          <TabsContent value="recent" className="space-y-6 mt-6">
            <RecentConferences />
          </TabsContent>
        </Tabs>

        <SpeakingOpportunities />
      </div>
    </AcademicLayout>
  );
};

export default Conferences;
