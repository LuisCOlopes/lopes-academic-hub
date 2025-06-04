
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GraduationCap, Award, Building } from 'lucide-react';

const Alumni = () => {
  const { t } = useLanguage();

  const phdGraduates = [
    {
      name: 'Dr. Ana Paula Silva',
      thesis: 'Controle Preditivo em Processos de Separação',
      year: 2019,
      currentPosition: 'Professora Associada - UFMG',
      achievements: ['Prêmio CAPES de Tese', 'Best Paper Award IFAC 2020']
    },
    {
      name: 'Dr. Carlos Eduardo Santos',
      thesis: 'Otimização de Redes de Trocadores de Calor',
      year: 2018,
      currentPosition: 'Engenheiro Sênior - Petrobras',
      achievements: ['Patente Industrial', 'Publicação Nature Energy']
    }
  ];

  const masterGraduates = [
    {
      name: 'M.Sc. Marina Costa',
      thesis: 'Modelagem de Processos Biotecnológicos',
      year: 2020,
      currentPosition: 'Doutoranda - MIT',
      achievements: ['Bolsa CNPq', 'Melhor Dissertação UFU 2020']
    },
    {
      name: 'M.Sc. Roberto Lima',
      thesis: 'Controle Tolerante a Falhas em Reatores',
      year: 2019,
      currentPosition: 'Engenheiro de Processos - Vale',
      achievements: ['Publicação em Q1', 'Prêmio Inovação Vale']
    }
  ];

  const stats = [
    { number: '25+', label: 'Doutores Formados', icon: GraduationCap },
    { number: '45+', label: 'Mestres Formados', icon: GraduationCap },
    { number: '15+', label: 'Prêmios Recebidos', icon: Award },
    { number: '80%', label: 'Empregabilidade', icon: Building }
  ];

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

          {/* Student Supervision Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ufu-navy mb-4">Orientações Concluídas (Parte 1)</h3>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/8ea91021-e874-4bd2-891b-224d38f06d45.png" 
                  alt="Orientações de Estudantes - Parte 1" 
                  className="mx-auto max-w-full h-auto rounded-lg"
                />
                <p className="text-sm text-ufu-blue mt-3">Fluxograma de orientações acadêmicas realizadas</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-ufu-navy mb-4">Orientações Concluídas (Parte 2)</h3>
              <div className="text-center">
                <img 
                  src="/lovable-uploads/93fb63db-e504-4915-a620-08b7a5ae5fd6.png" 
                  alt="Orientações de Estudantes - Parte 2" 
                  className="mx-auto max-w-full h-auto rounded-lg"
                />
                <p className="text-sm text-ufu-blue mt-3">Continuação do fluxograma de orientações acadêmicas</p>
              </div>
            </Card>
          </div>

          {/* PhD Graduates */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">Doutores Formados</h2>
            <div className="grid gap-6">
              {phdGraduates.map((graduate, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ufu-navy mb-2">{graduate.name}</h3>
                      <p className="text-ufu-blue mb-2"><strong>Tese:</strong> {graduate.thesis}</p>
                      <p className="text-ufu-blue mb-3"><strong>Ano:</strong> {graduate.year}</p>
                      <p className="text-ufu-navy font-medium mb-3"><strong>Posição Atual:</strong> {graduate.currentPosition}</p>
                      <div className="flex flex-wrap gap-2">
                        {graduate.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="secondary" className="bg-ufu-light text-ufu-navy">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-ufu-blue text-white">Doutorado</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Master Graduates */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-6">Mestres Formados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {masterGraduates.map((graduate, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-ufu-navy mb-2">{graduate.name}</h3>
                    <p className="text-ufu-blue text-sm mb-2"><strong>Dissertação:</strong> {graduate.thesis}</p>
                    <p className="text-ufu-blue text-sm mb-2"><strong>Ano:</strong> {graduate.year}</p>
                    <p className="text-ufu-navy font-medium text-sm mb-3"><strong>Posição Atual:</strong> {graduate.currentPosition}</p>
                    <div className="flex flex-wrap gap-1">
                      {graduate.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Mestrado</Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <Card className="p-6 bg-ufu-light">
            <h2 className="text-2xl font-playfair font-bold text-ufu-navy mb-4">Casos de Sucesso</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">15+</div>
                <div className="text-ufu-blue">Ex-alunos em universidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">25+</div>
                <div className="text-ufu-blue">Trabalhando na indústria</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ufu-navy mb-2">5+</div>
                <div className="text-ufu-blue">Patentes registradas</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
