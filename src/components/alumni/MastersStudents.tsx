
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AlumniCard from './AlumniCard';

const MastersStudents = () => {
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

  return (
    <>
      {/* Masters Supervised */}
      <div className="mb-12">
        <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('mastersSupervised')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {mastersDissertations.map((graduate, index) => 
            <AlumniCard 
              key={index}
              graduate={graduate}
              badgeText={t('masters')}
              badgeColor="bg-green-100 text-green-800"
            />
          )}
        </div>
      </div>

      {/* Masters Co-supervised */}
      <div className="mb-12">
        <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('mastersCoSupervised')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {mastersCoSupervised.map((graduate, index) => 
            <AlumniCard 
              key={index}
              graduate={graduate}
              badgeText={t('mastersCoSupervision')}
              badgeColor="bg-green-100 text-green-800"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MastersStudents;
