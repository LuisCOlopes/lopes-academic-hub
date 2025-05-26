
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, FileText, Link, Calculator, Cpu, Beaker, Settings } from 'lucide-react';

const Teaching = () => {
  const { t } = useLanguage();

  const courses = [
    {
      code: "FEQUI31030",
      name: "Projeto de Processos da Indústria Química",
      level: "Undergraduate",
      semester: "2024/2",
      students: 24,
      description: "PPIQ - Projeto de processos industriais químicos"
    },
    {
      code: "FEQUI31022",
      name: "Controle de Processos Químicos II",
      level: "Undergraduate", 
      semester: "2024/2",
      students: 13,
      description: "CPQ II - Controle avançado de processos"
    },
    {
      code: "PEQ003",
      name: "Métodos Matemáticos em Engenharia Química",
      level: "Graduate",
      semester: "2024/2",
      students: 8,
      description: "Métodos matemáticos aplicados à engenharia química"
    }
  ];

  const computationalTools = [
    { name: "Scilab", icon: Calculator },
    { name: "AVEVA", icon: Settings },
    { name: "Python", icon: Cpu },
    { name: "CoCo Simulator", icon: Beaker }
  ];

  const recentPublications = [
    {
      title: "Operability for Process Flowsheet Analysis",
      authors: "FERREIRA, U.G.; NEIRO, S.M.S.; Oliveira-Lopes, L.C.; et al.",
      journal: "Digital Chemical Engineering",
      year: "2025"
    },
    {
      title: "Simulation of carbon monoxide dispersion released from a fleet in urban environment",
      authors: "SOUZA, D.B.; BARROZO, M.A.; OLIVEIRA-LOPES, L.C.; MURATA, V.V.",
      journal: "Brazilian Journal of Chemical Engineering",
      year: "2025"
    },
    {
      title: "Fault-Tolerant Control for Quadcopters Under Actuator and Sensor Faults",
      authors: "OKADA, K.F.A.; MORAIS, A.S.; RIBEIRO, L.; et al.",
      journal: "Sensors",
      year: "2024"
    }
  ];

  const collaborators = [
    {
      category: "UFU",
      institutions: [
        "Faculdade de Engenharia Química",
        "Faculdade de Engenharia Elétrica"
      ]
    },
    {
      category: "Brasil",
      institutions: [
        {
          name: "Universidade Federal de Campina Grande - PB (UFCG)",
          contact: "Heleno Bispo da Silva Júnior",
          url: "https://www.uaeq.ufcg.edu.br/index.php/docentes/103-heleno-bispo-da-silva-junior"
        },
        {
          name: "Universidade Federal da Bahia (UFBA)",
          contact: "Cristiano Hora de Oliveira Fontes",
          url: "http://www.pei.ufba.br/pt-br/cristiano-hora-de-oliveira-fontes"
        },
        {
          name: "Universidade Estadual de Campinas (Unicamp)",
          contact: "Flávio Vasconcelos da Silva",
          url: "https://portal.dados.unicamp.br/perfil?origem=&docente=286898&sigla_unidade=&nome_unidade=&nome_programa="
        }
      ]
    },
    {
      category: "Internacional",
      institutions: [
        {
          name: "University of California, Los Angeles (UCLA)",
          contact: "Panagiotis D. Christofides",
          url: "https://samueli.ucla.edu/leadership-panagiotis-christofides/"
        },
        {
          name: "West Virginia University (WVU)",
          contact: "Fernando V. Lima",
          url: "https://fernandolima.faculty.wvu.edu/"
        }
      ]
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Teaching
            </h1>
            <p className="text-xl text-gray-600">
              Inspiring the next generation of chemical engineers through innovative education
            </p>
          </div>

          {/* Publications Metrics */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Publications</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-academic-blue">30+</div>
                  <div className="text-gray-600">Journal Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-academic-blue">150+</div>
                  <div className="text-gray-600">Conference Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-academic-blue">12</div>
                  <div className="text-gray-600">h-index (2015-)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-academic-blue">23</div>
                  <div className="text-gray-600">i10-index (2015-)</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Journal Articles</h3>
              <div className="space-y-4">
                {recentPublications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-academic-blue pl-4">
                    <h4 className="font-medium text-gray-900">{pub.title}</h4>
                    <p className="text-sm text-gray-600">{pub.authors}</p>
                    <p className="text-sm text-academic-blue">{pub.journal}, {pub.year}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Current Courses */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Courses</h2>
            <div className="grid gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
                      <p className="text-academic-blue font-medium">{course.code}</p>
                      <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      course.level === 'Graduate' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>📅 {course.semester}</span>
                    <span>👥 {course.students} students</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-academic-blue border-academic-blue">
                    View Syllabus
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Computational Tools */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Códigos Computacionais</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {computationalTools.map((tool, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow">
                    <tool.icon className="h-8 w-8 text-academic-blue mx-auto mb-2" />
                    <span className="text-gray-700 font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Research Opportunities */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Oportunidades de Pesquisa</h2>
              <p className="text-gray-600 mb-4">
                Estamos sempre procurando estudantes motivados para participar de projetos de pesquisa 
                em controle de processos, inteligência artificial aplicada à engenharia química, 
                e sustentabilidade energética.
              </p>
              <Button className="bg-academic-blue hover:bg-blue-700">
                Saiba Mais
              </Button>
            </Card>
          </section>

          {/* Team */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Equipe</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Alunos de Iniciação Científica</h3>
                  <p className="text-gray-600">A ser adicionado</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Alunos de Mestrado</h3>
                  <p className="text-gray-600">A ser adicionado</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Alunos de Doutorado</h3>
                  <p className="text-gray-600">A ser adicionado</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Collaborators */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Colaboradores</h2>
              <div className="space-y-6">
                {collaborators.map((group, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-3">{group.category}</h3>
                    <div className="space-y-2">
                      {Array.isArray(group.institutions[0]) ? (
                        group.institutions.map((inst, i) => (
                          <p key={i} className="text-gray-600">• {inst}</p>
                        ))
                      ) : (
                        group.institutions.map((inst, i) => (
                          <div key={i} className="border-l-4 border-gray-200 pl-4">
                            <p className="font-medium text-gray-900">{inst.name}</p>
                            <p className="text-gray-600">{inst.contact}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Teaching Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Teaching Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <BookOpen className="h-12 w-12 text-academic-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lecture Notes</h3>
                <p className="text-gray-600 mb-4">Comprehensive lecture materials and study guides</p>
                <Button variant="outline" size="sm">Access Materials</Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="h-12 w-12 text-academic-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Problem Sets</h3>
                <p className="text-gray-600 mb-4">Practice problems and solution guides</p>
                <Button variant="outline" size="sm">Download Problems</Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Link className="h-12 w-12 text-academic-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Material</h3>
                <p className="text-gray-600 mb-4">Course materials and download links</p>
                <Button variant="outline" size="sm">View Materials</Button>
              </Card>
            </div>
          </section>

          {/* Complete Teaching History */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Histórico de Ensino</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Disciplinas de Graduação</h3>
                <div className="max-h-96 overflow-y-auto">
                  <div className="grid gap-2 text-sm">
                    <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                      <span>Código</span>
                      <span>Disciplina</span>
                      <span>Ano</span>
                      <span>Período</span>
                    </div>
                    {/* Recent courses shown as examples */}
                    <div className="grid grid-cols-4 gap-4 py-1">
                      <span>FEQUI31033</span>
                      <span>Trabalho de Conclusão de Curso</span>
                      <span>2024</span>
                      <span>2° Semestre</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-1">
                      <span>FEQUI31030</span>
                      <span>Projeto de Processos da Indústria Química</span>
                      <span>2024</span>
                      <span>2° Semestre</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-1">
                      <span>FEQUI31022</span>
                      <span>Controle de Processos Químicos II</span>
                      <span>2024</span>
                      <span>1° e 2° Semestre</span>
                    </div>
                    <div className="text-center py-4 text-gray-600">
                      ... 127 disciplinas ministradas desde 1991 ...
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Disciplinas de Pós-graduação</h3>
                <div className="max-h-96 overflow-y-auto">
                  <div className="grid gap-2 text-sm">
                    <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                      <span>Código</span>
                      <span>Disciplina</span>
                      <span>Ano</span>
                      <span>Período</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-1">
                      <span>PEQ003</span>
                      <span>Métodos Matemáticos em Engenharia Química</span>
                      <span>2024</span>
                      <span>2° Semestre</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-1">
                      <span>PEQ038E</span>
                      <span>Tópicos Especiais em Modelagem, Controle e Otimização</span>
                      <span>2024</span>
                      <span>1° Semestre</span>
                    </div>
                    <div className="text-center py-4 text-gray-600">
                      ... 41 disciplinas de pós-graduação ministradas desde 2005 ...
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Teaching;
