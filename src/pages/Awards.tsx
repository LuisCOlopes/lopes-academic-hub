
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy, ExternalLink } from 'lucide-react';

const Awards = () => {
  const { t } = useLanguage();

  const awards = [
    {
      year: '2024',
      title: 'Poster Destaque no III PSE-BR',
      organization: 'Process Systems Engineering Brasil',
      description: 'Reconhecimento por pesquisa de destaque em engenharia de sistemas de processos',
      type: 'research',
      location: 'São Paulo'
    },
    {
      year: '2022',
      title: '1º Lugar Dissertação de Mestrado FEELT',
      organization: 'Faculdade de Engenharia Elétrica - UFU',
      description: 'Orientação premiada: "Controle tolerante de quadricópteros em cenários com falhas em atuadores e sensores" - Autor: Kenji Fabiano Ávila Okada',
      type: 'teaching',
      link: 'https://repositorio.ufu.br/handle/123456789/34929',
      details: 'Orientador: Prof. Dr. Aniel Silva de Morais, Coorientador: Prof. Dr. Luís Cláudio Oliveira Lopes'
    },
    {
      year: '2012',
      title: 'Prêmio Chemtech de Incentivo à Pesquisa',
      organization: 'ABEQ - Chemtech',
      description: 'Reconhecimento em Simulação, Otimização e Controle de Processos',
      type: 'research'
    },
    {
      year: '2007',
      title: 'Artigo de Destaque V SNCA',
      organization: 'AINST-IEEE-UFBA',
      description: 'Artigo destacado no V Seminário Nacional de Controle e Automação',
      type: 'research'
    },
    {
      year: '2003',
      title: '2º Melhor Artigo do III Seminário Nacional',
      organization: 'AINST, IEEE e UFBA',
      description: 'Segundo melhor artigo do III Seminário Nacional de Controle e Automação Industrial, Elétrica e de Telecomunicações',
      type: 'research'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'teaching':
        return <Award className="h-5 w-5" />;
      case 'research':
        return <Trophy className="h-5 w-5" />;
      case 'fellowship':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'teaching':
        return 'bg-ufu-blue';
      case 'research':
        return 'bg-ufu-navy';
      case 'fellowship':
        return 'bg-ufu-teal';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
            Prêmios e Reconhecimentos
          </h1>
          <p className="text-lg text-ufu-blue">
            Reconhecimento pela excelência em ensino, pesquisa e serviços profissionais
          </p>
        </div>

        <div className="grid gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${getTypeColor(award.type)} rounded-lg flex items-center justify-center text-white`}>
                  {getTypeIcon(award.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-ufu-navy">
                      {award.title}
                    </h3>
                    <Badge variant="outline">{award.year}</Badge>
                    {award.location && (
                      <Badge variant="secondary">{award.location}</Badge>
                    )}
                  </div>
                  
                  <p className="text-ufu-blue font-medium mb-2">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-600 mb-3">
                    {award.description}
                  </p>

                  {award.details && (
                    <p className="text-sm text-gray-500 mb-3">
                      {award.details}
                    </p>
                  )}

                  {award.link && (
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ufu-blue hover:text-ufu-navy text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Link para download
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Awards;
