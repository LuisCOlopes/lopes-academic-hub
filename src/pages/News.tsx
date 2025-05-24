
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
      title: 'New Research Grant Awarded for Sustainable Chemical Processes',
      excerpt: 'Received R$ 2.5 million funding from CNPq to develop environmentally friendly chemical manufacturing processes.',
      date: '2024-01-20',
      category: 'Research',
      author: 'Prof. Academic Name',
      featured: true
    },
    {
      title: 'Best Teaching Award Recognition at UFU',
      excerpt: 'Honored with the Excellence in Teaching Award for innovative approaches to chemical engineering education.',
      date: '2024-01-15',
      category: 'Awards',
      author: 'University Communications'
    },
    {
      title: 'International Collaboration with European Universities',
      excerpt: 'Signed partnership agreements with leading European institutions for joint research and student exchange programs.',
      date: '2024-01-10',
      category: 'Collaboration',
      author: 'Prof. Academic Name'
    },
    {
      title: 'Student Team Wins National Engineering Competition',
      excerpt: 'Our undergraduate team secured first place in the Brazilian Chemical Engineering Students Competition.',
      date: '2024-01-05',
      category: 'Students',
      author: 'Team Advisor'
    },
    {
      title: 'New Laboratory Equipment Installation Complete',
      excerpt: 'State-of-the-art process control systems now operational in our advanced chemical engineering laboratory.',
      date: '2023-12-20',
      category: 'Infrastructure',
      author: 'Lab Manager'
    },
    {
      title: 'Published Research on Green Chemistry Applications',
      excerpt: 'Latest findings on sustainable catalyst development published in top-tier international journal.',
      date: '2023-12-15',
      category: 'Publications',
      author: 'Prof. Academic Name'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Research': 'bg-blue-100 text-blue-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Collaboration': 'bg-green-100 text-green-800',
      'Students': 'bg-purple-100 text-purple-800',
      'Infrastructure': 'bg-gray-100 text-gray-800',
      'Publications': 'bg-red-100 text-red-800'
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
            Latest news and updates from our research group and academic activities
          </p>
        </div>

        {/* Featured News */}
        {newsItems.find(item => item.featured) && (
          <div className="mb-8">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              Featured News
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
                      Read more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        )}

        {/* All News */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Recent News
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
                      Read more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Subscribe to Updates
          </h2>
          <p className="text-gray-600 mb-4">
            Stay informed about our latest research developments, achievements, and academic activities.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent"
              />
            </div>
            <button className="px-6 py-2 bg-academic-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default News;
