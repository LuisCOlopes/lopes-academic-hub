
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Building, Calendar, BookOpen } from 'lucide-react';

const Alumni = () => {
  const { t } = useLanguage();

  const mastersDissertations = [
    {
      author: 'Stella Ramos Tavares',
      title: 'Modelagem e Controle de Processos para a produção de substâncias enantiomericamente enriquecidas',
      year: '2018',
      funding: 'FAPEMIG'
    },
    {
      author: 'Rosiane Ribeiro Rocha',
      title: 'Controle Preditivo Distribuído de Processos Lineares',
      year: '2014',
      funding: 'CAPES'
    },
    {
      author: 'Larissa Cardoso Santos',
      title: 'Desenvolvimento de Sensores Virtuais Baseados em Vetores Suporte',
      year: '2014',
      funding: ''
    },
    {
      author: 'Diogo R. Rezende',
      title: 'Modelagem e Simulação da Secagem de Frutos de Café em um Secador de Bandejas Vibradas',
      year: '2011',
      funding: ''
    },
    {
      author: 'Matheus Henrique Granzotto',
      title: 'Controle com Aprendizado Iterativo para Processos em Batelada',
      year: '2010',
      funding: 'CAPES'
    },
    {
      author: 'Nádia Guimarães Sousa',
      title: 'Propagação de Comportamento Anormal em Sistemas Híbridos Dinâmicos',
      year: '2010',
      funding: 'CAPES'
    },
    {
      author: 'Anamaria de Oliveira Caetano',
      title: 'Simulação e Controle de Sistemas Híbridos',
      year: '2010',
      funding: 'FAPEMIG'
    },
    {
      author: 'Lucas Lacerda Gomes Reis',
      title: 'Controle Tolerante com Reconfiguração Estrutural Acoplado a Sistema de Diagnóstico de Falhas',
      year: '2008',
      funding: 'CAPES'
    },
    {
      author: 'Davi Leonardo de Souza',
      title: 'Análise do Desempenho de Sistemas de Controle',
      year: '2007',
      funding: 'CNPq'
    },
    {
      author: 'Fanny Ferreira Melo Fávero de Fravet',
      title: 'Modelagem e Simulação do Processo de Esterilização Térmica em Batelada de Vegetais em Conserva',
      year: '2006',
      funding: ''
    },
    {
      author: 'Márcio de Andrade Batista',
      title: 'Estudo da Imobilização de Células de Saccharomyces cerevisiae em Gel de Alginato de Cálcio no Processo de Fermentação Alcoólica',
      year: '2005',
      funding: 'CAPES'
    }
  ];

  const mastersCoAdvised = [
    {
      author: 'Kenji Fabiano Ávila Okada',
      title: 'Controle Tolerante de Quadricópteros em Cenários com Falhas em Atuadores e Sensores',
      year: '2022',
      program: 'Engenharia Elétrica',
      funding: 'CNPq'
    },
    {
      author: 'Michel Dornelas Marques',
      title: 'Modelagem e Simulação da Formação de Torta em Peneiras Vibratórias',
      year: '2017',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Monique Cristina Viana Pereira',
      title: 'Modelagem Fenomenólogica do Escoamento de Fluido de Perfuração em Penerias Vibratórias',
      year: '2017',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Marielle Cristine Cano Francisquetti (in memoriam)',
      title: 'Produção de Uvas-passas Variedade Crimson: Modelagem Matemática e Estudo Experimental',
      year: '2017',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Jeniffer Cristina Silveira',
      title: 'Simulação da Trajetória de Partículas Sólidas em Peneiras Através do Método dos Elementos Discretos',
      year: '2017',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Juliana Rodrigues Lira',
      title: 'Efeito das condições operacionais sobre o desempenho de sedimentadores operando com suspensões previamente floculadas',
      year: '2010',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Claudia Gonçalves de Azevedo',
      title: 'Simulação do Sedimentador Contínuo',
      year: '2009',
      program: 'Engenharia Química',
      funding: 'CNPq'
    },
    {
      author: 'Patrícia Tavares Cordeiro',
      title: 'Estudo cinético da fermentação alcoólica por levedura imobilizada em alginato de sódio',
      year: '2008',
      program: 'Engenharia Química',
      funding: 'CNPq'
    },
    {
      author: 'Fran Sérgio Lobato',
      title: 'Abordagem Algébrico Diferencial na Otimização Dinâmica de Sistemas',
      year: '2004',
      program: 'Engenharia Química',
      funding: 'CAPES'
    }
  ];

  const phdTheses = [
    {
      author: 'Matheus Henrique Granzotto',
      title: 'Inteligência Artificial Aplicada à Detecção e Diagnóstico de Falhas em Processos Químicos',
      year: '2020',
      program: 'Engenharia Química'
    },
    {
      author: 'Cleuton Luis Nascentes',
      title: 'Separação sólido-fluído de perfuração em peneiras vibratórias',
      year: '2019',
      program: 'Engenharia Química',
      funding: 'Petrobras'
    },
    {
      author: 'Rosiane Ribeiro Rocha',
      title: 'Controle Preditivo Distribuído de Processos Não Lineares',
      year: '2018',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Nádia Guimarães Sousa',
      title: 'Desenvolvimento de Sistemas de Controle Tolerante a Falhas por Alocação de Controle',
      year: '2014',
      program: 'Engenharia Química',
      funding: 'CAPES'
    },
    {
      author: 'Davi Leonardo de Souza',
      title: 'Monitoramento e Avaliação de Sistemas de Controle',
      year: '2011',
      program: 'Engenharia Química',
      funding: 'CNPq'
    }
  ];

  const phdCoAdvised = [
    {
      author: 'Luis Paulo Fagundes',
      title: 'Seleção Aleatória da Estrutura de Modelos com Auxílio da Taxa de Redução do Erro e Herança Genética',
      year: '2022',
      program: 'Engenharia Elétrica'
    },
    {
      author: 'Rafael Monteiro Jorge Alves Souza',
      title: 'Sistema de Detecção de Fonte de Odor Utilizando Quadricópteros',
      year: '2022',
      program: 'Engenharia Elétrica'
    },
    {
      author: 'Gabriela Vieira Lima',
      title: 'Planejamento de trajetórias para quadricópteros em tarefas de perseguição',
      year: '2019',
      program: 'Engenharia Elétrica'
    },
    {
      author: 'Thiago Vaz da Costa',
      title: 'Estudo e Implementação de Estruturas de Controle Reconfigurável aplicado a Processos Químicos',
      year: '2014',
      program: 'Engenharia Química - UNICAMP',
      funding: 'FAPESP'
    },
    {
      author: 'Cláudio Homero Ferreira da Silva',
      title: 'Uma Contribuição ao Estudo de Robustez em Controladores Preditivo',
      year: '2008',
      program: 'Engenharia Química'
    },
    {
      author: 'Fábio de Oliveira Arouca',
      title: 'Uma Contribuição ao Estudo da Sedimentação Gravitacional em Batelada',
      year: '2007',
      program: 'Engenharia Química',
      funding: 'CNPq'
    }
  ];

  const specializationStudents = [
    'Arnalsino A. N. Oliveira - Aspectos de Segurança na Extração de Diamantes do leito de Rios (2004)',
    'Juliana F. de Andrade - Aspectos de Segurança no Tratamento de Dejetos da Suinocultura (2004)',
    'Huíver R. de Oliveira - Programa de Gestão em Segurança do Trabalho na Mineração (2004)',
    'Carlos H. A. Pinheiro - Aspectos de Saúde Ocupacional na Atividades de Silos do Tipo Bateria de Células (2004)',
    'Rosângela S. Amaral - Análise do Risco Físico de Explosão de Pós em Silos de Armazenamento de Grãos do Tipo Bateria de Células (2004)',
    'Roberto Curado Carvalho - MOC- Gerenciamento de Mudanças na Indústria (2006)',
    'Renato Barbosa Moreira - Aspectos de Segurança no Transporte de Produtos Perigosos (2006)',
    'Fernando G. M. Hayeck - Trabalhos em Espaços Confinados em Turbinas Hidráulicas Tipo Francis e Kaplan de Usinas Hidrelétricas (2007)',
    'Luiz G. Santos da Cruz - Proteção Contra Incêndio em Usinas de Açúcar e Álcool (2007)',
    'Renata Guimarães Miranda - Verificação da Adequação de Postos Revendedores de Combustível à Legislação Vigente (2007)',
    'Paulo J. Alves Lima - Metodologia para o Gerenciamento da Segurança de Barragens: Estudo de Caso (2007)',
    'Arlindo José Camilo - Ruído em Unidade Armazenadora de Grãos (2007)',
    'Cláudia G. Azevedo - Análise de Segurança em Dispositivos com Princípios Radioativos (2009)',
    'Adriene Artiaga Pfeifer - Análise dos Procedimentos para o Trabalho em Espaços Confinados (2009)',
    'Dálglis Shilton S. Ferreira - Acidente do Trabalho: O Caso Brasileiro (2009)',
    'Daniel F. da Cunha - Análise do Ruído em uma Oficina Mecânica de Pequeno Porte para Processos de Usinagem (2012)',
    'Fabiane K. Shimokomaki - Aspectos de Segurança no Setor Cafeeiro: Estudo de Caso (2012)',
    'Gilvania Bedin - Avaliação Qualitativa dos Riscos Ambientais do Meio Rural na Saúde e Segurança do Trabalhador (2012)'
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Alumni & Former Students
          </h1>
          <p className="text-lg text-gray-600">
            Celebrating the achievements of students who have completed their academic journey under my supervision
          </p>
        </div>

        <div className="space-y-12">
          {/* PhD Dissertations Supervised */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              PhD Dissertations Supervised
            </h2>
            <div className="grid gap-4">
              {phdTheses.map((thesis, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{thesis.author}</h3>
                        <Badge variant="outline">{thesis.year}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">{thesis.title}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>{thesis.program}</span>
                        {thesis.funding && <span>Funding: {thesis.funding}</span>}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* PhD Dissertations Co-supervised */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              PhD Dissertations Co-supervised
            </h2>
            <div className="grid gap-4">
              {phdCoAdvised.map((thesis, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-600 rounded-lg">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{thesis.author}</h3>
                        <Badge variant="outline">{thesis.year}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">{thesis.title}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>{thesis.program}</span>
                        {thesis.funding && <span>Funding: {thesis.funding}</span>}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Masters Dissertations Supervised */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Masters Dissertations Supervised
            </h2>
            <div className="grid gap-4">
              {mastersDissertations.map((thesis, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{thesis.author}</h3>
                        <Badge variant="outline">{thesis.year}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">{thesis.title}</p>
                      {thesis.funding && (
                        <div className="text-xs text-gray-500">
                          Funding: {thesis.funding}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Masters Dissertations Co-supervised */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Masters Dissertations Co-supervised
            </h2>
            <div className="grid gap-4">
              {mastersCoAdvised.map((thesis, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-600 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{thesis.author}</h3>
                        <Badge variant="outline">{thesis.year}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">{thesis.title}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>{thesis.program}</span>
                        {thesis.funding && <span>Funding: {thesis.funding}</span>}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Specialization Students */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Specialization Students (Lato Sensu)
            </h2>
            <Card className="p-6">
              <div className="grid gap-2">
                {specializationStudents.map((student, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                    {student}
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Alumni Network Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-1">5</div>
              <div className="text-sm text-gray-600">PhD Graduates</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-1">11</div>
              <div className="text-sm text-gray-600">Masters Graduates</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-1">18</div>
              <div className="text-sm text-gray-600">Specialization Graduates</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-1">15</div>
              <div className="text-sm text-gray-600">Co-supervised Students</div>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
