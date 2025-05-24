
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Beaker, Leaf, Factory, Zap, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const activeProjects = [
    {
      title: 'Sustainable Catalytic Processes for Green Chemistry',
      description: 'Development of novel catalytic systems for environmentally friendly chemical production',
      funding: 'CNPq - R$ 450,000',
      duration: '2022-2025',
      status: 'Active',
      icon: Leaf,
      category: 'Sustainability',
      collaborators: ['MIT', 'UNICAMP', 'PETROBRAS'],
      publications: 8,
      students: 6
    },
    {
      title: 'AI-Driven Process Optimization in Chemical Industries',
      description: 'Machine learning applications for real-time optimization of chemical processes',
      funding: 'FAPEMIG - R$ 320,000',
      duration: '2023-2026',
      status: 'Active',
      icon: Zap,
      category: 'Technology',
      collaborators: ['USP', 'Google Research', 'Braskem'],
      publications: 4,
      students: 8
    },
    {
      title: 'Biorefinery Integration for Circular Economy',
      description: 'Integrated approach to biomass conversion and waste utilization',
      funding: 'EU Horizon - €380,000',
      duration: '2021-2024',
      status: 'Active',
      icon: Factory,
      category: 'Bioprocessing',
      collaborators: ['TU Delft', 'NREL', 'Shell'],
      publications: 12,
      students: 4
    },
    {
      title: 'Advanced Materials for Chemical Separation',
      description: 'Novel membrane and adsorbent materials for efficient separation processes',
      funding: 'CAPES - R$ 280,000',
      duration: '2023-2025',
      status: 'Starting',
      icon: Beaker,
      category: 'Materials',
      collaborators: ['Stanford', 'COPPE-UFRJ'],
      publications: 2,
      students: 5
    }
  ];

  const completedProjects = [
    {
      title: 'Green Hydrogen Production from Biogas',
      duration: '2019-2022',
      impact: '15 publications, 3 patents, 2 PhD graduates',
      funding: 'FINEP - R$ 680,000'
    },
    {
      title: 'Microreactor Technology for Fine Chemicals',
      duration: '2018-2021',
      impact: '22 publications, 1 startup company, 5 MSc graduates',
      funding: 'CNPq/RHAE - R$ 420,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Starting':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('projectsTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Current and completed research projects advancing chemical engineering knowledge
          </p>
        </div>

        {/* Active Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Active Research Projects
          </h2>
          <div className="grid gap-6">
            {activeProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-academic-blue rounded-lg flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{project.category}</Badge>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">Funding</p>
                        <p className="text-gray-600">{project.funding}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.duration}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Publications</p>
                        <p className="text-gray-600">{project.publications} papers</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Students</p>
                        <p className="text-gray-600">{project.students} researchers</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="font-medium text-gray-900 text-sm mb-2">Collaborators</p>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collab, collabIndex) => (
                          <Badge key={collabIndex} variant="secondary" className="text-xs">
                            {collab}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Recently Completed Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
                  <span className="text-sm text-gray-600">{project.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{project.impact}</p>
                <p className="text-academic-blue font-medium text-sm">{project.funding}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Research Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">R$ 2.5M</div>
              <div className="text-gray-600">Total Funding Secured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">45+</div>
              <div className="text-gray-600">Publications Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">25</div>
              <div className="text-gray-600">Graduate Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-academic-blue mb-2">12</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Projects;
