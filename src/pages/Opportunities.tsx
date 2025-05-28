
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, BookOpen, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Opportunities = () => {
  const { t } = useLanguage();

  const getCurrentLanguage = () => {
    return localStorage.getItem('preferred-language') || 'pt';
  };

  const getContent = () => {
    const lang = getCurrentLanguage();
    
    const content = {
      pt: {
        title: 'Oportunidades',
        subtitle: 'Oportunidades de pesquisa, bolsas e colaboração',
        currentOpenings: 'Oportunidades Atuais',
        scholarships: 'Bolsas de Estudo',
        requirements: 'Requisitos',
        howToApply: 'Como Candidatar-se',
        applyNow: 'Candidatar-se Agora',
        learnMore: 'Saiba Mais',
        
        // Research Opportunities
        researchOpportunities: [
          {
            title: 'Sistema Autônomo de Separação de Sólidos Gerados na Perfuração - Rota 1',
            description: 'Projeto conceitual de um sistema autônomo para separação de sólidos na perfuração de poços',
            duration: '730 dias corridos',
            funding: 'R$ 1.469.712,01',
            partner: 'PETROBRAS',
            status: 'Em andamento'
          },
          {
            title: 'Otimização da Separação sólido-líquido na perfuração de poços',
            description: 'Automação do sistema extrator de sólidos gerados em perfuração offshore',
            duration: '2022-2025',
            funding: 'R$ 1.594.172,60',
            partner: 'PETROBRAS',
            status: 'Em andamento'
          },
          {
            title: 'Transição Energética: Coprocessamento e Eletrificação',
            description: 'Pesquisa em tecnologias de transição energética',
            duration: 'Em andamento',
            funding: 'CNPq, FAPEMIG',
            partner: 'CNPq, FAPEMIG',
            status: 'Em andamento'
          }
        ],
        
        // Scholarships
        scholarshipPrograms: [
          {
            title: 'Bolsas CNPq e CAPES',
            level: 'Graduação e Pós-graduação',
            description: 'Bolsas de iniciação científica, mestrado e doutorado disponíveis através dos programas CNPq e CAPES',
            duration: 'Conforme programa',
            requirements: [
              'Estar matriculado na UFU ou ser aprovado no processo seletivo',
              'Ter bom desempenho acadêmico',
              'Dedicação integral para bolsas de pós-graduação'
            ],
            applicationProcess: 'Candidaturas ocorrem duas vezes por ano conforme calendário do Processo Seletivo do Programa de Pós-graduação em Engenharia Química da FEQUI',
            link: 'https://ppgeq.feq.ufu.br'
          }
        ]
      },
      en: {
        title: 'Opportunities',
        subtitle: 'Research opportunities, scholarships, and collaboration',
        currentOpenings: 'Current Openings',
        scholarships: 'Scholarships',
        requirements: 'Requirements',
        howToApply: 'How to Apply',
        applyNow: 'Apply Now',
        learnMore: 'Learn More',
        
        // Research Opportunities
        researchOpportunities: [
          {
            title: 'Autonomous System for Separation of Drilling Generated Solids - Route 1',
            description: 'Conceptual design of an autonomous system for solid separation in well drilling',
            duration: '730 calendar days',
            funding: 'R$ 1,469,712.01',
            partner: 'PETROBRAS',
            status: 'Ongoing'
          },
          {
            title: 'Optimization of Solid-Liquid Separation in Oil and Gas Well Drilling',
            description: 'Automation of the solid extractor system generated in offshore drilling',
            duration: '2022-2025',
            funding: 'R$ 1,594,172.60',
            partner: 'PETROBRAS',
            status: 'Ongoing'
          },
          {
            title: 'Energy Transition: Co-processing and Electrification',
            description: 'Research in energy transition technologies',
            duration: 'Ongoing',
            funding: 'CNPq, FAPEMIG',
            partner: 'CNPq, FAPEMIG',
            status: 'Ongoing'
          }
        ],
        
        // Scholarships
        scholarshipPrograms: [
          {
            title: 'CNPq and CAPES Scholarships',
            level: 'Undergraduate and Graduate',
            description: 'Scientific initiation, masters and doctoral scholarships available through CNPq and CAPES programs',
            duration: 'According to program',
            requirements: [
              'Be enrolled at UFU or approved in the selection process',
              'Have good academic performance',
              'Full-time dedication for graduate scholarships'
            ],
            applicationProcess: 'Applications occur twice a year according to the calendar of the Selection Process of the Graduate Program in Chemical Engineering at FEQUI',
            link: 'https://ppgeq.feq.ufu.br'
          }
        ]
      },
      es: {
        title: 'Oportunidades',
        subtitle: 'Oportunidades de investigación, becas y colaboración',
        currentOpenings: 'Oportunidades Actuales',
        scholarships: 'Becas',
        requirements: 'Requisitos',
        howToApply: 'Cómo Aplicar',
        applyNow: 'Aplicar Ahora',
        learnMore: 'Saber Más',
        
        // Research Opportunities
        researchOpportunities: [
          {
            title: 'Sistema Autónomo de Separación de Sólidos Generados en Perforación - Ruta 1',
            description: 'Diseño conceptual de un sistema autónomo para separación de sólidos en perforación de pozos',
            duration: '730 días calendario',
            funding: 'R$ 1.469.712,01',
            partner: 'PETROBRAS',
            status: 'En curso'
          },
          {
            title: 'Optimización de Separación Sólido-Líquido en Perforación de Pozos',
            description: 'Automatización del sistema extractor de sólidos generados en perforación offshore',
            duration: '2022-2025',
            funding: 'R$ 1.594.172,60',
            partner: 'PETROBRAS',
            status: 'En curso'
          },
          {
            title: 'Transición Energética: Coprocesamiento y Electrificación',
            description: 'Investigación en tecnologías de transición energética',
            duration: 'En curso',
            funding: 'CNPq, FAPEMIG',
            partner: 'CNPq, FAPEMIG',
            status: 'En curso'
          }
        ],
        
        // Scholarships
        scholarshipPrograms: [
          {
            title: 'Becas CNPq y CAPES',
            level: 'Pregrado y Posgrado',
            description: 'Becas de iniciación científica, maestría y doctorado disponibles a través de programas CNPq y CAPES',
            duration: 'Según programa',
            requirements: [
              'Estar matriculado en UFU o ser aprobado en el proceso de selección',
              'Tener buen rendimiento académico',
              'Dedicación completa para becas de posgrado'
            ],
            applicationProcess: 'Las candidaturas ocurren dos veces al año según el calendario del Proceso de Selección del Programa de Posgrado en Ingeniería Química de FEQUI',
            link: 'https://ppgeq.feq.ufu.br'
          }
        ]
      }
    };

    return content[lang] || content.pt;
  };

  const content = getContent();

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Current Research Openings */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {content.currentOpenings}
          </h2>
          <div className="grid gap-6">
            {content.researchOpportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {opportunity.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {opportunity.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {opportunity.funding}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {opportunity.partner}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {opportunity.status}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  {content.learnMore}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholarships Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            {content.scholarships}
          </h2>
          <div className="grid gap-6">
            {content.scholarshipPrograms.map((program, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-academic-blue rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <Badge variant="outline" className="mb-3">
                      {program.level}
                    </Badge>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {content.requirements}:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {program.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {content.howToApply}:
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {program.applicationProcess}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(program.link, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {content.applyNow}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Opportunities;
