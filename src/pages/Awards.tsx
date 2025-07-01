
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy, ExternalLink, Medal, Star } from 'lucide-react';

const Awards = () => {
  const { t } = useLanguage();

  const awards = [
    {
      year: '2024',
      title: t('language') === 'pt' ? 'Poster Destaque no III PSE-BR' :
             t('language') === 'en' ? 'Outstanding Poster at III PSE-BR' :
             'Póster Destacado en III PSE-BR',
      organization: 'Process Systems Engineering Brasil',
      description: t('language') === 'pt' ? 'Reconhecimento por pesquisa de destaque em engenharia de sistemas de processos' : 
                   t('language') === 'en' ? 'Recognition for outstanding research in process systems engineering' :
                   'Reconocimiento por investigación destacada en ingeniería de sistemas de procesos',
      type: 'research',
      location: 'São Paulo'
    },
    {
      year: '2022',
      title: t('language') === 'pt' ? '1º Lugar Dissertação de Mestrado FEELT' :
             t('language') === 'en' ? '1st Place Master\'s Dissertation FEELT' :
             '1er Lugar Tesis de Maestría FEELT',
      organization: t('language') === 'pt' ? 'Faculdade de Engenharia Elétrica - UFU' :
                    t('language') === 'en' ? 'Faculty of Electrical Engineering - UFU' :
                    'Facultad de Ingeniería Eléctrica - UFU',
      description: t('language') === 'pt' ? 'Orientação premiada: "Controle tolerante de quadricópteros em cenários com falhas em atuadores e sensores" - Autor: Kenji Fabiano Ávila Okada' :
                   t('language') === 'en' ? 'Award-winning supervision: "Fault-tolerant control of quadcopters in scenarios with actuator and sensor failures" - Author: Kenji Fabiano Ávila Okada' :
                   'Supervisión premiada: "Control tolerante a fallas de cuadricópteros en escenarios con fallas en actuadores y sensores" - Autor: Kenji Fabiano Ávila Okada',
      type: 'teaching',
      link: 'https://repositorio.ufu.br/handle/123456789/34929',
      details: t('language') === 'pt' ? 'Orientador: Prof. Dr. Aniel Silva de Morais, Coorientador: Prof. Dr. Luís Cláudio Oliveira Lopes' :
               t('language') === 'en' ? 'Supervisor: Prof. Dr. Aniel Silva de Morais, Co-supervisor: Prof. Dr. Luís Cláudio Oliveira Lopes' :
               'Supervisor: Prof. Dr. Aniel Silva de Morais, Co-supervisor: Prof. Dr. Luís Cláudio Oliveira Lopes'
    },
    {
      year: '1997',
      title: 'Phi Beta Delta Honor for International Scholars, Beta Pi Chapter of Phi Beta Delta LU (E.U.A.)',
      organization: 'Lehigh University',
      description: t('language') === 'pt' ? 'Honra internacional para acadêmicos destacados' :
                   t('language') === 'en' ? 'International honor for outstanding scholars' :
                   'Honor internacional para académicos destacados',
      type: 'research',
      link: 'https://www2.lehigh.edu/'
    },
    {
      year: '1997',
      title: t('language') === 'pt' ? 'Prêmio - Outstanding Performance in the Qualifying/General Examination' :
             t('language') === 'en' ? 'Outstanding Performance in the Qualifying/General Examination' :
             'Premio - Desempeño Excepcional en el Examen de Calificación/General',
      organization: t('language') === 'pt' ? 'Chemical Engineering Department at LU (E.U.A.)' :
                    t('language') === 'en' ? 'Chemical Engineering Department at LU (USA)' :
                    'Departamento de Ingeniería Química at LU (EE.UU.)',
      description: t('language') === 'pt' ? 'Desempenho excepcional no exame de qualificação geral' :
                   t('language') === 'en' ? 'Outstanding performance in the qualifying/general examination' :
                   'Desempeño excepcional en el examen de calificación general',
      type: 'research'
    },
    {
      year: '2012',
      title: t('language') === 'pt' ? 'Prêmio Chemtech de Incentivo à Pesquisa' :
             t('language') === 'en' ? 'Chemtech Research Incentive Award' :
             'Premio Chemtech de Incentivo a la Investigación',
      organization: 'ABEQ - Chemtech',
      description: t('language') === 'pt' ? 'Reconhecimento em Simulação, Otimização e Controle de Processos' :
                   t('language') === 'en' ? 'Recognition in Simulation, Optimization and Process Control' :
                   'Reconocimiento en Simulación, Optimización y Control de Procesos',
      type: 'research'
    },
    {
      year: '2007',
      title: t('language') === 'pt' ? 'Artigo de Destaque V SNCA' :
             t('language') === 'en' ? 'Outstanding Article V SNCA' :
             'Artículo Destacado V SNCA',
      organization: 'AINST-IEEE-UFBA',
      description: t('language') === 'pt' ? 'Artigo destacado no V Seminário Nacional de Controle e Automação' :
                   t('language') === 'en' ? 'Featured article at the V National Seminar on Control and Automation' :
                   'Artículo destacado en el V Seminario Nacional de Control y Automatización',
      type: 'research'
    },
    {
      year: '2003',
      title: t('language') === 'pt' ? '2º Melhor Artigo do III Seminário Nacional' :
             t('language') === 'en' ? '2nd Best Paper of the III National Seminar' :
             '2do Mejor Artículo del III Seminario Nacional',
      organization: 'AINST, IEEE e UFBA',
      description: t('language') === 'pt' ? 'Segundo melhor artigo do III Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações' :
                   t('language') === 'en' ? 'Second best paper of the III National Seminar on Industrial, Electrical and Telecommunications Control and Automation' :
                   'Segundo mejor artículo del III Seminario Nacional de Control y Automatización Industrial, Eléctrica y de Telecomunicaciones',
      type: 'research'
    }
  ];

  const recognitions = [
    {
      title: t('editorialWork'),
      items: [
        {
          journal: 'Brazilian Journal of Chemical Engineering',
          role: t('associateEditor'),
          period: '2009 - 2013'
        },
        {
          journal: 'Ciência & Engenharia',
          role: t('editor'),
          period: '15+ ' + (t('language') === 'pt' ? 'anos' : t('language') === 'en' ? 'years' : 'años') + ' - ' + t('current')
        }
      ]
    },
    {
      title: t('language') === 'pt' ? 'Revisor Ad Hoc' :
             t('language') === 'en' ? 'Ad Hoc Reviewer' :
             'Revisor Ad Hoc',
      organization: 'Chemical Engineering Science, Industrial & Engineering Chemistry Research',
      period: '2015 - ' + (t('language') === 'pt' ? 'presente' : t('language') === 'en' ? 'present' : 'presente'),
      description: t('language') === 'pt' ? 'Revisor de artigos científicos em periódicos internacionais de alto impacto' :
                   t('language') === 'en' ? 'Reviewer of scientific articles in high-impact international journals' :
                   'Revisor de artículos científicos en revistas internacionales de alto impacto'
    },
    {
      title: t('language') === 'pt' ? 'Professor Homenageado Formandos Engenharia Química UFU' :
             t('language') === 'en' ? 'Honored Professor Chemical Engineering Graduates UFU' :
             'Profesor Homenajeado Graduados Ingeniería Química UFU',
      organization: 'UFU',
      period: '1993-1, 1993-2, 1995',
      description: t('language') === 'pt' ? 'Reconhecimento pelos formandos de Engenharia Química' :
                   t('language') === 'en' ? 'Recognition by Chemical Engineering graduates' :
                   'Reconocimiento por los graduados de Ingeniería Química'
    },
    {
      title: t('language') === 'pt' ? 'Professor Paraninfo Formandos Engenharia Química UFU' :
             t('language') === 'en' ? 'Graduation Speaker Chemical Engineering UFU' :
             'Profesor Padrino Graduados Ingeniería Química UFU',
      organization: 'UFU',
      period: '1994, 1995, 2005',
      description: t('language') === 'pt' ? 'Escolhido como paraninfo pelos formandos de Engenharia Química' :
                   t('language') === 'en' ? 'Chosen as graduation speaker by Chemical Engineering graduates' :
                   'Elegido como padrino por los graduados de Ingeniería Química'
    },
    {
      title: t('language') === 'pt' ? 'Membro de Comitê Científico' :
             t('language') === 'en' ? 'Scientific Committee Member' :
             'Miembro del Comité Científico',
      organization: 'COBEQ, ENBEQ, PSE',
      period: '2010 - ' + (t('language') === 'pt' ? 'presente' : t('language') === 'en' ? 'present' : 'presente'),
      description: t('language') === 'pt' ? 'Participação em comitês científicos de congressos nacionais e internacionais' :
                   t('language') === 'en' ? 'Participation in scientific committees of national and international conferences' :
                   'Participación en comités científicos de congresos nacionales e internacionales'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'teaching':
        return <Award className="h-5 w-5" />;
      case 'research':
        return <Trophy className="h-5 w-5" />;
      case 'fellowship':
        return <Medal className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'teaching':
        return 'bg-ufu-blue';
      case 'research':
        return 'bg-ufu-navy';
      case 'fellowship':
        return 'bg-ufu-teal';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('awardsTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('awardsSubtitle')}
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {t('awardsAndDistinctions')}
          </h2>
          <div className="grid gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${getTypeColor(award.type)} rounded-lg flex items-center justify-center text-white`}>
                    {getTypeIcon(award.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-ufu-navy">
                        {award.title}
                      </h3>
                      <Badge variant="outline">{award.year}</Badge>
                      {award.location && (
                        <Badge variant="secondary">{award.location}</Badge>
                      )}
                    </div>
                    
                    <p className="text-ufu-blue font-medium mb-2">
                      {award.organization}
                    </p>
                    
                    <p className="text-gray-600 mb-3">
                      {award.description}
                    </p>

                    {award.details && (
                      <p className="text-sm text-gray-500 mb-3">
                        {award.details}
                      </p>
                    )}

                    {award.link && (
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ufu-blue hover:text-ufu-navy text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {award.link.includes('repositorio.ufu.br') ? 
                          (t('language') === 'pt' ? 'Link para download' : 
                           t('language') === 'en' ? 'Download link' : 
                           'Enlace de descarga') : 
                          (t('language') === 'pt' ? 'Visitar Site' :
                           t('language') === 'en' ? 'Visit Site' :
                           'Visitar Sitio')}
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognitions Section */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {t('recognitionsAndServices')}
          </h2>
          <div className="grid gap-6">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ufu-teal rounded-lg flex items-center justify-center text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ufu-navy mb-3">
                      {recognition.title}
                    </h3>
                    
                    {recognition.items ? (
                      <div className="space-y-3">
                        {recognition.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-2 border-ufu-blue pl-4">
                            <p className="text-ufu-blue font-medium">{item.journal}</p>
                            <p className="text-gray-600">{item.role} ({item.period})</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {recognition.period && (
                          <Badge variant="outline" className="mb-2">{recognition.period}</Badge>
                        )}
                        
                        {recognition.organization && (
                          <p className="text-ufu-blue font-medium mb-2">
                            {recognition.organization}
                          </p>
                        )}
                        
                        {recognition.description && (
                          <p className="text-gray-600">
                            {recognition.description}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Awards;
