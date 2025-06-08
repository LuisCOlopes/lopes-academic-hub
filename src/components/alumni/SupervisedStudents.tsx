
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AlumniCard from './AlumniCard';

const SupervisedStudents = () => {
  const { t } = useLanguage();

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

  return (
    <>
      {/* PhD Supervised */}
      <div className="mb-12">
        <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('phdSupervised')}</h2>
        <div className="grid gap-4">
          {phdSupervised.map((graduate, index) => 
            <AlumniCard 
              key={index}
              graduate={graduate}
              badgeText={t('doctorate')}
              badgeColor="bg-ufu-blue text-white"
            />
          )}
        </div>
      </div>

      {/* PhD Co-supervised */}
      <div className="mb-12">
        <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">{t('phdCoSupervised')}</h2>
        <div className="grid gap-4">
          {phdCoSupervised.map((graduate, index) => 
            <AlumniCard 
              key={index}
              graduate={graduate}
              badgeText={t('doctorateCoSupervision')}
              badgeColor="bg-ufu-blue text-white"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SupervisedStudents;
