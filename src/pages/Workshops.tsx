
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';

const Workshops = () => {
  const { t } = useLanguage();

  const upcomingWorkshops = [
    {
      title: 'Process Simulation with ASPEN Plus',
      description: 'Hands-on training for chemical process modeling and simulation',
      date: '2024-03-15',
      duration: '2 days',
      level: 'Intermediate',
      capacity: 20,
      enrolled: 15,
      topics: ['ASPEN Plus', 'Process Modeling', 'Simulation']
    },
    {
      title: 'Sustainable Engineering Design',
      description: 'Green chemistry principles and sustainable process design',
      date: '2024-04-20',
      duration: '1 day',
      level: 'Beginner',
      capacity: 30,
      enrolled: 22,
      topics: ['Green Chemistry', 'Sustainability', 'Design Principles']
    }
  ];

  const pastWorkshops = [
    {
      title: 'Advanced Control Systems',
      description: 'Implementation of modern control strategies in chemical processes',
      date: '2024-01-18',
      duration: '3 days',
      participants: 25,
      feedback: 4.8
    },
    {
      title: 'Safety in Chemical Engineering',
      description: 'Risk assessment and safety protocols for chemical processes',
      date: '2023-11-15',
      duration: '2 days',
      participants: 35,
      feedback: 4.9
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('workshopsTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Professional development workshops and training programs
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Upcoming Workshops
            </h2>
            <div className="grid gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-green-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {workshop.description}
                      </p>
                    </div>
                    <Badge 
                      className={workshop.level === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                    >
                      {workshop.level}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {new Date(workshop.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {workshop.enrolled}/{workshop.capacity} enrolled
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Materials included</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Topics covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary">{topic}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button>Register Now</Button>
                    <Button variant="outline">More Info</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Past Workshops
            </h2>
            <div className="grid gap-6">
              {pastWorkshops.map((workshop, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-academic-blue">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {workshop.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Feedback Score</div>
                      <div className="text-2xl font-bold text-academic-blue">
                        {workshop.feedback}/5.0
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {new Date(workshop.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {workshop.participants} participants
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Custom Training Programs
          </h2>
          <p className="text-gray-600 mb-4">
            Need specialized training for your organization? I offer custom workshops tailored to your specific needs.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Training</h3>
              <p className="text-sm text-gray-600">On-site training for industry teams</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Academic Workshops</h3>
              <p className="text-sm text-gray-600">University-specific programs</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Online Training</h3>
              <p className="text-sm text-gray-600">Virtual workshops and webinars</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Workshops;
