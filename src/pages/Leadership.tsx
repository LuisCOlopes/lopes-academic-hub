
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
      position: 'Diretor Substituto da Diretoria de Qualidade de Vida (DIRVE)',
      organization: 'Pró-reitoria de Assistência Estudantil - UFU',
      period: '2021 - Atual',
      achievements: [
        'Coordenação de programas de qualidade de vida estudantil',
        'Implementação de políticas de bem-estar',
        'Gestão de equipes multidisciplinares',
        'Desenvolvimento de projetos de apoio estudantil'
      ],
      impact: 'Gestão Administrativa'
    },
    {
      position: 'Assessor do Reitor para Assuntos Estudantis',
      organization: 'Universidade Federal de Uberlândia',
      period: '2017 - 2025',
      achievements: [
        'Trabalho na PROEXC (Pró-reitoria de Extensão e Cultura)',
        'Atuação na PROAE (Pró-reitoria de Assistência Estudantil)',
        'Coordenação da ASAES (Assessoria Administrativa da PROAE)',
        'Desenvolvimento de políticas estudantis'
      ],
      impact: 'Liderança Estratégica'
    },
    {
      position: 'Coordenador do Programa de Pós-graduação em Engenharia Química',
      organization: 'FEQUI/UFU',
      period: '2010 - 2012',
      achievements: [
        'Coordenação de programa de pós-graduação conceito CAPES 5',
        'Gestão de mais de 100 estudantes de mestrado e doutorado',
        'Implementação de melhorias curriculares',
        'Fortalecimento da pesquisa e extensão'
      ],
      impact: 'Excelência Acadêmica'
    },
    {
      position: 'Membro do Conselho Universitário',
      organization: 'UFU',
      period: '2010 - 2012',
      achievements: [
        'Participação em decisões estratégicas da universidade',
        'Representação da comunidade acadêmica',
        'Contribuição para políticas institucionais',
        'Assessoria em planejamento universitário'
      ],
      impact: 'Governança Universitária'
    }
  ];

  const additionalRoles = [
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

  const leadershipPhilosophy = [
    {
      icon: Users,
      title: 'Liderança Colaborativa',
      description: 'Construção de equipes inclusivas que aproveitam perspectivas e expertises diversas'
    },
    {
      icon: Target,
      title: 'Orientado por Visão',
      description: 'Estabelecimento de metas claras e inspiração de outros para alcançar objetivos ambiciosos'
    },
    {
      icon: TrendingUp,
      title: 'Melhoria Contínua',
      description: 'Promoção da inovação e adaptação em ambientes em rápida mudança'
    },
    {
      icon: Crown,
      title: 'Base Ética',
      description: 'Liderança com integridade e compromisso com a ética acadêmica e profissional'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            Liderança
          </h1>
          <p className="text-lg text-ufu-blue">
            Experiência em liderança acadêmica e profissional promovendo inovação e excelência
          </p>
        </div>

        {/* Leadership Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            Filosofia de Liderança
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPhilosophy.map((principle, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-ufu-navy rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-ufu-light" />
                </div>
                <h3 className="text-lg font-semibold text-ufu-navy mb-2">
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
        <div className="grid gap-8 mb-12">
          {leadershipRoles.map((role, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-ufu-navy mb-2">
                    {role.position}
                  </h3>
                  <p className="text-ufu-blue font-medium mb-1">
                    {role.organization}
                  </p>
                  <Badge variant="outline">{role.period}</Badge>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  {role.impact}
                </Badge>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-ufu-navy mb-3">
                  Principais Realizações
                </h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-ufu-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Roles */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            Outras Posições de Liderança
          </h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {additionalRoles.map((role, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ufu-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{role}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Current Initiatives */}
        <div className="p-6 bg-ufu-light rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-4">
            Iniciativas Atuais de Liderança
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">
                Projeto Proteger-se
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Coordenação geral de projeto de extensão com mais de 7.000 pessoas atendidas
              </p>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Em Andamento
              </Badge>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">
                Qualidade de Vida Estudantil
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Desenvolvimento de políticas e programas de bem-estar estudantil
              </p>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Ativo
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
