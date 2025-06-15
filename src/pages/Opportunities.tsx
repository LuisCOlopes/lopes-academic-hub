
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, GraduationCap, Briefcase } from 'lucide-react';

const Opportunities = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const opportunities = [
    {
      type: t('doctorateProgram'),
      title: t('processControlResearch'),
      description: t('processControlResearchDesc'),
      requirements: t('processControlRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    },
    {
      type: t('mastersProgram'),
      title: t('processDesignResearch'),
      description: t('processDesignResearchDesc'),
      requirements: t('processDesignRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    },
    {
      type: t('mastersProgram'),
      title: t('energyTransitionResearch'),
      description: t('energyTransitionResearchDesc'),
      requirements: t('energyTransitionRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    },
    {
      type: t('mastersProgram'),
      title: t('processControlResearch'),
      description: t('processControlResearchDesc'),
      requirements: t('processControlRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    },
    {
      type: t('undergraduateResearch'),
      title: t('aiApplicationResearch'),
      description: t('aiApplicationResearchDesc'),
      requirements: t('aiApplicationRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    },
    {
      type: t('undergraduateResearch'),
      title: t('processControlResearch'),
      description: t('processControlResearchDesc'),
      requirements: t('aiApplicationRequirements'),
      deadline: '2025',
      funding: 'FAPEMIG/CAPES/CNPq/Petrobras'
    }
  ];

  const handleApplyNow = () => {
    navigate('/contact');
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('opportunitiesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('opportunitiesSubtitle')}
          </p>
        </div>

        <div className="grid gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline">{opportunity.type}</Badge>
                    <span className="text-sm text-gray-500">{t('funding')}: {opportunity.funding}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {opportunity.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>{t('requirements')}:</strong> {opportunity.requirements}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    {t('deadline')}: {opportunity.deadline}
                  </div>
                </div>
              </div>
              <Button 
                className="bg-academic-blue hover:bg-academic-blue/90"
                onClick={handleApplyNow}
              >
                {t('applyNow')}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-academic-blue" />
              <h2 className="text-xl font-semibold text-gray-900">{t('researchOpportunities')}</h2>
            </div>
            <p className="text-gray-600 mb-4">
              {t('researchOpportunitiesDesc')}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>{t('undergraduateResearch')} (PIBIC/PIBITI)</li>
              <li>{t('mastersProgram')}</li>
              <li>{t('doctorateProgram')}</li>
              <li>{t('postdocProgram')}</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-academic-blue" />
              <h2 className="text-xl font-semibold text-gray-900">{t('collaborations')}</h2>
            </div>
            <p className="text-gray-600 mb-4">
              {t('collaborationsDesc')}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>{t('jointResearchProjects')}</li>
              <li>{t('academicExchange')}</li>
              <li>{t('industryPartnerships')}</li>
              <li>{t('technicalConsulting')}</li>
            </ul>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Opportunities;
