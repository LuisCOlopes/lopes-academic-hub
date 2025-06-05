
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Download, Calendar, Clock, Camera, Mic, FileText, ExternalLink } from 'lucide-react';

const MediaPodcast = () => {
  const { t } = useLanguage();

  const mediaItems = [
    {
      type: t('interview') || 'Entrevista',
      title: t('sustainableChemEngFuture') || 'O Futuro da Engenharia Química Sustentável',
      outlet: 'Engineering Today Brazil',
      date: '2024-01-15',
      description: t('greenChemistryImpact') || 'Discussão sobre inovações em química verde e seu impacto na indústria brasileira',
      mediaType: 'video',
      duration: '25 min',
      url: '#'
    },
    {
      type: t('article') || 'Artigo',
      title: t('processEducationInnovation') || 'Inovação no Ensino de Processos Químicos',
      outlet: 'Academic Quarterly',
      date: '2023-12-10',
      description: t('modernTeachingMethods') || 'Artigo sobre metodologias de ensino modernas em engenharia',
      mediaType: 'text',
      readTime: '8 min ' + (t('read') || 'leitura'),
      url: '#'
    },
    {
      type: 'Podcast',
      title: t('engineeringLeadership') || 'Liderança em Engenharia na Academia',
      outlet: 'TechTalk Podcast',
      date: '2023-11-22',
      description: t('academicLeadershipDiscussion') || 'Discussão sobre liderança acadêmica e gestão de pesquisa',
      mediaType: 'audio',
      duration: '45 min',
      url: '#'
    },
    {
      type: t('tvInterview') || 'Entrevista TV',
      title: t('chemicalSafetyIndustrial') || 'Segurança Química em Ambientes Industriais',
      outlet: 'Rede Globo - Bom Dia Brasil',
      date: '2023-10-08',
      description: t('expertCommentarySafety') || 'Comentário especializado sobre protocolos de segurança química',
      mediaType: 'video',
      duration: '12 min',
      url: '#'
    }
  ];

  const episodes = [
    {
      title: t('sustainableProcessesFuture') || 'O Futuro dos Processos Químicos Sustentáveis',
      description: t('sustainableProcessesDesc') || 'Explorando inovações em química verde e seu impacto na indústria',
      duration: '45 min',
      date: '2024-01-15',
      guests: ['Dr. Maria Santos', 'Prof. João Silva'],
      topics: [t('greenChemistry') || 'Química Verde', t('sustainability') || 'Sustentabilidade', t('innovation') || 'Inovação']
    },
    {
      title: t('labToIndustryStories') || 'Do Laboratório à Indústria: Histórias de Transferência de Tecnologia',
      description: t('labToIndustryDesc') || 'Exemplos do mundo real de comercialização bem-sucedida de pesquisa',
      duration: '38 min',
      date: '2024-01-08',
      guests: ['Eng. Carlos Oliveira', 'Dr. Ana Costa'],
      topics: [t('technologyTransfer') || 'Transferência de Tecnologia', t('industry') || 'Indústria', t('innovation') || 'Inovação']
    },
    {
      title: t('studentSuccessStories') || 'Histórias de Sucesso de Estudantes em Engenharia Química',
      description: t('studentSuccessDesc') || 'Ex-alunos compartilhando suas jornadas de carreira e lições aprendidas',
      duration: '52 min',
      date: '2024-01-01',
      guests: ['Dr. Paulo Mendes', 'Eng. Lisa Santos'],
      topics: [t('careerDevelopment') || 'Desenvolvimento de Carreira', t('studentLife') || 'Vida Estudantil', t('professionalGrowth') || 'Crescimento Profissional']
    }
  ];

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return <Camera className="h-5 w-5" />;
      case 'audio':
        return <Mic className="h-5 w-5" />;
      case 'text':
        return <FileText className="h-5 w-5" />;
      default:
        return <Play className="h-5 w-5" />;
    }
  };

  const getMediaTypeColor = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'audio':
        return 'bg-purple-100 text-purple-800';
      case 'text':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            {t('mediaPodcastTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('mediaPodcastSubtitle')}
          </p>
        </div>

        <Tabs defaultValue="media" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="media">{t('mediaSection')}</TabsTrigger>
            <TabsTrigger value="podcast">{t('podcastSection')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="media" className="space-y-6 mt-6">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              {t('recentMediaAppearances')}
            </h2>
            <div className="grid gap-6">
              {mediaItems.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-academic-blue rounded-lg text-white">
                      {getMediaIcon(item.mediaType)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getMediaTypeColor(item.mediaType)}>
                          {item.type}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-academic-blue font-medium mb-2">
                        {item.outlet}
                      </p>
                      
                      <p className="text-gray-600 mb-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {item.duration || item.readTime}
                        </span>
                        <Button size="sm" variant="outline">
                          {t('view') || 'Ver'} <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {t('mediaInquiries') || 'Consultas da Mídia'}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('availableForInterviews')}
              </p>
              <Button>{t('contactForMediaInquiries') || 'Contato para Consultas da Mídia'}</Button>
            </div>
          </TabsContent>

          <TabsContent value="podcast" className="space-y-6 mt-6">
            <div className="mb-8 p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{t('latestEpisodes')}</h2>
              <h3 className="text-xl mb-2">{episodes[0].title}</h3>
              <p className="mb-4">{episodes[0].description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary">
                  <Play className="h-4 w-4 mr-2" />
                  {t('playNow') || 'Reproduzir Agora'}
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-academic-blue">
                  <Download className="h-4 w-4 mr-2" />
                  {t('download') || 'Download'}
                </Button>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  {episodes[0].duration}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-gray-900">{t('allEpisodes')}</h2>
              
              {episodes.map((episode, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {episode.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {new Date(episode.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3">
                        {episode.description}
                      </p>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">{t('guests') || 'Convidados'}:</p>
                        <p className="text-sm text-gray-600">{episode.guests.join(', ')}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic, i) => (
                          <Badge key={i} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 md:items-end">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {episode.duration}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          {t('play') || 'Reproduzir'}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {t('subscribeAndFollow') || 'Inscreva-se e Siga'}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('stayUpdatedEpisodes') || 'Mantenha-se atualizado com nossos episódios mais recentes e nunca perca insights de especialistas líderes.'}
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <Button variant="outline">Spotify</Button>
                <Button variant="outline">Apple Podcasts</Button>
                <Button variant="outline">Google Podcasts</Button>
                <Button variant="outline">RSS Feed</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AcademicLayout>
  );
};

export default MediaPodcast;
