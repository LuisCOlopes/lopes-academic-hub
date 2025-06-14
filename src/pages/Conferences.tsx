import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, ExternalLink, Globe } from 'lucide-react';

const Conferences = () => {
  const { t } = useLanguage();

  const upcomingConferences2025 = {
    brazil: [
      {
        name: 'COBEQ 2025 – Congresso Brasileiro de Engenharia Química',
        date: '6 a 10 de outubro de 2025',
        location: 'Belo Horizonte, MG',
        organization: 'Universidade Federal de Minas Gerais (UFMG) e Associação Brasileira de Engenharia Química (ABEQ)',
        topics: 'Desenvolvimento sustentável, economia circular, mineração urbana e segurança de processos',
        website: 'cobeq2025.com.br',
        country: 'Brasil'
      },
      {
        name: 'COBEM 2025 – Congresso Internacional de Engenharia Mecânica',
        date: '9 a 14 de novembro de 2025',
        location: 'Curitiba, PR',
        organization: 'Associação Brasileira de Engenharia e Ciências Mecânicas (ABCM)',
        topics: 'Inteligência Artificial para um Amanhã Sustentável',
        website: 'pt.wikipedia.org',
        country: 'Brasil'
      }
    ],
    international: [
      {
        name: 'AIChE Annual Meeting 2025',
        date: '2 a 7 de novembro de 2025',
        location: 'Boston, MA, EUA',
        organization: 'American Institute of Chemical Engineers (AIChE)',
        topics: 'Engenharia química, controle de processos, sustentabilidade, biotecnologia',
        website: 'skoge.folk.ntnu.no',
        country: 'EUA'
      },
      {
        name: 'DYCOPS 2025 – 14th IFAC Symposium on Dynamics and Control of Process Systems',
        date: '16 a 19 de junho de 2025',
        location: 'Bratislava, Eslováquia',
        organization: 'International Federation of Automatic Control (IFAC)',
        topics: 'Dinâmica e controle de sistemas de processos, incluindo biossistemas',
        website: 'skoge.folk.ntnu.no',
        country: 'Eslováquia'
      },
      {
        name: 'ESCAPE-35 – European Symposium on Computer-Aided Process Engineering',
        date: '6 a 9 de julho de 2025',
        location: 'Gent, Bélgica',
        organization: 'European Federation of Chemical Engineering (EFCE)',
        topics: 'Engenharia de processos assistida por computador, modelagem, simulação e otimização',
        website: 'skoge.folk.ntnu.no',
        country: 'Bélgica'
      },
      {
        name: '9th International Conference on Catalysis and Chemical Engineering (CCE-2025)',
        date: '24 a 26 de fevereiro de 2025',
        location: 'São Francisco, CA, EUA',
        organization: 'United Scientific Group',
        topics: 'Catálise, engenharia química, sustentabilidade',
        website: 'catalysis.unitedscientificgroup.org',
        country: 'EUA'
      },
      {
        name: '3rd International Conference on Catalysis, Chemical Engineering and Technology',
        date: '8 a 9 de outubro de 2025',
        location: 'Dubai, Emirados Árabes Unidos',
        organization: 'Inovine Conferences',
        topics: 'Catálise, engenharia química, tecnologias emergentes',
        website: 'catalysismeetings.org',
        country: 'Emirados Árabes Unidos'
      },
      {
        name: '10th World Conference on Chemistry and Chemical Engineering',
        date: '20 a 21 de novembro de 2025',
        location: 'Bangkok, Tailândia',
        organization: 'Eurasia Conferences',
        topics: 'Química, engenharia química, inovações tecnológicas',
        website: 'eurasiaconferences.com',
        country: 'Tailândia'
      }
    ]
  };

  const recentConferences = [
    {
      name: 'International Conference on Sustainable Engineering',
      date: '2024-06-15 to 2024-06-18',
      location: 'São Paulo, Brazil',
      topic: 'Green Chemical Processes in Industry 4.0',
      status: 'completed'
    },
    {
      name: 'Brazilian Chemical Engineering Congress',
      date: '2024-09-10 to 2024-09-13',
      location: 'Rio de Janeiro, Brazil',
      topic: 'Process Optimization and Control',
      status: 'completed'
    },
    {
      name: 'World Congress on Chemical Engineering',
      date: '2023-10-15 to 2023-10-18',
      location: 'Barcelona, Spain',
      topic: 'Sustainable Process Design',
      materials: ['Presentation Slides', 'Paper']
    },
    {
      name: 'Latin American Process Engineering Symposium',
      date: '2023-07-20 to 2023-07-23',
      location: 'Buenos Aires, Argentina',
      topic: 'Innovation in Chemical Engineering Education',
      materials: ['Video Recording', 'Extended Abstract']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('conferencesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('conferencesSubtitle')}
          </p>
        </div>

        <Tabs defaultValue="conferences2025" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="conferences2025">{t('conferences2025')}</TabsTrigger>
            <TabsTrigger value="recent">{t('recentConferences')}</TabsTrigger>
          </TabsList>

          <TabsContent value="conferences2025" className="space-y-8 mt-6">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-playfair font-bold text-gray-900">
                  🇧🇷 {t('brazilConferences')}
                </h2>
              </div>
              <div className="grid gap-6">
                {upcomingConferences2025.brazil.map((conference, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-green-600">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {conference.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {conference.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {conference.location}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{conference.country}</Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{t('organization')}:</p>
                        <p className="text-gray-600">{conference.organization}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{t('topics')}:</p>
                        <p className="text-gray-600">{conference.topics}</p>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      <Globe className="h-4 w-4 mr-2" />
                      {conference.website}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-playfair font-bold text-gray-900">
                  🌍 {t('internationalConferences')}
                </h2>
              </div>
              <div className="grid gap-6">
                {upcomingConferences2025.international.map((conference, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-blue-600">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {conference.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {conference.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {conference.location}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">{conference.country}</Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{t('organization')}:</p>
                        <p className="text-gray-600">{conference.organization}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{t('topics')}:</p>
                        <p className="text-gray-600">{conference.topics}</p>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      <Globe className="h-4 w-4 mr-2" />
                      {conference.website}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {t('valuableOpportunities')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('opportunitiesDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('additionalInfo')}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6 mt-6">
            <section>
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                {t('recentConferences')}
              </h2>
              <div className="grid gap-6">
                {recentConferences.map((conference, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-academic-blue">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {conference.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {conference.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {conference.location}
                          </div>
                        </div>
                      </div>
                      {conference.status && (
                        <Badge className="bg-green-100 text-green-800">{conference.status}</Badge>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700">{t('topic')}:</p>
                      <p className="text-gray-600">{conference.topic}</p>
                    </div>
                    
                    {conference.materials && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">{t('availableMaterials')}:</p>
                        <div className="flex flex-wrap gap-2">
                          {conference.materials.map((material, i) => (
                            <Button key={i} size="sm" variant="outline">
                              {material}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {t('speakingOpportunities')}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('speakingOpportunitiesDescription')}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('keynoteSpeeches')}</h3>
              <p className="text-sm text-gray-600">{t('keynoteDescription')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('technicalSessions')}</h3>
              <p className="text-sm text-gray-600">{t('technicalDescription')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('panelDiscussions')}</h3>
              <p className="text-sm text-gray-600">{t('panelDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Conferences;
