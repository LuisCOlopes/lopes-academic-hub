
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Award, ExternalLink, MapPin } from 'lucide-react';

const Team = () => {
  const { t } = useLanguage();

  const getCurrentLanguage = () => {
    return localStorage.getItem('preferred-language') || 'pt';
  };

  const getContent = () => {
    const lang = getCurrentLanguage();
    
    const content = {
      pt: {
        title: 'Nossa Equipe',
        subtitle: 'Estudantes, colaboradores e parceiros de pesquisa',
        undergraduateStudents: 'Alunos de Iniciação Científica',
        masterStudents: 'Alunos de Mestrado',
        doctoralStudents: 'Alunos de Doutorado',
        collaborators: 'Colaboradores',
        ufuCollaborators: 'Colaboradores UFU',
        brazilianCollaborators: 'Colaboradores no Brasil',
        internationalCollaborators: 'Colaboradores Internacionais',
        chemicalEngineering: 'Faculdade de Engenharia Química',
        electricalEngineering: 'Faculdade de Engenharia Elétrica',
        visitProfile: 'Visitar Perfil'
      },
      en: {
        title: 'Our Team',
        subtitle: 'Students, collaborators, and research partners',
        undergraduateStudents: 'Undergraduate Research Students',
        masterStudents: 'Master\'s Students',
        doctoralStudents: 'Doctoral Students',
        collaborators: 'Collaborators',
        ufuCollaborators: 'UFU Collaborators',
        brazilianCollaborators: 'Brazilian Collaborators',
        internationalCollaborators: 'International Collaborators',
        chemicalEngineering: 'Faculty of Chemical Engineering',
        electricalEngineering: 'Faculty of Electrical Engineering',
        visitProfile: 'Visit Profile'
      },
      es: {
        title: 'Nuestro Equipo',
        subtitle: 'Estudiantes, colaboradores y socios de investigación',
        undergraduateStudents: 'Estudiantes de Investigación de Pregrado',
        masterStudents: 'Estudiantes de Maestría',
        doctoralStudents: 'Estudiantes de Doctorado',
        collaborators: 'Colaboradores',
        ufuCollaborators: 'Colaboradores UFU',
        brazilianCollaborators: 'Colaboradores en Brasil',
        internationalCollaborators: 'Colaboradores Internacionales',
        chemicalEngineering: 'Facultad de Ingeniería Química',
        electricalEngineering: 'Facultad de Ingeniería Eléctrica',
        visitProfile: 'Visitar Perfil'
      }
    };

    return content[lang] || content.pt;
  };

  const content = getContent();

  const undergraduateStudents = [
    {
      name: 'Filipe Eloy Rodrigues de Oliveira',
      project: 'Projeto número 1',
      funding: 'Petrobras'
    },
    {
      name: 'José Maria da Silva',
      project: 'Projeto número 1', 
      funding: 'Petrobras'
    }
  ];

  const masterStudents = [
    {
      name: 'Isadora Maria Ferreira Junqueira',
      project: 'Análise de operabilidade para plantas não-lineares com falhas em atuadores',
      funding: ''
    }
  ];

  const doctoralStudents = [
    {
      name: 'Pedro Gelson Morais',
      project: 'Integração de rotas tecnológicas de coprocessamento de bio-óleo em unidades de hidrotratamento em refinarias de petróleo angolanas',
      funding: ''
    }
  ];

  const ufuCollaborators = {
    chemicalEngineering: [
      { name: 'Rubens Gedraite' },
      { name: 'Sérgio Mauro da Silva Neiro' },
      { name: 'Thiago Vaz da Costa' }
    ],
    electricalEngineering: [
      { name: 'Aniel Silva de Morais' },
      { name: 'Gabriela Vieira Lima' }
    ]
  };

  const brazilianCollaborators = [
    {
      name: 'Heleno Bispo da Silva Júnior',
      institution: 'Universidade Federal de Campina Grande - PB (UFCG)',
      link: 'https://www.uaeq.ufcg.edu.br/index.php/docentes/103-heleno-bispo-da-silva-junior'
    },
    {
      name: 'Cristiano Hora de Oliveira Fontes',
      institution: 'Universidade Federal da Bahia (UFBA)',
      link: 'http://www.pei.ufba.br/pt-br/cristiano-hora-de-oliveira-fontes'
    },
    {
      name: 'Flávio Vasconcelos da Silva',
      institution: 'Universidade Estadual de Campinas (Unicamp)',
      link: 'https://portal.dados.unicamp.br/perfil?origem=&docente=286898&sigla_unidade=&nome_unidade=&nome_programa='
    }
  ];

  const internationalCollaborators = [
    {
      name: 'Panagiotis D. Christofides',
      institution: 'University of California, Los Angeles (UCLA)',
      link: 'https://samueli.ucla.edu/leadership-panagiotis-christofides/'
    },
    {
      name: 'Fernando V. Lima',
      institution: 'West Virginia University (WVU)',
      link: 'https://fernandolima.faculty.wvu.edu/'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Current Students */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Estudantes Atuais
          </h2>
          
          {/* Undergraduate Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-academic-blue" />
              {content.undergraduateStudents}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {undergraduateStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{student.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{student.project}</p>
                  <Badge variant="outline">{student.funding}</Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Master's Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-academic-blue" />
              {content.masterStudents}
            </h3>
            <div className="grid gap-4">
              {masterStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.project}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Doctoral Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-academic-blue" />
              {content.doctoralStudents}
            </h3>
            <div className="grid gap-4">
              {doctoralStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.project}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Collaborators */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {content.collaborators}
          </h2>

          {/* UFU Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {content.ufuCollaborators}
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {content.chemicalEngineering}
                </h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {ufuCollaborators.chemicalEngineering.map((collaborator, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{collaborator.name}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {content.electricalEngineering}
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {ufuCollaborators.electricalEngineering.map((collaborator, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{collaborator.name}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Brazilian Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {content.brazilianCollaborators}
            </h3>
            <div className="grid gap-4">
              {brazilianCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{collaborator.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {collaborator.institution}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(collaborator.link, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {content.visitProfile}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* International Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {content.internationalCollaborators}
            </h3>
            <div className="grid gap-4">
              {internationalCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{collaborator.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {collaborator.institution}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(collaborator.link, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {content.visitProfile}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Team;
