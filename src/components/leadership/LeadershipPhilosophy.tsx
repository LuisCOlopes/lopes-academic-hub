
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Target, CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LeadershipPhilosophy = () => {
  const { t } = useLanguage();

  const leadershipPhilosophy = [
    {
      title: 'Liderança Colaborativa',
      description: 'Construção de equipes inclusivas que aproveitam perspectivas e expertises diversas',
      icon: Users
    },
    {
      title: 'Orientado por Visão',
      description: 'Estabelecimento de metas claras e inspiração de outros para alcançar objetivos ambiciosos',
      icon: Target
    },
    {
      title: 'Melhoria Contínua',
      description: 'Promoção da inovação e adaptação em ambientes em rápida mudança',
      icon: CheckCircle
    },
    {
      title: 'Base Ética',
      description: 'Liderança com integridade e compromisso com a ética acadêmica e profissional',
      icon: Award
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
        Filosofia de Liderança
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {leadershipPhilosophy.map((item, index) => (
          <Card key={index} className="p-6 border-academic-blue/20 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <item.icon className="h-8 w-8 text-academic-blue mt-1" />
              <div>
                <h3 className="font-semibold text-ufu-navy mb-2">{item.title}</h3>
                <p className="text-academic-gray-medium">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LeadershipPhilosophy;
