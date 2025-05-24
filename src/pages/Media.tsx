
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, Mic, Camera, ExternalLink } from 'lucide-react';

const Media = () => {
  const { t } = useLanguage();

  const mediaItems = [
    {
      type: 'Interview',
      title: 'The Future of Sustainable Chemical Engineering',
      outlet: 'Engineering Today Brazil',
      date: '2024-01-15',
      description: 'Discussing green chemistry innovations and their impact on Brazilian industry',
      mediaType: 'video',
      duration: '25 min',
      url: '#'
    },
    {
      type: 'Article',
      title: 'Innovation in Chemical Process Education',
      outlet: 'Academic Quarterly',
      date: '2023-12-10',
      description: 'Feature article on modern teaching methodologies in engineering',
      mediaType: 'text',
      readTime: '8 min read',
      url: '#'
    },
    {
      type: 'Podcast',
      title: 'Engineering Leadership in Academia',
      outlet: 'TechTalk Podcast',
      date: '2023-11-22',
      description: 'Discussion on academic leadership and research management',
      mediaType: 'audio',
      duration: '45 min',
      url: '#'
    },
    {
      type: 'TV Interview',
      title: 'Chemical Safety in Industrial Settings',
      outlet: 'Rede Globo - Bom Dia Brasil',
      date: '2023-10-08',
      description: 'Expert commentary on chemical safety protocols',
      mediaType: 'video',
      duration: '12 min',
      url: '#'
    }
  ];

  const pressReleases = [
    {
      title: 'UFU Professor Receives National Excellence Award',
      date: '2023-12-15',
      summary: 'Recognition for outstanding contributions to chemical engineering education and research'
    },
    {
      title: 'New Research Grant for Sustainable Process Development',
      date: '2023-09-20',
      summary: 'R$ 2.5 million funding approved for green chemistry research initiative'
    },
    {
      title: 'International Collaboration Agreement Signed',
      date: '2023-07-10',
      summary: 'Partnership with European universities for student and faculty exchange programs'
    }
  ];

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return <Camera className="h-5 w-5" />;
      case 'audio':
        return <Mic className="h-5 w-5" />;
      case 'text':
        return <FileText className="h-5 w-5" />;
      default:
        return <Play className="h-5 w-5" />;
    }
  };

  const getMediaTypeColor = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'audio':
        return 'bg-purple-100 text-purple-800';
      case 'text':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('mediaTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Media appearances, interviews, and press coverage
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Recent Media Appearances
            </h2>
            <div className="grid gap-6">
              {mediaItems.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-academic-blue rounded-lg">
                      {getMediaIcon(item.mediaType)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getMediaTypeColor(item.mediaType)}>
                          {item.type}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-academic-blue font-medium mb-2">
                        {item.outlet}
                      </p>
                      
                      <p className="text-gray-600 mb-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {item.duration || item.readTime}
                        </span>
                        <Button size="sm" variant="outline">
                          View <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Press Releases
            </h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {release.summary}
                      </p>
                      <span className="text-xs text-gray-500">
                        {new Date(release.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost">
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Media Inquiries
          </h2>
          <p className="text-gray-600 mb-4">
            Available for interviews, expert commentary, and media appearances on topics related to chemical engineering, sustainability, and education.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Expert Commentary</h3>
              <p className="text-sm text-gray-600">Chemical engineering and safety topics</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Educational Insights</h3>
              <p className="text-sm text-gray-600">Academic trends and teaching innovation</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Industry Analysis</h3>
              <p className="text-sm text-gray-600">Market trends and technology developments</p>
            </div>
          </div>
          <div className="mt-6">
            <Button>Contact for Media Inquiries</Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Media;
