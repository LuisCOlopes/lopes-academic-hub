
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
      title: 'Análise e Projeto de Sistemas de Controle',
      description: 'Desenvolvimento de estratégias de controle para processos químicos industriais',
      areas: ['Controle PID', 'Controle Avançado', 'Sistemas SCADA']
    },
    {
      title: 'Otimização de Processos',
      description: 'Melhoria da eficiência e redução de custos operacionais',
      areas: ['Otimização Linear', 'Otimização Não-Linear', 'Algoritmos Genéticos']
    },
    {
      title: 'Análise de Segurança',
      description: 'Avaliação de riscos e implementação de sistemas tolerantes a falhas',
      areas: ['HAZOP', 'Análise de Falhas', 'Sistemas de Segurança']
    },
    {
      title: 'Modelagem e Simulação',
      description: 'Desenvolvimento de modelos matemáticos para processos químicos',
      areas: ['Simulação Dinâmica', 'Modelos Fenomenológicos', 'CFD']
    }
  ];

  const projects = [
    {
      client: 'Petrobras',
      project: 'Sistema de Controle para Unidade de Destilação',
      year: '2023',
      status: 'Concluído'
    },
    {
      client: 'Vale',
      project: 'Otimização de Processo de Flotação',
      year: '2022',
      status: 'Concluído'
    },
    {
      client: 'Braskem',
      project: 'Análise de Segurança de Processo',
      year: '2024',
      status: 'Em Andamento'
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Serviços Oferecidos</h2>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projetos Recentes</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.project}</h3>
                    <p className="text-academic-blue">{project.client}</p>
                    <p className="text-sm text-gray-500">{project.year}</p>
                  </div>
                  <Badge variant={project.status === 'Concluído' ? 'default' : 'secondary'}>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Processo de Consultoria</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consulta Inicial</h3>
                <p className="text-sm text-gray-600">Discussão do problema e objetivos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Análise</h3>
                <p className="text-sm text-gray-600">Avaliação técnica detalhada</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Desenvolvimento</h3>
                <p className="text-sm text-gray-600">Implementação da solução</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  4
                </div>
                <h3 className="font-semibold mb-2">Entrega</h3>
                <p className="text-sm text-gray-600">Relatório final e treinamento</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="p-6 bg-academic-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">Interessado em Consultoria?</h2>
            <p className="mb-4">
              Entre em contato para discutir como posso ajudar com seus desafios 
              em engenharia química e controle de processos.
            </p>
            <Button variant="secondary">
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Consulting;
