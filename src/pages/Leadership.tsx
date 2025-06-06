
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
      position: t('deputyDirectorPosition') || 'Diretor Substituto da Diretoria de Qualidade de Vida (DIRVE)',
      organization: t('proaeOrganization') || 'Pró-reitoria de Assistência Estudantil - UFU',
      period: '2021 - 06/2025',
      achievements: [
        t('studentWelfareCoordination') || 'Coordenação de programas de qualidade de vida estudantil',
        t('wellnessPolicyImplementation') || 'Implementação de políticas de bem-estar',
        t('multidisciplinaryTeamManagement') || 'Gestão de equipes multidisciplinares',
        t('studentSupportProjectDevelopment') || 'Desenvolvimento de projetos de apoio estudantil'
      ],
      impact: t('administrativeManagement') || 'Gestão Administrativa'
    },
    {
      position: t('rectorAdvisorPosition') || 'Assessor do Reitor para Assuntos Estudantis',
      organization: t('ufuOrganization') || 'Universidade Federal de Uberlândia',
      period: '2017 - 2025',
      achievements: [
        t('proexcWork') || 'Trabalho na PROEXC (Pró-reitoria de Extensão e Cultura)',
        t('proaeWork') || 'Atuação na PROAE (Pró-reitoria de Assistência Estudantil)',
        t('asaesCoordination') || 'Coordenação da ASAES (Assessoria Administrativa da PROAE)',
        t('studentPolicyDevelopment') || 'Desenvolvimento de políticas estudantis'
      ],
      impact: t('strategicLeadership') || 'Liderança Estratégica'
    },
    {
      position: t('graduateProgramCoordinator') || 'Coordenador do Programa de Pós-graduação em Engenharia Química',
      organization: 'FEQUI/UFU',
      period: '2010 - 2012',
      achievements: [
        t('capesLevel5Coordination') || 'Coordenação de programa de pós-graduação conceito CAPES 5',
        t('studentManagement') || 'Gestão de mais de 100 estudantes de mestrado e doutorado',
        t('curricularImprovements') || 'Implementação de melhorias curriculares',
        t('researchExtensionStrengthening') || 'Fortalecimento da pesquisa e extensão'
      ],
      impact: t('academicExcellence') || 'Excelência Acadêmica'
    },
    {
      position: t('universityCouncilMember') || 'Membro do Conselho Universitário',
      organization: 'UFU',
      period: '2010 - 2012',
      achievements: [
        t('strategicDecisionParticipation') || 'Participação em decisões estratégicas da universidade',
        t('academicCommunityRepresentation') || 'Representação da comunidade acadêmica',
        t('institutionalPolicyContribution') || 'Contribuição para políticas institucionais',
        t('universityPlanningAdvice') || 'Assessoria em planejamento universitário'
      ],
      impact: t('universityGovernance') || 'Governança Universitária'
    }
  ];

  const additionalRoles = [
    t('chemicalEngineeringGroupCoordinator') || 'Coordenador do Grupo IV do Departamento de Engenharia Química',
    t('inepMecCommissionMember') || 'Membro de Comissão do INEP/MEC para autorização de funcionamento de Cursos',
    t('facultyCouncilRepresentative') || 'Representante docente no conselho da Faculdade de Engenharia Química (2001-2002)',
    t('researchCouncilMember') || 'Membro do Conselho de Pesquisa e Pós-graduação (2010-2012)',
    t('fequiDirectorSubstitute') || 'Substituto diretor da FEQUI no Conselho Diretor da UFU (2001-2005)',
    t('ndePresident') || 'Presidente do Núcleo Docente Estruturante (NDE) do Curso de Engenharia Química',
    t('nucopCoordinator') || 'Coordenador do NUCOP (Núcleo de Modelagem, Controle e Otimização de Processos) (2005-2009)',
    t('fequiAdministrativeAdvisor') || 'Assessor Administrativo da Faculdade de Engenharia Química (2001-2005)',
    t('copsiaCommissionMember') || 'Membro da COPSIA - Comissão Permanente de Sindicância e Inquérito Administrativo (2022-2023)'
  ];

  const leadershipPhilosophy = [
    {
      icon: Users,
      title: t('collaborativeLeadership') || 'Liderança Colaborativa',
      description: t('collaborativeLeadershipDesc') || 'Construção de equipes inclusivas que aproveitam perspectivas e expertises diversas'
    },
    {
      icon: Target,
      title: t('visionDriven') || 'Orientado por Visão',
      description: t('visionDrivenDesc') || 'Estabelecimento de metas claras e inspiração de outros para alcançar objetivos ambiciosos'
    },
    {
      icon: TrendingUp,
      title: t('continuousImprovement') || 'Melhoria Contínua',
      description: t('continuousImprovementDesc') || 'Promoção da inovação e adaptação em ambientes em rápida mudança'
    },
    {
      icon: Crown,
      title: t('ethicalFoundation') || 'Base Ética',
      description: t('ethicalFoundationDesc') || 'Liderança com integridade e compromisso com a ética acadêmica e profissional'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('leadershipTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('leadershipSubtitle')}
          </p>
        </div>

        {/* Leadership Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {t('leadershipPhilosophy') || 'Filosofia de Liderança'}
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
                  {t('mainAchievements') || 'Principais Realizações'}
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
            {t('otherLeadershipPositions') || 'Outras Posições de Liderança'}
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
            {t('currentLeadershipInitiatives') || 'Iniciativas Atuais de Liderança'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">
                {t('protegerseProject') || 'Projeto Proteger-se'}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('protegerseProjectDesc') || 'Coordenação geral de projeto de extensão com mais de 7.000 pessoas atendidas'}
              </p>
              <Badge variant="outline" className="text-green-600 border-green-600">
                {t('ongoing') || 'Em Andamento'}
              </Badge>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-ufu-navy mb-2">
                {t('studentWellnessProgram') || 'Qualidade de Vida Estudantil'}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {t('studentWellnessProgramDesc') || 'Desenvolvimento de políticas e programas de bem-estar estudantil'}
              </p>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                {t('active') || 'Ativo'}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Leadership;
