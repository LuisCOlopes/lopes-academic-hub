
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Users, BookOpen, Building, DollarSign, TrendingUp } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const activeProjects = [
    {
      title: t('autonomousSystemProject'),
      description: t('autonomousSystemDescription'),
      funding: 'R$ 450.000',
      duration: '2023-2025',
      team: 4,
      status: 'active'
    },
    {
      title: t('energyTransitionProject'),
      description: t('energyTransitionDescription'),
      funding: 'R$ 320.000',
      duration: '2024-2026',
      team: 3,
      status: 'active'
    },
    {
      title: t('dynamicOperabilityProject'),
      description: t('dynamicOperabilityDescription'),
      funding: 'R$ 280.000',
      duration: '2023-2024',
      team: 2,
      status: 'active'
    }
  ];

  const completedProjects = [
    {
      title: t('faultTolerantControlProject'),
      description: t('faultTolerantControlDescription'),
      funding: 'R$ 380.000',
      duration: '2020-2023',
      team: 5,
      publications: 8,
      status: 'completed'
    },
    {
      title: t('artificialIntelligenceProject'),
      description: t('artificialIntelligenceDescription'),
      funding: 'R$ 420.000',
      duration: '2019-2022',
      team: 6,
      publications: 12,
      status: 'completed'
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('projectsTitle')}
            </h1>
            <p className="text-xl text-ufu-blue">
              {t('projectsSubtitle')}
            </p>
          </div>

          {/* Research Impact Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('researchImpact')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">R$ 2.1M</div>
                <div className="text-gray-600">{t('totalFunding')}</div>
              </Card>
              <Card className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">180+</div>
                <div className="text-gray-600">{t('publicationsGenerated')}</div>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">35+</div>
                <div className="text-gray-600">{t('graduateStudents')}</div>
              </Card>
              <Card className="p-6 text-center">
                <Building className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">8</div>
                <div className="text-gray-600">{t('industrialPartnerships')}</div>
              </Card>
            </div>
          </section>

          {/* Active Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('activeProjects')}</h2>
            <div className="space-y-6">
              {activeProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <Badge className="bg-green-100 text-green-800">{t('ongoing')}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team} {t('students')}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {project.funding}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Completed Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('completedProjects')}</h2>
            <div className="space-y-6">
              {completedProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <Badge variant="secondary">{t('completedProjects').split(' ')[0]}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team} {t('students')}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {project.funding}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {project.publications} {t('publications')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Resultados
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Projects;
