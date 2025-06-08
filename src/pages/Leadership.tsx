
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Building2, Calendar, Target, Award, CheckCircle, Clock } from 'lucide-react';

const Leadership = () => {
  const { t } = useLanguage();

  const leadershipPhilosophy = [
    {
      title: 'Liderança Colaborativa',
      description: 'Construção de equipes inclusivas que aproveitam perspectivas e expertises diversas',
      icon: Users
    },
    {
      title: 'Orientado por Visão',
      description: 'Estabelecimento de metas claras e inspiração de outros para alcançar objetivos ambiciosos',
      icon: Target
    },
    {
      title: 'Melhoria Contínua',
      description: 'Promoção da inovação e adaptação em ambientes em rápida mudança',
      icon: CheckCircle
    },
    {
      title: 'Base Ética',
      description: 'Liderança com integridade e compromisso com a ética acadêmica e profissional',
      icon: Award
    }
  ];

  const mainPositions = [
    {
      title: 'Diretor Substituto da Diretoria de Qualidade de Vida (DIRVE)',
      institution: 'Pró-reitoria de Assistência Estudantil - UFU',
      period: '2021 - 06/2025',
      type: 'Gestão Administrativa',
      achievements: [
        'Coordenação de programas de qualidade de vida estudantil',
        'Implementação de políticas de bem-estar',
        'Gestão de equipes multidisciplinares',
        'Desenvolvimento de projetos de apoio estudantil'
      ]
    },
    {
      title: 'Assessor do Reitor para Assuntos Estudantis',
      institution: 'Universidade Federal de Uberlândia',
      period: '2017 - 2025',
      type: 'Liderança Estratégica',
      achievements: [
        'Trabalho na PROEXC (Pró-reitoria de Extensão e Cultura)',
        'Atuação na PROAE (Pró-reitoria de Assistência Estudantil)',
        'Coordenação da ASAES (Assessoria Administrativa da PROAE)',
        'Desenvolvimento de políticas estudantis'
      ]
    },
    {
      title: 'Coordenador do Programa de Pós-graduação em Engenharia Química',
      institution: 'FEQUI/UFU',
      period: '2010 - 2012',
      type: 'Excelência Acadêmica',
      achievements: [
        'Coordenação de programa de pós-graduação conceito CAPES 5',
        'Gestão de mais de 100 estudantes de mestrado e doutorado',
        'Implementação de melhorias curriculares',
        'Fortalecimento da pesquisa e extensão'
      ]
    },
    {
      title: 'Membro do Conselho Universitário',
      institution: 'UFU',
      period: '2010 - 2012',
      type: 'Governança Universitária',
      achievements: [
        'Participação em decisões estratégicas da universidade',
        'Representação da comunidade acadêmica',
        'Contribuição para políticas institucionais',
        'Assessoria em planejamento universitário'
      ]
    }
  ];

  const otherPositions = [
    'Coordenador do Grupo IV do Departamento de Engenharia Química',
    'Membro de Comissão do INEP/MEC para autorização de funcionamento de Cursos',
    'Representante docente no conselho da Faculdade de Engenharia Química (2001-2002)',
    'Membro do Conselho de Pesquisa e Pós-graduação (2010-2012)',
    'Substituto diretor da FEQUI no Conselho Diretor da UFU (2001-2005)',
    'Presidente do Núcleo Docente Estruturante (NDE) do Curso de Engenharia Química',
    'Coordenador do NUCOP (Núcleo de Modelagem, Controle e Otimização de Processos) (2005-2009)',
    'Assessor Administrativo da Faculdade de Engenharia Química (2001-2005)',
    'Membro da COPSIA - Comissão Permanente de Sindicância e Inquérito Administrativo (2022-2023)'
  ];

  const currentInitiatives = [
    {
      title: 'Projeto Proteger-se',
      description: 'Coordenação geral de projeto de extensão com mais de 7.000 pessoas atendidas',
      status: 'Em Andamento'
    },
    {
      title: 'Qualidade de Vida Estudantil',
      description: 'Desenvolvimento de políticas e programas de bem-estar estudantil',
      status: 'Ativo'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('leadershipTitle')}
          </h1>
          <p className="text-lg text-academic-gray-medium">
            {t('leadershipSubtitle')}
          </p>
        </div>

        {/* Filosofia de Liderança */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
            Filosofia de Liderança
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {leadershipPhilosophy.map((item, index) => (
              <Card key={index} className="p-6 border-academic-blue/20 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-8 w-8 text-academic-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-ufu-navy mb-2">{item.title}</h3>
                    <p className="text-academic-gray-medium">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Posições Principais */}
        <section className="mb-12">
          <div className="space-y-8">
            {mainPositions.map((position, index) => (
              <Card key={index} className="p-8 border-academic-blue/20 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-ufu-navy">{position.title}</h3>
                      <p className="text-academic-blue font-medium">{position.institution}</p>
                    </div>
                    <Badge variant="default" className="text-sm bg-academic-blue text-white">
                      {position.period}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-academic-teal text-ufu-navy">
                    {position.type}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold text-ufu-navy mb-3">Principais Realizações</h4>
                  <ul className="space-y-2">
                    {position.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-academic-gray-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Outras Posições de Liderança */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
            Outras Posições de Liderança
          </h2>
          <Card className="p-6 border-academic-blue/20">
            <ul className="space-y-3">
              {otherPositions.map((position, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Building2 className="h-4 w-4 text-academic-blue mt-1 flex-shrink-0" />
                  <span className="text-academic-gray-medium">{position}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Iniciativas Atuais de Liderança */}
        <section>
          <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
            Iniciativas Atuais de Liderança
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentInitiatives.map((initiative, index) => (
              <Card key={index} className="p-6 border-academic-blue/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-ufu-navy">{initiative.title}</h3>
                  <Badge variant={initiative.status === 'Em Andamento' ? 'default' : 'secondary'} 
                         className={initiative.status === 'Em Andamento' ? 'bg-academic-blue text-white' : 'bg-academic-teal text-ufu-navy'}>
                    {initiative.status}
                  </Badge>
                </div>
                <p className="text-academic-gray-medium">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
