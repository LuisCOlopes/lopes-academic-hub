
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AlumniStats = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '5', label: t('doctorsSupervised'), icon: GraduationCap },
    { number: '6', label: t('doctorsCoSupervised'), icon: GraduationCap },
    { number: '11', label: t('mastersOrientated'), icon: GraduationCap },
    { number: '9', label: t('mastersCoOriented'), icon: GraduationCap }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 text-center">
          <stat.icon className="h-8 w-8 text-ufu-blue mx-auto mb-3" />
          <div className="text-3xl font-bold text-ufu-navy mb-2">{stat.number}</div>
          <div className="text-ufu-blue">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default AlumniStats;
