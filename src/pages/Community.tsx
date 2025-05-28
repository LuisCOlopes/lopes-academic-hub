
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, MessageCircle, Calendar, Award, BookOpen } from 'lucide-react';

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

  const partnerships = [
    {
      name: 'Brazilian Chemical Engineering Society',
      type: 'Sociedade Profissional',
      country: 'Brasil'
    },
    {
      name: 'International Association of Chemical Engineers',
      type: 'Associação Internacional',
      country: 'Internacional'
    },
    {
      name: 'Petrobras Research Network',
      type: 'Parceria Industrial',
      country: 'Brasil'
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
            Construindo conexões e promovendo colaboração na comunidade acadêmica
          </p>
        </div>

        {/* Community Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">7000+</div>
            <div className="text-sm text-gray-600">Pessoas Impactadas</div>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">Parcerias Ativas</div>
          </Card>
          <Card className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Eventos Organizados</div>
          </Card>
          <Card className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-academic-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">Recursos Compartilhados</div>
          </Card>
        </div>

        {/* Community Initiatives */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Iniciativas da Comunidade
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
                        {initiative.participants} participantes
                      </span>
                    </div>
                  </div>
                  <Badge className={initiative.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                    {initiative.status === 'active' ? 'Ativo' : 'Finalizado'}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Saiba Mais</Button>
                  <Button size="sm" variant="outline">Participar</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Parcerias e Colaborações
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {partnership.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{partnership.type}</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  📍 {partnership.country}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Como Participar
          </h2>
          <p className="text-gray-600 mb-6">
            Junte-se à nossa comunidade acadêmica e contribua para o avanço da engenharia química
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <Calendar className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Eventos</h3>
              <p className="text-sm text-gray-600">Participe de seminários e workshops</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Users className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Colaboração</h3>
              <p className="text-sm text-gray-600">Colabore em projetos de pesquisa</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Award className="h-6 w-6 text-academic-blue mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Mentoria</h3>
              <p className="text-sm text-gray-600">Receba ou ofereça mentoria</p>
            </div>
          </div>
          <div className="mt-6">
            <Button className="mr-4">Entre em Contato</Button>
            <Button variant="outline">Saiba Mais</Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Community;
