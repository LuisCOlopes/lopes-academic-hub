
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const Research = () => {
  const { t, language } = useLanguage();

  const researchProjects = {
    pt: [
      {
        title: "Transição Energética nas Plantas Químicas",
        description: "Estudo da eletrificação e coprocessamento em plantas químicas para transição energética sustentável",
        period: "2025 - Atual",
        status: "Em andamento"
      },
      {
        title: "Operabilidade de Plantas Químicas",
        description: "Desenvolvimento de metodologias para melhorar a operabilidade e eficiência de plantas químicas",
        period: "2024 - Atual",
        status: "Em andamento"
      },
      {
        title: "Sistemas de Controle Preditivo Tolerantes a Falhas",
        description: "Desenvolvimento de sistemas avançados de controle preditivo com tolerância a falhas",
        period: "2007 - Atual",
        status: "Em andamento"
      },
      {
        title: "Sistemas de Controle Distribuído",
        description: "Desenvolvimento de arquiteturas de controle distribuído para processos químicos",
        period: "2011 - 2016",
        status: "Finalizado"
      },
      {
        title: "Inteligência Artificial Aplicada a Segurança de Processos",
        description: "Aplicação de técnicas de IA para melhorar a segurança em processos químicos industriais",
        period: "2010 - 2023",
        status: "Finalizado"
      },
      {
        title: "Controle de Sistemas Híbridos",
        description: "Estudo e desenvolvimento de estratégias de controle para sistemas híbridos",
        period: "2008 - 2012",
        status: "Finalizado"
      },
      {
        title: "Intensificação de Processos através de Micro-sistemas",
        description: "Investigação da intensificação de processos químicos utilizando micro-sistemas",
        period: "2008 - 2012",
        status: "Finalizado"
      },
      {
        title: "Controle de Processos Tolerante a Falhas",
        description: "Desenvolvimento de metodologias de controle robusto tolerante a falhas",
        period: "2003 - 2007",
        status: "Finalizado"
      },
      {
        title: "Sistemas Energeticamente Sustentáveis",
        description: "Desenvolvimento de tecnologias para sistemas energeticamente sustentáveis",
        period: "2012 - 2015",
        status: "Finalizado"
      },
      {
        title: "Análise de Desempenho de Controladores",
        description: "Estudo e avaliação de desempenho de diferentes estratégias de controle",
        period: "2003 - 2012",
        status: "Finalizado"
      }
    ],
    en: [
      {
        title: "Energy Transition in Chemical Plants",
        description: "Study of electrification and co-processing in chemical plants for sustainable energy transition",
        period: "2025 - Current",
        status: "Ongoing"
      },
      {
        title: "Chemical Plant Operability",
        description: "Development of methodologies to improve operability and efficiency of chemical plants",
        period: "2024 - Current",
        status: "Ongoing"
      },
      {
        title: "Fault-Tolerant Predictive Control Systems",
        description: "Development of advanced predictive control systems with fault tolerance",
        period: "2007 - Current",
        status: "Ongoing"
      },
      {
        title: "Distributed Control Systems",
        description: "Development of distributed control architectures for chemical processes",
        period: "2011 - 2016",
        status: "Completed"
      },
      {
        title: "Artificial Intelligence Applied to Process Safety",
        description: "Application of AI techniques to improve safety in industrial chemical processes",
        period: "2010 - 2023",
        status: "Completed"
      },
      {
        title: "Hybrid Systems Control",
        description: "Study and development of control strategies for hybrid systems",
        period: "2008 - 2012",
        status: "Completed"
      },
      {
        title: "Process Intensification through Micro-systems",
        description: "Investigation of chemical process intensification using micro-systems",
        period: "2008 - 2012",
        status: "Completed"
      },
      {
        title: "Fault-Tolerant Process Control",
        description: "Development of robust fault-tolerant control methodologies",
        period: "2003 - 2007",
        status: "Completed"
      },
      {
        title: "Energy Sustainable Systems",
        description: "Development of technologies for energy sustainable systems",
        period: "2012 - 2015",
        status: "Completed"
      },
      {
        title: "Controller Performance Analysis",
        description: "Study and evaluation of performance of different control strategies",
        period: "2003 - 2012",
        status: "Completed"
      }
    ],
    es: [
      {
        title: "Transición Energética en Plantas Químicas",
        description: "Estudio de electrificación y co-procesamiento en plantas químicas para transición energética sostenible",
        period: "2025 - Actual",
        status: "En curso"
      },
      {
        title: "Operabilidad de Plantas Químicas",
        description: "Desarrollo de metodologías para mejorar la operabilidad y eficiencia de plantas químicas",
        period: "2024 - Actual",
        status: "En curso"
      },
      {
        title: "Sistemas de Control Predictivo Tolerantes a Fallas",
        description: "Desarrollo de sistemas avanzados de control predictivo con tolerancia a fallas",
        period: "2007 - Actual",
        status: "En curso"
      },
      {
        title: "Sistemas de Control Distribuido",
        description: "Desarrollo de arquitecturas de control distribuido para procesos químicos",
        period: "2011 - 2016",
        status: "Finalizado"
      },
      {
        title: "Inteligencia Artificial Aplicada a Seguridad de Procesos",
        description: "Aplicación de técnicas de IA para mejorar la seguridad en procesos químicos industriales",
        period: "2010 - 2023",
        status: "Finalizado"
      },
      {
        title: "Control de Sistemas Híbridos",
        description: "Estudio y desarrollo de estrategias de control para sistemas híbridos",
        period: "2008 - 2012",
        status: "Finalizado"
      },
      {
        title: "Intensificación de Procesos a través de Micro-sistemas",
        description: "Investigación de intensificación de procesos químicos utilizando micro-sistemas",
        period: "2008 - 2012",
        status: "Finalizado"
      },
      {
        title: "Control de Procesos Tolerante a Fallas",
        description: "Desarrollo de metodologías de control robusto tolerante a fallas",
        period: "2003 - 2007",
        status: "Finalizado"
      },
      {
        title: "Sistemas Energéticamente Sostenibles",
        description: "Desarrollo de tecnologías para sistemas energéticamente sostenibles",
        period: "2012 - 2015",
        status: "Finalizado"
      },
      {
        title: "Análisis de Rendimiento de Controladores",
        description: "Estudio y evaluación de rendimiento de diferentes estrategias de control",
        period: "2003 - 2012",
        status: "Finalizado"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    if (language === 'pt') {
      switch (status) {
        case 'Em andamento':
          return 'bg-green-100 text-green-800';
        case 'Finalizado':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-blue-100 text-blue-800';
      }
    } else if (language === 'en') {
      switch (status) {
        case 'Ongoing':
          return 'bg-green-100 text-green-800';
        case 'Completed':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-blue-100 text-blue-800';
      }
    } else {
      switch (status) {
        case 'En curso':
          return 'bg-green-100 text-green-800';
        case 'Finalizado':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-blue-100 text-blue-800';
      }
    }
  };

  const currentProjects = researchProjects[language] || researchProjects.pt;

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              {t('researchTitle')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('researchSubtitle')}
            </p>
          </div>

          {/* Research Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('projectsTitle')}</h2>
            <div className="grid gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 ml-4">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 md:mt-0 text-ufu-blue border-ufu-blue contact-link">
                      {t('learnMore')}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Research Impact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('researchImpactTitle')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">80+</div>
                <div className="text-gray-600">
                  {language === 'pt' ? 'Publicações' : language === 'en' ? 'Publications' : 'Publicaciones'}
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">1500+</div>
                <div className="text-gray-600">
                  {language === 'pt' ? 'Citações' : language === 'en' ? 'Citations' : 'Citas'}
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">50+</div>
                <div className="text-gray-600">
                  {language === 'pt' ? 'Estudantes Orientados' : language === 'en' ? 'Students Supervised' : 'Estudiantes Supervisados'}
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-ufu-blue mb-2">R$ 8M+</div>
                <div className="text-gray-600">
                  {language === 'pt' ? 'Financiamento' : language === 'en' ? 'Funding' : 'Financiación'}
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
