
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Globe, MessageCircle, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunityStats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '7000+',
      label: t('peopleImpacted')
    },
    {
      icon: Globe,
      value: '15+',
      label: t('activePartnerships')
    },
    {
      icon: MessageCircle,
      value: '50+',
      label: t('eventsOrganized')
    },
    {
      icon: BookOpen,
      value: '100+',
      label: t('resourcesShared')
    }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 text-center">
          <stat.icon className="h-8 w-8 text-academic-blue mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default CommunityStats;
