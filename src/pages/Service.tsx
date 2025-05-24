
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, Globe, School } from 'lucide-react';

const Service = () => {
  const { t } = useLanguage();

  const serviceActivities = [
    {
      category: 'Editorial Service',
      icon: FileText,
      activities: [
        {
          role: 'Associate Editor',
          organization: 'Journal of Chemical Engineering',
          period: '2022 - Present',
          description: 'Responsible for manuscript review and editorial decisions'
        },
        {
          role: 'Reviewer',
          organization: 'Multiple International Journals',
          period: '2018 - Present',
          description: 'Regular reviewer for 15+ peer-reviewed journals'
        }
      ]
    },
    {
      category: 'Professional Organizations',
      icon: Globe,
      activities: [
        {
          role: 'Board Member',
          organization: 'Brazilian Chemical Engineering Association',
          period: '2021 - Present',
          description: 'Strategic planning and policy development'
        },
        {
          role: 'Committee Chair',
          organization: 'International Conference on Sustainable Processes',
          period: '2020 - 2023',
          description: 'Organizing committee for annual conference'
        }
      ]
    },
    {
      category: 'University Service',
      icon: School,
      activities: [
        {
          role: 'Department Head',
          organization: 'Chemical Engineering Department - UFU',
          period: '2019 - 2022',
          description: 'Administrative leadership and strategic planning'
        },
        {
          role: 'Graduate Committee Member',
          organization: 'UFU Graduate School',
          period: '2018 - Present',
          description: 'Review and approve graduate program policies'
        }
      ]
    },
    {
      category: 'Community Outreach',
      icon: Users,
      activities: [
        {
          role: 'Science Fair Judge',
          organization: 'Regional High Schools',
          period: '2017 - Present',
          description: 'Mentoring young scientists and engineers'
        },
        {
          role: 'Technical Consultant',
          organization: 'Local Industries',
          period: '2016 - Present',
          description: 'Pro bono consulting for small chemical companies'
        }
      ]
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('serviceTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Professional service to the academic community and society
          </p>
        </div>

        <div className="grid gap-8">
          {serviceActivities.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-academic-blue rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid gap-4">
                {category.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="border-l-4 border-academic-blue pl-4 py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {activity.role}
                      </h3>
                      <Badge variant="outline">{activity.period}</Badge>
                    </div>
                    <p className="text-academic-blue font-medium mb-1">
                      {activity.organization}
                    </p>
                    <p className="text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Current Service Opportunities
          </h2>
          <p className="text-gray-600 mb-4">
            Looking for opportunities to contribute to the academic community? Contact me about potential collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Peer Review</h3>
              <p className="text-sm text-gray-600">Available for manuscript reviews</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Conference Organization</h3>
              <p className="text-sm text-gray-600">Committee participation welcome</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Grant Review</h3>
              <p className="text-sm text-gray-600">Panel service for funding agencies</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Service;
