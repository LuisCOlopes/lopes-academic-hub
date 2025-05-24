
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const Conferences = () => {
  const { t } = useLanguage();

  const upcomingConferences = [
    {
      name: 'International Conference on Sustainable Engineering',
      date: '2024-06-15 to 2024-06-18',
      location: 'São Paulo, Brazil',
      role: 'Keynote Speaker',
      topic: 'Green Chemical Processes in Industry 4.0',
      status: 'confirmed'
    },
    {
      name: 'Brazilian Chemical Engineering Congress',
      date: '2024-09-10 to 2024-09-13',
      location: 'Rio de Janeiro, Brazil',
      role: 'Session Chair',
      topic: 'Process Optimization and Control',
      status: 'confirmed'
    }
  ];

  const pastConferences = [
    {
      name: 'World Congress on Chemical Engineering',
      date: '2023-10-15 to 2023-10-18',
      location: 'Barcelona, Spain',
      role: 'Invited Speaker',
      topic: 'Sustainable Process Design',
      materials: ['Presentation Slides', 'Paper']
    },
    {
      name: 'Latin American Process Engineering Symposium',
      date: '2023-07-20 to 2023-07-23',
      location: 'Buenos Aires, Argentina',
      role: 'Plenary Speaker',
      topic: 'Innovation in Chemical Engineering Education',
      materials: ['Video Recording', 'Extended Abstract']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('conferencesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Speaking engagements, presentations, and conference participation
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Upcoming Conferences
            </h2>
            <div className="grid gap-6">
              {upcomingConferences.map((conference, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-green-500">
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
                    <Badge className="bg-green-100 text-green-800">{conference.status}</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Role:</p>
                      <p className="text-gray-600">{conference.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Topic:</p>
                      <p className="text-gray-600">{conference.topic}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Past Conferences
            </h2>
            <div className="grid gap-6">
              {pastConferences.map((conference, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-academic-blue">
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
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Role:</p>
                      <p className="text-gray-600">{conference.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Topic:</p>
                      <p className="text-gray-600">{conference.topic}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Materials:</p>
                    <div className="flex flex-wrap gap-2">
                      {conference.materials.map((material, i) => (
                        <Button key={i} size="sm" variant="outline">
                          {material}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Speaking Opportunities
          </h2>
          <p className="text-gray-600 mb-4">
            Interested in having me speak at your conference or event? I'm always open to sharing knowledge and insights.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Keynote Presentations</h3>
              <p className="text-sm text-gray-600">Strategic insights and industry vision</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Technical Sessions</h3>
              <p className="text-sm text-gray-600">Deep-dive research presentations</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Panel Discussions</h3>
              <p className="text-sm text-gray-600">Interactive expert discussions</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Conferences;
