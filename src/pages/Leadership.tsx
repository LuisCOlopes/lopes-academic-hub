
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Building2, Calendar } from 'lucide-react';

const Leadership = () => {
  const { t } = useLanguage();

  const leadershipRoles = [
    {
      title: 'Diretor Substituto da Qualidade de Vida (DIRVE)',
      institution: 'Universidade Federal de Uberlândia',
      period: '2021 - 06/2025',
      type: 'current'
    },
    {
      title: 'Coordenador do Curso de Engenharia Química',
      institution: 'Universidade Federal de Uberlândia',
      period: '2018 - 2020',
      type: 'past'
    },
    {
      title: 'Vice-Chefe do Departamento de Engenharia Química',
      institution: 'Universidade Federal de Uberlândia',
      period: '2016 - 2018',
      type: 'past'
    },
    {
      title: 'Membro do Conselho Diretor da FEQ',
      institution: 'Universidade Federal de Uberlândia',
      period: '2012 - 2016',
      type: 'past'
    },
    {
      title: 'Chefe do Departamento de Engenharia Química',
      institution: 'Universidade Federal de Uberlândia',
      period: '2008 - 2012',
      type: 'past'
    },
    {
      title: 'Coordenador do Programa de Pós-Graduação em Engenharia Química',
      institution: 'Universidade Federal de Uberlândia',
      period: '2006 - 2008',
      type: 'past'
    },
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('leadershipTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('leadershipSubtitle')}
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('leadershipPositions')}
          </h2>
          <div className="space-y-4">
            {leadershipRoles.map((role, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-academic-blue">{role.institution}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{role.period}</span>
                    </div>
                  </div>
                  <Badge variant={role.type === 'current' ? 'default' : 'secondary'}>
                    {role.type === 'current' ? t('current') : t('past')}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
