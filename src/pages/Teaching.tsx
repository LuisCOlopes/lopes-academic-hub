
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, FileText, Link } from 'lucide-react';

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
    "Scilab",
    "AVEVA",
    "Python",
    "CoCo Simulator"
  ];

  const teachingPhilosophy = [
    "Emphasize practical applications of theoretical concepts",
    "Encourage critical thinking and problem-solving skills",
    "Foster collaborative learning environments",
    "Integrate sustainability principles in all coursework",
    "Provide personalized mentorship and guidance"
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

          {/* Teaching Philosophy */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Teaching Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I believe that effective teaching combines rigorous academic content with practical, 
                    real-world applications. My approach focuses on developing students' analytical thinking 
                    skills while emphasizing the importance of sustainable engineering practices.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through interactive learning experiences, collaborative projects, and personalized mentorship, 
                    I strive to prepare students for successful careers in chemical engineering and related fields.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Principles</h3>
                  <ul className="space-y-3">
                    {teachingPhilosophy.map((principle, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-academic-blue rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-600">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                    <span className="text-gray-700 font-medium">{tool}</span>
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

          {/* Student Testimonials */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Professor Lopes' teaching style really helped me understand complex chemical processes. 
                  His real-world examples made everything click!"
                </p>
                <div className="text-sm text-gray-500">
                  - Ana Silva, Chemical Engineering '23
                </div>
              </Card>
              
              <Card className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "The hands-on approach in his courses prepared me well for my career in industry. 
                  Highly recommend his classes!"
                </p>
                <div className="text-sm text-gray-500">
                  - João Santos, Chemical Engineering '22
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Teaching;
