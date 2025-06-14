import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const getEducationContent = () => {
    const education = {
      pt: {
        phd: 'Doutorado em Engenharia Química',
        phdInstitution: 'Lehigh University (EUA), 2000',
        specialization: 'Perfezionamento em Ingegneria Chimica e Processi Petrolchimici',
        specializationInstitution: 'Sogesta SpA, Università di Bologna (Itália), 1991',
        msc: 'Mestrado em Engenharia Química',
        mscInstitution: 'COPPE/Universidade Federal do Rio de Janeiro, 1990',
        bsc: 'Graduação em Engenharia Química',
        bscInstitution: 'Universidade Federal da Bahia, 1987'
      },
      en: {
        phd: 'Ph.D. in Chemical Engineering',
        phdInstitution: 'Lehigh University (USA), 2000',
        specialization: 'Specialization in Chemical Engineering and Petrochemical Processes',
        specializationInstitution: 'Sogesta SpA, University of Bologna (Italy), 1991',
        msc: 'M.Sc. in Chemical Engineering',
        mscInstitution: 'COPPE/Federal University of Rio de Janeiro, 1990',
        bsc: 'B.Sc. in Chemical Engineering',
        bscInstitution: 'Federal University of Bahia, 1987'
      },
      es: {
        phd: 'Doctorado en Ingeniería Química',
        phdInstitution: 'Lehigh University (EUA), 2000',
        specialization: 'Especialización en Ingeniería Química y Procesos Petroquímicos',
        specializationInstitution: 'Sogesta SpA, Universidad de Bologna (Italia), 1991',
        msc: 'Maestría en Ingeniería Química',
        mscInstitution: 'COPPE/Universidad Federal de Río de Janeiro, 1990',
        bsc: 'Licenciatura en Ingeniería Química',
        bscInstitution: 'Universidad Federal de Bahia, 1987'
      }
    };

    return education[language] || education.pt;
  };

  const getResearchInterests = () => {
    const interests = {
      pt: [
        'Engenharia e Otimização de Processos',
        'Processos Químicos Sustentáveis',
        'Desenvolvimento de Tecnologia Autônoma',
        'Controle e Automação de Processos',
        'Transição Energética',
        'Segurança de Processos e Controle Tolerante'
      ],
      en: [
        'Process Engineering & Optimization',
        'Sustainable Chemical Processes',
        'Autonomous Technology Development',
        'Process Control & Automation',
        'Energy Transition',
        'Process Safety & Tolerant Control'
      ],
      es: [
        'Ingeniería y Optimización de Procesos',
        'Procesos Químicos Sostenibles',
        'Desarrollo de Tecnología Autónoma',
        'Control y Automatización de Procesos',
        'Transición Energética',
        'Seguridad de Procesos y Control Tolerante'
      ]
    };

    return interests[language] || interests.pt;
  };

  const getBiographyText = () => {
    const bio = {
      pt: 'Professor Titular de Engenharia Química na Universidade Federal de Uberlândia (UFU), especializado em controle de processos, otimização e tecnologias sustentáveis. Com mais de 25 anos de experiência acadêmica, dedica-se ao desenvolvimento de soluções inovadoras para a indústria química e ao ensino de excelência.',
      en: 'Full Professor of Chemical Engineering at the Federal University of Uberlândia (UFU), specialized in process control, optimization and sustainable technologies. With over 25 years of academic experience, dedicated to developing innovative solutions for the chemical industry and excellence in teaching.',
      es: 'Profesor Titular de Ingeniería Química en la Universidad Federal de Uberlândia (UFU), especializado en control de procesos, optimización y tecnologías sostenibles. Con más de 25 años de experiencia académica, dedicado al desarrollo de soluciones innovadoras para la industria química y la excelencia en la enseñanza.'
    };

    return bio[language] || bio.pt;
  };

  const education = getEducationContent();
  const researchInterests = getResearchInterests();

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
                  {getBiographyText()}
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('education')}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-ufu-navy">{education.phd}</div>
                    <div className="text-ufu-blue">{education.phdInstitution}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{education.specialization}</div>
                    <div className="text-ufu-blue">{education.specializationInstitution}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{education.msc}</div>
                    <div className="text-ufu-blue">{education.mscInstitution}</div>
                  </div>
                  <div>
                    <div className="font-medium text-ufu-navy">{education.bsc}</div>
                    <div className="text-ufu-blue">{education.bscInstitution}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('researchInterests')}</h3>
                <div className="space-y-2">
                  {researchInterests.map((interest, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-ufu-blue rounded-full mr-3"></div>
                      <span className="text-ufu-blue">{interest}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Academic Formation Tree */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-ufu-navy mb-6">Formação Acadêmica</h2>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/96d398a5-52eb-4cbf-a85b-e813132bfd77.png" 
                  alt="Árvore Genealógica Acadêmica" 
                  className="mx-auto max-w-full h-auto rounded-lg"
                />
                <p className="text-sm text-ufu-blue mt-4">Árvore genealógica acadêmica mostrando a linhagem de formação</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default About;
