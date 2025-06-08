
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const SpecialistStudents = () => {
  const { t } = useLanguage();

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

  return (
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
  );
};

export default SpecialistStudents;
