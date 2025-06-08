
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MainPositions = () => {
  const { t } = useLanguage();

  const mainPositions = [
    {
      title: 'Diretor Substituto da Diretoria de Qualidade de Vida (DIRVE)',
      institution: 'Pró-reitoria de Assistência Estudantil - UFU',
      period: '2021 - 06/2025',
      type: 'Gestão Administrativa',
      achievements: [
        'Coordenação de programas de qualidade de vida estudantil',
        'Implementação de políticas de bem-estar',
        'Gestão de equipes multidisciplinares',
        'Desenvolvimento de projetos de apoio estudantil'
      ]
    },
    {
      title: 'Assessor do Reitor para Assuntos Estudantis',
      institution: 'Universidade Federal de Uberlândia',
      period: '2017 - 2025',
      type: 'Liderança Estratégica',
      achievements: [
        'Trabalho na PROEXC (Pró-reitoria de Extensão e Cultura)',
        'Atuação na PROAE (Pró-reitoria de Assistência Estudantil)',
        'Coordenação da ASAES (Assessoria Administrativa da PROAE)',
        'Desenvolvimento de políticas estudantis'
      ]
    },
    {
      title: 'Coordenador do Programa de Pós-graduação em Engenharia Química',
      institution: 'FEQUI/UFU',
      period: '2010 - 2012',
      type: 'Excelência Acadêmica',
      achievements: [
        'Coordenação de programa de pós-graduação conceito CAPES 5',
        'Gestão de mais de 100 estudantes de mestrado e doutorado',
        'Implementação de melhorias curriculares',
        'Fortalecimento da pesquisa e extensão'
      ]
    },
    {
      title: 'Membro do Conselho Universitário',
      institution: 'UFU',
      period: '2010 - 2012',
      type: 'Governança Universitária',
      achievements: [
        'Participação em decisões estratégicas da universidade',
        'Representação da comunidade acadêmica',
        'Contribuição para políticas institucionais',
        'Assessoria em planejamento universitário'
      ]
    }
  ];

  return (
    <section className="mb-12">
      <div className="space-y-8">
        {mainPositions.map((position, index) => (
          <Card key={index} className="p-8 border-academic-blue/20 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-ufu-navy">{position.title}</h3>
                  <p className="text-academic-blue font-medium">{position.institution}</p>
                </div>
                <Badge variant="default" className="text-sm bg-academic-blue text-white">
                  {position.period}
                </Badge>
              </div>
              <Badge variant="secondary" className="mb-4 bg-academic-teal text-ufu-navy">
                {position.type}
              </Badge>
            </div>
            
            <div>
              <h4 className="font-semibold text-ufu-navy mb-3">Principais Realizações</h4>
              <ul className="space-y-2">
                {position.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-academic-gray-medium">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MainPositions;
