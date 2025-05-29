
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

const Team = () => {
  const { t } = useLanguage();

  const currentStudents = [
    {
      name: 'Ana Carolina Silva',
      level: 'Doutorado',
      project: 'Controle Tolerante a Falhas em Processos Químicos',
      year: '2023 - Presente',
      email: 'ana.silva@email.com'
    },
    {
      name: 'Carlos Eduardo Santos',
      level: 'Mestrado',
      project: 'Otimização de Processos de Separação',
      year: '2024 - Presente',
      email: 'carlos.santos@email.com'
    },
    {
      name: 'Mariana Oliveira',
      level: 'Iniciação Científica',
      project: 'Simulação de Sistemas de Controle',
      year: '2024 - Presente',
      email: 'mariana.oliveira@email.com'
    }
  ];

  const collaborators = [
    {
      name: 'Prof. Dr. Fernando Vinícius Lima',
      institution: 'West Virginia University',
      area: 'Controle de Processos',
      country: 'EUA'
    },
    {
      name: 'Prof. Dr. Valéria Viana Murata',
      institution: 'Universidade Federal de Uberlândia',
      area: 'Engenharia Ambiental',
      country: 'Brasil'
    },
    {
      name: 'Prof. Dr. Sérgio Mauro Silva Neiro',
      institution: 'Universidade Federal de Uberlândia',
      area: 'Otimização de Processos',
      country: 'Brasil'
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('teamTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('teamSubtitle')}
          </p>
        </div>

        {/* Current Students */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Estudantes Atuais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudents.map((student, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.year}</p>
                  </div>
                  <Badge variant="outline">{student.level}</Badge>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{student.project}</p>
                
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href={`mailto:${student.email}`} className="text-sm text-academic-blue hover:underline">
                    {student.email}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Collaborators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Colaboradores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborators.map((collaborator, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{collaborator.name}</h3>
                <p className="text-academic-blue font-medium mb-1">{collaborator.institution}</p>
                <p className="text-gray-600 text-sm mb-2">{collaborator.area}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span>📍</span>
                  <span>{collaborator.country}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Stats */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Estatísticas do Grupo</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">50+</div>
                <div className="text-gray-600">Estudantes Formados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">15</div>
                <div className="text-gray-600">Doutores Formados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">35</div>
                <div className="text-gray-600">Mestres Formados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">5</div>
                <div className="text-gray-600">Países de Colaboração</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Join Team */}
        <section>
          <Card className="p-6 bg-academic-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">Junte-se ao Nosso Grupo</h2>
            <p className="mb-4">
              Estamos sempre procurando estudantes motivados e pesquisadores 
              interessados em contribuir para o avanço da engenharia química.
            </p>
            <div className="flex gap-4">
              <Badge variant="secondary">Iniciação Científica</Badge>
              <Badge variant="secondary">Mestrado</Badge>
              <Badge variant="secondary">Doutorado</Badge>
              <Badge variant="secondary">Pós-doutorado</Badge>
            </div>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

export default Team;
