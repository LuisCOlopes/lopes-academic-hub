
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              About Prof. Luís Cláudio Oliveira Lopes
            </h1>
            <p className="text-xl text-gray-600">
              Professor of Chemical Engineering at Federal University of Uberlândia
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biography</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Prof. Luís Cláudio Oliveira Lopes is a distinguished Professor in the Faculty of Chemical Engineering 
                  at the Federal University of Uberlândia (UFU). With over 15 years of experience in academia and research, 
                  he has established himself as a leading expert in chemical process engineering and sustainable industrial practices.
                </p>
                <p className="mb-4">
                  His research interests span across process optimization, sustainable chemical engineering, and the development 
                  of environmentally friendly technologies for industrial applications. He has published extensively in 
                  peer-reviewed journals and has been invited to speak at numerous international conferences.
                </p>
                <p>
                  Professor Lopes is committed to excellence in teaching and has mentored over 200 students throughout his career, 
                  many of whom have gone on to successful careers in academia and industry.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Ph.D. in Chemical Engineering</div>
                    <div className="text-gray-600">University of São Paulo (USP), 2008</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">M.Sc. in Chemical Engineering</div>
                    <div className="text-gray-600">Federal University of Uberlândia, 2004</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">B.Sc. in Chemical Engineering</div>
                    <div className="text-gray-600">Federal University of Uberlândia, 2002</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Interests</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                    <span className="text-gray-600">Process Engineering & Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                    <span className="text-gray-600">Sustainable Chemical Processes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                    <span className="text-gray-600">Industrial Waste Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                    <span className="text-gray-600">Green Technology Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                    <span className="text-gray-600">Process Control & Automation</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default About;
