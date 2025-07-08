
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AssociationsSection = () => {
  const { t } = useLanguage();

  const associations = [
    {
      name: 'ABEQ - Associação Brasileira de Engenharia Química',
      type: 'Associação Nacional',
      country: 'Brasil',
      url: 'https://abeq.org.br/',
      image: '/lovable-uploads/638ca686-6022-49f6-a6a6-1b92c6d1d2e3.png',
      descriptionKey: 'abeqDescription'
    },
    {
      name: 'IEEE - Institute of Electrical and Electronics Engineers',
      type: 'Associação Internacional',
      country: 'Internacional',
      url: 'https://www.ieee.org/',
      descriptionKey: 'ieeeDescription'
    },
    {
      name: 'IEEE Control System Society',
      type: 'Sociedade Técnica',
      country: 'Internacional',
      url: 'https://www.ieeecss.org/',
      descriptionKey: 'ieeeControlDescription'
    },
    {
      name: 'SIAM - Society for Industrial and Applied Mathematics',
      type: 'Sociedade Científica',
      country: 'Internacional',
      url: 'https://www.siam.org/',
      descriptionKey: 'siamDescription'
    },
    {
      name: 'ABENGE - Associação Brasileira de Educação em Engenharia',
      type: 'Associação Educacional',
      country: 'Brasil',
      url: 'https://www.abenge.org.br/',
      descriptionKey: 'abengeDescription'
    },
    {
      name: 'AIChE - American Institute of Chemical Engineers',
      type: 'Instituto Profissional',
      country: 'Internacional',
      url: 'https://www.aiche.org/',
      descriptionKey: 'aicheDescription'
    },
    {
      name: 'IFAC - International Federation of Automatic Control',
      type: 'Federação Internacional',
      country: 'Internacional',
      url: 'https://www.ifac-control.org',
      descriptionKey: 'ifacDescription'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        {t('partnershipsAndCollaborations')}
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {associations.map((association, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 h-full">
              {/* Logo Section */}
              {association.image && (
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img 
                    src={association.image} 
                    alt={association.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}
              
              {/* Content Section */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg mb-2 leading-tight">
                  {association.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {t(association.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {association.type}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {association.country}
                  </div>
                </div>
                
                <a 
                  href={association.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-academic-blue hover:text-academic-blue/80 transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  {t('visitSite')}
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AssociationsSection;
