
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConferenceCardProps {
  conference: {
    name: string;
    date: string;
    location: string;
    organization?: string;
    topics?: string;
    website?: string;
    country?: string;
    topic?: string;
    status?: string;
    materials?: string[];
  };
  borderColor?: string;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ conference, borderColor = 'border-l-academic-blue' }) => {
  const { t } = useLanguage();

  return (
    <Card className={`p-6 border-l-4 ${borderColor}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {conference.name}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {conference.date}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {conference.location}
            </div>
          </div>
        </div>
        {(conference.country || conference.status) && (
          <Badge className={
            conference.status === 'completed' 
              ? "bg-green-100 text-green-800"
              : conference.country === 'Brasil' 
                ? "bg-green-100 text-green-800" 
                : "bg-blue-100 text-blue-800"
          }>
            {conference.country || conference.status}
          </Badge>
        )}
      </div>
      
      <div className="space-y-3 mb-4">
        {conference.organization && (
          <div>
            <p className="text-sm font-medium text-gray-700">{t('organization')}:</p>
            <p className="text-gray-600">{conference.organization}</p>
          </div>
        )}
        {(conference.topics || conference.topic) && (
          <div>
            <p className="text-sm font-medium text-gray-700">{conference.topics ? t('topics') : t('topic')}:</p>
            <p className="text-gray-600">{conference.topics || conference.topic}</p>
          </div>
        )}
      </div>
      
      {conference.website && (
        <Button size="sm" variant="outline">
          <Globe className="h-4 w-4 mr-2" />
          {conference.website}
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      )}
      
      {conference.materials && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">{t('availableMaterials')}:</p>
          <div className="flex flex-wrap gap-2">
            {conference.materials.map((material, i) => (
              <Button key={i} size="sm" variant="outline">
                {material}
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ConferenceCard;
