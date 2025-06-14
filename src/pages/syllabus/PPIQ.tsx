
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PPIQ = () => {
  const { t } = useLanguage();

  const syllabusSections = [
    {
      title: "1 Introdução",
      items: [
        "1.1 Questões iniciais de projeto da indústria química",
        "1.2 Tipos de projetos industriais: estimativa preliminar, projeto detalhado, projeto definitivo",
        "1.3 Etapas do desenvolvimento do projeto em processo industrial",
        "1.4 Localização de planta – aspectos principais",
        "1.5 Análise e síntese de processos",
        "1.6 Criação de processos e fluxogramas: diagramas de blocos, PFD, P&ID, diagramas especiais",
        "1.7 Síntese heurística de processos químicos",
        "1.8 Estudo de alguns processos tradicionais da indústria química"
      ]
    },
    {
      title: "2 O Subsistema de Reação",
      items: [
        "2.1 A engenharia de processos e o projeto conceitual: hierarquias de decisões",
        "2.2 Rotas alternativas",
        "2.3 Viabilidade termodinâmica e cinética",
        "2.4 Sistemas com reações simultâneas",
        "2.5 Alocações de matérias-primas",
        "2.6 Avaliação de parâmetros operacionais",
        "2.7 Análise e sequenciamento de reatores",
        "2.8 Desenvolvimento de projeto do sistema de reação utilizando simuladores"
      ]
    },
    {
      title: "3 O Subsistema de Separação",
      items: [
        "3.1 Tecnologia de separação",
        "3.2 Síntese de Sequência de Separadores: (destilação simples, multicomponente e azeotrópica)",
        "3.3 Abordagens heurística, evolutiva e algorítmica",
        "3.4 Limitações das regras heurísticas",
        "3.5 Investigação do impacto do reciclo",
        "3.6 Desenvolvimento de projeto de sistemas de separação e reciclo utilizando simuladores"
      ]
    },
    {
      title: "4 Sistemas de Integração Energética",
      items: [
        "4.1 Uso de energia térmica nos processos químicos",
        "4.2 Análise termodinâmica de processos",
        "4.3 A primeira e a segunda lei da termodinâmica e a análise de processos",
        "4.4 Irreversibilidade e eficiência termodinâmica",
        "4.5 Regras heurísticas para redes de trocadores de calor (RTC)",
        "4.6 Análise de temperatura pinch",
        "4.7 Projeto de RTC com demanda mínima de energia",
        "4.8 Projeto de RTC com número mínimo de trocadores de calor",
        "4.9 Redução do número de trocadores de calor de uma rede",
        "4.10 Integração energética envolvendo outros equipamentos: evaporadores, bombas de calor, etc"
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
              <BookOpen className="h-8 w-8 text-academic-blue" />
              <div>
                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                  Projeto de Processos da Indústria Química
                </h1>
                <p className="text-lg text-academic-blue font-medium">FEQUI31030 - PPIQ</p>
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

export default PPIQ;
