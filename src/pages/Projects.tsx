
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Beaker, Leaf, Factory, Zap, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const activeProjects = [
    {
      title: 'Projeto Conceitual de um Sistema Autônomo',
      description: 'Desenvolvimento de sistema autônomo para controle de processos químicos',
      funding: 'PETROBRAS - R$ 1.469.712,01',
      duration: '2025-2027',
      status: 'Em andamento',
      icon: Zap,
      category: 'Automação',
      collaborators: ['PETROBRAS'],
      tc: 'T.C. nº 23117.009434/2025-20'
    },
    {
      title: 'Otimização da Separação sólido-líquido',
      description: 'Otimização de processos de separação sólido-líquido em sistemas industriais',
      funding: 'PETROBRAS - R$ 1.594.172,60',
      duration: '2008-Em andamento',
      status: 'Em andamento',
      icon: Factory,
      category: 'Separação',
      collaborators: ['PETROBRAS'],
      tc: 'T.C. nº 0050.0047865.08.9'
    }
  ];

  const completedProjects = [
    {
      title: 'Tecnologias de controle de sólidos',
      duration: '2016-2019',
      impact: 'Desenvolvimento de tecnologias avançadas para controle de sólidos em processos industriais',
      funding: 'PETROBRAS - R$ 1.883.672,14',
      tc: 'T.C. nº 0050.0101352-16.9'
    },
    {
      title: 'Desenvolvimento de Sistemas',
      duration: '2010-2012',
      impact: 'Desenvolvimento de sistemas avançados para processos químicos',
      funding: 'FAPEMIG APQ-04173-07 - R$ 12.450,00'
    },
    {
      title: 'Parceria com a UFBA/PEI e UFRGS',
      duration: '2009-2012',
      impact: 'Projeto de cooperação acadêmica entre universidades',
      funding: 'PROCAD NF-Nº21/2009/AUXPE (nº360/2010)'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em andamento':
        return 'bg-green-100 text-green-800';
      case 'Iniciando':
        return 'bg-blue-100 text-blue-800';
      case 'Finalizado':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('projectsTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('projectsSubtitle')}
            </p>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('projects')}
            </h2>
            <div className="grid gap-6">
              {activeProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-ufu-navy rounded-lg flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-ufu-light" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-ufu-navy mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{project.category}</Badge>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                          {project.tc && (
                            <p className="text-sm text-ufu-blue mb-2">{project.tc}</p>
                          )}
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-ufu-blue mb-4">
                        {project.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-ufu-navy">Financiamento</p>
                          <p className="text-ufu-blue">{project.funding}</p>
                        </div>
                        <div>
                          <p className="font-medium text-ufu-navy">Duração</p>
                          <p className="text-ufu-blue flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.duration}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-ufu-navy">Colaboradores</p>
                          <div className="flex flex-wrap gap-1">
                            {project.collaborators.map((collab, collabIndex) => (
                              <Badge key={collabIndex} variant="secondary" className="text-xs">
                                {collab}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="mb-8">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('researchAreas')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Factory className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">{t('processControl')}</h3>
                <p className="text-ufu-blue text-sm">Sistemas de controle avançado para processos químicos</p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">{t('processOptimization')}</h3>
                <p className="text-ufu-blue text-sm">Otimização de processos industriais</p>
              </Card>
              <Card className="p-6 text-center">
                <Beaker className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">Segurança</h3>
                <p className="text-ufu-blue text-sm">Segurança e tolerância a falhas</p>
              </Card>
            </div>
            
            {/* Research Areas Chart */}
            <Card className="p-6">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/77981f12-cdc4-4fa6-a82e-f2c8218d962d.png" 
                  alt="Distribuição das Áreas de Pesquisa" 
                  className="mx-auto max-w-full h-auto rounded-lg"
                />
                <p className="text-sm text-ufu-blue mt-4">Distribuição das áreas de pesquisa em engenharia de processos químicos</p>
              </div>
            </Card>
          </div>

          {/* Completed Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('completedProjects')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-ufu-navy mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-gray-100 text-gray-800">Finalizado</Badge>
                    <span className="text-sm text-ufu-blue">{project.duration}</span>
                  </div>
                  {project.tc && (
                    <p className="text-sm text-ufu-blue mb-2">{project.tc}</p>
                  )}
                  <p className="text-ufu-blue text-sm mb-3">{project.impact}</p>
                  <p className="text-ufu-navy font-medium text-sm">{project.funding}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Statistics */}
          <div className="bg-ufu-light rounded-lg p-6">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('researchImpact')}
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-ufu-navy mb-2">R$ 5M+</div>
                <div className="text-ufu-navy">{t('totalFunding')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ufu-navy mb-2">150+</div>
                <div className="text-ufu-navy">{t('publicationsGenerated')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ufu-navy mb-2">50+</div>
                <div className="text-ufu-navy">{t('graduateStudents')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ufu-navy mb-2">5+</div>
                <div className="text-ufu-navy">{t('industrialPartnerships')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Projects;
