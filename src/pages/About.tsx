
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-ufu-blue">
              {t('aboutSubtitle')}
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-ufu-navy mb-4">{t('biography')}</h2>
              <div className="prose prose-lg text-ufu-blue">
                <p className="mb-4">
                  {t('biographyText')}
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('education')}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-ufu-navy">{t('phdChemical')}</div>
                    <div className="text-ufu-blue">{t('phdInstitution')}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{t('specialization')}</div>
                    <div className="text-ufu-blue">{t('specializationInstitution')}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{t('mscChemical')}</div>
                    <div className="text-ufu-blue">{t('mscInstitution')}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{t('bscChemical')}</div>
                    <div className="text-ufu-blue">{t('bscInstitution')}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('researchInterests')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('processEngineeringOpt')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('sustainableProcesses')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('autonomousTech')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('processControl')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('energyTransition')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                    <span className="text-ufu-blue">{t('processSafety')}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default About;
