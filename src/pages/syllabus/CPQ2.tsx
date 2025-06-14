
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CPQ2 = () => {
  const { t } = useLanguage();

  const syllabusSections = [
    {
      title: "1 - Introdução ao Controle de Processos",
      items: [
        "1.1 Exemplo motivador",
        "1.2 Classificação das estratégias de controle",
        "1.3 Instrumentos de uma malha de controle",
        "1.4 Controle de processos e diagrama de blocos",
        "1.5 Justificativa econômica do controle de processos",
        "1.6 Segurança de processos e controle",
        "1.7 Projeto de processos e controle",
        "1.8 Revisão de aspectos matemáticos: (a) Graus de liberdade, (b) Linearização de modelos, (c) transformada de Laplace, (d) autovalores, autovetores e valores singulares",
        "1.9 Revisão de modelagem de processos: fenomenológica e empírica",
        "1.10 Solução de modelos dinâmicos e o uso de simuladores digitais"
      ]
    },
    {
      title: "2 Funções de Transferência",
      items: [
        "2.1 Desenvolvimento",
        "2.2 Propriedades",
        "2.3 Diagrama de blocos",
        "2.4 Modelo em espaço de estados e na forma de matrizes de função de transferência",
        "2.5 Polos e zeros",
        "2.6 Aproximação de funções de transferência para sistemas de ordens elevadas"
      ]
    },
    {
      title: "3 Resposta de Sistemas em Malha Aberta",
      items: [
        "3.1 Perturbações",
        "3.2 Resposta de sistemas de primeira ordem",
        "3.3 Resposta de sistemas de segunda ordem",
        "3.4 Resposta de sistemas integrantes",
        "3.5 Efeitos de polos e zeros na resposta de um sistema",
        "3.6 Processos com tempo morto",
        "3.7 Processo com interação e sem interação",
        "3.8 Processos com múltiplas entradas e múltiplas saídas (MIMO)"
      ]
    },
    {
      title: "4 Resposta de Sistemas em Malha Fechada",
      items: [
        "4.1 Representação de diagramas de blocos",
        "4.2 Funções de transferência da malha fechada",
        "4.3 Resposta de sistemas em malha fechada",
        "4.4 Comportamento dinâmico em malha fechada",
        "4.5 Análise da estabilidade",
        "4.6 Critério de Routh-Hurwitz",
        "4.7 Diagrama de lugar das raízes",
        "4.8 Critério de desempenho de processos em malha fechada"
      ]
    },
    {
      title: "5 Sistemas de Controle Feedback",
      items: [
        "5.1 Seleção de variáveis controladas, manipuladas e medidas",
        "5.2 Projeto de controladores baseado em modelos: síntese direta e IMC",
        "5.3 Projeto de controladores para resposta transiente",
        "5.4 O controlador PID contínuo e discreto– características e propriedades",
        "5.5 Sintonia de controladores PID",
        "5.6 Diretrizes para o controle de variáveis de processo"
      ]
    },
    {
      title: "6 Projeto e Análise de Controladores Baseado na Resposta Frequencial",
      items: [
        "6.1 Resposta de processo a uma perturbação senoidal",
        "6.2 Diagrama de Bode",
        "6.3 Característica de resposta frequencial de controladores",
        "6.4 Diagrama de Nyquist",
        "6.5 Critérios de Estabilidade: (a) Bode, (b) Nyquist",
        "6.6 Margem de fase e margem de ganho",
        "6.7 Resposta frequencial e malha fechada e funções de sensibilidade",
        "6.8 Análise de robustez",
        "6.9 Projeto de controladores baseado em resposta frequencial"
      ]
    },
    {
      title: "7 Controle Feedforward e de Razão",
      items: [
        "7.1 Introdução",
        "7.2 Controle de razão",
        "7.3 Projeto de controladores feedforward baseados em modelos estacionários",
        "7.4 Projeto de controladores feedforward baseados em modelos dinâmicos",
        "7.5 Configurações para controle feedback-feedforward",
        "7.6 Sintonia de Controladores feedforward"
      ]
    },
    {
      title: "8 Técnicas de Controle Avançadas",
      items: [
        "8.1 Controle cascata",
        "8.2 Compensação de tempo morto",
        "8.3 Controle inferencial",
        "8.4 Controle seletivo/override",
        "8.5 Sistemas de controle não lineares",
        "8.6 Controle adaptativo"
      ]
    },
    {
      title: "9 Controle de Processos Multivariáveis (MIMO)",
      items: [
        "9.1 Interações",
        "9.2 Pareamento",
        "9.3 Análise de valor singular",
        "9.4 Sintonia de controladores PID múltiplas malhas",
        "9.5 Desacoplamento de estratégias de controle multivariáveis",
        "9.6 Estratégias para redução de interação de malhas",
        "9.7 Controle preditivo baseado em modelos"
      ]
    },
    {
      title: "10 Estudo de Casos",
      items: [
        "10.1 Estudos de casos com softwares disponíveis"
      ]
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/teaching">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Ensino
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-8 w-8 text-academic-blue" />
              <div>
                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                  Controle de Processos Químicos II
                </h1>
                <p className="text-lg text-academic-blue font-medium">FEQUI31022 - CPQ II</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {syllabusSections.map((section, index) => (
              <Card key={index} className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-academic-blue pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 pl-4 border-l-2 border-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default CPQ2;
