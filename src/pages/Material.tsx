
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, BookOpen, Calendar, Clock } from 'lucide-react';

const Material = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: 'Simulação de Plantas Químicas Utilizando Simulador CoCo',
      year: '2014',
      type: 'Extensão',
      duration: 'Curso de curta duração',
      description: 'Curso focado no uso do simulador CoCo para modelagem e simulação de plantas químicas industriais.'
    },
    {
      title: 'Introdução à Simulação e Controle de Processos com Softwares Livres',
      year: '2013',
      type: 'Extensão',
      duration: '8 horas',
      description: 'Curso introdutório sobre ferramentas livres para simulação e controle de processos químicos.'
    },
    {
      title: 'Uma breve visita ao Controle e Simulação de Processos com Softwares Livres',
      year: '2013',
      type: 'Extensão',
      duration: '8 horas',
      description: 'Visão geral dos principais softwares livres disponíveis para engenharia química.'
    },
    {
      title: 'Análise e Simulação de Unidades Industriais com o Simulador Livre CoCo',
      year: '2012',
      type: 'Extensão',
      duration: '8 horas',
      description: 'Análise detalhada de unidades industriais utilizando ferramentas de simulação livres.'
    },
    {
      title: 'Uso de Softwares Livre na Simulação, Análise, Otimização e Controle de Processos',
      year: '2011',
      type: 'Curso de curta duração',
      duration: '8 horas',
      description: 'Abordagem integrada do uso de softwares livres em diversas áreas da engenharia química.'
    }
  ];

  const events = [
    {
      title: 'VIII Congresso Brasileiro de Engenharia Química Iniciação Científica',
      year: '2009',
      type: 'Participação em comissão organizadora',
      location: 'Uberlândia - MG',
      website: 'http://www.cobeqic2009.feq.ufu.br/index.php?id=15'
    },
    {
      title: 'Software Livre na I Semana Acadêmica DA UFU',
      year: '2004',
      type: 'Curso',
      duration: '2 dias'
    },
    {
      title: 'Utilizando Software Livre na Resolução de Problemas da Engenharia Química',
      year: '2004',
      type: 'Curso',
      duration: '2 dias',
      collaborator: 'ASSIS, Adilson José de'
    }
  ];

  const lectures = [
    {
      title: 'Controle Cooperativo Distribuído de Sistemas Dinâmicos',
      event: '27º SEMINÁRIO DE CONTROLE LADES GIMSCOP',
      year: '2020',
      videoUrl: 'https://youtu.be/W_4S1V_31-A?si=U-U2xrbX407LyYPH'
    },
    {
      title: 'Uma breve visita às pesquisas em controle de processos',
      event: 'Aula inaugural PPGEQ- UFG',
      year: '2014',
      location: 'Goiânia-GO',
      institution: 'PPGEQ-UFG'
    },
    {
      title: 'Hybrid System Descriptions for Chemical Engineering Processes',
      event: '10th International Symposium on Process System Engineering',
      year: '2009',
      location: 'Salvador-Bahia-Brasil',
      type: 'Keynote Speaker'
    },
    {
      title: 'Controle Global de Plantas Industriais',
      event: 'IV Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      year: '2005',
      location: 'Salvador - BA',
      institution: 'IEEE - AINST - UFBA'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Material Didático
          </h1>
          <p className="text-lg text-gray-600">
            Cursos, materiais e recursos educacionais desenvolvidos
          </p>
        </div>

        {/* Cursos de Extensão */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Cursos de Extensão
          </h2>
          <div className="grid gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{course.type}</Badge>
                      <Badge variant="secondary">{course.year}</Badge>
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Material
                    </Button>
                    <Button size="sm" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Eventos e Congressos */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Eventos e Congressos
          </h2>
          <div className="grid gap-4">
            {events.map((event, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.year}
                      </div>
                      {event.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.duration}
                        </div>
                      )}
                      {event.location && (
                        <span>📍 {event.location}</span>
                      )}
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                    {event.collaborator && (
                      <p className="text-sm text-gray-600 mt-2">
                        Com: {event.collaborator}
                      </p>
                    )}
                  </div>
                  {event.website && (
                    <Button size="sm" variant="outline">
                      Ver Site
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Palestras */}
        <section>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Palestras
          </h2>
          <div className="grid gap-4">
            {lectures.map((lecture, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {lecture.title}
                    </h3>
                    <p className="text-academic-blue font-medium mb-2">
                      {lecture.event}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {lecture.year}
                      </div>
                      {lecture.location && (
                        <span>📍 {lecture.location}</span>
                      )}
                    </div>
                    {lecture.type && (
                      <Badge variant="secondary">{lecture.type}</Badge>
                    )}
                    {lecture.institution && (
                      <p className="text-sm text-gray-600 mt-2">
                        {lecture.institution}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    {lecture.videoUrl && (
                      <Button size="sm">
                        Ver Vídeo
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Material
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Material;
