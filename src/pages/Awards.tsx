
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy } from 'lucide-react';

const Awards = () => {
  const { t } = useLanguage();

  const awards = [
    {
      year: '2023',
      title: 'Excellence in Teaching Award',
      organization: 'UFU - Chemical Engineering Faculty',
      description: 'Recognized for outstanding contributions to chemical engineering education',
      type: 'teaching'
    },
    {
      year: '2022',
      title: 'Best Research Paper Award',
      organization: 'Brazilian Chemical Engineering Congress',
      description: 'For research on sustainable industrial processes',
      type: 'research'
    },
    {
      year: '2021',
      title: 'CNPq Research Fellowship',
      organization: 'National Council for Scientific Development',
      description: 'Productivity scholarship for research excellence',
      type: 'fellowship'
    },
    {
      year: '2020',
      title: 'Innovation in Sustainability Award',
      organization: 'Brazilian Environmental Engineering Society',
      description: 'For contributions to green chemical processes',
      type: 'research'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'teaching':
        return <Award className="h-5 w-5" />;
      case 'research':
        return <Trophy className="h-5 w-5" />;
      case 'fellowship':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'teaching':
        return 'bg-blue-500';
      case 'research':
        return 'bg-green-500';
      case 'fellowship':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('awardsTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Recognition for excellence in teaching, research, and professional service
          </p>
        </div>

        <div className="grid gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${getTypeColor(award.type)} rounded-lg flex items-center justify-center`}>
                  {getTypeIcon(award.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {award.title}
                    </h3>
                    <Badge variant="outline">{award.year}</Badge>
                  </div>
                  
                  <p className="text-academic-blue font-medium mb-2">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-600">
                    {award.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Fellowship Applications
          </h2>
          <p className="text-gray-600 mb-4">
            Information about current fellowship opportunities and application deadlines.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">CNPq Fellowships</h3>
              <p className="text-sm text-gray-600">Applications open annually in March</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">CAPES Scholarships</h3>
              <p className="text-sm text-gray-600">Rolling applications for graduate students</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Awards;
