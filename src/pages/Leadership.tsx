
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, Target, TrendingUp } from 'lucide-react';

const Leadership = () => {
  const { t } = useLanguage();

  const leadershipRoles = [
    {
      position: 'Department Head',
      organization: 'Chemical Engineering Department - UFU',
      period: '2019 - 2022',
      achievements: [
        'Led department through COVID-19 transition to online learning',
        'Increased research funding by 40%',
        'Implemented new curriculum aligned with industry needs',
        'Established partnerships with 5 international universities'
      ],
      impact: 'Strategic Leadership'
    },
    {
      position: 'Research Group Director',
      organization: 'Sustainable Processes Laboratory',
      period: '2017 - Present',
      achievements: [
        'Built research team from 5 to 25 members',
        'Secured R$ 2.5M in research grants',
        'Published 50+ peer-reviewed papers',
        'Graduated 15 PhD and 30 MSc students'
      ],
      impact: 'Research Excellence'
    },
    {
      position: 'International Committee Chair',
      organization: 'Brazilian Chemical Engineering Society',
      period: '2020 - Present',
      achievements: [
        'Organized 3 international conferences',
        'Established exchange programs with 10 countries',
        'Created mentorship network for young researchers',
        'Increased international membership by 60%'
      ],
      impact: 'Global Collaboration'
    }
  ];

  const leadershipPhilosophy = [
    {
      icon: Users,
      title: 'Collaborative Leadership',
      description: 'Building inclusive teams that leverage diverse perspectives and expertise'
    },
    {
      icon: Target,
      title: 'Vision-Driven',
      description: 'Setting clear goals and inspiring others to achieve ambitious objectives'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Fostering innovation and adaptation in rapidly changing environments'
    },
    {
      icon: Crown,
      title: 'Ethical Foundation',
      description: 'Leading with integrity and commitment to academic and professional ethics'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('leadershipTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Academic and professional leadership experience driving innovation and excellence
          </p>
        </div>

        {/* Leadership Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Leadership Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPhilosophy.map((principle, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Roles */}
        <div className="grid gap-8">
          {leadershipRoles.map((role, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {role.position}
                  </h3>
                  <p className="text-academic-blue font-medium mb-1">
                    {role.organization}
                  </p>
                  <Badge variant="outline">{role.period}</Badge>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  {role.impact}
                </Badge>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-academic-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Current Initiatives */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Current Leadership Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Sustainability Task Force
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Leading university-wide initiative to achieve carbon neutrality by 2030
              </p>
              <Badge variant="outline" className="text-green-600 border-green-600">
                In Progress
              </Badge>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Industry Partnership Program
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Developing strategic partnerships between academia and industry
              </p>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Planning Phase
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
