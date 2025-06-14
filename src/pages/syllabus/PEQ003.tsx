
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PEQ003 = () => {
  const { t } = useLanguage();

  const syllabusSections = [
    {
      title: "Unidade RI – ASPECTOS BÁSICOS",
      items: [
        "R1.0 Métodos Matemáticos - Modelos - Equações",
        "R2.0 Fundamentos Teóricos - Revisão"
      ]
    },
    {
      title: "Unidade I – REVISÃO DE EQUAÇÕES DIFERENCIAIS ORDINÁRIAS DE 1ª ORDEM",
      items: [
        "1.0 Métodos de Solução",
        "1.1 Equações Separáveis",
        "1.2 Equações Homogêneas",
        "1.3 Equações Diferenciais Exatas",
        "1.4 Fatores Integrantes",
        "1.5 Equações Especiais de 1ª ordem",
        "1.6 Problema de valor inicial - Teorema da Existência e Unicidade de Soluções",
        "1.7 Trajetórias Ortogonais"
      ]
    },
    {
      title: "Unidade II – EQUAÇÕES LINEARES DE 2ª ORDEM",
      items: [
        "2.0 Teorema Fundamental da Existência e Unicidade:",
        "a) Família de Soluções",
        "b) Wronskiano",
        "c) Soluções Fundamentais",
        "2.1 Equações homogêneas com coeficientes constantes – Equação característica",
        "2.2 Equações não homogêneas:",
        "a) Método dos Coeficientes Indeterminados",
        "b) Método de variação de Parâmetros",
        "c) Equação de Euler-Cauchy",
        "2.3 Soluções por Séries de Potências:",
        "a) Revisão de Séries de Potências",
        "b) Funções analíticas",
        "c) Teorema de Frobenius",
        "2.4 Solução por Série de Potências em torno de pontos Ordinários",
        "2.5 Solução por Série de Potências em torno de pontos Singulares",
        "2.6 Aplicações - Funções de Bessel, Funções de Neumann e Funções de Hankel",
        "2.7 Equação de Bessel Modificada"
      ]
    },
    {
      title: "Unidade III - SISTEMAS DE EQUAÇÕES DIFERENCIAIS ORDINÁRIAS DE 1ª ORDEM",
      items: [
        "3.1 Revisão da Álgebra Linear: espaços vetoriais, vetores linearmente independentes, bases, dimensão, valores característicos, vetores característicos",
        "3.2 Redução de uma equação diferencial linear de ordem m em um sistema de m equações diferenciais lineares de primeira ordem",
        "3.3 Aplicações da Álgebra Linear às equações diferenciais ordinárias - Espaço de Soluções",
        "3.4 Conceitos Fundamentais na Resolução de Sistemas de EDO's:",
        "• Soluções Matrizes Fundamentais",
        "• Funções Matriciais",
        "3.5 Sistemas Lineares homogêneos com coeficientes constantes",
        "3.6 Métodos dos valores característicos:",
        "• Valores característicos reais e distintos",
        "• Valores característicos reais e iguais",
        "• Valores característicos complexos"
      ]
    },
    {
      title: "Unidade IV – A TRANSFORMADA DE LAPLACE",
      items: [
        "4. Fundamentos",
        "4.1 O método Geral",
        "4.2 A transformada de Funções Especiais",
        "4.3 A Expansão de Heaviside",
        "4.4 Propriedades da Transformada de Laplace",
        "4.5 A Transformada de Laplace de Funções Periódicas",
        "4.6 Solução de Equações Diferenciais por Transformada de Laplace"
      ]
    },
    {
      title: "Unidade V - PROBLEMAS DE VALORES DE CONTORNO E TEORIA DE STURM-LIOUVILLE",
      items: [
        "5.1 Problemas de valores de contorno lineares homogêneos",
        "5.2 Fundamentos gerais:",
        "• Valores e funções característicos",
        "• Identidade de Lagrange",
        "5.3 Problema de Sturm - Liouville",
        "5.4 Problemas de valores de contorno não homogêneos",
        "5.5 Problemas de Sturm - Liouville singulares"
      ]
    },
    {
      title: "Unidade VI - EQUAÇÕES DIFERENCIAIS PARCIAIS (EDPs)- CONCEITOS BÁSICOS",
      items: [
        "6.1 Introdução",
        "6.2 EDPs de 1ª ordem Quasi-Linear",
        "6.3 Solução geral",
        "6.4 Equações Diferenciais Parciais Quasi-Lineares a duas Variáveis Independentes",
        "6.5 Característica e Classificação de EDPs",
        "6.6 Resolução de EDPs:",
        "• Método de Similaridade",
        "• Separação de Variáveis",
        "• Transformada de Laplace",
        "• Dicas de Solução"
      ]
    },
    {
      title: "Unidade VII - SEPARAÇÃO DE VARIÁVEIS E SÉRIES DE FOURIER",
      items: [
        "7.1 O método da separação de variáveis",
        "7.2 Séries de Fourier",
        "7.3 Fórmulas de Euler-Fourier",
        "7.4 O teorema de Fourier",
        "7.5 Forma complexa da Série de Fourier",
        "7.6 Aplicações"
      ]
    },
    {
      title: "Unidade VIII. EQUAÇÕES DIFERENCIAIS PARCIAIS – A EQUAÇÃO DA ONDA",
      items: [
        "8. Introdução",
        "8.1 Solução de D'Alembert",
        "8.2 Funções pares, ímpares e periódicas",
        "8.3 A corda finita"
      ]
    },
    {
      title: "Unidade IX - EQUAÇÕES DIFERENCIAIS PARCIAIS – EQUAÇÃO DA DIFUSÃO",
      items: [
        "9.1 Condução do calor: barra com extremidades mantidas a 0° C",
        "9.2 Condução do calor: barra sujeita a outras condições laterais",
        "9.3 Equação da Difusão Bidimensional Estacionária (Equação de Laplace)"
      ]
    },
    {
      title: "Unidade X – Resolvendo EDPs",
      items: [
        "10. Separação de Variáveis:",
        "10.1 Homogeneização de Condições de Contorno",
        "a) Generalização dos Problemas de Valores e Funções Características",
        "b) Funções Características Encontradas em Problemas da Engenharia Química:",
        "c) Geometria Plana",
        "d) Geometria Cilíndrica",
        "e) Geometria Esférica",
        "10.2 Aplicações:",
        "a) EDPs homogêneas",
        "b) EDPs não homogêneas"
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
              <Calculator className="h-8 w-8 text-academic-blue" />
              <div>
                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                  Métodos Matemáticos em Engenharia Química
                </h1>
                <p className="text-lg text-academic-blue font-medium">PEQ003</p>
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

export default PEQ003;
