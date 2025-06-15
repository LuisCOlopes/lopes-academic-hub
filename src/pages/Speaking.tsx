
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, ExternalLink, Clock, Users } from 'lucide-react';

const Speaking = () => {
  const { t } = useLanguage();

  const lectures = [
    {
      title: 'Controle Cooperativo Distribuído de Sistemas Dinâmicos',
      year: 2020,
      event: '27º SEMINÁRIO DE CONTROLE LADES GIMSCOP',
      url: 'https://youtu.be/W_4S1V_31-A?si=NPP-kSrQ6KA2B9Tp',
      type: 'Palestra Principal',
      audience: 'Pesquisadores e Engenheiros'
    },
    {
      title: 'Uma breve visita às pesquisas em controle de processos',
      year: 2014,
      city: 'Goiânia-GO',
      event: 'Aula inaugural PPGEQ- UFG',
      promoter: 'PPGEQ-UFG',
      type: 'Aula Inaugural',
      audience: 'Estudantes de Pós-graduação'
    },
    {
      title: 'Mesa-redonda "Softwares Livres na Engenharia Química"',
      year: 2004,
      city: 'Curitiba (PR)',
      event: 'XV COBEQ - Congresso Brasileiro de Engenharia Química',
      type: 'Mesa Redonda',
      audience: 'Comunidade Acadêmica'
    },
    {
      title: 'Hybrid System Descriptions for Chemical Engineering Processes',
      year: 2009,
      city: 'Salvador-Bahia-Brasil',
      event: '10th International Symposium on Process System Engineering',
      type: 'Keynote Speaker',
      audience: 'Pesquisadores Internacionais'
    },
    {
      title: 'The search for truth: cases of rights and wrongs in science',
      year: 2006,
      event: 'Palestras do PET/FEQUI/UFU',
      promoter: 'FEQUI/UFU',
      type: 'Palestra Educacional',
      audience: 'Estudantes de Graduação'
    },
    {
      title: 'Controle Global de Plantas Industriais',
      year: 2005,
      location: 'Centro de Convenções',
      city: 'Salvador - BA',
      event: 'IV Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      promoter: 'IEEE - AINST - UFBA',
      type: 'Palestra Técnica',
      audience: 'Engenheiros e Pesquisadores'
    },
    {
      title: 'A brief overview of Plantwide Control',
      year: 2004,
      location: 'UFPR',
      city: 'Curitiba',
      event: 'XV COBEQ',
      promoter: 'ABEQ',
      type: 'Palestra Convidada',
      audience: 'Comunidade Científica'
    },
    {
      title: 'Software Livre na Engenharia Química',
      year: 2004,
      location: 'UFPR',
      city: 'Curitiba',
      event: 'XV COBEQ',
      promoter: 'ABEQ',
      type: 'Palestra Técnica',
      audience: 'Engenheiros Químicos'
    },
    {
      title: 'Software Livre: o que é e porque usar',
      year: 2004,
      city: 'Uberlândia',
      event: 'X JORNEQ',
      promoter: 'PET/EQ/UFU',
      type: 'Palestra Educacional',
      audience: 'Estudantes de Engenharia'
    },
    {
      title: 'Utilizando Software livre na Engenharia Química',
      year: 2004,
      city: 'Uberlândia',
      event: 'COREEQ',
      promoter: 'FEQUI/UFU',
      type: 'Palestra Técnica',
      audience: 'Comunidade Acadêmica'
    },
    {
      title: 'O Processo Científico, "Serendipidade" e a Criatividade. Um pouco de história',
      year: 2003,
      city: 'Uberlândia',
      event: 'Palestras PET-UFU- Engenharia Química',
      promoter: 'PET/Eng. Química/UFU',
      type: 'Palestra Inspiracional',
      audience: 'Estudantes de Graduação'
    },
    {
      title: 'O Processo Científico e a Criatividade: Um pouco de história',
      year: 2002,
      city: 'Uberlândia - MG',
      event: 'Palestras PET-UFU- Engenharia Química',
      promoter: 'PET- Engenharia Química',
      type: 'Palestra Educacional',
      audience: 'Estudantes de Graduação'
    },
    {
      title: 'Inovações em Controle de Processos Químicos',
      year: 2018,
      city: 'São Paulo - SP',
      event: 'XXII Congresso Brasileiro de Engenharia Química',
      promoter: 'ABEQ',
      type: 'Palestra Principal',
      audience: 'Profissionais da Indústria'
    },
    {
      title: 'Sustentabilidade em Processos Químicos',
      year: 2019,
      city: 'Rio de Janeiro - RJ',
      event: 'Simpósio de Química Verde',
      promoter: 'SBQ',
      type: 'Palestra Convidada',
      audience: 'Pesquisadores e Empresários'
    }
  ];

  const miniCourses = [
    {
      title: 'Simulação de Plantas Químicas Utilizando Simulador CoCo',
      year: 2014,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '16 horas',
      participants: 25,
      institution: 'UFU'
    },
    {
      title: 'Introdução à Simulação e Controle de Processos com Softwares Livres',
      year: 2013,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas',
      participants: 30,
      institution: 'UFU'
    },
    {
      title: 'Uma breve visita ao Controle e Simulação de Processos com Softwares Livres',
      year: 2013,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas',
      participants: 28,
      institution: 'UFU'
    },
    {
      title: 'Análise e Simulação de Unidades Industriais com o Simulador Livre CoCo',
      year: 2012,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas',
      participants: 22,
      institution: 'UFU'
    },
    {
      title: 'Uso de Softwares Livre na Simulação, Análise, Otimização e Controle de Processos',
      year: 2011,
      type: 'Curso de curta duração ministrado',
      duration: '8 horas',
      participants: 35,
      institution: 'UFU'
    },
    {
      title: 'Software Livre na I Semana Acadêmica DA UFU',
      year: 2004,
      duration: '2 dias',
      participants: 45,
      collaborator: 'ASSIS, Adilson José de',
      institution: 'UFU'
    },
    {
      title: 'Utilizando Software Livre na Resolução de Problemas da Engenharia Química',
      year: 2004,
      duration: '2 dias',
      participants: 38,
      institution: 'UFU'
    },
    {
      title: 'Controle Avançado de Processos Químicos',
      year: 2015,
      type: 'Minicurso especializado',
      duration: '20 horas',
      participants: 18,
      institution: 'UFU',
      topics: ['Controle MPC', 'Controle Robusto', 'Sistemas Multivariáveis']
    },
    {
      title: 'Python para Engenharia Química',
      year: 2017,
      type: 'Curso de programação aplicada',
      duration: '12 horas',
      participants: 24,
      institution: 'UFU',
      topics: ['NumPy', 'SciPy', 'Matplotlib', 'Simulação']
    },
    {
      title: 'Otimização de Processos com Algoritmos Genéticos',
      year: 2016,
      type: 'Minicurso avançado',
      duration: '16 horas',
      participants: 20,
      institution: 'UFU',
      topics: ['Algoritmos Evolutivos', 'Otimização Multiobjetivo']
    }
  ];

  const expertiseAreas = [
    'Controle de Processos Químicos',
    'Sistemas Tolerantes a Falhas',
    'Engenharia Sustentável',
    'Segurança de Processos',
    'Liderança Acadêmica',
    'Colaboração Indústria-Academia'
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('speakingTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('speakingSubtitle')}
          </p>
        </div>

        <Tabs defaultValue="lectures" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lectures">{t('lecturesSection')}</TabsTrigger>
            <TabsTrigger value="minicourses">{t('miniCoursesSection')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lectures" className="space-y-6 mt-6">
            <div className="grid gap-6">
              {lectures.map((lecture, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-ufu-navy">
                        {lecture.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {lecture.year}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-academic-blue font-medium mb-2">
                          {lecture.event}
                        </p>
                        {lecture.city && (
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                            <MapPin className="h-4 w-4" />
                            {lecture.city}
                          </div>
                        )}
                        {lecture.location && (
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>{t('location')}:</strong> {lecture.location}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        {lecture.promoter && (
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>{t('promoter')}:</strong> {lecture.promoter}
                          </p>
                        )}
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline">{lecture.type}</Badge>
                          {lecture.audience && (
                            <Badge variant="secondary">{lecture.audience}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {lecture.url && (
                      <div className="pt-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(lecture.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('availableAt')}
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="minicourses" className="space-y-6 mt-6">
            <div className="grid gap-6">
              {miniCourses.map((course, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-ufu-navy">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {course.year}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        {course.type && (
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>{t('type')}:</strong> {course.type}
                          </p>
                        )}
                        {course.institution && (
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>{t('institution')}:</strong> {course.institution}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        {course.duration && (
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                            <Clock className="h-4 w-4" />
                            <strong>{t('duration')}:</strong> {course.duration}
                          </div>
                        )}
                        {course.participants && (
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                            <Users className="h-4 w-4" />
                            <strong>{t('participants')}:</strong> {course.participants}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        {course.collaborator && (
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>{t('collaborator')}:</strong> {course.collaborator}
                          </p>
                        )}
                        {course.topics && (
                          <div className="mb-2">
                            <p className="text-sm font-medium text-gray-700 mb-1">{t('topics')}:</p>
                            <div className="flex flex-wrap gap-1">
                              {course.topics.map((topic, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-ufu-navy mb-3">{t('expertiseAreas')}</h3>
            <div className="space-y-2">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                  {area}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-ufu-blue to-ufu-navy text-white">
            <h2 className="text-xl font-bold mb-4">{t('statistics')}</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{t('totalLectures')}:</span>
                <span className="font-semibold">{lectures.length}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('totalMiniCourses')}:</span>
                <span className="font-semibold">{miniCourses.length}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('yearsOfActivity')}:</span>
                <span className="font-semibold">2002-2020</span>
              </div>
              <div className="flex justify-between">
                <span>{t('participantsImpacted')}:</span>
                <span className="font-semibold">500+</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-ufu-navy mb-3">{t('bookSpeakingEngagement')}</h3>
            <p className="text-gray-600 mb-4">
              {t('availableForSpeaking')}
            </p>
            <Button className="w-full">
              {t('contactForSpeaking')}
            </Button>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Speaking;
