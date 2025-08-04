
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, FileText, GraduationCap, Newspaper, Award, TrendingUp, Users, Quote } from 'lucide-react';

const AcademicHomepage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const academicSections = [
    {
      title: t('research'),
      description: t('researchDescription'),
      icon: BookOpen,
      color: 'bg-blue-600',
      path: '/research'
    },
    {
      title: t('publications'),
      description: t('publicationsDescription'),
      icon: FileText,
      color: 'bg-green-600',
      path: '/publications'
    },
    {
      title: t('teaching'),
      description: t('teachingDescription'),
      icon: GraduationCap,
      color: 'bg-purple-600',
      path: '/teaching'
    },
    {
      title: t('news'),
      description: t('newsDescription'),
      icon: Newspaper,
      color: 'bg-orange-600',
      path: '/news'
    }
  ];

  const stats = [
    { number: '30+', label: t('yearsOfExperience'), icon: Award },
    { number: '150+', label: t('publications'), icon: FileText },
    { number: '600+', label: 'Citações', icon: TrendingUp },
    { number: 'R$ 5M+', label: t('researchFunding'), icon: TrendingUp }
  ];

  const researchAreas = [
    t('processControl'),
    t('industrialSafety'),
    t('wasteManagement'),
    t('greenTechnology')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Prof. <span className="text-gradient">Luís Cláudio</span> Oliveira Lopes
            </h1>
            <p className="text-xl text-academic-blue font-medium mb-4">
              {t('professor')} - {t('chemicalEngineering')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('federalUniversity')}
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            {t('bio')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/research')}
              size="lg"
              className="academic-gradient text-white hover:scale-105 transition-transform"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {t('exploreMyResearch')}
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white"
            >
              {t('contactMe')}
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Work Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            {t('exploreMyAcademicWork')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicSections.map((section, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(section.path)}
              >
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Button variant="ghost" size="sm" className="text-academic-blue">
                    {t('goTo')} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              {t('researchHighlights')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('researchFocus')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {researchAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/research')}
              size="lg"
              className="academic-gradient text-white"
            >
              {t('exploreMyResearch')}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-academic-blue to-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-academic-blue">
            <Users className="h-16 w-16 text-academic-blue mx-auto mb-6" />
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              {t('interestedInCollaboration')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novas colaborações e oportunidades de pesquisa. Entre em contato para discutir possíveis projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="academic-gradient text-white"
              >
                {t('contactMe')}
              </Button>
              <Button 
                onClick={() => navigate('/meeting')}
                variant="outline"
                size="lg"
                className="border-academic-blue text-academic-blue"
              >
                {t('requestMeeting')}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AcademicHomepage;
