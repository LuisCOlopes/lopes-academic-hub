
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, GraduationCap, Briefcase } from 'lucide-react';

const Opportunities = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      type: 'Pós-doutorado',
      title: 'Pesquisa em Controle de Processos',
      description: 'Oportunidade para pesquisador pós-doutor em sistemas de controle avançado',
      requirements: 'Doutorado em Engenharia Química ou áreas afins',
      deadline: '2024-06-30',
      funding: 'FAPEMIG/CNPq'
    },
    {
      type: 'Doutorado',
      title: 'Otimização de Processos Químicos',
      description: 'Vaga para doutorado em otimização e modelagem de processos industriais',
      requirements: 'Mestrado em Engenharia Química',
      deadline: '2024-05-15',
      funding: 'CAPES'
    },
    {
      type: 'Mestrado',
      title: 'Segurança de Processos',
      description: 'Projeto de mestrado em análise de segurança e tolerância a falhas',
      requirements: 'Graduação em Engenharia',
      deadline: '2024-04-20',
      funding: 'CNPq'
    },
    {
      type: 'Iniciação Científica',
      title: 'Simulação de Processos',
      description: 'Projeto de IC em simulação computacional de processos químicos',
      requirements: 'Graduando em Engenharia Química',
      deadline: '2024-03-30',
      funding: 'FAPEMIG'
    }
  ];

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
                    <span className="text-sm text-gray-500">Financiamento: {opportunity.funding}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {opportunity.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Requisitos:</strong> {opportunity.requirements}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    Prazo: {new Date(opportunity.deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <Button className="bg-academic-blue hover:bg-academic-blue/90">
                Candidatar-se
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-academic-blue" />
              <h2 className="text-xl font-semibold text-gray-900">Oportunidades de Pesquisa</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Oferecemos oportunidades em diversas áreas da engenharia química, 
              com foco em controle de processos, otimização e segurança industrial.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Iniciação Científica (PIBIC/PIBITI)</li>
              <li>Mestrado Acadêmico</li>
              <li>Doutorado</li>
              <li>Pós-doutorado</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-academic-blue" />
              <h2 className="text-xl font-semibold text-gray-900">Colaborações</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Estamos sempre abertos a novas colaborações com pesquisadores 
              e instituições nacionais e internacionais.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Projetos de pesquisa conjunta</li>
              <li>Intercâmbio acadêmico</li>
              <li>Parcerias industriais</li>
              <li>Consultoria técnica</li>
            </ul>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Opportunities;
