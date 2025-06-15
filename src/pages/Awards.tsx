import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy, ExternalLink, Medal, Star } from 'lucide-react';

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
      year: '2020',
      title: 'Menção Honrosa - Orientação de TCC',
      organization: 'Faculdade de Engenharia Química - UFU',
      description: 'Reconhecimento pela excelência na orientação de Trabalho de Conclusão de Curso',
      type: 'teaching'
    },
    {
      year: '2018',
      title: 'Prêmio de Excelência em Ensino',
      organization: 'Universidade Federal de Uberlândia',
      description: 'Reconhecimento pela dedicação e inovação no ensino de engenharia química',
      type: 'teaching'
    },
    {
      year: '2015',
      title: 'Melhor Trabalho em Controle de Processos',
      organization: 'COBEQ - Congresso Brasileiro de Engenharia Química',
      description: 'Trabalho premiado em sessão técnica de controle de processos químicos',
      type: 'research'
    },
    {
      year: '2012',
      title: 'Prêmio Chemtech de Incentivo à Pesquisa',
      organization: 'ABEQ - Chemtech',
      description: 'Reconhecimento em Simulação, Otimização e Controle de Processos',
      type: 'research'
    },
    {
      year: '2010',
      title: 'Bolsa de Produtividade em Pesquisa',
      organization: 'CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      description: 'Reconhecimento pela produtividade e excelência em pesquisa científica',
      type: 'fellowship'
    },
    {
      year: '2008',
      title: 'Prêmio Jovem Pesquisador',
      organization: 'ABEQ - Associação Brasileira de Engenharia Química',
      description: 'Reconhecimento como jovem pesquisador promissor na área de engenharia química',
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
      year: '2005',
      title: 'Melhor Apresentação Oral',
      organization: 'ENBEQ - Encontro Brasileiro de Engenharia Química',
      description: 'Reconhecimento pela qualidade da apresentação em congresso nacional',
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

  const recognitions = [
    {
      title: 'Membro do Conselho Editorial',
      organization: 'Revista Brasileira de Engenharia Química',
      period: '2020 - presente',
      description: 'Participação no conselho editorial da principal revista da área no Brasil'
    },
    {
      title: 'Revisor Ad Hoc',
      organization: 'Chemical Engineering Science, Industrial & Engineering Chemistry Research',
      period: '2015 - presente',
      description: 'Revisor de artigos científicos em periódicos internacionais de alto impacto'
    },
    {
      title: 'Coordenador de Área',
      organization: 'CAPES - Engenharia Química',
      period: '2018 - 2022',
      description: 'Coordenação de área na avaliação de programas de pós-graduação'
    },
    {
      title: 'Membro de Comitê Científico',
      organization: 'COBEQ, ENBEQ, PSE',
      period: '2010 - presente',
      description: 'Participação em comitês científicos de congressos nacionais e internacionais'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'teaching':
        return <Award className="h-5 w-5" />;
      case 'research':
        return <Trophy className="h-5 w-5" />;
      case 'fellowship':
        return <Medal className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
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
            {t('awardsTitle')}
          </h1>
          <p className="text-lg text-ufu-blue">
            {t('awardsSubtitle')}
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {t('awardsAndDistinctions')}
          </h2>
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

        {/* Recognitions Section */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
            {t('recognitionsAndServices')}
          </h2>
          <div className="grid gap-6">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ufu-teal rounded-lg flex items-center justify-center text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-ufu-navy">
                        {recognition.title}
                      </h3>
                      <Badge variant="outline">{recognition.period}</Badge>
                    </div>
                    
                    <p className="text-ufu-blue font-medium mb-2">
                      {recognition.organization}
                    </p>
                    
                    <p className="text-gray-600">
                      {recognition.description}
                    </p>
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

export default Awards;
