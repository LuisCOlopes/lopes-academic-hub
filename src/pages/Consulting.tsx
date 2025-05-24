
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

  const clientTypes = [
    {
      type: 'Chemical Manufacturing',
      companies: ['Petrobras', 'Braskem', 'BASF Brazil'],
      projects: 12
    },
    {
      type: 'Pharmaceutical',
      companies: ['Local pharma companies', 'Generic manufacturers'],
      projects: 8
    },
    {
      type: 'Food & Beverage',
      companies: ['Regional food processors', 'Beverage manufacturers'],
      projects: 6
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('consultingTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Professional consulting services for chemical engineering and process optimization
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
                <h4 className="font-medium text-gray-900 mb-3">Key Services:</h4>
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
            Client Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {client.type}
                </h3>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Notable Clients:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {client.companies.map((company, i) => (
                      <li key={i}>• {company}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-academic-blue">
                    {client.projects}
                  </div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12 p-6 bg-gradient-to-r from-academic-blue to-blue-600 text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose My Consulting Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">15+ Years Experience</h3>
              <p className="text-sm opacity-90">Extensive industry and academic background</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Proven Results</h3>
              <p className="text-sm opacity-90">Documented improvements and cost savings</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Innovation Focus</h3>
              <p className="text-sm opacity-90">Cutting-edge solutions and technologies</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Get Started
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to optimize your processes or solve complex engineering challenges? Let's discuss your project requirements.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Request Proposal
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Consulting;
