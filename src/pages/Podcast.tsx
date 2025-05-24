
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Calendar, Clock } from 'lucide-react';

const Podcast = () => {
  const { t } = useLanguage();

  const episodes = [
    {
      title: 'The Future of Sustainable Chemical Processes',
      description: 'Exploring green chemistry innovations and their impact on industry',
      duration: '45 min',
      date: '2024-01-15',
      guests: ['Dr. Maria Santos', 'Prof. João Silva'],
      topics: ['Green Chemistry', 'Sustainability', 'Innovation']
    },
    {
      title: 'From Lab to Industry: Technology Transfer Stories',
      description: 'Real-world examples of successful research commercialization',
      duration: '38 min',
      date: '2024-01-08',
      guests: ['Eng. Carlos Oliveira', 'Dr. Ana Costa'],
      topics: ['Technology Transfer', 'Industry', 'Innovation']
    },
    {
      title: 'Student Success Stories in Chemical Engineering',
      description: 'Alumni sharing their career journeys and lessons learned',
      duration: '52 min',
      date: '2024-01-01',
      guests: ['Dr. Paulo Mendes', 'Eng. Lisa Santos'],
      topics: ['Career Development', 'Student Life', 'Professional Growth']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('podcastTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Engineering Conversations - Insights from academia and industry
          </p>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Latest Episode</h2>
          <h3 className="text-xl mb-2">{episodes[0].title}</h3>
          <p className="mb-4">{episodes[0].description}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="secondary">
              <Play className="h-4 w-4 mr-2" />
              Play Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-academic-blue">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              {episodes[0].duration}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900">All Episodes</h2>
          
          {episodes.map((episode, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {episode.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(episode.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3">
                    {episode.description}
                  </p>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Guests:</p>
                    <p className="text-sm text-gray-600">{episode.guests.join(', ')}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {episode.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 md:items-end">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {episode.duration}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Play
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Subscribe & Follow
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest episodes and never miss insights from leading experts.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline">Spotify</Button>
            <Button variant="outline">Apple Podcasts</Button>
            <Button variant="outline">Google Podcasts</Button>
            <Button variant="outline">RSS Feed</Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Podcast;
