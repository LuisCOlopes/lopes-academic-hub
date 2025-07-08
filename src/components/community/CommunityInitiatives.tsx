
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunityInitiatives = () => {
  const { t } = useLanguage();

  const communityInitiatives = [
    {
      title: 'Projeto Proteger-se',
      description: 'Projeto de extensão com mais de 7.000 pessoas atendidas focado em segurança e proteção',
      participants: '7000+',
      status: 'active',
      type: 'Extensão'
    },
    {
      title: 'Programa de Mentoria Acadêmica',
      description: 'Mentoria para estudantes de graduação e pós-graduação em engenharia química',
      participants: '150+',
      status: 'active',
      type: 'Mentoria'
    },
    {
      title: 'Seminários de Pesquisa',
      description: 'Seminários mensais sobre avanços em engenharia de processos químicos',
      participants: '200+',
      status: 'active',
      type: 'Evento'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        {t('communityInitiatives')}
      </h2>
      <div className="grid gap-6">
        {communityInitiatives.map((initiative, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {initiative.description}
                </p>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{initiative.type}</Badge>
                  <span className="text-sm text-gray-500">
                    {initiative.participants} {t('participants')}
                  </span>
                </div>
              </div>
              <Badge className={initiative.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                {initiative.status === 'active' ? t('active') : t('completed')}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <Link to="/contact">{t('contact')}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CommunityInitiatives;
