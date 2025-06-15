
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, FileText, Video, Calculator, Youtube } from 'lucide-react';
import { useDownload } from '@/hooks/useDownload';
import { validateYouTubeUrl } from '@/utils/downloadUtils';

const Material = () => {
  const { t } = useLanguage();
  const { handleDownload, isDownloading } = useDownload();

  const materials = [
    {
      category: t('courseNotes'),
      icon: BookOpen,
      items: [
        {
          title: 'Controle de Processos Químicos - Apostila Completa',
          description: 'Material completo sobre controle PID, controle avançado e sistemas de controle de processos',
          type: 'PDF',
          size: '3.2 MB',
          downloads: 1256,
          downloadKey: 'material-courseNotes',
          itemNumber: 1
        },
        {
          title: 'Otimização de Processos Químicos',
          description: 'Técnicas de otimização aplicadas à engenharia química e processos industriais',
          type: 'PDF',
          size: '2.8 MB',
          downloads: 892,
          downloadKey: 'material-courseNotes',
          itemNumber: 2
        },
        {
          title: 'Modelagem e Simulação de Processos',
          description: 'Fundamentos de modelagem matemática e simulação computacional',
          type: 'PDF',
          size: '4.1 MB',
          downloads: 756,
          downloadKey: 'material-courseNotes',
          itemNumber: 3
        },
        {
          title: 'Instrumentação e Controle Industrial',
          description: 'Instrumentos de medição e sistemas de controle em plantas industriais',
          type: 'PDF',
          size: '2.5 MB',
          downloads: 634,
          downloadKey: 'material-courseNotes',
          itemNumber: 4
        }
      ]
    },
    {
      category: t('computationalCodesTitle'),
      icon: Calculator,
      items: [
        {
          title: 'Códigos Scilab - Controle de Processos',
          description: 'Scripts completos para simulação e controle de processos químicos',
          type: 'ZIP',
          size: '5.2 MB',
          downloads: 1134,
          downloadKey: 'material-computationalCodes',
          itemNumber: 1
        },
        {
          title: 'Controladores PID em Python',
          description: 'Implementação de controladores PID e algoritmos de sintonia',
          type: 'ZIP',
          size: '2.1 MB',
          downloads: 967,
          downloadKey: 'material-computationalCodes',
          itemNumber: 2
        },
        {
          title: 'Simulação AVEVA - Modelos Industriais',
          description: 'Modelos de processos químicos em ambiente AVEVA',
          type: 'ZIP',
          size: '12.5 MB',
          downloads: 543,
          downloadKey: 'material-computationalCodes',
          itemNumber: 3
        },
        {
          title: 'Algoritmos de Otimização - MATLAB/Python',
          description: 'Códigos para otimização de processos e análise de dados',
          type: 'ZIP',
          size: '3.8 MB',
          downloads: 721,
          downloadKey: 'material-computationalCodes',
          itemNumber: 4
        }
      ]
    },
    {
      category: t('exercises'),
      icon: FileText,
      items: [
        {
          title: 'Lista de Exercícios - Controle de Processos',
          description: 'Problemas resolvidos e propostos com soluções detalhadas',
          type: 'PDF',
          size: '2.3 MB',
          downloads: 1503,
          downloadKey: 'material-exercises',
          itemNumber: 1
        },
        {
          title: 'Estudos de Caso - Indústria Química',
          description: 'Casos práticos de aplicação industrial com análises completas',
          type: 'PDF',
          size: '3.1 MB',
          downloads: 845,
          downloadKey: 'material-exercises',
          itemNumber: 2
        },
        {
          title: 'Exercícios de Simulação Computacional',
          description: 'Problemas práticos para simulação em Scilab e Python',
          type: 'PDF',
          size: '1.9 MB',
          downloads: 672,
          downloadKey: 'material-exercises',
          itemNumber: 3
        }
      ]
    },
    {
      category: t('educationalVideos'),
      icon: Video,
      items: [
        {
          title: 'Controle de Processos Químicos - Introdução - Aula 1',
          description: 'Conceitos fundamentais de controle de processos químicos',
          type: 'YouTube',
          url: 'https://youtu.be/94AG13FOuLE',
          videoId: '94AG13FOuLE'
        },
        {
          title: 'Controle de Processos Químicos - Classificação e Graus de Liberdade - Aula 2',
          description: 'Classificação de sistemas e análise de graus de liberdade',
          type: 'YouTube',
          url: 'https://youtu.be/zN5l9xt7J4Y',
          videoId: 'zN5l9xt7J4Y'
        },
        {
          title: 'Controle de Processos Químicos - Revisão sobre Controle Seletivo',
          description: 'Revisão dos conceitos de controle seletivo',
          type: 'YouTube',
          url: 'https://youtu.be/_AOhsOwpA8E',
          videoId: '_AOhsOwpA8E'
        },
        {
          title: 'Controle de Processos Químicos - Controle Cascata e de Razão',
          description: 'Estratégias de controle cascata e controle de razão',
          type: 'YouTube',
          url: 'https://youtu.be/zDUU55n4CBA',
          videoId: 'zDUU55n4CBA'
        },
        {
          title: 'Controle de Processos Químicos - Controle Feedforward',
          description: 'Implementação e aplicação do controle feedforward',
          type: 'YouTube',
          url: 'https://youtu.be/yU85HXzb8uw',
          videoId: 'yU85HXzb8uw'
        },
        {
          title: 'Instrumentação - parte I - Introdução',
          description: 'Introdução aos conceitos de instrumentação industrial',
          type: 'YouTube',
          url: 'https://youtu.be/4FRTXzXPTbA',
          videoId: '4FRTXzXPTbA'
        },
        {
          title: 'Instrumentação - parte II - Pressão',
          description: 'Medição e controle de pressão em processos industriais',
          type: 'YouTube',
          url: 'https://youtu.be/_wnUGvXo6Co',
          videoId: '_wnUGvXo6Co'
        },
        {
          title: 'Instrumentação - parte III - Temperatura',
          description: 'Instrumentos para medição de temperatura',
          type: 'YouTube',
          url: 'https://youtu.be/reQ2ZXUmtv0',
          videoId: 'reQ2ZXUmtv0'
        },
        {
          title: 'Instrumentação - parte IV - Vazão',
          description: 'Medição de vazão em sistemas industriais',
          type: 'YouTube',
          url: 'https://youtu.be/05QptEIRJUI',
          videoId: '05QptEIRJUI'
        },
        {
          title: 'Instrumentação - parte V - Nível',
          description: 'Instrumentação para medição e controle de nível',
          type: 'YouTube',
          url: 'https://youtu.be/wzDM3aQqOxg',
          videoId: 'wzDM3aQqOxg'
        },
        {
          title: 'Simulação de Processos em Scilab - Tutorial Completo',
          description: 'Tutorial abrangente sobre simulação computacional',
          type: 'YouTube',
          url: 'https://youtu.be/W_4S1V_31-A',
          videoId: 'W_4S1V_31-A'
        },
        {
          title: 'Controladores PID - Teoria e Prática',
          description: 'Implementação prática de controladores PID',
          type: 'YouTube',
          url: 'https://youtu.be/BvEm9WHbO8w',
          videoId: 'BvEm9WHbO8w'
        }
      ]
    }
  ];

  const handleYouTubeClick = (url: string) => {
    if (validateYouTubeUrl(url)) {
      window.open(url, '_blank');
    } else {
      console.error('URL do YouTube inválida:', url);
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('materialTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('materialSubtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {materials.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-academic-blue rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-4 border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                      </div>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {item.type === 'YouTube' ? (
                        <>
                          <div className="text-xs text-gray-500">
                            <span>Vídeo educacional</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => handleYouTubeClick(item.url)}
                          >
                            <Youtube className="h-4 w-4 mr-1" />
                            {t('watch')}
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="text-xs text-gray-500">
                            <span>{item.size}</span>
                            <span className="mx-2">•</span>
                            <span>{item.downloads} downloads</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-academic-blue hover:bg-academic-blue/90"
                            onClick={() => handleDownload(item.downloadKey, item.itemNumber)}
                            disabled={isDownloading}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            {isDownloading ? 'Baixando...' : t('download')}
                          </Button>
                        </>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('usagePolicy')}
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>• {t('educationalPurpose')}</p>
            <p>• {t('citeSource')}</p>
            <p>• {t('commercialUse')}</p>
            <p>• {t('reportIssues')} lclaudio@ufu.br</p>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Material;
