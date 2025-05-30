
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, TrendingUp, Users, ExternalLink } from 'lucide-react';

const Research = () => {
  const { t } = useLanguage();

  const currentProjects = [
    {
      title: 'Sistema Autônomo de Separação de Sólidos Gerados na Perfuração',
      status: 'Em andamento',
      period: '2025-atual',
      description: 'Desenvolvimento de sistema autônomo para separação de sólidos na perfuração de poços de petróleo'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('researchTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('researchSubtitle')}
          </p>
        </div>

        {/* Research Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('researchMetrics')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-academic-blue mb-2">150+</div>
              <div className="text-gray-600">{t('publications')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-academic-blue mb-2">600+</div>
              <div className="text-gray-600">{t('citations')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-academic-blue mb-2">80+</div>
              <div className="text-gray-600">{t('students')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-academic-blue mb-2">R$ 5M+</div>
              <div className="text-gray-600">{t('funding')}</div>
            </Card>
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('currentProjects')}
          </h2>
          <div className="grid gap-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {project.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('researchAreas')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-academic-blue mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Controle de Processos</h3>
              <p className="text-gray-600 text-sm">Sistemas de controle avançado para processos químicos</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-academic-blue mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Otimização</h3>
              <p className="text-gray-600 text-sm">Otimização de processos industriais</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-academic-blue mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600 text-sm">Segurança e tolerância a falhas</p>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
