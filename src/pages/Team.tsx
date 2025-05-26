
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, GraduationCap, User, Users, ExternalLink } from 'lucide-react';

const Team = () => {
  const { t } = useLanguage();

  const currentMembers = [
    {
      name: 'Filipe Eloy Rodrigues de Oliveira',
      position: 'Undergraduate Researcher',
      research: 'Projeto número 1',
      funding: 'Petrobras',
      since: '2024',
      level: 'ic'
    },
    {
      name: 'José Maria da Silva',
      position: 'Undergraduate Researcher',
      research: 'Projeto número 1',
      funding: 'Petrobras',
      since: '2024',
      level: 'ic'
    },
    {
      name: 'Isadora Maria Ferreira Junqueira',
      position: 'MSc Student',
      research: 'Análise de operabilidade para plantas não-lineares com falhas em atuadores',
      since: '2023',
      level: 'msc'
    },
    {
      name: 'Pedro Gelson Morais',
      position: 'PhD Student',
      research: 'Integração de rotas tecnológicas de coprocessamento de bio-óleo em unidades de hidrotratamento em refinarias de petróleo angolanas',
      since: '2022',
      level: 'phd'
    }
  ];

  const ufuCollaborators = [
    {
      faculty: 'Faculdade de Engenharia Química',
      members: [
        'Rubens Gedraite',
        'Sérgio Mauro da Silva Neiro',
        'Thiago Vaz da Costa'
      ]
    },
    {
      faculty: 'Faculdade de Engenharia Elétrica',
      members: [
        'Aniel Silva de Morais',
        'Gabriela Vieira Lima'
      ]
    }
  ];

  const brazilianCollaborators = [
    {
      name: 'Heleno Bispo da Silva Júnior',
      institution: 'Universidade Federal de Campina Grande - PB (UFCG)',
      url: 'https://www.uaeq.ufcg.edu.br/index.php/docentes/103-heleno-bispo-da-silva-junior'
    },
    {
      name: 'Cristiano Hora de Oliveira Fontes',
      institution: 'Universidade Federal da Bahia (UFBA)',
      url: 'http://www.pei.ufba.br/pt-br/cristiano-hora-de-oliveira-fontes'
    },
    {
      name: 'Flávio Vasconcelos da Silva',
      institution: 'Universidade Estadual de Campinas (Unicamp)',
      url: 'https://portal.dados.unicamp.br/perfil?origem=&docente=286898&sigla_unidade=&nome_unidade=&nome_programa='
    }
  ];

  const internationalCollaborators = [
    {
      name: 'Panagiotis D. Christofides',
      institution: 'University of California, Los Angeles (UCLA)',
      url: 'https://samueli.ucla.edu/leadership-panagiotis-christofides/'
    },
    {
      name: 'Fernando V. Lima',
      institution: 'West Virginia University (WVU)',
      url: 'https://fernandolima.faculty.wvu.edu/'
    }
  ];

  const getPositionColor = (level: string) => {
    if (level === 'phd') return 'bg-blue-100 text-blue-800';
    if (level === 'msc') return 'bg-green-100 text-green-800';
    if (level === 'ic') return 'bg-orange-100 text-orange-800';
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
            Equipe
          </h2>
          
          {/* Undergraduate Researchers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alunos de Iniciação Científica</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentMembers.filter(member => member.level === 'ic').map((member, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">Projeto: {member.research}</p>
                  <p className="text-sm text-academic-blue">Financiamento: {member.funding}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* MSc Students */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alunos de Mestrado</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {currentMembers.filter(member => member.level === 'msc').map((member, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-600">Projeto: {member.research}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* PhD Students */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alunos de Doutorado</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {currentMembers.filter(member => member.level === 'phd').map((member, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-600">Projeto: {member.research}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Collaborators */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Colaboradores
          </h2>
          
          {/* UFU Collaborators */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">UFU</h3>
            <div className="space-y-4">
              {ufuCollaborators.map((faculty, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">{faculty.faculty}</h4>
                  <div className="space-y-1">
                    {faculty.members.map((member, memberIndex) => (
                      <p key={memberIndex} className="text-gray-600">• {member}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Brazilian Collaborators */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Colaboradores no Brasil</h3>
            <div className="space-y-4">
              {brazilianCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{collaborator.name}</h4>
                      <p className="text-academic-blue">{collaborator.institution}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={collaborator.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* International Collaborators */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Colaboradores Internacionais</h3>
            <div className="space-y-4">
              {internationalCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{collaborator.name}</h4>
                      <p className="text-academic-blue">{collaborator.institution}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={collaborator.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
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
