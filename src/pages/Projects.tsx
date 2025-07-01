
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
      title: t('language') === 'pt' ? 'Sistemas Autônomos Avançados' :
             t('language') === 'en' ? 'Advanced Autonomous Systems' :
             'Sistemas Autónomos Avanzados',
      description: t('language') === 'pt' ? 'Desenvolvimento de sistemas autônomos para controle de processos químicos com capacidades avançadas de monitoramento e tomada de decisões.' :
                   t('language') === 'en' ? 'Development of autonomous systems for chemical process control with advanced monitoring and decision-making capabilities.' :
                   'Desarrollo de sistemas autónomos para control de procesos químicos con capacidades avanzadas de monitoreo y toma de decisiones.',
      funding: 'R$ 450.000',
      duration: '2023-2025',
      team: 4,
      status: 'active'
    },
    {
      title: t('language') === 'pt' ? 'Transição Energética Sustentável' :
             t('language') === 'en' ? 'Sustainable Energy Transition' :
             'Transición Energética Sostenible',
      description: t('language') === 'pt' ? 'Pesquisa focada na transição para fontes de energia renovável em processos industriais.' :
                   t('language') === 'en' ? 'Research focused on transition to renewable energy sources in industrial processes.' :
                   'Investigación enfocada en la transición a fuentes de energía renovable en procesos industriales.',
      funding: 'R$ 320.000',
      duration: '2024-2026',
      team: 3,
      status: 'active'
    },
    {
      title: t('language') === 'pt' ? 'Análise de Operabilidade Dinâmica' :
             t('language') === 'en' ? 'Dynamic Operability Analysis' :
             'Análisis de Operabilidad Dinámica',
      description: t('language') === 'pt' ? 'Análise e otimização da operabilidade dinâmica em processos químicos para melhorar flexibilidade e desempenho.' :
                   t('language') === 'en' ? 'Analysis and optimization of dynamic operability in chemical processes to improve flexibility and performance.' :
                   'Análisis y optimización de la operabilidad dinámica en procesos químicos para mejorar flexibilidad y rendimiento.',
      funding: 'R$ 280.000',
      duration: '2023-2024',
      team: 2,
      status: 'active'
    }
  ];

  const completedProjects = [
    {
      title: t('language') === 'pt' ? 'Controle Tolerante a Falhas' :
             t('language') === 'en' ? 'Fault-Tolerant Control Systems' :
             'Sistemas de Control Tolerantes a Fallas',
      description: t('language') === 'pt' ? 'Desenvolvimento de sistemas de controle tolerantes a falhas para garantir operação segura e confiável de processos químicos.' :
                   t('language') === 'en' ? 'Development of fault-tolerant control systems to ensure safe and reliable operation of chemical processes.' :
                   'Desarrollo de sistemas de control tolerantes a fallas para garantizar operación segura y confiable de procesos químicos.',
      funding: 'R$ 380.000',
      duration: '2020-2023',
      team: 5,
      publications: 8,
      status: 'completed'
    },
    {
      title: t('language') === 'pt' ? 'Inteligência Artificial em Controle' :
             t('language') === 'en' ? 'Artificial Intelligence in Control' :
             'Inteligencia Artificial en Control',
      description: t('language') === 'pt' ? 'Aplicação de técnicas de inteligência artificial em controle e otimização de processos para automação aprimorada.' :
                   t('language') === 'en' ? 'Application of artificial intelligence techniques in process control and optimization for enhanced automation.' :
                   'Aplicación de técnicas de inteligencia artificial en control y optimización de procesos para automatización mejorada.',
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
                    {t('language') === 'pt' ? 'Ver Detalhes' :
                     t('language') === 'en' ? 'View Details' :
                     'Ver Detalles'}
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
                        <Badge variant="secondary">
                          {t('language') === 'pt' ? 'Concluído' :
                           t('language') === 'en' ? 'Completed' :
                           'Completado'}
                        </Badge>
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
                    {t('language') === 'pt' ? 'Ver Resultados' :
                     t('language') === 'en' ? 'View Results' :
                     'Ver Resultados'}
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
