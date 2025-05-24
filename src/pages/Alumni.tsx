
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Building, Calendar } from 'lucide-react';

const Alumni = () => {
  const { t } = useLanguage();

  const alumni = [
    {
      name: 'Dr. Ana Silva',
      degree: 'PhD in Chemical Engineering',
      year: '2022',
      currentPosition: 'Senior Process Engineer',
      company: 'Petrobras',
      location: 'Rio de Janeiro, Brazil',
      achievements: ['Published 8 papers', 'Patent holder', 'Industry award winner']
    },
    {
      name: 'Dr. Carlos Santos',
      degree: 'PhD in Environmental Engineering',
      year: '2021',
      currentPosition: 'Environmental Consultant',
      company: 'EcoTech Solutions',
      location: 'São Paulo, Brazil',
      achievements: ['Environmental impact specialist', '15+ projects completed']
    },
    {
      name: 'MSc. Maria Oliveira',
      degree: 'Master in Process Engineering',
      year: '2023',
      currentPosition: 'Process Development Engineer',
      company: 'Vale S.A.',
      location: 'Belo Horizonte, Brazil',
      achievements: ['Process optimization expert', 'Safety protocol developer']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('alumniTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Celebrating the success of our graduates and their contributions to industry and academia
          </p>
        </div>

        <div className="grid gap-6">
          {alumni.map((alumnus, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {alumnus.name}
                    </h3>
                    <Badge variant="outline">{alumnus.year}</Badge>
                  </div>
                  
                  <p className="text-academic-blue font-medium mb-3">
                    {alumnus.degree}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{alumnus.currentPosition}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{alumnus.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {alumnus.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Alumni Network
          </h2>
          <p className="text-gray-600 mb-4">
            Stay connected with fellow graduates and expand your professional network.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn Group</h3>
              <p className="text-sm text-gray-600">Join our professional network</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Annual Reunion</h3>
              <p className="text-sm text-gray-600">Meet every December</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-sm text-gray-600">Guide current students</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
