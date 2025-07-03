
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, BookOpen, Building, TrendingUp } from 'lucide-react';

const Projects = () => {
  const { language } = useLanguage();

  const getPageTitle = () => {
    switch (language) {
      case 'pt': return 'Projetos de Pesquisa';
      case 'en': return 'Research Projects';
      case 'es': return 'Proyectos de Investigación';
      default: return 'Projetos de Pesquisa';
    }
  };

  const getPageSubtitle = () => {
    switch (language) {
      case 'pt': return 'Projetos de pesquisa ativos e completados';
      case 'en': return 'Active and completed research projects';
      case 'es': return 'Proyectos de investigación activos y completados';
      default: return 'Projetos de pesquisa ativos e completados';
    }
  };

  const getResearchImpactTitle = () => {
    switch (language) {
      case 'pt': return 'Impacto da Pesquisa';
      case 'en': return 'Research Impact';
      case 'es': return 'Impacto de la Investigación';
      default: return 'Impacto da Pesquisa';
    }
  };

  const getActiveProjectsTitle = () => {
    switch (language) {
      case 'pt': return 'Projetos Ativos';
      case 'en': return 'Active Projects';
      case 'es': return 'Proyectos Activos';
      default: return 'Projetos Ativos';
    }
  };

  const getCompletedProjectsTitle = () => {
    switch (language) {
      case 'pt': return 'Projetos Completados';
      case 'en': return 'Completed Projects';
      case 'es': return 'Proyectos Completados';
      default: return 'Projetos Completados';
    }
  };

  const getOngoingText = () => {
    switch (language) {
      case 'pt': return 'Em Andamento';
      case 'en': return 'Ongoing';
      case 'es': return 'En Curso';
      default: return 'Em Andamento';
    }
  };

  const getCompletedText = () => {
    switch (language) {
      case 'pt': return 'Concluído';
      case 'en': return 'Completed';
      case 'es': return 'Completado';
      default: return 'Concluído';
    }
  };

  const getViewDetailsText = () => {
    switch (language) {
      case 'pt': return 'Ver Detalhes';
      case 'en': return 'View Details';
      case 'es': return 'Ver Detalles';
      default: return 'Ver Detalhes';
    }
  };

  const getViewResultsText = () => {
    switch (language) {
      case 'pt': return 'Ver Resultados';
      case 'en': return 'View Results';
      case 'es': return 'Ver Resultados';
      default: return 'Ver Resultados';
    }
  };

  const getTotalFundingText = () => {
    switch (language) {
      case 'pt': return 'Financiamento Total';
      case 'en': return 'Total Funding';
      case 'es': return 'Financiamiento Total';
      default: return 'Financiamento Total';
    }
  };

  const getPublicationsGeneratedText = () => {
    switch (language) {
      case 'pt': return 'Publicações Geradas';
      case 'en': return 'Publications Generated';
      case 'es': return 'Publicaciones Generadas';
      default: return 'Publicações Geradas';
    }
  };

  const getGraduateStudentsText = () => {
    switch (language) {
      case 'pt': return 'Estudantes Graduados';
      case 'en': return 'Graduate Students';
      case 'es': return 'Estudiantes Graduados';
      default: return 'Estudantes Graduados';
    }
  };

  const getIndustrialPartnershipsText = () => {
    switch (language) {
      case 'pt': return 'Parcerias Industriais';
      case 'en': return 'Industrial Partnerships';
      case 'es': return 'Alianzas Industriales';
      default: return 'Parcerias Industriais';
    }
  };

  const getPublicationsText = () => {
    switch (language) {
      case 'pt': return 'publicações';
      case 'en': return 'publications';
      case 'es': return 'publicaciones';
      default: return 'publicações';
    }
  };

  const activeProjects = [
    {
      title: language === 'pt' ? 'Sistemas Autônomos Avançados' :
             language === 'en' ? 'Advanced Autonomous Systems' :
             'Sistemas Autónomos Avanzados',
      description: language === 'pt' ? 'Desenvolvimento de sistemas autônomos para controle de processos químicos com capacidades avançadas de monitoramento e tomada de decisões.' :
                   language === 'en' ? 'Development of autonomous systems for chemical process control with advanced monitoring and decision-making capabilities.' :
                   'Desarrollo de sistemas autónomos para control de procesos químicos con capacidades avanzadas de monitoreo y toma de decisiones.',
      duration: '2023-2025',
      status: 'active'
    },
    {
      title: language === 'pt' ? 'Transição Energética Sustentável' :
             language === 'en' ? 'Sustainable Energy Transition' :
             'Transición Energética Sostenible',
      description: language === 'pt' ? 'Pesquisa focada na transição para fontes de energia renovável em processos industriais.' :
                   language === 'en' ? 'Research focused on transition to renewable energy sources in industrial processes.' :
                   'Investigación enfocada en la transición a fuentes de energía renovable en procesos industriales.',
      duration: '2024-2026',
      status: 'active'
    },
    {
      title: language === 'pt' ? 'Análise de Operabilidade Dinâmica' :
             language === 'en' ? 'Dynamic Operability Analysis' :
             'Análisis de Operabilidad Dinámica',
      description: language === 'pt' ? 'Análise e otimização da operabilidade dinâmica em processos químicos para melhorar flexibilidade e desempenho.' :
                   language === 'en' ? 'Analysis and optimization of dynamic operability in chemical processes to improve flexibility and performance.' :
                   'Análisis y optimización de la operabilidad dinámica en procesos químicos para mejorar flexibilidad y rendimiento.',
      duration: '2023-2024',
      status: 'active'
    }
  ];

  const completedProjects = [
    {
      title: language === 'pt' ? 'Controle Tolerante a Falhas' :
             language === 'en' ? 'Fault-Tolerant Control Systems' :
             'Sistemas de Control Tolerantes a Fallas',
      description: language === 'pt' ? 'Desenvolvimento de sistemas de controle tolerantes a falhas para garantir operação segura e confiável de processos químicos.' :
                   language === 'en' ? 'Development of fault-tolerant control systems to ensure safe and reliable operation of chemical processes.' :
                   'Desarrollo de sistemas de control tolerantes a fallas para garantizar operación segura y confiable de procesos químicos.',
      duration: '2020-2023',
      publications: 8,
      status: 'completed'
    },
    {
      title: language === 'pt' ? 'Inteligência Artificial em Controle' :
             language === 'en' ? 'Artificial Intelligence in Control' :
             'Inteligencia Artificial en Control',
      description: language === 'pt' ? 'Aplicação de técnicas de inteligência artificial em controle e otimização de processos para automação aprimorada.' :
                   language === 'en' ? 'Application of artificial intelligence techniques in process control and optimization for enhanced automation.' :
                   'Aplicación de técnicas de inteligencia artificial en control y optimización de procesos para automatización mejorada.',
      duration: '2019-2022',
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
              {getPageTitle()}
            </h1>
            <p className="text-xl text-ufu-blue">
              {getPageSubtitle()}
            </p>
          </div>

          {/* Research Impact Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{getResearchImpactTitle()}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">R$ 2.1M</div>
                <div className="text-gray-600">{getTotalFundingText()}</div>
              </Card>
              <Card className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">180+</div>
                <div className="text-gray-600">{getPublicationsGeneratedText()}</div>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">35+</div>
                <div className="text-gray-600">{getGraduateStudentsText()}</div>
              </Card>
              <Card className="p-6 text-center">
                <Building className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">8</div>
                <div className="text-gray-600">{getIndustrialPartnershipsText()}</div>
              </Card>
            </div>
          </section>

          {/* Active Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{getActiveProjectsTitle()}</h2>
            <div className="space-y-6">
              {activeProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {getOngoingText()}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {project.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {getViewDetailsText()}
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Completed Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{getCompletedProjectsTitle()}</h2>
            <div className="space-y-6">
              {completedProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <Badge variant="secondary">
                          {getCompletedText()}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {project.publications} {getPublicationsText()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {getViewResultsText()}
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
