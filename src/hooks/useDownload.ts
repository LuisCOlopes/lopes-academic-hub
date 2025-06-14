
import { useState } from 'react';
import { downloadFile } from '@/utils/downloadUtils';

interface DownloadContent {
  [key: string]: {
    title: string;
    content: string;
  };
}

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadContent: DownloadContent = {
    'material-courseNotes-1': {
      title: 'Controle de Processos Químicos',
      content: 'Material completo sobre controle PID e controle avançado de processos químicos. Este documento aborda os fundamentos teóricos e práticos do controle de processos, incluindo modelagem matemática, análise de sistemas dinâmicos, projeto de controladores PID, técnicas de sintonia e implementação industrial.'
    },
    'material-courseNotes-2': {
      title: 'Otimização de Processos',
      content: 'Técnicas de otimização aplicadas à engenharia química. Este material cobre métodos de otimização linear e não-linear, programação matemática, algoritmos genéticos, otimização multiobjetivo e aplicações em processos químicos industriais.'
    },
    'material-computationalCodes-1': {
      title: 'Simulação em Scilab',
      content: 'Scripts para simulação de processos químicos usando Scilab. Inclui exemplos de modelagem de reatores, colunas de destilação, trocadores de calor e sistemas de controle. Códigos práticos para análise dinâmica e otimização de processos.'
    },
    'material-computationalCodes-2': {
      title: 'Controladores PID em Python',
      content: 'Implementação de controladores PID em Python para controle de processos químicos. Inclui bibliotecas específicas, algoritmos de sintonia automática, simulação de malhas de controle e exemplos práticos de implementação industrial.'
    },
    'material-exercises-1': {
      title: 'Lista de Exercícios - Controle',
      content: 'Problemas resolvidos e propostos sobre controle de processos químicos. Exercícios práticos abordando modelagem, análise de estabilidade, projeto de controladores, sintonia de parâmetros e estudos de caso industriais.'
    },
    'material-exercises-2': {
      title: 'Estudos de Caso',
      content: 'Casos práticos da indústria química para aplicação dos conceitos de controle e otimização. Problemas reais de plantas industriais, análise de falhas, implementação de soluções e resultados obtidos.'
    },
    'contact-campusMap-1': {
      title: 'Mapa do Campus UFU',
      content: 'Mapa detalhado do Campus Santa Mônica da Universidade Federal de Uberlândia. Localização dos prédios, laboratórios, biblioteca, áreas de convivência e principais pontos de referência para visitantes.'
    },
    'contact-directions-1': {
      title: 'Direções para o Escritório',
      content: 'Instruções detalhadas para chegar ao escritório na FEQUI/UFU. Inclui rotas de acesso, pontos de referência, estacionamento disponível e informações de contato para dúvidas sobre localização.'
    },
    'studentResources-processControl-1': {
      title: 'Controle de Processos Avançado',
      content: 'Material do minicurso sobre controle avançado de processos químicos. Aborda técnicas de controle multivariável, controle preditivo (MPC), controle robusto e aplicações em processos industriais complexos.'
    },
    'studentResources-python-1': {
      title: 'Python para Engenheiros',
      content: 'Curso introdutório de Python aplicado à engenharia química. Inclui fundamentos da linguagem, bibliotecas científicas (NumPy, SciPy, Matplotlib), simulação de processos e análise de dados experimentais.'
    },
    'studentResources-energy-1': {
      title: 'Transição Energética',
      content: 'Material sobre transição energética e sustentabilidade na engenharia química. Aborda tecnologias renováveis, eficiência energética, captura de CO2, processos verdes e impacto ambiental da indústria química.'
    }
  };

  const handleDownload = async (pageSection: string, itemNumber: number) => {
    setIsDownloading(true);
    try {
      const key = `${pageSection}-${itemNumber}`;
      const content = downloadContent[key];
      
      if (content) {
        const filename = `${pageSection.replace('-', '_')}_${itemNumber}.pdf`;
        downloadFile(filename, content.content, content.title);
      } else {
        console.warn(`Conteúdo não encontrado para: ${key}`);
      }
    } catch (error) {
      console.error('Erro ao fazer download:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return { handleDownload, isDownloading };
};
