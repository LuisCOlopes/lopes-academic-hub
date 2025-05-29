
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Lightbulb, Award } from 'lucide-react';

const GetInvolved = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      title: t('researchCollaboration') || 'Colaboração em Pesquisa',
      description: t('researchCollaborationDesc') || 'Participe de nossos projetos de pesquisa em engenharia química e controle de processos',
      icon: Lightbulb,
      activities: [
        t('graduateResearchPositions') || 'Posições de pesquisa de pós-graduação',
        t('postdocOpportunities') || 'Oportunidades de pós-doutorado', 
        t('industryPartnerships') || 'Parcerias com a indústria'
      ]
    },
    {
      title: t('academicMentoring') || 'Mentoria Acadêmica',
      description: t('academicMentoringDesc') || 'Participe de nossos programas de mentoria para estudantes e jovens pesquisadores',
      icon: Users,
      activities: [
        t('studentMentoring') || 'Mentoria de estudantes',
        t('careerGuidance') || 'Orientação de carreira',
        t('researchSupervision') || 'Supervisão de pesquisa'
      ]
    },
    {
      title: t('educationalInitiatives') || 'Iniciativas Educacionais',
      description: t('educationalInitiativesDesc') || 'Contribua para métodos de ensino inovadores e programas educacionais',
      icon: BookOpen,
      activities: [
        t('curriculumDevelopment') || 'Desenvolvimento curricular',
        t('workshopFacilitation') || 'Facilitação de workshops',
        t('onlineCourses') || 'Cursos online'
      ]
    },
    {
      title: t('professionalDevelopment') || 'Desenvolvimento Profissional',
      description: t('professionalDevelopmentDesc') || 'Participe de oportunidades de crescimento profissional e networking',
      icon: Award,
      activities: [
        t('conferenceParticipation') || 'Participação em conferências',
        t('professionalSocieties') || 'Sociedades profissionais',
        t('skillDevelopment') || 'Desenvolvimento de habilidades'
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
                  <Button size="sm" variant="outline">
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-4">{t('joinResearchNetwork') || 'Junte-se à Nossa Rede de Pesquisa'}</h2>
            <p className="mb-4">
              {t('joinResearchNetworkDesc') || 'Conecte-se com pesquisadores, profissionais da indústria e estudantes apaixonados por engenharia química e tecnologias sustentáveis.'}
            </p>
            <Button variant="secondary">
              {t('applyNow') || 'Candidate-se Agora'}
            </Button>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('forStudents') || 'Para Estudantes'}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('researchInternships') || 'Estágios de pesquisa'}</li>
                <li>• {t('graduateProgramOpportunities') || 'Oportunidades de programa de pós-graduação'}</li>
                <li>• {t('academicMentoring') || 'Mentoria acadêmica'}</li>
                <li>• {t('careerGuidance') || 'Orientação de carreira'}</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('forProfessionals') || 'Para Profissionais'}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('industryCollaboration') || 'Colaboração com a indústria'}</li>
                <li>• {t('consultingOpportunities') || 'Oportunidades de consultoria'}</li>
                <li>• {t('professionalDevelopment') || 'Desenvolvimento profissional'}</li>
                <li>• {t('knowledgeSharing') || 'Compartilhamento de conhecimento'}</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default GetInvolved;
