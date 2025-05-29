
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Clock, MapPin, ExternalLink } from 'lucide-react';

const Workshops = () => {
  const { t } = useLanguage();

  const workshops = [
    {
      title: t('processControlWorkshop') || 'Workshop de Controle de Processos',
      date: '2024-07-15',
      duration: '8 horas',
      location: 'UFU - Campus Santa Mônica',
      participants: 30,
      status: 'upcoming',
      description: t('processControlWorkshopDesc') || 'Workshop prático sobre técnicas avançadas de controle de processos químicos',
      topics: [
        t('pidControllers') || 'Controladores PID',
        t('processModeling') || 'Modelagem de processos',
        t('industrialSafety') || 'Segurança industrial'
      ]
    },
    {
      title: t('sustainableProcessesWorkshop') || 'Workshop de Processos Sustentáveis',
      date: '2024-06-10',
      duration: '6 horas',
      location: 'Online',
      participants: 45,
      status: 'completed',
      description: t('sustainableProcessesWorkshopDesc') || 'Abordagem prática para desenvolvimento de processos químicos sustentáveis',
      topics: [
        t('greenChemistry') || 'Química verde',
        t('wasteReduction') || 'Redução de resíduos',
        t('energyEfficiency') || 'Eficiência energética'
      ]
    },
    {
      title: t('aiInChemicalEngineering') || 'IA na Engenharia Química',
      date: '2024-08-20',
      duration: '4 horas',
      location: 'UFU - Laboratório de Informática',
      participants: 25,
      status: 'upcoming',
      description: t('aiInChemicalEngineeringDesc') || 'Aplicações de Inteligência Artificial em processos químicos',
      topics: [
        t('machineLearning') || 'Aprendizado de máquina',
        t('processOptimization') || 'Otimização de processos',
        t('predictiveModeling') || 'Modelagem preditiva'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return t('upcoming') || 'Próximo';
      case 'completed':
        return t('completed') || 'Concluído';
      case 'cancelled':
        return t('cancelled') || 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('workshopsTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('workshopsSubtitle')}
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-ufu-navy">
                      {workshop.title}
                    </h3>
                    <Badge className={getStatusColor(workshop.status)}>
                      {getStatusText(workshop.status)}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {workshop.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(workshop.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      {workshop.participants} {t('participants') || 'participantes'}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-ufu-navy mb-2">{t('topics') || 'Tópicos'}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, i) => (
                        <Badge key={i} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-48">
                  {workshop.status === 'upcoming' && (
                    <Button>
                      {t('register') || 'Inscrever-se'}
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t('moreInfo') || 'Mais Informações'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-r from-ufu-blue to-ufu-navy text-white">
            <h2 className="text-2xl font-bold mb-4">{t('requestCustomWorkshop') || 'Solicite um Workshop Personalizado'}</h2>
            <p className="mb-4">
              {t('customWorkshopDesc') || 'Desenvolvemos workshops sob medida para atender às necessidades específicas da sua instituição ou empresa.'}
            </p>
            <Button variant="secondary">
              {t('contactUs') || 'Entre em Contato'}
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-ufu-navy mb-3">{t('workshopStatistics') || 'Estatísticas dos Workshops'}</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('totalWorkshops') || 'Total de Workshops'}:</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('totalParticipants') || 'Total de Participantes'}:</span>
                <span className="font-semibold">720</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('averageRating') || 'Avaliação Média'}:</span>
                <span className="font-semibold">4.8/5.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('institutions') || 'Instituições Atendidas'}:</span>
                <span className="font-semibold">12</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Workshops;
