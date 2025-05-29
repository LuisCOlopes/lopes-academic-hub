
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const Alumni = () => {
  const { t } = useLanguage();

  const alumni = [
    {
      name: 'Dr. Rafael Monteiro Jorge Alves de Souza',
      degree: 'Doutorado',
      year: '2022',
      thesis: 'Controle Tolerante a Falhas para Quadricópteros',
      currentPosition: 'Professor Adjunto',
      institution: 'Universidade Federal de Goiás',
      location: 'Goiânia, GO'
    },
    {
      name: 'Dr. Thiago Vaz da Costa',
      degree: 'Doutorado',
      year: '2021',
      thesis: 'Controle Tolerante a Falhas via Atuadores Virtuais',
      currentPosition: 'Engenheiro de Processos',
      institution: 'Petrobras',
      location: 'Rio de Janeiro, RJ'
    },
    {
      name: 'Dra. Rosiane Rodrigues da Rocha',
      degree: 'Doutorado',
      year: '2018',
      thesis: 'Controle Preditivo Distribuído Cooperativo',
      currentPosition: 'Professora Adjunta',
      institution: 'Instituto Federal de Minas Gerais',
      location: 'Bambuí, MG'
    },
    {
      name: 'M.Sc. Aniel Silva de Morais',
      degree: 'Mestrado',
      year: '2020',
      thesis: 'Detecção de Falhas em Sistemas de Controle',
      currentPosition: 'Doutorando',
      institution: 'Universidade Federal de Uberlândia',
      location: 'Uberlândia, MG'
    },
    {
      name: 'M.Sc. Gabriela Vieira Lima',
      degree: 'Mestrado',
      year: '2019',
      thesis: 'Aplicação de Drones em Monitoramento Ambiental',
      currentPosition: 'Doutoranda',
      institution: 'Universidade Federal de Uberlândia',
      location: 'Uberlândia, MG'
    },
    {
      name: 'M.Sc. Kenji Fabiano Ávila Okada',
      degree: 'Mestrado',
      year: '2023',
      thesis: 'Controle Tolerante a Falhas para Quadricópteros',
      currentPosition: 'Engenheiro de Controle',
      institution: 'Embraer',
      location: 'São José dos Campos, SP'
    }
  ];

  const statistics = [
    { label: 'Total de Formados', value: '50+' },
    { label: 'Doutores', value: '15' },
    { label: 'Mestres', value: '35' },
    { label: 'Taxa de Empregabilidade', value: '95%' }
  ];

  const sectors = [
    { name: 'Acadêmico', count: 12, percentage: 40 },
    { name: 'Indústria Petroquímica', count: 8, percentage: 27 },
    { name: 'Tecnologia', count: 6, percentage: 20 },
    { name: 'Consultoria', count: 4, percentage: 13 }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('alumniTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('alumniSubtitle')}
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Estatísticas dos Egressos</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-academic-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Sector Distribution */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Distribuição por Setor</h2>
            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">{sector.name}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-academic-blue h-3 rounded-full transition-all duration-300"
                      style={{ width: `${sector.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">{sector.count} egressos</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Alumni List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Egressos Destacados</h2>
          <div className="grid gap-6">
            {alumni.map((alum, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{alum.name}</h3>
                    <p className="text-academic-blue font-medium">{alum.currentPosition}</p>
                    <p className="text-gray-600">{alum.institution}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">{alum.degree}</Badge>
                    <p className="text-sm text-gray-500 mt-1">{alum.year}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Tese/Dissertação:</strong> {alum.thesis}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{alum.location}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <Card className="p-6 bg-academic-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">Histórias de Sucesso</h2>
            <p className="mb-4">
              Nossos egressos estão fazendo a diferença em universidades, 
              indústrias e centros de pesquisa ao redor do mundo.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <GraduationCap className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Carreira Acadêmica</h3>
                <p className="text-sm">Professores em universidades de prestígio</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Briefcase className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Liderança Industrial</h3>
                <p className="text-sm">Cargos executivos em grandes empresas</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Impacto Global</h3>
                <p className="text-sm">Contribuições internacionais</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Alumni;
