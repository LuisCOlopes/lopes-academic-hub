
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: t('newResearchGrantSustainable') || 'Nova Bolsa de Pesquisa Concedida para Processos Químicos Sustentáveis',
      excerpt: t('researchGrantExcerpt') || 'Recebido financiamento de R$ 2,5 milhões do CNPq para desenvolver processos de fabricação química ambientalmente amigáveis.',
      date: '2024-01-20',
      category: t('research') || 'Pesquisa',
      author: 'Prof. Academic Name',
      featured: true
    },
    {
      title: t('bestTeachingAwardUFU') || 'Reconhecimento do Prêmio de Melhor Ensino na UFU',
      excerpt: t('teachingAwardExcerpt') || 'Homenageado com o Prêmio de Excelência em Ensino por abordagens inovadoras na educação em engenharia química.',
      date: '2024-01-15',
      category: t('awards') || 'Prêmios',
      author: 'University Communications'
    },
    {
      title: t('internationalCollaborationEuropean') || 'Colaboração Internacional com Universidades Europeias',
      excerpt: t('collaborationExcerpt') || 'Assinados acordos de parceria com instituições europeias líderes para pesquisa conjunta e programas de intercâmbio estudantil.',
      date: '2024-01-10',
      category: t('collaboration') || 'Colaboração',
      author: 'Prof. Academic Name'
    },
    {
      title: t('studentTeamWinsNational') || 'Equipe de Estudantes Vence Competição Nacional de Engenharia',
      excerpt: t('studentCompetitionExcerpt') || 'Nossa equipe de graduação garantiu o primeiro lugar na Competição Brasileira de Estudantes de Engenharia Química.',
      date: '2024-01-05',
      category: t('students') || 'Estudantes',
      author: 'Team Advisor'
    },
    {
      title: t('newLabEquipmentInstallation') || 'Instalação de Novos Equipamentos de Laboratório Concluída',
      excerpt: t('labEquipmentExcerpt') || 'Sistemas de controle de processos de última geração agora operacionais em nosso laboratório avançado de engenharia química.',
      date: '2023-12-20',
      category: t('infrastructure') || 'Infraestrutura',
      author: 'Lab Manager'
    },
    {
      title: t('publishedResearchGreenChemistry') || 'Pesquisa Publicada sobre Aplicações de Química Verde',
      excerpt: t('greenChemistryExcerpt') || 'Últimas descobertas sobre desenvolvimento de catalisadores sustentáveis publicadas em revista internacional de primeira linha.',
      date: '2023-12-15',
      category: t('publications') || 'Publicações',
      author: 'Prof. Academic Name'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Pesquisa': 'bg-blue-100 text-blue-800',
      'Research': 'bg-blue-100 text-blue-800',
      'Investigación': 'bg-blue-100 text-blue-800',
      'Prêmios': 'bg-yellow-100 text-yellow-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Premios': 'bg-yellow-100 text-yellow-800',
      'Colaboração': 'bg-green-100 text-green-800',
      'Collaboration': 'bg-green-100 text-green-800',
      'Colaboración': 'bg-green-100 text-green-800',
      'Estudantes': 'bg-purple-100 text-purple-800',
      'Students': 'bg-purple-100 text-purple-800',
      'Estudiantes': 'bg-purple-100 text-purple-800',
      'Infraestrutura': 'bg-gray-100 text-gray-800',
      'Infrastructure': 'bg-gray-100 text-gray-800',
      'Infraestructura': 'bg-gray-100 text-gray-800',
      'Publicações': 'bg-red-100 text-red-800',
      'Publications': 'bg-red-100 text-red-800',
      'Publicaciones': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('newsTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('newsSubtitle')}
          </p>
        </div>

        {/* Featured News */}
        {newsItems.find(item => item.featured) && (
          <div className="mb-8">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              {t('featuredNews') || 'Notícia em Destaque'}
            </h2>
            {newsItems
              .filter(item => item.featured)
              .map((item, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-academic-blue bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-lg">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                    <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                      {t('readMore') || 'Leia mais'} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        )}

        {/* All News */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('recentNews') || 'Notícias Recentes'}
          </h2>
          <div className="grid gap-6">
            {newsItems
              .filter(item => !item.featured)
              .map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                    <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                      {t('readMore') || 'Leia mais'} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {t('subscribeToUpdates') || 'Inscreva-se para Atualizações'}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('stayInformedResearch') || 'Mantenha-se informado sobre nossos mais recentes desenvolvimentos de pesquisa, conquistas e atividades acadêmicas.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <input 
                type="email" 
                placeholder={t('enterEmailAddress') || 'Digite seu endereço de email'}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent"
              />
            </div>
            <button className="px-6 py-2 bg-academic-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t('subscribe') || 'Inscrever-se'}
            </button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default News;
