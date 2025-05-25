
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Leaf, Factory, Lightbulb } from 'lucide-react';

const EnergyTransition = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Transição Energética
            </h1>
            <p className="text-xl text-gray-600">
              Pesquisa em descarbonização e eletrificação de processos químicos
            </p>
          </div>

          <Tabs defaultValue="descarbonizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="descarbonizacao" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Descarbonização
              </TabsTrigger>
              <TabsTrigger value="eletrificacao" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Eletrificação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="descarbonizacao" className="mt-6">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">Descarbonização de Processos</h2>
                      <p className="text-gray-600">Redução das emissões de carbono na indústria química</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Objetivos Principais</h3>
                      <ul className="space-y-2 text-gray-600">
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Projetos Atuais</h3>
                      <div className="space-y-3">
                        <Card className="p-4 bg-green-50">
                          <h4 className="font-medium text-gray-900">Captura de CO₂ em Refinarias</h4>
                          <p className="text-sm text-gray-600 mt-1">Desenvolvimento de sistemas integrados de captura</p>
                        </Card>
                        <Card className="p-4 bg-green-50">
                          <h4 className="font-medium text-gray-900">Biomassa como Matéria-Prima</h4>
                          <p className="text-sm text-gray-600 mt-1">Processos químicos sustentáveis</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Impacto Esperado</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">30%</div>
                      <div className="text-gray-600">Redução de Emissões</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">15%</div>
                      <div className="text-gray-600">Economia Energética</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">5</div>
                      <div className="text-gray-600">Patentes Previstas</div>
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
                      <h2 className="text-2xl font-semibold text-gray-900">Eletrificação de Processos</h2>
                      <p className="text-gray-600">Substituição de combustíveis fósseis por energia elétrica</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnologias Estudadas</h3>
                      <ul className="space-y-2 text-gray-600">
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Aplicações Industriais</h3>
                      <div className="space-y-3">
                        <Card className="p-4 bg-blue-50">
                          <h4 className="font-medium text-gray-900">Destilação Elétrica</h4>
                          <p className="text-sm text-gray-600 mt-1">Colunas de destilação com aquecimento elétrico</p>
                        </Card>
                        <Card className="p-4 bg-blue-50">
                          <h4 className="font-medium text-gray-900">Secagem Industrial</h4>
                          <p className="text-sm text-gray-600 mt-1">Sistemas de secagem por micro-ondas</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Vantagens da Eletrificação</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Eficiência</h4>
                      <p className="text-sm text-gray-600">Maior controle e precisão</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Leaf className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Sustentabilidade</h4>
                      <p className="text-sm text-gray-600">Redução de emissões</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Flexibilidade</h4>
                      <p className="text-sm text-gray-600">Adaptação rápida</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Automação</h4>
                      <p className="text-sm text-gray-600">Controle inteligente</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="p-8 mt-8 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Interessado em Colaborar?
              </h3>
              <p className="text-gray-600 mb-6">
                Estou sempre aberto a discutir oportunidades de pesquisa e parcerias 
                em projetos relacionados à transição energética.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="academic-gradient text-white">
                  Entre em Contato
                </Button>
                <Button variant="outline">
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

export default EnergyTransition;
