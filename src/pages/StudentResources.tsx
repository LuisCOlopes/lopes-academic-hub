
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
              Material Educacional
            </h1>
            <p className="text-xl text-ufu-blue">
              Recursos didáticos para apoio ao ensino e aprendizagem
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
                  <h2 className="text-2xl font-semibold text-ufu-navy">Apostilas</h2>
                  <p className="text-ufu-blue">Material didático para disciplinas</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Controle de Processos</h3>
                  <p className="text-sm text-ufu-blue mb-3">Apostila completa sobre controle de processos químicos</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Modelagem e Simulação</h3>
                  <p className="text-sm text-ufu-blue mb-3">Fundamentos de modelagem matemática de processos</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Otimização de Processos</h3>
                  <p className="text-sm text-ufu-blue mb-3">Técnicas de otimização aplicadas à engenharia química</p>
                  <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
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
                  <h2 className="text-2xl font-semibold text-ufu-navy">Códigos Computacionais</h2>
                  <p className="text-ufu-blue">Scripts e programas para simulação</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">MATLAB/Simulink</h3>
                  <p className="text-sm text-ufu-blue mb-3">Códigos para controle e simulação de processos</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Python Scripts</h3>
                  <p className="text-sm text-ufu-blue mb-3">Algoritmos de otimização e análise de dados</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Aspen Plus</h3>
                  <p className="text-sm text-ufu-blue mb-3">Modelos e simulações de processos industriais</p>
                  <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                    <Download className="mr-2 h-4 w-4" />
                    Download
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
                  <h2 className="text-2xl font-semibold text-ufu-navy">Vídeos</h2>
                  <p className="text-ufu-blue">Aulas e demonstrações práticas</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Introdução ao Controle de Processos</h3>
                  <p className="text-sm text-ufu-blue mb-3">Série de vídeos sobre fundamentos de controle</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    Ver no YouTube
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Simulação em MATLAB</h3>
                  <p className="text-sm text-ufu-blue mb-3">Tutoriais práticos de programação e simulação</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    Ver no YouTube
                  </Button>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Casos Práticos</h3>
                  <p className="text-sm text-ufu-blue mb-3">Aplicações reais em indústrias químicas</p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Video className="mr-2 h-4 w-4" />
                    Ver no YouTube
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
                  <h2 className="text-2xl font-semibold text-ufu-navy">Minicursos</h2>
                  <p className="text-ufu-blue">Cursos intensivos e workshops</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Controle Avançado de Processos</h3>
                  <p className="text-sm text-ufu-blue mb-3">Minicurso de 20 horas sobre técnicas avançadas</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Material
                    </Button>
                    <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                      Inscrever-se
                    </Button>
                  </div>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Python para Engenheiros</h3>
                  <p className="text-sm text-ufu-blue mb-3">Programação aplicada à engenharia química</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Material
                    </Button>
                    <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                      Inscrever-se
                    </Button>
                  </div>
                </div>
                
                <div className="border border-ufu-light rounded-lg p-4">
                  <h3 className="font-semibold text-ufu-navy mb-2">Transição Energética</h3>
                  <p className="text-sm text-ufu-blue mb-3">Descarbonização e eletrificação de processos</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-ufu-blue hover:bg-ufu-navy text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Material
                    </Button>
                    <Button size="sm" variant="outline" className="border-ufu-blue text-ufu-blue">
                      Inscrever-se
                    </Button>
                  </div>
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
