
import React from 'react';
import { Link } from 'react-router-dom';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Lightbulb, Award } from 'lucide-react';

const GetInvolved = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      title: t('researchCollaboration'),
      description: t('researchCollaborationDesc'),
      icon: Lightbulb,
      activities: [
        t('graduateResearchPositions'),
        t('postdocOpportunities'), 
        t('industryPartnerships') || 'Parcerias com a indústria'
      ]
    },
    {
      title: t('academicMentoring'),
      description: t('academicMentoringDesc'),
      icon: Users,
      activities: [
        t('studentMentoring'),
        t('careerGuidance'),
        t('researchSupervision')
      ]
    },
    {
      title: t('educationalInitiatives'),
      description: t('educationalInitiativesDesc'),
      icon: BookOpen,
      activities: [
        t('curriculumDevelopment'),
        t('workshopFacilitation'),
        t('onlineCourses')
      ]
    },
    {
      title: t('professionalDevelopment'),
      description: t('professionalDevelopmentDesc'),
      icon: Award,
      activities: [
        t('conferenceParticipation'),
        t('professionalSocieties'),
        t('skillDevelopment')
      ]
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('getInvolvedTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('getInvolvedSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <opportunity.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {opportunity.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mb-4">
                    {opportunity.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/contact">{t('contact')}</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-4">{t('joinResearchNetwork')}</h2>
            <p className="mb-4">
              {t('joinResearchNetworkDesc')}
            </p>
            <Button variant="secondary" asChild>
              <Link to="/contact">{t('applyNow')}</Link>
            </Button>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('forStudents')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('researchInternships')}</li>
                <li>• {t('graduateProgramOpportunities')}</li>
                <li>• {t('academicMentoring')}</li>
                <li>• {t('careerGuidance')}</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('forProfessionals')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('industryCollaboration')}</li>
                <li>• {t('consultingOpportunities')}</li>
                <li>• {t('professionalDevelopment')}</li>
                <li>• {t('knowledgeSharing')}</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default GetInvolved;
