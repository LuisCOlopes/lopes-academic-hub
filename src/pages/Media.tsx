
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, Mic, Camera, ExternalLink } from 'lucide-react';

const Media = () => {
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

  const pressReleases = [
    {
      title: t('ufuProfessorAward') || 'Professor da UFU Recebe Prêmio Nacional de Excelência',
      date: '2023-12-15',
      summary: t('excellenceAwardRecognition') || 'Reconhecimento por contribuições excepcionais ao ensino e pesquisa em engenharia química'
    },
    {
      title: t('newResearchGrant') || 'Nova Bolsa de Pesquisa para Desenvolvimento de Processos Sustentáveis',
      date: '2023-09-20',
      summary: t('fundingApproved') || 'Financiamento de R$ 2,5 milhões aprovado para iniciativa de pesquisa em química verde'
    },
    {
      title: t('internationalCollaboration') || 'Acordo de Colaboração Internacional Assinado',
      date: '2023-07-10',
      summary: t('partnershipEuropeanUniversities') || 'Parceria com universidades europeias para programas de intercâmbio de estudantes e professores'
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
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('mediaTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('mediaSubtitle')}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              {t('recentMediaAppearances') || 'Aparições Recentes na Mídia'}
            </h2>
            <div className="grid gap-6">
              {mediaItems.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-academic-blue rounded-lg">
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
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              {t('pressReleases') || 'Comunicados à Imprensa'}
            </h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {release.summary}
                      </p>
                      <span className="text-xs text-gray-500">
                        {new Date(release.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost">
                      {t('readMore') || 'Leia Mais'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {t('mediaInquiries') || 'Consultas da Mídia'}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('availableForInterviews') || 'Disponível para entrevistas, comentários especializados e aparições na mídia sobre tópicos relacionados à engenharia química, sustentabilidade e educação.'}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('expertCommentary') || 'Comentário Especializado'}</h3>
              <p className="text-sm text-gray-600">{t('chemEngSafetyTopics') || 'Tópicos de engenharia química e segurança'}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('educationalInsights') || 'Insights Educacionais'}</h3>
              <p className="text-sm text-gray-600">{t('academicTrendsTeaching') || 'Tendências acadêmicas e inovação no ensino'}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{t('industryAnalysis') || 'Análise da Indústria'}</h3>
              <p className="text-sm text-gray-600">{t('marketTrendsTechnology') || 'Tendências de mercado e desenvolvimentos tecnológicos'}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button>{t('contactForMediaInquiries') || 'Contato para Consultas da Mídia'}</Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Media;
