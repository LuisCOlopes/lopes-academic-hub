
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, MessageCircle } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: t('futureChemEngEducation') || 'O Futuro da Educação em Engenharia Química',
      excerpt: t('digitalTransformationEducation') || 'Explorando como a transformação digital está remodelando a forma como ensinamos e aprendemos engenharia química.',
      date: '2024-01-20',
      category: t('education') || 'Educação',
      readTime: '5 ' + (t('minRead') || 'min de leitura'),
      comments: 12,
      featured: true
    },
    {
      title: t('sustainabilityProcessDesign') || 'Sustentabilidade no Design de Processos: Uma Perspectiva Pessoal',
      excerpt: t('decadesResearchEvolution') || 'Refletindo sobre décadas de pesquisa e a evolução de práticas sustentáveis na engenharia química.',
      date: '2024-01-15',
      category: t('sustainability') || 'Sustentabilidade',
      readTime: '8 ' + (t('minRead') || 'min de leitura'),
      comments: 18
    },
    {
      title: t('lessonsIndustryAcademia') || 'Lições da Colaboração Indústria-Academia',
      excerpt: t('keyInsightsPetrobras') || 'Principais insights obtidos do trabalho com a Petrobras e outros parceiros da indústria.',
      date: '2024-01-10',
      category: t('collaboration') || 'Colaboração',
      readTime: '6 ' + (t('minRead') || 'min de leitura'),
      comments: 7
    },
    {
      title: t('mentoringGraduateStudents') || 'Mentoria de Estudantes de Pós-graduação: Melhores Práticas',
      excerpt: t('strategiesSupervision') || 'Estratégias e abordagens para supervisão e mentoria eficazes de estudantes de pós-graduação.',
      date: '2024-01-05',
      category: t('mentoring') || 'Mentoria',
      readTime: '7 ' + (t('minRead') || 'min de leitura'),
      comments: 25
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Educação': 'bg-blue-100 text-blue-800',
      'Education': 'bg-blue-100 text-blue-800',
      'Educación': 'bg-blue-100 text-blue-800',
      'Sustentabilidade': 'bg-green-100 text-green-800',
      'Sustainability': 'bg-green-100 text-green-800',
      'Sostenibilidad': 'bg-green-100 text-green-800',
      'Colaboração': 'bg-purple-100 text-purple-800',
      'Collaboration': 'bg-purple-100 text-purple-800',
      'Colaboración': 'bg-purple-100 text-purple-800',
      'Mentoria': 'bg-yellow-100 text-yellow-800',
      'Mentoring': 'bg-yellow-100 text-yellow-800',
      'Mentoría': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('academicBlog') || 'Blog Acadêmico'}
          </h1>
          <p className="text-lg text-gray-600">
            {t('blogSubtitle')}
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-8">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              {t('featuredPost') || 'Post em Destaque'}
            </h2>
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-academic-blue bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-lg">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments} {t('comments') || 'comentários'}
                    </div>
                    <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                      {t('readMore') || 'Leia mais'} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('recentPosts') || 'Posts Recentes'}
          </h2>
          <div className="grid gap-6">
            {blogPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments} {t('comments') || 'comentários'}
                    </div>
                    <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                      {t('readMore') || 'Leia mais'} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Blog;
