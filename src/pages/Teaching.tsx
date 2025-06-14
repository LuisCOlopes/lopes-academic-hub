
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, FileText, Calculator, Cpu, Beaker, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Teaching = () => {
  const { t } = useLanguage();

  const courses = [
    {
      code: "FEQUI31030",
      name: t('processDesignCourse') || "Projeto de Processos da Indústria Química",
      level: t('undergraduate') || "Graduação",
      semester: "2024/2",
      students: 24,
      description: t('processDesignDescription') || "PPIQ - Projeto de processos industriais químicos",
      syllabusPath: "/syllabus/ppiq"
    },
    {
      code: "FEQUI31022",
      name: t('chemicalProcessControl2') || "Controle de Processos Químicos II",
      level: t('undergraduate') || "Graduação", 
      semester: "2024/2",
      students: 13,
      description: t('advancedProcessControl') || "CPQ II - Controle avançado de processos",
      syllabusPath: "/syllabus/cpq2"
    },
    {
      code: "PEQ003",
      name: t('mathematicalMethods') || "Métodos Matemáticos em Engenharia Química",
      level: t('graduate') || "Pós-graduação",
      semester: "2024/2",
      students: 8,
      description: t('mathematicalMethodsDescription') || "Métodos matemáticos aplicados à engenharia química",
      syllabusPath: "/syllabus/peq003"
    }
  ];

  const computationalTools = [
    { name: "Scilab", icon: Calculator },
    { name: "AVEVA", icon: Settings },
    { name: "Python", icon: Cpu },
    { name: "CoCo Simulator", icon: Beaker }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              {t('teachingTitle')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('teachingSubtitle')}
            </p>
          </div>

          {/* Current Courses */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('currentCourses')}</h2>
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
                      course.level === 'Graduate' || course.level === 'Pós-graduação' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>📅 {course.semester}</span>
                    <span>👥 {course.students} {t('students') || 'estudantes'}</span>
                  </div>
                  <Link to={course.syllabusPath}>
                    <Button variant="outline" size="sm" className="text-academic-blue border-academic-blue hover:bg-academic-blue hover:text-white">
                      {t('viewSyllabus') || 'Ver Ementa'}
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          {/* Computational Tools */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('computationalCodes')}</h2>
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

          {/* Teaching Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('teachingResources')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <BookOpen className="h-8 w-8 text-academic-blue mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('courseMaterials')}</h3>
                <p className="text-gray-600 text-sm mb-3">{t('courseMaterialsDescription')}</p>
                <Button size="sm" variant="outline">{t('access')}</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="h-8 w-8 text-academic-blue mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('studentProjects')}</h3>
                <p className="text-gray-600 text-sm mb-3">{t('studentProjectsDescription')}</p>
                <Button size="sm" variant="outline">{t('explore')}</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-academic-blue mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('assignments')}</h3>
                <p className="text-gray-600 text-sm mb-3">{t('assignmentsDescription')}</p>
                <Button size="sm" variant="outline">{t('download')}</Button>
              </Card>
            </div>
          </section>

          {/* Teaching Philosophy */}
          <section>
            <Card className="p-6 bg-academic-blue text-white">
              <h2 className="text-2xl font-semibold mb-4">{t('teachingPhilosophy')}</h2>
              <p className="mb-4">
                {t('teachingPhilosophyText')}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t('practicalLearning')}</h3>
                  <p className="text-sm">{t('practicalLearningDescription')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t('criticalThinking')}</h3>
                  <p className="text-sm">{t('criticalThinkingDescription')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t('industryConnection')}</h3>
                  <p className="text-sm">{t('industryConnectionDescription')}</p>
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
