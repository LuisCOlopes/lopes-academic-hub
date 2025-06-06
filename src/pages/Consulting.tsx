
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const Consulting = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('controlSystemsAnalysis'),
      description: t('controlSystemsDesc'),
      areas: [t('pidControl'), t('advancedControl'), t('scadaSystems')]
    },
    {
      title: t('processOptimization'),
      description: t('processOptimizationDesc'),
      areas: [t('linearOptimization'), t('nonlinearOptimization'), t('geneticAlgorithms')]
    },
    {
      title: t('safetyAnalysis'),
      description: t('safetyAnalysisDesc'),
      areas: [t('hazop'), t('faultAnalysis'), t('safetySystems')]
    },
    {
      title: t('modelingSimulation'),
      description: t('modelingSimulationDesc'),
      areas: [t('dynamicSimulation'), t('phenomenologicalModels'), t('cfd')]
    }
  ];

  const projects = [
    {
      client: 'Petrobras',
      project: 'Sistema de Controle para Unidade de Destilação',
      year: '2023',
      status: t('completed')
    },
    {
      client: 'Braskem',
      project: 'Otimização de Processo de Polimerização',
      year: '2022',
      status: t('completed')
    },
    {
      client: 'Souza Cruz',
      project: 'Análise de Segurança de Processo Industrial',
      year: '2024',
      status: t('inProgress')
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('consultingTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('consultingSubtitle')}
          </p>
        </div>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('servicesOffered')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('recentProjects')}</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.project}</h3>
                    <p className="text-academic-blue">{project.client}</p>
                    <p className="text-sm text-gray-500">{project.year}</p>
                  </div>
                  <Badge variant={project.status === t('completed') ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('consultingProcess')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">{t('initialConsultation')}</h3>
                <p className="text-sm text-gray-600">{t('initialConsultationDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">{t('analysis')}</h3>
                <p className="text-sm text-gray-600">{t('analysisDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">{t('development')}</h3>
                <p className="text-sm text-gray-600">{t('developmentDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  4
                </div>
                <h3 className="font-semibold mb-2">{t('delivery')}</h3>
                <p className="text-sm text-gray-600">{t('deliveryDesc')}</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="p-6 bg-academic-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">{t('interestedInConsulting')}</h2>
            <p className="mb-4">
              {t('contactForConsulting')}
            </p>
            <Button variant="secondary">
              {t('contactUs')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Consulting;
