
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, FileText, Video, Calculator } from 'lucide-react';

const Material = () => {
  const { t } = useLanguage();

  const materials = [
    {
      category: t('courseNotes'),
      icon: BookOpen,
      items: [
        {
          title: 'Controle de Processos Químicos',
          description: 'Material completo sobre controle PID e controle avançado',
          type: 'PDF',
          size: '2.4 MB',
          downloads: 156
        },
        {
          title: 'Otimização de Processos',
          description: 'Técnicas de otimização aplicadas à engenharia química',
          type: 'PDF',
          size: '1.8 MB',
          downloads: 89
        }
      ]
    },
    {
      category: t('computationalCodesTitle'),
      icon: Calculator,
      items: [
        {
          title: 'Simulação em Scilab',
          description: 'Scripts para simulação de processos químicos',
          type: 'ZIP',
          size: '3.2 MB',
          downloads: 234
        },
        {
          title: 'Controladores PID em Python',
          description: 'Implementação de controladores em Python',
          type: 'ZIP',
          size: '1.1 MB',
          downloads: 167
        }
      ]
    },
    {
      category: t('exercises'),
      icon: FileText,
      items: [
        {
          title: 'Lista de Exercícios - Controle',
          description: 'Problemas resolvidos e propostos',
          type: 'PDF',
          size: '1.5 MB',
          downloads: 203
        },
        {
          title: 'Estudos de Caso',
          description: 'Casos práticos da indústria química',
          type: 'PDF',
          size: '2.1 MB',
          downloads: 145
        }
      ]
    },
    {
      category: t('educationalVideos'),
      icon: Video,
      items: [
        {
          title: 'Introdução ao Controle de Processos',
          description: 'Série de vídeos sobre fundamentos',
          type: 'MP4',
          size: '450 MB',
          downloads: 312
        }
      ]
    }
  ];

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

              <div className="grid md:grid-cols-2 gap-4">
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
                      <div className="text-xs text-gray-500">
                        <span>{item.size}</span>
                        <span className="mx-2">•</span>
                        <span>{item.downloads} downloads</span>
                      </div>
                      <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                        <Download className="h-4 w-4 mr-1" />
                        {t('download')}
                      </Button>
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
