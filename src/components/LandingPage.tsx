
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { ArrowDown, BookOpen, Contact, FileText } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header with Language Selector */}
      <header className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-4">
                Prof. <span className="text-gradient">Luís Cláudio</span>
              </h1>
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-4">
                Oliveira Lopes
              </h2>
              <p className="text-xl text-academic-blue font-medium mb-2">
                {t('professor')} - {t('chemicalEngineering')}
              </p>
              <p className="text-lg text-gray-600">
                {t('federalUniversity')}
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              {t('bio')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => navigate('/academic')}
                size="lg"
                className="academic-gradient text-white hover:scale-105 transition-transform"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                {t('viewFullProfile')}
              </Button>
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                size="lg"
                className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white"
              >
                <Contact className="mr-2 h-5 w-5" />
                {t('contact')}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full academic-gradient p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                    alt="Prof. Luís Cláudio Oliveira Lopes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <FileText className="h-8 w-8 text-academic-blue" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-academic-blue" />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                {t('contactInfo')}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>📧 lcol@ufu.br</p>
                <p>📞 +55 (34) 3230-9536</p>
                <p>🏢 Faculdade de Engenharia Química</p>
                <p>📍 Uberlândia, MG - Brasil</p>
              </div>
            </Card>

            {/* Research Interests Card */}
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                {t('researchInterests')}
              </h3>
              <div className="space-y-2">
                <span className="inline-block bg-academic-blue text-white px-3 py-1 rounded-full text-sm">
                  Controle de Processos
                </span>
                <br />
                <span className="inline-block bg-academic-blue-light text-white px-3 py-1 rounded-full text-sm">
                  Modelagem e Simulação
                </span>
                <br />
                <span className="inline-block bg-academic-blue-dark text-white px-3 py-1 rounded-full text-sm">
                  Otimização
                </span>
                <br />
                <span className="inline-block bg-academic-blue text-white px-3 py-1 rounded-full text-sm">
                  Operabilidade de Processos
                </span>
                <br />
                <span className="inline-block bg-academic-blue-light text-white px-3 py-1 rounded-full text-sm">
                  Transição Energética
                </span>
              </div>
            </Card>

            {/* Quick Links Card */}
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                Links Relevantes
              </h3>
              <div className="space-y-3">
                <a href="https://www.ufu.br" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  🏛️ Universidade Federal de Uberlândia
                </a>
                <a href="https://feq.ufu.br" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  🏭 FEQUI - Faculdade de Engenharia Química
                </a>
                <a href="https://ppgeq.feq.ufu.br" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  🎓 Programa de Pós-graduação em Engenharia Química
                </a>
                <a href="http://lattes.cnpq.br/9971842873202479" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  📚 Lattes CV
                </a>
                <a href="https://feq.ufu.br/graduacao/engenharia-quimica/corpo-docente" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  📋 Plano de Trabalho Docente
                </a>
                <a href="https://orcid.org/0000-0003-4224-5586" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  🆔 ORCID
                </a>
                <a href="https://www.researchgate.net/profile/Luis-Claudio-Oliveira-Lopes?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  🔬 ResearchGate
                </a>
                <a href="https://scholar.google.com/citations?user=ToR1aUIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" 
                   className="block text-academic-blue hover:text-academic-blue-dark transition-colors">
                  📖 Google Scholar
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
