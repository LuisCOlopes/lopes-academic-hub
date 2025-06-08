
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
      title: t('autonomousSystemProject'),
      status: t('ongoing'),
      period: '2025-atual',
      description: t('autonomousSystemDescription')
    },
    {
      title: t('dynamicOperabilityProject'),
      status: t('ongoing'),
      period: '2024-atual',
      description: t('dynamicOperabilityDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    },
    {
      title: t('faultTolerantControlProject'),
      status: t('ongoing'),
      period: '2012-atual',
      description: t('faultTolerantControlDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    },
    {
      title: t('artificialIntelligenceProject'),
      status: t('ongoing'),
      period: '2022-atual',
      description: t('artificialIntelligenceDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('researchTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('researchSubtitle')}
            </p>
          </div>

          {/* Research Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('researchMetrics')}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">150+</div>
                <div className="text-ufu-navy">{t('publications')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">600+</div>
                <div className="text-ufu-navy">{t('citations')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">80+</div>
                <div className="text-ufu-navy">{t('students')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">R$ 5M+</div>
                <div className="text-ufu-navy">{t('funding')}</div>
              </Card>
            </div>
          </div>

          {/* Current Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('currentProjects')}
            </h2>
            <div className="grid gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-ufu-navy mb-2">
                        {project.title}
                      </h3>
                      <p className="text-ufu-blue mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-ufu-blue mb-2">
                        <span>{project.period}</span>
                      </div>
                      {project.funding && (
                        <div className="text-sm text-ufu-blue">
                          <strong>{t('funding')}:</strong> {project.funding}
                        </div>
                      )}
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
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
              {t('researchAreas')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">{t('processControlArea')}</h3>
                <p className="text-ufu-blue text-sm">{t('processControlDescription')}</p>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">{t('optimizationArea')}</h3>
                <p className="text-ufu-blue text-sm">{t('optimizationDescription')}</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                <h3 className="font-semibold text-ufu-navy mb-2">{t('safetyArea')}</h3>
                <p className="text-ufu-blue text-sm">{t('safetyDescription')}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
