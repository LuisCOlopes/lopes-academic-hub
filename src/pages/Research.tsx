
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Cpu, Shield, Settings, BookOpen, Users, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const researchAreas = [
    {
      title: t('processControlArea'),
      description: t('processControlDescription'),
      icon: <Settings className="h-8 w-8" />,
      color: 'bg-blue-500'
    },
    {
      title: t('optimizationArea'),
      description: t('optimizationDescription'),
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'bg-green-500'
    },
    {
      title: t('safetyArea'),
      description: t('safetyDescription'),
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-red-500'
    }
  ];

  const currentProjects = [
    {
      title: t('autonomousSystemProject'),
      description: t('autonomousSystemDescription'),
      status: t('ongoing'),
      area: t('systemsEngineering')
    },
    {
      title: t('energyTransitionProject'),
      description: t('energyTransitionDescription'),
      status: t('ongoing'),
      area: t('processOptimization')
    },
    {
      title: t('dynamicOperabilityProject'),
      description: t('dynamicOperabilityDescription'),
      status: t('ongoing'),
      area: t('processControl')
    },
    {
      title: t('faultTolerantControlProject'),
      description: t('faultTolerantControlDescription'),
      status: t('ongoing'),
      area: t('faultTolerance')
    },
    {
      title: t('artificialIntelligenceProject'),
      description: t('artificialIntelligenceDescription'),
      status: t('ongoing'),
      area: t('processControl')
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('researchTitle')}
            </h1>
            <p className="text-xl text-ufu-blue">
              {t('researchSubtitle')}
            </p>
          </div>

          {/* Research Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('researchMetrics')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">180+</div>
                <div className="text-gray-600">{t('publications')}</div>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">25+</div>
                <div className="text-gray-600">{t('students')}</div>
              </Card>
              <Card className="p-6 text-center">
                <FlaskConical className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">8</div>
                <div className="text-gray-600">{t('currentProjects')}</div>
              </Card>
              <Card className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-academic-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-academic-blue mb-2">R$ 2M+</div>
                <div className="text-gray-600">{t('funding')}</div>
              </Card>
            </div>
          </section>

          {/* Research Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('researchAreas')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${area.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Current Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('currentProjects')}</h2>
            <div className="space-y-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{project.area}</Badge>
                        <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Collaboration Section */}
          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-r from-academic-blue to-blue-600 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">{t('interestedInCollaboration')}</h2>
                <p className="text-lg mb-6 opacity-90">
                  {t('collaborationDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/contact')}
                    size="lg"
                    className="bg-white text-academic-blue hover:bg-gray-100 hover:scale-105 transition-all"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    {t('contactMe')}
                  </Button>
                  <Button 
                    onClick={() => navigate('/publications')}
                    variant="outline"
                    size="lg"
                    className="border-white text-white bg-transparent hover:bg-white hover:text-academic-blue transition-all"
                  >
                    {t('learnMoreResearch')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
