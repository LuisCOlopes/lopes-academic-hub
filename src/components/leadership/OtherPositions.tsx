
import React from 'react';
import { Card } from '@/components/ui/card';
import { Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OtherPositions = () => {
  const { t } = useLanguage();

  const otherPositions = [
    'Coordenador do Grupo IV do Departamento de Engenharia Química',
    'Membro de Comissão do INEP/MEC para autorização de funcionamento de Cursos',
    'Representante docente no conselho da Faculdade de Engenharia Química (2001-2002)',
    'Membro do Conselho de Pesquisa e Pós-graduação (2010-2012)',
    'Substituto diretor da FEQUI no Conselho Diretor da UFU (2001-2005)',
    'Presidente do Núcleo Docente Estruturante (NDE) do Curso de Engenharia Química',
    'Coordenador do NUCOP (Núcleo de Modelagem, Controle e Otimização de Processos) (2005-2009)',
    'Assessor Administrativo da Faculdade de Engenharia Química (2001-2005)',
    'Membro da COPSIA - Comissão Permanente de Sindicância e Inquérito Administrativo (2022-2023)'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-ufu-navy mb-6">
        Outras Posições de Liderança
      </h2>
      <Card className="p-6 border-academic-blue/20">
        <ul className="space-y-3">
          {otherPositions.map((position, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Building2 className="h-4 w-4 text-academic-blue mt-1 flex-shrink-0" />
              <span className="text-academic-gray-medium">{position}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default OtherPositions;
