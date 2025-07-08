
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: 'O Futuro da Engenharia Química',
      excerpt: 'Explorando as tendências e inovações que estão moldando o futuro da engenharia química, incluindo sustentabilidade, automação e biotecnologia.',
      date: '2024-01-20',
      category: 'Inovação',
      author: 'BetaEQ',
      link: 'https://betaeq.com.br/o-futuro-da-engenharia-quimica/',
      featured: true
    },
    {
      title: 'Indústria química brasileira enfrenta desafios e oportunidades',
      excerpt: 'Esta notícia do Sebrae aborda a importância da transformação digital e da inovação na indústria química brasileira, destacando a necessidade de otimização da operação para evitar perdas.',
      date: '2024-01-15',
      category: 'Indústria',
      author: 'Sebrae',
      link: 'https://sebrae.com.br/sites/PortalSebrae/artigos/industria-quimica-brasileira-enfrenta-desafios-e-oportunidades,6822922a889b6810VgnVCM1000001b00320aRCRD'
    },
    {
      title: 'O que é química aplicada: Entenda sua importância',
      excerpt: 'Este artigo da Minas Labor explora o papel da tecnologia na química aplicada, mencionando ferramentas como modelagem computacional e espectroscopia avançada, além da automação de laboratórios para otimizar processos.',
      date: '2024-01-10',
      category: 'Pesquisa',
      author: 'Minas Labor',
      link: '#'
    },
    {
      title: 'Inovação química: o que é, os desafios e a importância',
      excerpt: 'O Blog AEVO discute a importância da inovação química para o desenvolvimento de materiais avançados, como polímeros, compostos de carbono e materiais inteligentes, que impulsionam setores como eletrônica e saúde.',
      date: '2024-01-05',
      category: 'Inovação',
      author: 'AEVO',
      link: 'https://blog.aevo.com.br/inovacao-quimica/'
    },
    {
      title: 'Tecnologias Verdes na Indústria Química: Avanços e Desafios',
      excerpt: 'BetaEQ aborda o uso de tecnologias verdes na indústria química, incluindo sensores inteligentes, sistemas de monitoramento e reciclagem química para a redução do consumo de energia e água, além do tratamento de resíduos.',
      date: '2023-12-20',
      category: 'Sustentabilidade',
      author: 'BetaEQ',
      link: 'https://betaeq.com.br/tecnologias-verdes-na-industria-quimica-avancos-e-desafios/'
    },
    {
      title: 'Engenheiros Químicos e a Economia Circular: Desafios e Oportunidades',
      excerpt: 'A BetaEQ explora o papel dos engenheiros químicos no desenvolvimento de processos que minimizam a geração de resíduos, promovendo a reutilização e reciclagem de materiais, com foco na economia circular.',
      date: '2023-12-15',
      category: 'Sustentabilidade',
      author: 'BetaEQ',
      link: 'https://betaeq.com.br/engenheiros-quimicos-e-a-economia-circular-desafios-e-oportunidades/'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Inovação': 'bg-blue-100 text-blue-800',
      'Innovation': 'bg-blue-100 text-blue-800',
      'Innovación': 'bg-blue-100 text-blue-800',
      'Indústria': 'bg-purple-100 text-purple-800',
      'Industry': 'bg-purple-100 text-purple-800',
      'Industria': 'bg-purple-100 text-purple-800',
      'Pesquisa': 'bg-green-100 text-green-800',
      'Research': 'bg-green-100 text-green-800',
      'Investigación': 'bg-green-100 text-green-800',
      'Sustentabilidade': 'bg-emerald-100 text-emerald-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Sostenibilidad': 'bg-emerald-100 text-emerald-800'
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
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium"
                    >
                      {t('readMore') || 'Leia mais'} <ExternalLink className="h-4 w-4" />
                    </a>
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
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium"
                    >
                      {t('readMore') || 'Leia mais'} <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default News;
