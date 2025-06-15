import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, ExternalLink, GraduationCap } from 'lucide-react';

const Team = () => {
  console.log('Team component rendering...');
  
  const languageContext = useLanguage();
  console.log('Language context:', languageContext);
  
  const { t } = languageContext;

  const undergraduateStudents = [
    {
      name: 'Filipe Eloy Rodrigues de Oliveira',
      project: 'Projeto número 1',
      sponsor: 'Petrobras'
    },
    {
      name: 'José Maria da Silva',
      project: 'Projeto número 1',
      sponsor: 'Petrobras'
    }
  ];

  const masterStudents = [
    {
      name: 'Isadora Maria Ferreira Junqueira',
      project: 'Análise de operabilidade para plantas não-lineares com falhas em atuadores'
    }
  ];

  const phdStudents = [
    {
      name: 'Pedro Gelson Morais',
      project: 'Integração de rotas tecnológicas de coprocessamento de bio-óleo em unidades de hidrotratamento em refinarias de petróleo angolanas'
    },
    {
      name: 'Hermano da Silveira',
      project: 'Modelagem e Simulação de Reator de Pirólise de Resíduos Urbanos em Reator de Leito Fluidizado Circulante'
    }
  ];

  const ufuCollaborators = {
    chemicalEngineering: [
      'Rubens Gedraite',
      'Sérgio Mauro da Silva Neiro',
      'Thiago Vaz da Costa'
    ],
    electricalEngineering: [
      'Aniel Silva de Morais',
      'Gabriela Vieira Lima'
    ]
  };

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

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('teamTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('teamSubtitle')}
          </p>
        </div>

        {/* Current Students */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('currentStudents')}</h2>
          
          {/* Undergraduate Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('undergraduateStudents')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {undergraduateStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.name}</h4>
                      <Badge variant="outline" className="mt-1">{t('undergradResearch')}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2"><strong>{t('project')}:</strong> {student.project}</p>
                  <p className="text-gray-600 text-sm"><strong>Patrocinador:</strong> {student.sponsor}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Master Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('masterStudents')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {masterStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.name}</h4>
                      <Badge variant="outline" className="mt-1">{t('masters')}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm"><strong>{t('project')}:</strong> {student.project}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* PhD Students */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('phdStudents')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {phdStudents.map((student, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.name}</h4>
                      <Badge variant="outline" className="mt-1">{t('phd')}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm"><strong>{t('project')}:</strong> {student.project}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('collaborators')}</h2>
          
          {/* UFU Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('ufuCollaborators')}</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">{t('chemicalEngineeringFaculty')}</h4>
              <div className="grid md:grid-cols-3 gap-3">
                {ufuCollaborators.chemicalEngineering.map((name, index) => (
                  <Card key={index} className="p-3">
                    <p className="font-medium text-gray-900">{name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">{t('electricalEngineeringFaculty')}</h4>
              <div className="grid md:grid-cols-3 gap-3">
                {ufuCollaborators.electricalEngineering.map((name, index) => (
                  <Card key={index} className="p-3">
                    <p className="font-medium text-gray-900">{name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Brazilian Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('brazilianCollaborators')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {brazilianCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{collaborator.name}</h4>
                  <p className="text-academic-blue font-medium mb-2">{collaborator.institution}</p>
                  <a 
                    href={collaborator.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-academic-blue"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver perfil
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* International Collaborators */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('internationalCollaborators')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {internationalCollaborators.map((collaborator, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{collaborator.name}</h4>
                  <p className="text-academic-blue font-medium mb-2">{collaborator.institution}</p>
                  <a 
                    href={collaborator.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-academic-blue"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver perfil
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Stats */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('researchStats')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">50+</div>
                <div className="text-gray-600">{t('graduatedStudents')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">15</div>
                <div className="text-gray-600">{t('doctorsFormed')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">35</div>
                <div className="text-gray-600">{t('mastersFormed')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">5</div>
                <div className="text-gray-600">{t('collaborationCountries')}</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Join Team */}
        <section>
          <Card className="p-6 bg-academic-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">{t('joinTeam')}</h2>
            <p className="mb-4">
              {t('joinTeamDescription')}
            </p>
            <div className="flex gap-4">
              <Badge variant="secondary">{t('undergradResearch')}</Badge>
              <Badge variant="secondary">{t('masters')}</Badge>
              <Badge variant="secondary">{t('phd')}</Badge>
              <Badge variant="secondary">{t('postdoc')}</Badge>
            </div>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Team;
