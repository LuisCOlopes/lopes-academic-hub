
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Calendar, MapPin } from 'lucide-react';

const Workshops = () => {
  const { t } = useLanguage();

  const upcomingWorkshops = [
    {
      title: 'Controle Avançado de Processos Químicos',
      date: '2024-03-15',
      duration: '2 dias',
      location: 'UFU - Uberlândia',
      participants: 30,
      description: 'Workshop prático sobre técnicas avançadas de controle para processos químicos industriais.',
      level: 'Avançado',
      topics: ['MPC', 'Controle Robusto', 'Simulação']
    },
    {
      title: 'Introdução à Simulação de Processos',
      date: '2024-04-20',
      duration: '1 dia',
      location: 'Online',
      participants: 50,
      description: 'Workshop introdutório sobre simulação de processos usando softwares livres.',
      level: 'Iniciante',
      topics: ['CoCo Simulator', 'Modelagem', 'Análise']
    }
  ];

  const pastWorkshops = [
    {
      title: 'Simulação de Plantas Químicas Utilizando Simulador CoCo',
      year: '2014',
      type: 'Extensão',
      duration: 'Curso de curta duração',
      participants: 25
    },
    {
      title: 'Introdução à Simulação e Controle de Processos com Softwares Livres',
      year: '2013',
      type: 'Extensão',
      duration: '8 horas',
      participants: 30
    },
    {
      title: 'Análise e Simulação de Unidades Industriais com o Simulador Livre CoCo',
      year: '2012',
      type: 'Extensão',
      duration: '8 horas',
      participants: 20
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('workshopsTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('workshopsSubtitle')}
          </p>
        </div>

        {/* Upcoming Workshops */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Próximos Workshops
          </h2>
          <div className="grid gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {workshop.title}
                      </h3>
                      <Badge variant="outline">{workshop.level}</Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {workshop.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(workshop.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {workshop.participants} participantes
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {workshop.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary">{topic}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button>Inscrever-se</Button>
                    <Button variant="outline">Mais Informações</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Workshops */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Workshops Anteriores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastWorkshops.map((workshop, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {workshop.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">{workshop.type}</Badge>
                  <Badge variant="secondary">{workshop.year}</Badge>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {workshop.participants} participantes
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Workshop Benefits */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Por que Participar dos Nossos Workshops?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aprendizado Prático</h3>
              <p className="text-gray-600 text-sm">Experiência hands-on com ferramentas e técnicas modernas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600 text-sm">Conecte-se com profissionais e pesquisadores da área</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificação</h3>
              <p className="text-gray-600 text-sm">Receba certificado de participação reconhecido</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Workshops;
