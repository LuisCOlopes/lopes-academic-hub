
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, MessageCircle, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: 'The Evolution of Chemical Engineering Education in the Digital Age',
      excerpt: 'Exploring how technology is transforming the way we teach and learn chemical engineering principles.',
      content: 'In recent years, the field of chemical engineering education has undergone significant transformation...',
      date: '2024-01-18',
      readTime: '8 min read',
      author: 'Prof. Academic Name',
      category: 'Education',
      tags: ['Education', 'Technology', 'Digital Learning'],
      comments: 12,
      featured: true
    },
    {
      title: 'Sustainable Process Design: Lessons from Industry 4.0',
      excerpt: 'How modern digital technologies are enabling more sustainable chemical manufacturing processes.',
      content: 'The integration of Industry 4.0 technologies in chemical manufacturing has opened new possibilities...',
      date: '2024-01-12',
      readTime: '6 min read',
      author: 'Prof. Academic Name',
      category: 'Sustainability',
      tags: ['Industry 4.0', 'Sustainability', 'Process Design'],
      comments: 8
    },
    {
      title: 'Building Research Partnerships: A Guide for Young Academics',
      excerpt: 'Practical advice on establishing meaningful research collaborations in academia.',
      content: 'One of the most important aspects of academic success is building strong research partnerships...',
      date: '2024-01-05',
      readTime: '10 min read',
      author: 'Prof. Academic Name',
      category: 'Academic Life',
      tags: ['Research', 'Collaboration', 'Career Development'],
      comments: 15
    },
    {
      title: 'Green Chemistry in Practice: Real-World Applications',
      excerpt: 'Case studies showcasing successful implementation of green chemistry principles in industry.',
      content: 'Green chemistry is no longer just a theoretical concept but a practical approach...',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'Prof. Academic Name',
      category: 'Research',
      tags: ['Green Chemistry', 'Case Studies', 'Innovation'],
      comments: 20
    }
  ];

  const categories = [
    { name: 'Education', count: 15 },
    { name: 'Research', count: 12 },
    { name: 'Sustainability', count: 8 },
    { name: 'Academic Life', count: 6 },
    { name: 'Technology', count: 4 }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Education': 'bg-blue-100 text-blue-800',
      'Research': 'bg-green-100 text-green-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Academic Life': 'bg-purple-100 text-purple-800',
      'Technology': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('blogTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Thoughts, insights, and experiences from the world of chemical engineering and academia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {blogPosts.find(post => post.featured) && (
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Featured Post
                </h2>
                {blogPosts
                  .filter(post => post.featured)
                  .map((post, index) => (
                    <Card key={index} className="p-6 border-l-4 border-l-academic-blue">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-lg">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments} comments
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                          Read more <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </Card>
                  ))}
              </div>
            )}

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Recent Posts
              </h2>
              <div className="space-y-6">
                {blogPosts
                  .filter(post => !post.featured)
                  .map((post, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments} comments
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-academic-blue hover:text-blue-700 font-medium">
                          Read more <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <span className="text-gray-700">{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 bg-academic-blue text-white">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Blog</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get notified about new posts and updates
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button className="w-full px-4 py-2 bg-white text-academic-blue rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Blog;
