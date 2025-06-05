
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';

const SpeakingWorkshops = () => {
  const { t } = useLanguage();

  const lectures = [
    {
      title: 'Controle Cooperativo Distribuído de Sistemas Dinâmicos',
      year: 2020,
      event: '27º SEMINÁRIO DE CONTROLE LADES GIMSCOP',
      url: 'https://youtu.be/W_4S1V_31-A?si=U-U2xrbX407LyYPH'
    },
    {
      title: 'Uma breve visita às pesquisas em controle de processos',
      year: 2014,
      city: 'Goiania-GO',
      event: 'Aula inaugural PPGEQ- UFG',
      promoter: 'PPGEQ-UFG'
    },
    {
      title: 'Mesa-redonda "Softwares Livres na Engenharia Química"',
      year: 2004,
      city: 'Curitiba (PR)',
      event: 'XV COBEQ - Congresso Brasileiro de Engenharia Química'
    },
    {
      title: 'Hybrid System Descriptions for Chemical Engineering Processes',
      year: 2009,
      city: 'Salvador-Bahia-Brasil',
      event: '10th International Symposium on Process System Engineering',
      type: 'Keynote Speaker'
    },
    {
      title: 'The search for truth: cases of rights and wrongs in science',
      year: 2006,
      event: 'Palestras do PET/FEQUI/UFU',
      promoter: 'FEQUI/UFU'
    },
    {
      title: 'Controle Global de Plantas Industriais',
      year: 2005,
      location: 'Centro de Convenções',
      city: 'Salvador - BA',
      event: 'IV Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      promoter: 'IEEE - AINST - UFBA'
    },
    {
      title: 'A brief overview of Plantwide Control',
      year: 2004,
      location: 'UFPR',
      city: 'Curitiba',
      event: 'XV COBEQ',
      promoter: 'ABEQ'
    },
    {
      title: 'Software Livre na Engenharia Química',
      year: 2004,
      location: 'UFPR',
      city: 'Curitiba',
      event: 'XV COBEQ',
      promoter: 'ABEQ'
    },
    {
      title: 'Software Livre. o que é e porque usar',
      year: 2004,
      city: 'Uberlândia',
      event: 'X JORNEQ',
      promoter: 'PET/EQ/UFU'
    },
    {
      title: 'Utilizando Software livre na Engenharia Química',
      year: 2004,
      city: 'Uberlândia',
      event: 'COREEQ',
      promoter: 'FEQUI/UFU'
    },
    {
      title: 'O Processo Científico, "Serendipidade" e a Criatividade. Um pouco de história',
      year: 2003,
      city: 'Uberlândia',
      event: 'Palestras PET-UFU- Engenharia Química',
      promoter: 'PET/Eng. Química/UFU'
    },
    {
      title: 'O Processo Científico e a Criatividade: Um pouco de história',
      year: 2002,
      city: 'Uberlândia - MG',
      event: 'Palestras PET-UFU- Engenharia Química',
      promoter: 'PET- Engenharia Quimica'
    }
  ];

  const miniCourses = [
    {
      title: 'Simulação de Plantas Químicas Utilizando Simulador CoCo',
      year: 2014,
      type: 'Extensão, Curso de curta duração ministrado'
    },
    {
      title: 'Introdução à Simulação e Controle de Processos com Softwares Livres',
      year: 2013,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas'
    },
    {
      title: 'Uma breve visita ao Controle e Simulação de Processos com Softwares Livres',
      year: 2013,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas'
    },
    {
      title: 'Análise e Simulação de Unidades Industriais com o Simulador Livre CoCo',
      year: 2012,
      type: 'Extensão, Curso de curta duração ministrado',
      duration: '8 horas'
    },
    {
      title: 'Uso de Softwares Livre na Simulação, Análise, Otimização e Controle de Processos',
      year: 2011,
      type: 'Curso de curta duração ministrado',
      duration: '8 horas'
    },
    {
      title: 'Software Livre na I Semana Acadêmica DA UFU',
      year: 2004,
      duration: '2 dias',
      collaborator: 'ASSIS, Adilson José de'
    },
    {
      title: 'Utilizando Software Livre na Resolução de Problemas da Engenharia Química',
      year: 2004,
      duration: '2 dias'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('speakingWorkshopsTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('speakingWorkshopsSubtitle')}
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
                        {lecture.type && (
                          <Badge variant="outline">{lecture.type}</Badge>
                        )}
                      </div>
                    </div>
                    
                    {lecture.url && (
                      <div className="pt-2">
                        <Button size="sm" variant="outline">
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
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        {course.type && (
                          <p className="text-sm text-gray-600 mb-2">
                            {course.type}
                          </p>
                        )}
                        {course.collaborator && (
                          <p className="text-sm text-gray-600">
                            <strong>Com:</strong> {course.collaborator}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        {course.duration && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <strong>{t('duration')}:</strong> {course.duration}
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
      </div>
    </AcademicLayout>
  );
};

export default SpeakingWorkshops;
