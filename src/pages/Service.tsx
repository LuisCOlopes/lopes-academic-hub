
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, Globe, School } from 'lucide-react';

const Service = () => {
  const { t } = useLanguage();

  const serviceActivities = [
    {
      category: t('consultingAndReview'),
      icon: FileText,
      activities: [
        {
          role: 'Consultoria "ad hoc"',
          organization: 'Agências de fomento, periódicos científicos e congressos',
          period: '2000 - Presente',
          description: 'Revisor regular para mais de 15 periódicos internacionais'
        }
      ]
    },
    {
      category: t('reviewedJournals'),
      icon: Globe,
      activities: [
        {
          role: 'Revisor',
          organization: 'Industrial & Engineering Chemistry Research',
          period: '2005 - Presente',
          description: 'Avaliação regular de manuscritos'
        },
        {
          role: 'Revisor',
          organization: 'Journal of Process Control',
          period: '2003 - Presente',
          description: 'Revisão de artigos em controle de processos'
        },
        {
          role: 'Revisor',
          organization: 'Automatica',
          period: '2004 - Presente',
          description: 'Periódico de alto impacto em automação'
        },
        {
          role: 'Revisor',
          organization: 'Computers & Chemical Engineering',
          period: '2002 - Presente',
          description: 'Revista especializada em engenharia química computacional'
        },
        {
          role: 'Revisor',
          organization: 'IEEE Trans. On Automatic Control',
          period: '2008 - Presente',
          description: 'Principal revista IEEE em controle automático'
        }
      ]
    },
    {
      category: t('journalEditor'),
      icon: School,
      activities: [
        {
          role: 'Editor Associado',
          organization: 'Brazilian Journal of Chemical Engineering',
          period: '2009 - 2013',
          description: 'Responsável por decisões editoriais e revisão de manuscritos'
        },
        {
          role: 'Editor',
          organization: 'Ciência & Engenharia',
          period: '2005 - Presente (15+ anos)',
          description: 'Editor de longa data da revista'
        }
      ]
    },
    {
      category: t('academicServices'),
      icon: Users,
      activities: [
        {
          role: 'Professor e Orientador',
          organization: 'Curso de Engenharia de Segurança',
          period: '2004 - 2012',
          description: 'Professor e orientação no curso de especialização'
        },
        {
          role: 'Coordenador Geral',
          organization: 'Projeto Proteger-se',
          period: '2020 - Presente',
          description: 'Mais de 7.000 pessoas atendidas em projeto de extensão'
        }
      ]
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('servicesProvided')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {serviceActivities.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-ufu-navy rounded-lg">
                  <category.icon className="h-6 w-6 text-ufu-light" />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-ufu-navy">
                  {category.category}
                </h2>
              </div>

              <div className="grid gap-4">
                {category.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="border-l-4 border-ufu-blue pl-4 py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-ufu-navy">
                        {activity.role}
                      </h3>
                      <Badge variant="outline">{activity.period}</Badge>
                    </div>
                    <p className="text-ufu-blue font-medium mb-1">
                      {activity.organization}
                    </p>
                    <p className="text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-ufu-light rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-4">
            {t('currentServiceOpportunities')}
          </h2>
          <p className="text-ufu-navy mb-4">
            Procurando oportunidades para contribuir com a comunidade acadêmica? Entre em contato sobre possíveis colaborações.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">{t('peerReview')}</h3>
              <p className="text-sm text-ufu-blue">{t('availableForReview')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">{t('conferenceOrganization')}</h3>
              <p className="text-sm text-ufu-blue">{t('committeeParticipation')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">{t('projectReview')}</h3>
              <p className="text-sm text-ufu-blue">{t('panelServices')}</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Service;
