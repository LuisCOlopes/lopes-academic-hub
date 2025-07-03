
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy, ExternalLink, Medal, Star } from 'lucide-react';

const Awards = () => {
  const { t, language } = useLanguage();

  const getPageTitle = () => {
    switch (language) {
      case 'pt': return 'Prêmios e Reconhecimentos';
      case 'en': return 'Awards and Recognitions';
      case 'es': return 'Premios y Reconocimientos';
      default: return 'Prêmios e Reconhecimentos';
    }
  };

  const getPageSubtitle = () => {
    switch (language) {
      case 'pt': return 'Reconhecimento pela excelência em pesquisa, ensino e serviços acadêmicos';
      case 'en': return 'Acknowledgment for excellence in research, teaching, and academic service';
      case 'es': return 'Reconocimiento por excelencia en investigación, docencia y servicios académicos';
      default: return 'Reconhecimento pela excelência em pesquisa, ensino e serviços acadêmicos';
    }
  };

  const getAwardsTitle = () => {
    switch (language) {
      case 'pt': return 'Prêmios e Distinções';
      case 'en': return 'Honors and Distinctions';
      case 'es': return 'Premios y Distinciones';
      default: return 'Prêmios e Distinções';
    }
  };

  const getRecognitionsTitle = () => {
    switch (language) {
      case 'pt': return 'Reconhecimentos e Serviços Acadêmicos';
      case 'en': return 'Academic Recognition and Service';
      case 'es': return 'Reconocimientos y Servicios Académicos';
      default: return 'Reconhecimentos e Serviços Acadêmicos';
    }
  };

  const awards = [
    {
      year: '2024',
      title: language === 'pt' ? 'Pôster Destaque no III PSE-BR' :
             language === 'en' ? 'Outstanding Poster Award – III PSE-BR' :
             'Póster Destacado en el III PSE-BR',
      organization: 'Process Systems Engineering Brasil',
      description: language === 'pt' ? 'Reconhecimento por pesquisa destacada em engenharia de sistemas de processos' : 
                   language === 'en' ? 'Recognition for outstanding research in process systems engineering' :
                   'Reconocimiento por investigación destacada en ingeniería de sistemas de procesos',
      type: 'research',
      location: 'São Paulo'
    },
    {
      year: '2022',
      title: language === 'pt' ? '1º Lugar – Tese de Mestrado FEELT' :
             language === 'en' ? '1st Place – Master\'s Thesis – FEELT' :
             '1er Lugar – Tesis de Maestría – FEELT',
      organization: language === 'pt' ? 'Faculdade de Engenharia Elétrica – UFU' :
                    language === 'en' ? 'School of Electrical Engineering – UFU' :
                    'Facultad de Ingeniería Eléctrica – UFU',
      description: language === 'pt' ? 'Supervisão premiada: "Controle tolerante a falhas de quadricópteros em cenários com falhas em atuadores e sensores"' :
                   language === 'en' ? 'Awarded supervision: "Controle tolerante a falhas de quadricópteros em cenários com falhas em atuadores e sensores" (Fault-tolerant control of quadcopters under actuator and sensor fault scenarios)' :
                   'Supervisión premiada: "Control tolerante a fallas de cuadricópteros en escenarios con fallas en actuadores y sensores" (Controle tolerante a falhas de quadricópteros em cenários com falhas em atuadores e sensores)',
      type: 'teaching',
      link: 'https://repositorio.ufu.br/handle/123456789/34929',
      details: 'Autor: Kenji Fabiano Ávila Okada\nSupervisor: Prof. Dr. Aniel Silva de Morais\nCo-supervisor: Prof. Dr. Luís Cláudio Oliveira Lopes'
    },
    {
      year: '1997',
      title: language === 'pt' ? 'Phi Beta Delta – Honra Internacional para Pesquisadores Internacionais' :
             language === 'en' ? 'Phi Beta Delta – Honor for International Scholars' :
             'Phi Beta Delta – Honor Internacional para Académicos',
      organization: language === 'pt' ? 'Capítulo Beta Pi – Lehigh University (EUA)' :
                    language === 'en' ? 'Beta Pi Chapter – Lehigh University (USA)' :
                    'Capítulo Beta Pi – Lehigh University (EE.UU.)',
      description: language === 'pt' ? 'Reconhecimento internacional por excelência acadêmica' :
                   language === 'en' ? 'International recognition for outstanding scholarship' :
                   'Reconocimiento internacional por logros académicos destacados',
      type: 'research',
      link: 'https://www2.lehigh.edu/'
    },
    {
      year: '1997',
      title: language === 'pt' ? 'Prêmio – Desempenho Excepcional no Exame de Qualificação Geral' :
             language === 'en' ? 'Award – Outstanding Performance in Qualifying/General Examination' :
             'Premio – Desempeño Excepcional en el Examen de Calificación General',
      organization: language === 'pt' ? 'Departamento de Engenharia Química – Lehigh University (EUA)' :
                    language === 'en' ? 'Department of Chemical Engineering – Lehigh University (USA)' :
                    'Departamento de Ingeniería Química – Lehigh University (EE.UU.)',
      description: language === 'pt' ? 'Reconhecimento por desempenho excepcional no exame de qualificação' :
                   language === 'en' ? 'Award for outstanding performance in the general qualifying exam' :
                   'Reconocimiento por desempeño sobresaliente en el examen de calificación',
      type: 'research'
    },
    {
      year: '2012',
      title: language === 'pt' ? 'Prêmio Chemtech de Incentivo à Pesquisa' :
             language === 'en' ? 'Chemtech Research Incentive Award' :
             'Premio Chemtech de Incentivo a la Investigación',
      organization: 'ABEQ – Chemtech',
      description: language === 'pt' ? 'Reconhecimento em Simulação, Otimização e Controle de Processos' :
                   language === 'en' ? 'Recognition in Process Simulation, Optimization, and Control' :
                   'Reconocimiento en Simulación, Optimización y Control de Procesos',
      type: 'research'
    },
    {
      year: '2007',
      title: language === 'pt' ? 'Artigo Destaque no V SNCA' :
             language === 'en' ? 'Highlighted Article – V SNCA' :
             'Artículo Destacado – V SNCA',
      organization: 'AINST – IEEE – UFBA',
      description: language === 'pt' ? 'Destaque no V Seminário Nacional de Controle e Automação' :
                   language === 'en' ? 'Featured paper at the V Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações' :
                   'Artículo destacado en el V Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      type: 'research'
    },
    {
      year: '2003',
      title: language === 'pt' ? '2º Melhor Artigo – III Seminário Nacional' :
             language === 'en' ? '2nd Best Paper – III Seminário Nacional' :
             '2do Mejor Artículo – III Seminario Nacional',
      organization: 'AINST – IEEE – UFBA',
      description: language === 'pt' ? 'Segundo melhor artigo do III Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações' :
                   language === 'en' ? 'Second-best paper at the III Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações' :
                   'Segundo mejor artículo del III Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      type: 'research'
    }
  ];

  const recognitions = [
    {
      title: language === 'pt' ? 'Editor de Periódicos' :
             language === 'en' ? 'Journal Editor' :
             'Editor de Revistas',
      items: [
        {
          journal: 'Brazilian Journal of Chemical Engineering',
          role: language === 'pt' ? 'Editor Associado' :
                language === 'en' ? 'Associate Editor' :
                'Editor Asociado',
          period: '2009–2013'
        },
        {
          journal: 'Ciência & Engenharia',
          role: language === 'pt' ? 'Editor' :
                language === 'en' ? 'Editor' :
                'Editor',
          period: language === 'pt' ? '15+ anos – Atual' :
                  language === 'en' ? '15+ years – Present' :
                  'más de 15 años – Actual'
        }
      ]
    },
    {
      title: language === 'pt' ? 'Revisor Ad Hoc' :
             language === 'en' ? 'Ad Hoc Reviewer' :
             'Revisor Ad Hoc',
      organization: language === 'pt' ? 'Revistas: Chemical Engineering Science, Industrial & Engineering Chemistry Research, Automatica, Computers & Chemical Engineering, Journal of Process Control, AIChE Journal, Journal of Dynamic Systems, Measurement, and Control, etc.' :
                    language === 'en' ? 'Journals: Chemical Engineering Science, Industrial & Engineering Chemistry Research, Automatica, Computers & Chemical Engineering, Journal of Process Control, AIChE Journal, Journal of Dynamic Systems, Measurement, and Control, etc.' :
                    'Revistas: Chemical Engineering Science, Industrial & Engineering Chemistry Research, Automatica, Computers & Chemical Engineering, Journal of Process Control, AIChE Journal, Journal of Dynamic Systems, Measurement, and Control, etc.',
      period: language === 'pt' ? '2015 – presente' :
              language === 'en' ? '2015 – present' :
              '2015 – presente',
      description: language === 'pt' ? 'Revisor de artigos científicos em revistas internacionais de alto impacto' :
                   language === 'en' ? 'Reviewer for high-impact international scientific journals' :
                   'Revisor de artículos científicos en revistas internacionales de alto impacto'
    },
    {
      title: language === 'pt' ? 'Professor Homenageado – Formandos de Engenharia Química – UFU' :
             language === 'en' ? 'Honored Professor – Chemical Engineering Graduates – UFU' :
             'Profesor Homenajeado – Graduados de Ingeniería Química – UFU',
      period: '1993-1, 1993-2, 1995'
    },
    {
      title: language === 'pt' ? 'Professor Padrinho – Formandos de Engenharia Química – UFU' :
             language === 'en' ? 'Patron Professor – Chemical Engineering Graduates – UFU' :
             'Profesor Padrino – Graduados de Ingeniería Química – UFU',
      period: '1994, 1995, 2005'
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

  const getLinkText = (url: string) => {
    if (url.includes('repositorio.ufu.br')) {
      return language === 'pt' ? 'Download' :
             language === 'en' ? 'Download' :
             'Descarga';
    }
    return language === 'pt' ? 'Visitar' :
           language === 'en' ? 'Visit' :
           'Visitar';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-lg text-ufu-blue">
            {getPageSubtitle()}
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {getAwardsTitle()}
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
                      <div className="text-sm text-gray-500 mb-3 whitespace-pre-line">
                        {award.details}
                      </div>
                    )}

                    {award.link && (
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ufu-blue hover:text-ufu-navy text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {getLinkText(award.link)}
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
            {getRecognitionsTitle()}
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
