
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AlumniCardProps {
  graduate: {
    name: string;
    thesis: string;
    year: number;
    funding?: string;
    currentPosition?: string;
    area?: string;
  };
  badgeText: string;
  badgeColor?: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ graduate, badgeText, badgeColor }) => {
  const { t } = useLanguage();

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-ufu-navy">{graduate.name}</h4>
          {graduate.currentPosition && (
            <div className="flex items-center mt-1 mb-2">
              <Building className="h-4 w-4 text-ufu-blue mr-1" />
              <span className="text-sm text-ufu-blue font-medium">{graduate.currentPosition}</span>
            </div>
          )}
          <Badge variant="outline" className="mt-1">{badgeText}</Badge>
        </div>
      </div>
      <p className="text-ufu-blue text-sm mb-2">
        <strong>{graduate.thesis ? t('thesis') : t('dissertation')}:</strong> {graduate.thesis}
      </p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-ufu-navy font-medium">{t('year')}: {graduate.year}</span>
        {graduate.area && (
          <Badge variant="outline" className="text-xs">
            {graduate.area}
          </Badge>
        )}
        {graduate.funding && (
          <Badge variant="outline" className="text-xs">
            {graduate.funding}
          </Badge>
        )}
      </div>
    </Card>
  );
};

export default AlumniCard;
