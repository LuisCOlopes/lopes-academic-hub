
import React from 'react';
import { Link } from 'react-router-dom';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, MessageCircle, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';

const Community = () => {
  const { t } = useLanguage();

  const communityInitiatives = [
    {
      title: 'Projeto Proteger-se',
      description: 'Projeto de extensão com mais de 7.000 pessoas atendidas focado em segurança e proteção',
      participants: '7000+',
      status: 'active',
      type: 'Extensão'
    },
    {
      title: 'Programa de Mentoria Acadêmica',
      description: 'Mentoria para estudantes de graduação e pós-graduação em engenharia química',
      participants: '150+',
      status: 'active',
      type: 'Mentoria'
    },
    {
      title: 'Seminários de Pesquisa',
      description: 'Seminários mensais sobre avanços em engenharia de processos químicos',
      participants: '200+',
      status: 'active',
      type: 'Evento'
    }
  ];

  const associations = [
    {
      name: 'ABEQ - Associação Brasileira de Engenharia Química',
      type: 'Associação Nacional',
      country: 'Brasil',
      url: 'https://abeq.org.br/',
      image: '/lovable-uploads/logo-abeq.png'
    },
    {
      name: 'IEEE - Institute of Electrical and Electronics Engineers',
      type: 'Associação Internacional',
      country: 'Internacional',
      url: 'https://www.ieee.org/',
      image: '/lovable-uploads/ieee.png'
    },
    {
      name: 'IEEE Control System Society',
      type: 'Sociedade Técnica',
      country: 'Internacional',
      url: 'https://www.ieeecss.org/'
    },
    {
      name: 'SIAM - Society for Industrial and Applied Mathematics',
      type: 'Sociedade Científica',
      country: 'Internacional',
      url: 'https://www.siam.org/'
    },
    {
      name: 'ABENGE - Associação Brasileira de Educação em Engenharia',
      type: 'Associação Educacional',
      country: 'Brasil',
      url: 'https://www.abenge.org.br/'
    },
    {
      name: 'AIChE - American Institute of Chemical Engineers',
      type: 'Instituto Profissional',
      country: 'Internacional',
      url: 'https://www.aiche.org/'
    },
    {
      name: 'IFAC - International Federation of Automatic Control',
      type: 'Federação Internacional',
      country: 'Internacional',
      url: 'https://www.ifac-control.org'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('communityTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('communitySubtitle')}
          </p>
        </div>

        {/* Community Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">7000+</div>
            <div className="text-sm text-gray-600">{t('peopleImpacted')}</div>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">{t('activePartnerships')}</div>
          </Card>
          <Card className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">{t('eventsOrganized')}</div>
          </Card>
          <Card className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">{t('resourcesShared')}</div>
          </Card>
        </div>

        {/* Community Initiatives */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('communityInitiatives')}
          </h2>
          <div className="grid gap-6">
            {communityInitiatives.map((initiative, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {initiative.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{initiative.type}</Badge>
                      <span className="text-sm text-gray-500">
                        {initiative.participants} {t('participants')}
                      </span>
                    </div>
                  </div>
                  <Badge className={initiative.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                    {initiative.status === 'active' ? t('active') : t('completed')}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link to="/contact">{t('contact')}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Associations */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {t('partnershipsAndCollaborations')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {associations.map((association, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  {association.image && (
                    <div className="flex justify-center mb-3">
                      <img 
                        src={association.image} 
                        alt={association.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {association.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{association.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    📍 {association.country}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href={association.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-academic-blue hover:text-academic-blue/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visitar site
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {t('howToParticipate')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('joinAcademicCommunity')}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <Calendar className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">{t('events')}</h3>
              <p className="text-sm text-gray-600">{t('participateInSeminars')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Users className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">{t('collaboration')}</h3>
              <p className="text-sm text-gray-600">{t('collaborateInProjects')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Award className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">{t('mentoring')}</h3>
              <p className="text-sm text-gray-600">{t('receiveMentoring')}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button className="mr-4" asChild>
              <Link to="/contact">{t('contactUs')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Community;
