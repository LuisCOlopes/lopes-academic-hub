import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GraduationCap, Award, Building } from 'lucide-react';

const Alumni = () => {
  const { t } = useLanguage();

  // Dissertações Orientadas
  const mastersDissertations = [
    { name: 'Stella Ramos Tavares', thesis: 'Modelagem e Controle de Processos para a produção de substâncias enantiomericamente enriquecidas', year: 2018, funding: 'FAPEMIG' },
    { name: 'Rosiane Ribeiro Rocha', thesis: 'Controle Preditivo Distribuído de Processos Lineares', year: 2014, funding: 'CAPES', currentPosition: 'IFES' },
    { name: 'Larissa Cardoso Santos', thesis: 'Desenvolvimento de Sensores Virtuais Baseados em Vetores Suporte', year: 2014 },
    { name: 'Diogo R. Rezende', thesis: 'Modelagem e Simulação da Secagem de Frutos de Café em um Secador de Bandejas Vibradas', year: 2011 },
    { name: 'Matheus Henrique Granzotto', thesis: 'Controle com Aprendizado Iterativo para Processos em Batelada', year: 2010, funding: 'CAPES', currentPosition: 'UFVJM' },
    { name: 'Nádia Guimarães Sousa', thesis: 'Propagação de Comportamento Anormal em Sistemas Híbridos Dinâmicos', year: 2010, funding: 'CAPES', currentPosition: 'UFTM' },
    { name: 'Anamaria de Oliveira Caetano', thesis: 'Simulação e Controle de Sistemas Híbridos', year: 2010, funding: 'FAPEMIG', currentPosition: 'UFVJM' },
    { name: 'Lucas Lacerda Gomes Reis', thesis: 'Controle Tolerante com Reconfiguração Estrutural Acoplado a Sistema de Diagnóstico de Falhas', year: 2008, funding: 'CAPES', currentPosition: 'Aspen (USA)' },
    { name: 'Davi Leonardo de Souza', thesis: 'Análise do Desempenho de Sistemas de Controle', year: 2007, funding: 'CNPq', currentPosition: 'UFTM' },
    { name: 'Fanny Ferreira Melo Fávero de Fravet', thesis: 'Modelagem e Simulação do Processo de Esterilização Térmica em Batelada de Vegetais em Conserva', year: 2006 },
    { name: 'Márcio de Andrade Batista', thesis: 'Estudo da Imobilização de Células de Saccharomyces cerevisiae em Gel de Alginato de Cálcio no Processo de Fermentação Alcoólica', year: 2005, funding: 'CAPES', currentPosition: 'UFMS' }
  ];

  // Dissertações Coorientadas
  const mastersCoSupervised = [
    { name: 'Kenji Fabiano Ávila Okada', thesis: 'Controle Tolerante de Quadricópteros em Cenários com Falhas em Atuadores e Sensores', year: 2022, area: 'Engenharia Elétrica', funding: 'CNPq' },
    { name: 'Michel Dornelas Marques', thesis: 'Modelagem e Simulação da Formação de Torta em Peneiras Vibratórias', year: 2017, funding: 'CAPES' },
    { name: 'Monique Cristina Viana Pereira', thesis: 'Modelagem Fenomenólogica do Escoamento de Fluido de Perfuração em Peneiras Vibratórias', year: 2017, funding: 'CAPES' },
    { name: 'Marielle Cristine Cano Francisquetti (in memoriam)', thesis: 'Produção de Uvas-passas Variedade Crimson: Modelagem Matemática e Estudo Experimental', year: 2017, funding: 'CAPES' },
    { name: 'Jeniffer Cristina Silveira', thesis: 'Simulação da Trajetória de Partículas Sólidas em Peneiras Através do Método dos Elementos Discretos', year: 2017, funding: 'CAPES' },
    { name: 'Juliana Rodrigues Lira', thesis: 'Efeito das condições operacionais sobre o desempenho de sedimentadores operando com suspensões previamente floculadas', year: 2010, funding: 'CAPES' },
    { name: 'Claudia Gonçalves de Azevedo', thesis: 'Simulação do Sedimentador Contínuo', year: 2009, funding: 'CNPq' },
    { name: 'Patrícia Tavares Cordeiro', thesis: 'Estudo cinético da fermentação alcoólica por levedura imobilizada em alginato de sódio', year: 2008, funding: 'CNPq' },
    { name: 'Fran Sérgio Lobato', thesis: 'Abordagem Algébrico Diferencial na Otimização Dinâmica de Sistemas', year: 2004, funding: 'CAPES', currentPosition: 'UFU' }
  ];

  // Doutores Formados - Orientações
  const phdSupervised = [
    { name: 'Matheus Henrique Granzotto', thesis: 'Inteligência Artificial Aplicada à Detecção e Diagnóstico de Falhas em Processos Químicos', year: 2020, currentPosition: 'UFVJM' },
    { name: 'Cleuton Luis Nascentes', thesis: 'Separação sólido-fluído de perfuração em peneiras vibratórias', year: 2019, funding: 'Petrobras' },
    { name: 'Rosiane Ribeiro Rocha', thesis: 'Controle Preditivo Distribuído de Processos Não Lineares', year: 2018, funding: 'CAPES', currentPosition: 'IFES' },
    { name: 'Nádia Guimarães Sousa', thesis: 'Desenvolvimento de Sistemas de Controle Tolerante a Falhas por Alocação de Controle', year: 2014, funding: 'CAPES', currentPosition: 'UFTM' },
    { name: 'Davi Leonardo de Souza', thesis: 'Monitoramento e Avaliação de Sistemas de Controle', year: 2011, funding: 'CNPq', currentPosition: 'UFTM' }
  ];

  // Doutores Formados - Coorientações
  const phdCoSupervised = [
    { name: 'Luis Paulo Fagundes', thesis: 'Seleção Aleatória da Estrutura de Modelos com Auxílio da Taxa de Redução do Erro e Herança Genética', year: 2022, area: 'Engenharia Elétrica', currentPosition: 'IFTM' },
    { name: 'Rafael Monteiro Jorge Alves Souza', thesis: 'Sistema de Detecção de Fonte de Odor Utilizando Quadricópteros', year: 2022, area: 'Engenharia Elétrica' },
    { name: 'Gabriela Vieira Lima', thesis: 'Planejamento de trajetórias para quadricópteros em tarefas de perseguição', year: 2019, area: 'Engenharia Elétrica', currentPosition: 'UFU' },
    { name: 'Thiago Vaz da Costa', thesis: 'Estudo e Implementação de Estruturas de Controle Reconfigurável aplicado a Processos Químicos', year: 2014, area: 'Engenharia Química - UNICAMP', funding: 'FAPESP', currentPosition: 'UFU' },
    { name: 'Cláudio Homero Ferreira da Silva', thesis: 'Uma Contribuição ao Estudo de Robustez em Controladores Preditivo', year: 2008, currentPosition: 'CEMIG S.A.' },
    { name: 'Fábio de Oliveira Arouca', thesis: 'Uma Contribuição ao Estudo da Sedimentação Gravitacional em Batelada', year: 2007, funding: 'CNPq', currentPosition: 'UFU' }
  ];

  // Especialistas Orientados
  const specialists = [
    { name: 'Arnalsino A. N. Oliveira', thesis: 'Aspectos de Segurança na Extração de Diamantes do leito de Rios', year: 2004 },
    { name: 'Juliana F. de Andrade', thesis: 'Aspectos de Segurança no Tratamento de Dejetos da Suinocultura', year: 2004 },
    { name: 'Huíver R. de Oliveira', thesis: 'Programa de Gestão em Segurança do Trabalho na Mineração', year: 2004 },
    { name: 'Carlos H. A. Pinheiro', thesis: 'Aspectos de Saúde Ocupacional na Atividades de Silos do Tipo Bateria de Células', year: 2004 },
    { name: 'Rosângela S. Amaral', thesis: 'Análise do Risco Físico de Explosão de Pós em Silos de Armazenamento de Grãos do Tipo Bateria de Células', year: 2004 },
    { name: 'Roberto Curado Carvalho', thesis: 'MOC- Gerenciamento de Mudanças na Indústria', year: 2006 },
    { name: 'Renato Barbosa Moreira', thesis: 'Aspectos de Segurança no Transporte de Produtos Perigosos', year: 2006 },
    { name: 'Fernando G. M. Hayeck', thesis: 'Trabalhos em Espaços Confinados em Turbinas Hidráulicas Tipo Francis e Kaplan de Usinas Hidrelétricas', year: 2007 },
    { name: 'Luiz G. Santos da Cruz', thesis: 'Proteção Contra Incêndio em Usinas de Açúcar e Álcool', year: 2007 },
    { name: 'Renata Guimarães Miranda', thesis: 'Verificação da Adequação de Postos Revendedores de Combustível à Legislação Vigente', year: 2007 },
    { name: 'Paulo J. Alves Lima', thesis: 'Metodologia para o Gerenciamento da Segurança de Barragens: Estudo de Caso', year: 2007 },
    { name: 'Arlindo José Camilo', thesis: 'Ruído em Unidade Armazenadora de Grãos', year: 2007 },
    { name: 'Cláudia G. Azevedo', thesis: 'Análise de Segurança em Dispositivos com Princípios Radioativos', year: 2009 },
    { name: 'Adriene Artiaga Pfeifer', thesis: 'Análise dos Procedimentos para o Trabalho em Espaços Confinados', year: 2009 },
    { name: 'Dálglis Shilton S. Ferreira', thesis: 'Acidente do Trabalho: O Caso Brasileiro', year: 2009 },
    { name: 'Daniel F. da Cunha', thesis: 'Análise do Ruído em uma Oficina Mecânica de Pequeno Porte para Processos de Usinagem', year: 2012 },
    { name: 'Fabiane K. Shimokomaki', thesis: 'Aspectos de Segurança no Setor Cafeeiro: Estudo de Caso', year: 2012 },
    { name: 'Gilvania Bedin', thesis: 'Avaliação Qualitativa dos Riscos Ambientais do Meio Rural na Saúde e Segurança do Trabalhador', year: 2012 }
  ];

  const stats = [
    { number: '5', label: t('doctorsSupervised'), icon: GraduationCap },
    { number: '6', label: t('doctorsCoSupervised'), icon: GraduationCap },
    { number: '11', label: t('mastersOrientated'), icon: GraduationCap },
    { number: '9', label: t('mastersCoOriented'), icon: GraduationCap }
  ];

  const renderAlumniCard = (graduate: any, index: number, badgeText: string, badgeColor: string) => (
    <Card key={index} className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-ufu-navy">{graduate.name}</h4>
          {graduate.currentPosition && (
            <div className="flex items-center mt-1 mb-2">
              <Building className="h-4 w-4 text-ufu-blue mr-1" />
              <span className="text-sm text-ufu-blue font-medium">{graduate.currentPosition}</span>
            </div>
          )}
          <Badge variant="outline" className="mt-1">{badgeText}</Badge>
        </div>
      </div>
      <p className="text-ufu-blue text-sm mb-2"><strong>{graduate.thesis ? t('thesis') : t('dissertation')}:</strong> {graduate.thesis}</p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-ufu-navy font-medium">{t('year')}: {graduate.year}</span>
        {graduate.area && (
          <Badge variant="outline" className="text-xs">
            {graduate.area}
          </Badge>
        )}
        {graduate.funding && (
          <Badge variant="outline" className="text-xs">
            {graduate.funding}
          </Badge>
        )}
      </div>
    </Card>
  );

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('alumniTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('alumniSubtitle')}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-ufu-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-ufu-navy mb-2">{stat.number}</div>
                <div className="text-ufu-blue">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Student Supervision Charts - Full Width Layout */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('completedOrientations')}</h2>
            
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('completedOrientationsPart1')}</h3>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/8ea91021-e874-4bd2-891b-224d38f06d45.png" 
                  alt={t('orientationFlowchart')} 
                  className="mx-auto max-w-full h-auto rounded-lg"
                  style={{ maxHeight: '800px' }}
                />
                <p className="text-sm text-ufu-blue mt-3">{t('orientationFlowchart')}</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ufu-navy mb-4">{t('completedOrientationsPart2')}</h3>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/93fb63db-e504-4915-a620-08b7a5ae5fd6.png" 
                  alt={t('orientationFlowchart2')} 
                  className="mx-auto max-w-full h-auto rounded-lg"
                  style={{ maxHeight: '800px' }}
                />
                <p className="text-sm text-ufu-blue mt-3">{t('orientationFlowchart2')}</p>
              </div>
            </Card>
          </div>

          {/* PhD Supervised */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('phdSupervised')}</h2>
            <div className="grid gap-4">
              {phdSupervised.map((graduate, index) => 
                renderAlumniCard(graduate, index, t('doctorate'), 'bg-ufu-blue text-white')
              )}
            </div>
          </div>

          {/* PhD Co-supervised */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('phdCoSupervised')}</h2>
            <div className="grid gap-4">
              {phdCoSupervised.map((graduate, index) => 
                renderAlumniCard(graduate, index, t('doctorateCoSupervision'), 'bg-ufu-blue text-white')
              )}
            </div>
          </div>

          {/* Masters Supervised */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('mastersSupervised')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mastersDissertations.map((graduate, index) => 
                renderAlumniCard(graduate, index, t('masters'), 'bg-green-100 text-green-800')
              )}
            </div>
          </div>

          {/* Masters Co-supervised */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('mastersCoSupervised')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mastersCoSupervised.map((graduate, index) => 
                renderAlumniCard(graduate, index, t('mastersCoSupervision'), 'bg-green-100 text-green-800')
              )}
            </div>
          </div>

          {/* Specialists */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('specialistsSupervised')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {specialists.map((graduate, index) => (
                <Card key={index} className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-ufu-navy mb-1">{graduate.name}</h3>
                    <p className="text-ufu-blue text-sm mb-2"><strong>{t('work')}:</strong> {graduate.thesis}</p>
                    <span className="text-ufu-navy font-medium text-sm">{t('year')}: {graduate.year}</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">{t('specialization')}</Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <Card className="p-6 bg-ufu-light">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-4">{t('generalStatistics')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">31</div>
                <div className="text-ufu-blue">{t('totalPostgraduateOrientations')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">18</div>
                <div className="text-ufu-blue">{t('specialistsFormed')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">11</div>
                <div className="text-ufu-blue">{t('doctorsFormed')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">20</div>
                <div className="text-ufu-blue">{t('mastersFormed')}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
