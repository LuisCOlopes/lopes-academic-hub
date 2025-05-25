
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, FileText, Calendar, Newspaper, Contact } from 'lucide-react';

const AcademicHomepage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const getWelcomeTitle = () => {
    const currentLang = localStorage.getItem('preferred-language') || 'pt';
    switch (currentLang) {
      case 'en':
        return 'Welcome to my Academic Hub';
      case 'es':
        return 'Bienvenido a mi Centro Académico';
      default:
        return 'Bem-vindo ao meu Hub Acadêmico';
    }
  };

  const getWelcomeDescription = () => {
    const currentLang = localStorage.getItem('preferred-language') || 'pt';
    switch (currentLang) {
      case 'en':
        return 'Professor of Chemical Engineering at the Federal University of Uberlândia, dedicated to advancing knowledge in sustainable industrial processes and chemical engineering education.';
      case 'es':
        return 'Profesor de Ingeniería Química en la Universidad Federal de Uberlândia, dedicado a avanzar el conocimiento en procesos industriales sostenibles y educación en ingeniería química.';
      default:
        return 'Professor de Engenharia Química na Universidade Federal de Uberlândia, dedicado ao avanço do conhecimento em processos industriais sustentáveis e educação em engenharia química.';
    }
  };

  const getLearnMoreText = () => {
    const currentLang = localStorage.getItem('preferred-language') || 'pt';
    switch (currentLang) {
      case 'en':
        return 'Learn More About Me';
      case 'es':
        return 'Conoce Más Sobre Mí';
      default:
        return 'Saiba Mais Sobre Mim';
    }
  };

  const getContactText = () => {
    const currentLang = localStorage.getItem('preferred-language') || 'pt';
    switch (currentLang) {
      case 'en':
        return 'Get in Touch';
      case 'es':
        return 'Ponte en Contacto';
      default:
        return 'Entre em Contato';
    }
  };

  const featuredSections = [
    {
      title: t('research'),
      description: 'Explore my research in chemical engineering and sustainable processes',
      icon: BookOpen,
      url: '/research',
      color: 'bg-blue-500'
    },
    {
      title: t('publications'),
      description: 'Latest publications and academic contributions',
      icon: FileText,
      url: '/publications',
      color: 'bg-green-500'
    },
    {
      title: t('teaching'),
      description: 'Courses, resources, and educational materials',
      icon: Users,
      url: '/teaching',
      color: 'bg-purple-500'
    },
    {
      title: 'Recent News',
      description: 'Latest updates and announcements',
      icon: Newspaper,
      url: '/news',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ufu-navy to-ufu-blue text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-ufu-light">
                {getWelcomeTitle()}
              </h1>
              <p className="text-xl text-ufu-light mb-8 leading-relaxed opacity-90">
                {getWelcomeDescription()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/about')}
                  size="lg"
                  variant="secondary"
                  className="bg-ufu-light text-ufu-navy hover:bg-white"
                >
                  {getLearnMoreText()}
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  size="lg"
                  variant="outline"
                  className="border-ufu-light text-ufu-light hover:bg-ufu-light hover:text-ufu-navy"
                >
                  <Contact className="mr-2 h-5 w-5" />
                  {getContactText()}
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-white/10 backdrop-blur-sm p-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face"
                    alt="Prof. Luís Cláudio"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Explore My Academic Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSections.map((section, index) => (
              <Card 
                key={section.title}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(section.url)}
              >
                <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>
                <Button variant="ghost" size="sm" className="text-academic-blue hover:text-academic-blue-dark">
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Research Highlights
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                My research focuses on sustainable chemical processes, optimization of industrial 
                operations, and the development of environmentally friendly technologies for 
                the chemical industry.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                  Process Optimization and Control
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                  Sustainable Chemical Engineering
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                  Industrial Waste Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                  Green Technology Development
                </li>
              </ul>
              <Button 
                onClick={() => navigate('/research')}
                className="mt-6 academic-gradient text-white"
              >
                Explore My Research
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop"
                alt="Research Laboratory"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-6 bg-ufu-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-ufu-navy mb-2">25+</div>
              <div className="text-ufu-navy">Years of Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-ufu-navy mb-2">80+</div>
              <div className="text-ufu-navy">Publications</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-ufu-navy mb-2">150+</div>
              <div className="text-ufu-navy">Students Mentored</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-ufu-navy mb-2">R$ 8M+</div>
              <div className="text-ufu-navy">Research Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-ufu-navy text-ufu-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            I'm always open to discussing research opportunities, consulting projects, 
            and academic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              variant="secondary"
              className="bg-ufu-light text-ufu-navy hover:bg-white"
            >
              <Contact className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              onClick={() => navigate('/meeting')}
              size="lg"
              variant="outline"
              className="border-ufu-light text-ufu-light hover:bg-ufu-light hover:text-ufu-navy"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicHomepage;
