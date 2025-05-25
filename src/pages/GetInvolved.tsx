
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Lightbulb, Award } from 'lucide-react';

const GetInvolved = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      title: 'Research Collaboration',
      description: 'Join our research projects in chemical engineering and process control',
      icon: Lightbulb,
      activities: ['Graduate research positions', 'Postdoc opportunities', 'Industry partnerships']
    },
    {
      title: 'Academic Mentoring',
      description: 'Participate in our mentoring programs for students and young researchers',
      icon: Users,
      activities: ['Student mentoring', 'Career guidance', 'Research supervision']
    },
    {
      title: 'Educational Initiatives',
      description: 'Contribute to innovative teaching methods and educational programs',
      icon: BookOpen,
      activities: ['Curriculum development', 'Workshop facilitation', 'Online courses']
    },
    {
      title: 'Professional Development',
      description: 'Engage in professional growth and networking opportunities',
      icon: Award,
      activities: ['Conference participation', 'Professional societies', 'Skill development']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Get Involved
          </h1>
          <p className="text-lg text-gray-600">
            Join our academic community and contribute to advancing chemical engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <opportunity.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {opportunity.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mb-4">
                    {opportunity.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Join Our Research Network</h2>
            <p className="mb-4">
              Connect with researchers, industry professionals, and students passionate about 
              chemical engineering and sustainable technologies.
            </p>
            <Button variant="secondary">
              Apply Now
            </Button>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Students</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Research internships</li>
                <li>• Graduate program opportunities</li>
                <li>• Academic mentoring</li>
                <li>• Career guidance</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Professionals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Industry collaboration</li>
                <li>• Consulting opportunities</li>
                <li>• Professional development</li>
                <li>• Knowledge sharing</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default GetInvolved;
