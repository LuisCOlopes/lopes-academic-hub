
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Code, Video, GraduationCap, Download, ExternalLink } from 'lucide-react';

const StudentResources = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('studentResourcesTitle')}
            </h1>
            <p className="text-xl text-ufu-blue">
              {t('studentResourcesSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Apostilas */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-ufu-blue rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-ufu-navy">{t('handbooks')}</h2>
                  <p className="text-ufu-blue">{t('handbooksDescription')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('processControl')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('processControlDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('download')} PDF
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('modelingSimulation')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('modelingSimulationDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('download')} PDF
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('processOptimization')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('processOptimizationDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('download')} PDF
                  </Button>
                </div>
              </div>
            </Card>

            {/* Códigos Computacionais */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-ufu-teal rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-ufu-navy">{t('computationalCodes')}</h2>
                  <p className="text-ufu-blue">{t('computationalCodesDescription')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('scilabCodes')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('scilabCodesDescription')}</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t('seeOnGitHub')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('pythonScripts')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('pythonScriptsDescription')}</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t('seeOnGitHub')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('aveva')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('avevaDescription')}</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <Download className="mr-2 h-4 w-4" />
                    {t('download')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Vídeos */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-ufu-navy">{t('videos')}</h2>
                  <p className="text-ufu-blue">{t('videosDescription')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('processControlIntro')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('processControlIntroDescription')}</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    {t('watchOnYouTube')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('scilabSimulation')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('scilabSimulationDescription')}</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    {t('watchOnYouTube')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('practicalCases')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('practicalCasesDescription')}</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    {t('watchOnYouTube')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Minicursos */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-ufu-navy rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-ufu-navy">{t('minicourses')}</h2>
                  <p className="text-ufu-blue">{t('minicoursesDescription')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('advancedProcessControl')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('advancedProcessControlDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('material')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('pythonForEngineers')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('pythonForEngineersDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('material')}
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">{t('energyTransition')}</h3>
                  <p className="text-sm text-ufu-blue mb-3">{t('energyTransitionDescription')}</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    {t('material')}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default StudentResources;
