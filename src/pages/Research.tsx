import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Award, TrendingUp, Users, ExternalLink, Zap, Leaf, Factory, Lightbulb } from 'lucide-react';

const Research = () => {
  const { t } = useLanguage();

  const currentProjects = [
    {
      title: t('autonomousSystemProject'),
      status: t('ongoing'),
      period: '2025-atual',
      description: t('autonomousSystemDescription')
    },
    {
      title: t('energyTransitionProject'),
      status: t('ongoing'),
      period: '2024-atual',
      description: t('energyTransitionDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    },
    {
      title: t('dynamicOperabilityProject'),
      status: t('ongoing'),
      period: '2024-atual',
      description: t('dynamicOperabilityDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    },
    {
      title: t('faultTolerantControlProject'),
      status: t('ongoing'),
      period: '2012-atual',
      description: t('faultTolerantControlDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    },
    {
      title: t('artificialIntelligenceProject'),
      status: t('ongoing'),
      period: '2022-atual',
      description: t('artificialIntelligenceDescription'),
      funding: 'CNPq, CAPES, FAPEMIG'
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('researchTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('researchSubtitle')}
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="descarbonizacao" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Descarbonização
              </TabsTrigger>
              <TabsTrigger value="eletrificacao" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Eletrificação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              {/* Research Metrics */}
              <div className="mb-12">
                <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
                  {t('researchMetrics')}
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-ufu-blue mb-2">150+</div>
                    <div className="text-ufu-navy">{t('publications')}</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-ufu-blue mb-2">600+</div>
                    <div className="text-ufu-navy">{t('citations')}</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-ufu-blue mb-2">80+</div>
                    <div className="text-ufu-navy">{t('students')}</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-ufu-blue mb-2">R$ 5M+</div>
                    <div className="text-ufu-navy">{t('funding')}</div>
                  </Card>
                </div>
              </div>

              {/* Current Projects */}
              <div className="mb-12">
                <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
                  {t('currentProjects')}
                </h2>
                <div className="grid gap-6">
                  {currentProjects.map((project, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-ufu-navy mb-2">
                            {project.title}
                          </h3>
                          <p className="text-ufu-blue mb-3">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-ufu-blue mb-2">
                            <span>{project.period}</span>
                          </div>
                          {project.funding && (
                            <div className="text-sm text-ufu-blue">
                              <strong>{t('funding')}:</strong> {project.funding}
                            </div>
                          )}
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {project.status}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Research Areas */}
              <div className="mb-12">
                <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">
                  {t('researchAreas')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="p-6 text-center">
                    <BookOpen className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-ufu-navy mb-2">{t('processControlArea')}</h3>
                    <p className="text-ufu-blue text-sm">{t('processControlDescription')}</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-ufu-navy mb-2">{t('optimizationArea')}</h3>
                    <p className="text-ufu-blue text-sm">{t('optimizationDescription')}</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <Award className="h-12 w-12 text-ufu-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-ufu-navy mb-2">{t('safetyArea')}</h3>
                    <p className="text-ufu-blue text-sm">{t('safetyDescription')}</p>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="descarbonizacao" className="mt-6">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-ufu-navy">Descarbonização de Processos</h2>
                      <p className="text-ufu-blue">Redução das emissões de carbono na indústria química</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-ufu-navy mb-3">Objetivos Principais</h3>
                      <ul className="space-y-2 text-ufu-blue">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Desenvolvimento de tecnologias de captura de CO₂
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Utilização de matérias-primas renováveis
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Otimização energética de processos
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          Avaliação de ciclo de vida
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-ufu-navy mb-3">Projetos Atuais</h3>
                      <div className="space-y-3">
                        <Card className="p-4 bg-green-50">
                          <h4 className="font-medium text-ufu-navy">Captura de CO₂ em Refinarias</h4>
                          <p className="text-sm text-ufu-blue mt-1">Desenvolvimento de sistemas integrados de captura</p>
                        </Card>
                        <Card className="p-4 bg-green-50">
                          <h4 className="font-medium text-ufu-navy">Biomassa como Matéria-Prima</h4>
                          <p className="text-sm text-ufu-blue mt-1">Processos químicos sustentáveis</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-ufu-navy mb-4">Impacto Esperado</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">30%</div>
                      <div className="text-ufu-blue">Redução de Emissões</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">15%</div>
                      <div className="text-ufu-blue">Economia Energética</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">5</div>
                      <div className="text-ufu-blue">Patentes Previstas</div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="eletrificacao" className="mt-6">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-ufu-navy">Eletrificação de Processos</h2>
                      <p className="text-ufu-blue">Substituição de combustíveis fósseis por energia elétrica</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-ufu-navy mb-3">Tecnologias Estudadas</h3>
                      <ul className="space-y-2 text-ufu-blue">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Aquecimento por indução magnética
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Reatores eletroquímicos
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Bombas de calor industriais
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          Fornos elétricos de alta eficiência
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-ufu-navy mb-3">Aplicações Industriais</h3>
                      <div className="space-y-3">
                        <Card className="p-4 bg-blue-50">
                          <h4 className="font-medium text-ufu-navy">Destilação Elétrica</h4>
                          <p className="text-sm text-ufu-blue mt-1">Colunas de destilação com aquecimento elétrico</p>
                        </Card>
                        <Card className="p-4 bg-blue-50">
                          <h4 className="font-medium text-ufu-navy">Secagem Industrial</h4>
                          <p className="text-sm text-ufu-blue mt-1">Sistemas de secagem por micro-ondas</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-ufu-navy mb-4">Vantagens da Eletrificação</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-ufu-navy mb-1">Eficiência</h4>
                      <p className="text-sm text-ufu-blue">Maior controle e precisão</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Leaf className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-ufu-navy mb-1">Sustentabilidade</h4>
                      <p className="text-sm text-ufu-blue">Redução de emissões</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-ufu-navy mb-1">Flexibilidade</h4>
                      <p className="text-sm text-ufu-blue">Adaptação rápida</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-ufu-navy mb-1">Automação</h4>
                      <p className="text-sm text-ufu-blue">Controle inteligente</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="p-8 mt-8 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-ufu-navy mb-4">
                Interessado em Colaborar?
              </h3>
              <p className="text-ufu-blue mb-6">
                Estou sempre aberto a discutir oportunidades de pesquisa e parcerias 
                em projetos relacionados à transição energética.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-ufu-teal hover:bg-ufu-teal/90 text-white">
                  Entre em Contato
                </Button>
                <Button variant="outline" className="border-ufu-teal text-ufu-teal hover:bg-ufu-teal/10">
                  Saiba Mais sobre Pesquisas
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
