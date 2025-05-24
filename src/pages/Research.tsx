
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Research = () => {
  const { t } = useLanguage();

  const researchAreas = [
    {
      title: "Process Optimization",
      description: "Advanced optimization techniques for chemical processes, including multi-objective optimization and machine learning applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Sustainable Engineering",
      description: "Development of environmentally friendly chemical processes and green technology solutions for industrial applications.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      title: "Process Control",
      description: "Advanced control strategies for chemical processes, including model predictive control and adaptive control systems.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];

  const currentProjects = [
    {
      title: "Optimization of Distillation Columns Using AI",
      funding: "CNPq - R$ 150,000",
      duration: "2023-2025",
      status: "Ongoing"
    },
    {
      title: "Green Solvents for Chemical Separation",
      funding: "FAPEMIG - R$ 200,000",
      duration: "2022-2024",
      status: "Ongoing"
    },
    {
      title: "Industrial Waste Valorization",
      funding: "CAPES - R$ 120,000",
      duration: "2023-2026",
      status: "Starting"
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Research
            </h1>
            <p className="text-xl text-gray-600">
              Advancing chemical engineering through innovative research and sustainable solutions
            </p>
          </div>

          {/* Research Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <Button variant="outline" size="sm" className="text-academic-blue border-academic-blue">
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Current Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Projects</h2>
            <div className="space-y-4">
              {currentProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>💰 {project.funding}</span>
                        <span>📅 {project.duration}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 md:mt-0 text-academic-blue border-academic-blue">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Research Impact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">50+</div>
                <div className="text-gray-600">Publications</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">1200+</div>
                <div className="text-gray-600">Citations</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">15</div>
                <div className="text-gray-600">PhD Students</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">8</div>
                <div className="text-gray-600">Patents</div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Research;
