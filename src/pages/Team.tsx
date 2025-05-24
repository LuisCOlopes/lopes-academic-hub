
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, GraduationCap, User, Users } from 'lucide-react';

const Team = () => {
  const { t } = useLanguage();

  const currentMembers = [
    {
      name: 'Dr. Ana Silva',
      position: 'Postdoctoral Researcher',
      research: 'Catalytic process optimization',
      education: 'PhD Chemical Engineering - UNICAMP',
      since: '2023',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
      email: 'ana.silva@ufu.br',
      linkedin: '#'
    },
    {
      name: 'João Santos',
      position: 'PhD Student',
      research: 'Machine learning in process control',
      education: 'MSc Chemical Engineering - UFU',
      since: '2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      email: 'joao.santos@ufu.br',
      linkedin: '#'
    },
    {
      name: 'Maria Oliveira',
      position: 'PhD Student',
      research: 'Sustainable biorefinery processes',
      education: 'MSc Chemical Engineering - UFRJ',
      since: '2021',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      email: 'maria.oliveira@ufu.br',
      linkedin: '#'
    },
    {
      name: 'Pedro Costa',
      position: 'MSc Student',
      research: 'Green hydrogen production',
      education: 'BSc Chemical Engineering - UFU',
      since: '2023',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'pedro.costa@ufu.br',
      linkedin: '#'
    },
    {
      name: 'Carla Ferreira',
      position: 'MSc Student',
      research: 'Advanced separation processes',
      education: 'BSc Chemical Engineering - UFU',
      since: '2023',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      email: 'carla.ferreira@ufu.br',
      linkedin: '#'
    },
    {
      name: 'Lucas Mendes',
      position: 'Undergraduate Researcher',
      research: 'Process simulation and modeling',
      education: 'Chemical Engineering Student - UFU',
      since: '2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      email: 'lucas.mendes@ufu.br',
      linkedin: '#'
    }
  ];

  const collaborators = [
    {
      name: 'Prof. James Wilson',
      institution: 'MIT - Chemical Engineering',
      collaboration: 'Catalytic process development',
      country: 'USA'
    },
    {
      name: 'Dr. Elena Rodriguez',
      institution: 'TU Delft - Process Technology',
      collaboration: 'Biorefinery integration',
      country: 'Netherlands'
    },
    {
      name: 'Prof. Hiroshi Tanaka',
      institution: 'Tokyo University - Chemical Systems',
      collaboration: 'AI in process control',
      country: 'Japan'
    },
    {
      name: 'Dr. Sarah Brown',
      institution: 'Stanford University',
      collaboration: 'Advanced materials research',
      country: 'USA'
    }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes('Postdoc')) return 'bg-purple-100 text-purple-800';
    if (position.includes('PhD')) return 'bg-blue-100 text-blue-800';
    if (position.includes('MSc')) return 'bg-green-100 text-green-800';
    if (position.includes('Undergraduate')) return 'bg-orange-100 text-orange-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('teamTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Meet our diverse research team advancing chemical engineering knowledge
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">25</div>
            <div className="text-gray-600">Total Members</div>
          </Card>
          <Card className="p-6 text-center">
            <GraduationCap className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-gray-600">PhD Students</div>
          </Card>
          <Card className="p-6 text-center">
            <User className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-gray-600">MSc Students</div>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-gray-600">International Collaborators</div>
          </Card>
        </div>

        {/* Current Team Members */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Current Team Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <Badge className={getPositionColor(member.position)}>
                    {member.position}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Research Focus</p>
                    <p className="text-gray-600">{member.research}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Education</p>
                    <p className="text-gray-600">{member.education}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Since</p>
                    <p className="text-gray-600">{member.since}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* International Collaborators */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            International Collaborators
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborators.map((collaborator, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {collaborator.name}
                    </h3>
                    <p className="text-academic-blue font-medium">
                      {collaborator.institution}
                    </p>
                  </div>
                  <Badge variant="outline">{collaborator.country}</Badge>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">Collaboration:</span> {collaborator.collaboration}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Join Our Research Team
          </h2>
          <p className="text-gray-600 mb-6">
            We are always looking for motivated students and researchers to join our team. 
            Current openings and application information available on our opportunities page.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">PhD Positions</h3>
              <p className="text-sm text-gray-600 mb-3">Full funding available for qualified candidates</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Postdoc Opportunities</h3>
              <p className="text-sm text-gray-600 mb-3">Research fellowships in sustainable processes</p>
              <Button variant="outline" size="sm">Apply Now</Button>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Visiting Researchers</h3>
              <p className="text-sm text-gray-600 mb-3">International exchange programs</p>
              <Button variant="outline" size="sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Team;
