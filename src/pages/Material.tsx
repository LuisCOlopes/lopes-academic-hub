
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, FileText, Video, Calculator, Youtube, Info } from 'lucide-react';
import { useDownload } from '@/hooks/useDownload';
import { validateYouTubeUrl } from '@/utils/downloadUtils';

const Material = () => {
  const { t } = useLanguage();
  const { handleDownload, isDownloading } = useDownload();

  const materials = [
    {
      category: t('courseNotes'),
      icon: BookOpen,
      color: 'bg-blue-500',
      items: [
        {
          title: t('processControl'),
          description: t('processControlDescription'),
          type: 'PDF',
          size: '3.2 MB',
          downloads: 1256,
          downloadKey: 'material-courseNotes',
          itemNumber: 1
        },
        {
          title: t('processOptimization'),
          description: t('processOptimizationDescription'),
          type: 'PDF',
          size: '2.8 MB',
          downloads: 892,
          downloadKey: 'material-courseNotes',
          itemNumber: 2
        },
        {
          title: t('modelingSimulation'),
          description: t('modelingSimulationDescription'),
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
      color: 'bg-green-500',
      items: [
        {
          title: t('scilabCodes'),
          description: t('scilabCodesDescription'),
          type: 'ZIP',
          size: '5.2 MB',
          downloads: 1134,
          downloadKey: 'material-computationalCodes',
          itemNumber: 1
        },
        {
          title: t('pythonScripts'),
          description: t('pythonScriptsDescription'),
          type: 'ZIP',
          size: '2.1 MB',
          downloads: 967,
          downloadKey: 'material-computationalCodes',
          itemNumber: 2
        },
        {
          title: t('aveva'),
          description: t('avevaDescription'),
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
      color: 'bg-purple-500',
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
          title: t('practicalCases'),
          description: t('practicalCasesDescription'),
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
      color: 'bg-red-500',
      items: [
        {
          title: t('videoControlIntro'),
          description: t('videoControlIntroDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/94AG13FOuLE',
          videoId: '94AG13FOuLE'
        },
        {
          title: t('videoClassification'),
          description: t('videoClassificationDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/zN5l9xt7J4Y',
          videoId: 'zN5l9xt7J4Y'
        },
        {
          title: t('videoSelectiveControl'),
          description: t('videoSelectiveControlDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/_AOhsOwpA8E',
          videoId: '_AOhsOwpA8E'
        },
        {
          title: t('videoCascadeRatio'),
          description: t('videoCascadeRatioDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/zDUU55n4CBA',
          videoId: 'zDUU55n4CBA'
        },
        {
          title: t('videoFeedforward'),
          description: t('videoFeedforwardDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/yU85HXzb8uw',
          videoId: 'yU85HXzb8uw'
        },
        {
          title: t('videoInstrumentationIntro'),
          description: t('videoInstrumentationIntroDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/4FRTXzXPTbA',
          videoId: '4FRTXzXPTbA'
        },
        {
          title: t('videoInstrumentationPressure'),
          description: t('videoInstrumentationPressureDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/_wnUGvXo6Co',
          videoId: '_wnUGvXo6Co'
        },
        {
          title: t('videoInstrumentationTemperature'),
          description: t('videoInstrumentationTemperatureDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/reQ2ZXUmtv0',
          videoId: 'reQ2ZXUmtv0'
        },
        {
          title: t('videoInstrumentationFlow'),
          description: t('videoInstrumentationFlowDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/05QptEIRJUI',
          videoId: '05QptEIRJUI'
        },
        {
          title: t('videoInstrumentationLevel'),
          description: t('videoInstrumentationLevelDesc'),
          type: 'YouTube',
          url: 'https://youtu.be/wzDM3aQqOxg',
          videoId: 'wzDM3aQqOxg'
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              {t('materialTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('materialSubtitle')}
            </p>
          </div>

          {/* Materials Grid */}
          <div className="space-y-12">
            {materials.map((category, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.color} text-white shadow-md`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-gray-800">
                        {category.category}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">
                        {category.items.length} {category.items.length === 1 ? 'item' : 'itens'} disponível{category.items.length === 1 ? '' : 's'}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-300 border hover:border-gray-300 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge 
                              variant="secondary" 
                              className={`${item.type === 'YouTube' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'} font-medium`}
                            >
                              {item.type}
                            </Badge>
                          </div>
                          
                          <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            {item.type === 'YouTube' ? (
                              <>
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <Video className="h-3 w-3" />
                                  <span>Vídeo educacional</span>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="bg-red-600 hover:bg-red-700 text-white shadow-md"
                                  onClick={() => handleYouTubeClick(item.url)}
                                >
                                  <Youtube className="h-4 w-4 mr-2" />
                                  {t('watch')}
                                </Button>
                              </>
                            ) : (
                              <>
                                <div className="text-xs text-gray-500">
                                  <div className="flex items-center gap-1 mb-1">
                                    <FileText className="h-3 w-3" />
                                    <span>{item.size}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Download className="h-3 w-3" />
                                    <span>{item.downloads} downloads</span>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                                  onClick={() => handleDownload(item.downloadKey, item.itemNumber)}
                                  disabled={isDownloading}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  {isDownloading ? 'Baixando...' : t('download')}
                                </Button>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Policy Section */}
          <Card className="mt-16 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('usagePolicy')}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-700">{t('educationalPurpose')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-700">{t('citeSource')}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-700">{t('commercialUse')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-700">
                          {t('reportIssues')} <a href="mailto:lcol@ufu.br" className="text-blue-600 hover:text-blue-800 font-medium">lcol@ufu.br</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Material;
