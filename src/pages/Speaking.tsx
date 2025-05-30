
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Mic } from 'lucide-react';

const Speaking = () => {
  const { t } = useLanguage();

  const speakingEngagements = [
    {
      title: t('sustainableChemicalEngineering') || 'Sustainable Chemical Engineering: Future Perspectives',
      event: t('internationalChemicalConference') || 'International Chemical Engineering Conference',
      date: '2024-03-15',
      location: 'São Paulo, Brazil',
      type: t('keynote') || 'Keynote',
      audience: t('academicIndustryProfessionals') || 'Academic & Industry Professionals'
    },
    {
      title: t('innovationProcessControl') || 'Innovation in Process Control Systems',
      event: t('brazilianProcessSymposium') || 'Brazilian Process Control Symposium',
      date: '2024-02-20',
      location: 'Rio de Janeiro, Brazil',
      type: t('invitedTalk') || 'Invited Talk',
      audience: t('engineersResearchers') || 'Engineers & Researchers'
    },
    {
      title: t('faultTolerantControl') || 'Fault-Tolerant Control in Chemical Processes',
      event: t('controlSystemsWorkshop') || 'Control Systems Workshop',
      date: '2024-01-18',
      location: 'Uberlândia, Brazil',
      type: t('workshop') || 'Workshop',
      audience: t('graduateStudents') || 'Graduate Students'
    }
  ];

  const expertiseAreas = [
    t('chemicalProcessControl') || 'Chemical Process Control',
    t('faultTolerantSystems') || 'Fault-Tolerant Systems',
    t('sustainableEngineering') || 'Sustainable Engineering',
    t('processSafety') || 'Process Safety',
    t('academicLeadership') || 'Academic Leadership',
    t('industryAcademiaCollaboration') || 'Industry-Academia Collaboration'
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('speakingTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('speakingSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              {t('recentUpcomingEngagements')}
            </h2>
            
            <div className="space-y-6">
              {speakingEngagements.map((engagement, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline">{engagement.type}</Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(engagement.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {engagement.title}
                  </h3>
                  
                  <p className="text-academic-blue font-medium mb-3">
                    {engagement.event}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {engagement.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {engagement.audience}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="h-6 w-6 text-academic-blue" />
                <h3 className="text-lg font-semibold text-gray-900">{t('expertiseAreas')}</h3>
              </div>
              <div className="space-y-2">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                    {area}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-academic-blue text-white">
              <h3 className="text-lg font-semibold mb-3">{t('bookSpeakingEngagement')}</h3>
              <p className="text-sm mb-4">
                {t('availableForSpeaking')}
              </p>
              <Button variant="secondary">
                {t('contactForSpeaking')}
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('speakingStats')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t('totalPresentations')}</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t('countries')}</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t('keynoteAddresses')}</span>
                  <span className="font-semibold">25</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Speaking;
