
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const CurrentInitiatives = () => {
  const { t } = useLanguage();

  const currentInitiatives = [
    {
      title: 'Projeto Proteger-se',
      description: 'Coordenação geral de projeto de extensão com mais de 7.000 pessoas atendidas',
      status: 'Em Andamento'
    },
    {
      title: 'Qualidade de Vida Estudantil',
      description: 'Desenvolvimento de políticas e programas de bem-estar estudantil',
      status: 'Encerrada em 12/06/2025'
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
        {t('currentLeadershipInitiatives')}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {currentInitiatives.map((initiative, index) => (
          <Card key={index} className="p-6 border-academic-blue/20 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-ufu-navy">{initiative.title}</h3>
              <Badge variant={initiative.status === 'Em Andamento' ? 'default' : 'secondary'} 
                     className={initiative.status === 'Em Andamento' ? 'bg-academic-blue text-white' : 'bg-gray-100 text-gray-700'}>
                {initiative.status}
              </Badge>
            </div>
            <p className="text-academic-gray-medium">{initiative.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CurrentInitiatives;
