
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, MessageCircle, Heart } from 'lucide-react';

const Community = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: 'Weekly Lab Meetings',
      description: 'Regular research updates and discussions',
      frequency: 'Every Friday 3:00 PM',
      location: 'Lab 204, Engineering Building'
    },
    {
      title: 'Student Coffee Hour',
      description: 'Informal networking and mentoring sessions',
      frequency: 'Every Wednesday 4:00 PM',
      location: 'Student Lounge'
    },
    {
      title: 'Industry Guest Lectures',
      description: 'Professional speakers from leading companies',
      frequency: 'Monthly',
      location: 'Auditorium A'
    }
  ];

  const initiatives = [
    {
      title: 'Peer Mentorship Program',
      description: 'Senior students guide newcomers through their academic journey',
      icon: Users
    },
    {
      title: 'Research Collaboration Forum',
      description: 'Platform for sharing ideas and finding research partners',
      icon: MessageCircle
    },
    {
      title: 'Community Outreach',
      description: 'Engaging with local schools and community organizations',
      icon: Heart
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('communityTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Building connections and fostering collaboration within our academic community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Regular Events
            </h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-academic-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {event.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        <p>📅 {event.frequency}</p>
                        <p>📍 {event.location}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Community Initiatives
            </h2>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-academic-blue rounded-lg">
                      <initiative.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-gray-600 mb-6">
            There are many ways to participate and contribute to our vibrant community.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <Users className="h-6 w-6 mb-2" />
              <span>Join Events</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <MessageCircle className="h-6 w-6 mb-2" />
              <span>Share Ideas</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <Heart className="h-6 w-6 mb-2" />
              <span>Volunteer</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Organize</span>
            </Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Community;
