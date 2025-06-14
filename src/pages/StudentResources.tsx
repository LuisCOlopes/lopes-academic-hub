
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Code, Video, GraduationCap, Download, ExternalLink, Youtube } from 'lucide-react';

const StudentResources = () => {
  const { t } = useLanguage();

  const processControlVideos = [
    {
      title: t('videoControlIntro'),
      description: t('videoControlIntroDesc'),
      url: 'https://youtu.be/94AG13FOuLE',
      videoId: '94AG13FOuLE'
    },
    {
      title: t('videoClassification'),
      description: t('videoClassificationDesc'),
      url: 'https://youtu.be/zN5l9xt7J4Y',
      videoId: 'zN5l9xt7J4Y'
    },
    {
      title: t('videoSelectiveControl'),
      description: t('videoSelectiveControlDesc'),
      url: 'https://youtu.be/_AOhsOwpA8E',
      videoId: '_AOhsOwpA8E'
    },
    {
      title: t('videoCascadeRatio'),
      description: t('videoCascadeRatioDesc'),
      url: 'https://youtu.be/zDUU55n4CBA',
      videoId: 'zDUU55n4CBA'
    },
    {
      title: t('videoFeedforward'),
      description: t('videoFeedforwardDesc'),
      url: 'https://youtu.be/yU85HXzb8uw',
      videoId: 'yU85HXzb8uw'
    }
  ];

  const instrumentationVideos = [
    {
      title: t('videoInstrumentationIntro'),
      description: t('videoInstrumentationIntroDesc'),
      url: 'https://youtu.be/4FRTXzXPTbA',
      videoId: '4FRTXzXPTbA'
    },
    {
      title: t('videoInstrumentationPressure'),
      description: t('videoInstrumentationPressureDesc'),
      url: 'https://youtu.be/_wnUGvXo6Co',
      videoId: '_wnUGvXo6Co'
    },
    {
      title: t('videoInstrumentationTemperature'),
      description: t('videoInstrumentationTemperatureDesc'),
      url: 'https://youtu.be/reQ2ZXUmtv0',
      videoId: 'reQ2ZXUmtv0'
    },
    {
      title: t('videoInstrumentationFlow'),
      description: t('videoInstrumentationFlowDesc'),
      url: 'https://youtu.be/05QptEIRJUI',
      videoId: '05QptEIRJUI'
    },
    {
      title: t('videoInstrumentationLevel'),
      description: t('videoInstrumentationLevelDesc'),
      url: 'https://youtu.be/wzDM3aQqOxg',
      videoId: 'wzDM3aQqOxg'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('educationalMaterialTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('educationalMaterialSubtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {/* Course Notes Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('courseNotes')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('processControl')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('processControlDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>2.4 MB</span>
                    <span className="mx-2">•</span>
                    <span>156 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('download')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('modelingSimulation')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('modelingSimulationDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>1.8 MB</span>
                    <span className="mx-2">•</span>
                    <span>89 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('download')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('processOptimization')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('processOptimizationDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>2.1 MB</span>
                    <span className="mx-2">•</span>
                    <span>145 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('download')}
                  </Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Computational Codes Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('computationalCodesTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('scilabCodes')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('scilabCodesDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">GitHub</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>Scripts de simulação</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-academic-blue text-academic-blue">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    {t('seeOnGitHub')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('pythonScripts')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('pythonScriptsDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">GitHub</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>Códigos de otimização</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-academic-blue text-academic-blue">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    {t('seeOnGitHub')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('aveva')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('avevaDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">ZIP</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>3.2 MB</span>
                    <span className="mx-2">•</span>
                    <span>78 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('download')}
                  </Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Educational Videos Section - Controle de Processos */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-600 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('educationalVideos')} - Controle de Processos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {processControlVideos.map((video, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {video.description}
                      </p>
                    </div>
                    <Badge variant="outline">YouTube</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>Vídeo educacional</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <Youtube className="h-4 w-4 mr-1" />
                      {t('watch')}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Educational Videos Section - Instrumentação */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-600 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('educationalVideos')} - Instrumentação
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {instrumentationVideos.map((video, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {video.description}
                      </p>
                    </div>
                    <Badge variant="outline">YouTube</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>Vídeo educacional</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <Youtube className="h-4 w-4 mr-1" />
                      {t('watch')}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Mini-courses Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t('minicourses')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('advancedProcessControl')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('advancedProcessControlDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>5.2 MB</span>
                    <span className="mx-2">•</span>
                    <span>92 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('material')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('pythonForEngineers')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('pythonForEngineersDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>3.8 MB</span>
                    <span className="mx-2">•</span>
                    <span>156 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('material')}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t('energyTransition')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t('energyTransitionDescription')}
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span>4.1 MB</span>
                    <span className="mx-2">•</span>
                    <span>67 downloads</span>
                  </div>
                  <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                    <Download className="h-4 w-4 mr-1" />
                    {t('material')}
                  </Button>
                </div>
              </Card>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('usagePolicy')}
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>• {t('educationalPurpose')}</p>
            <p>• {t('citeSource')}</p>
            <p>• {t('commercialUse')}</p>
            <p>• {t('reportIssues')} lcol@ufu.br</p>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default StudentResources;
