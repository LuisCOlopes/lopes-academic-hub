
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Lightbulb, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

const Consulting = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Process Optimization',
      description: 'Enhance efficiency and reduce costs in chemical manufacturing processes',
      icon: TrendingUp,
      features: ['Performance analysis', 'Bottleneck identification', 'Optimization strategies', 'ROI calculation']
    },
    {
      title: 'Safety Assessment',
      description: 'Comprehensive safety evaluation and risk management for chemical processes',
      icon: Shield,
      features: ['HAZOP studies', 'Risk assessment', 'Safety protocols', 'Compliance review']
    },
    {
      title: 'Technology Transfer',
      description: 'Bridge the gap between laboratory research and industrial implementation',
      icon: Lightbulb,
      features: ['Scale-up studies', 'Process validation', 'Technology evaluation', 'Implementation planning']
    },
    {
      title: 'Sustainability Consulting',
      description: 'Develop environmentally friendly and sustainable chemical processes',
      icon: Building,
      features: ['Green chemistry implementation', 'Waste reduction', 'Energy efficiency', 'Environmental impact assessment']
    }
  ];

  const clientCompanies = [
    {
      name: 'Braskem',
      sector: 'Petroquímica',
      description: 'Maior produtora de resinas termoplásticas das Américas',
      projects: 'Otimização de processos e controle avançado'
    },
    {
      name: 'Souza Cruz',
      sector: 'Indústria de Tabaco',
      description: 'Líder no mercado brasileiro de cigarros',
      projects: 'Sistemas de controle e segurança de processos'
    },
    {
      name: 'Petrobras',
      sector: 'Petróleo e Gás',
      description: 'Empresa integrada de energia',
      projects: 'Controle de sólidos e separação sólido-líquido'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Consultoria
          </h1>
          <p className="text-lg text-gray-600">
            Serviços especializados em engenharia química e otimização de processos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Serviços Principais:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Empresas Clientes
          </h2>
          <div className="grid gap-6">
            {clientCompanies.map((company, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {company.name}
                      </h3>
                      <Badge variant="outline">{company.sector}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      {company.description}
                    </p>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Projetos:</h4>
                      <p className="text-sm text-gray-600">{company.projects}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12 p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Por que escolher nossos serviços de consultoria?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">20+ Anos de Experiência</h3>
              <p className="text-sm opacity-90">Ampla experiência industrial e acadêmica</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Resultados Comprovados</h3>
              <p className="text-sm opacity-90">Melhorias documentadas e economia de custos</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Foco em Inovação</h3>
              <p className="text-sm opacity-90">Soluções e tecnologias de ponta</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mb-6">
            Pronto para otimizar seus processos ou resolver desafios complexos de engenharia? 
            Vamos discutir os requisitos do seu projeto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Agendar Consultoria
            </Button>
            <Button size="lg" variant="outline">
              Solicitar Proposta
            </Button>
            <Button size="lg" variant="outline">
              Ver Casos de Estudo
            </Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Consulting;
