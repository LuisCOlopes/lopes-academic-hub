
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, DollarSign, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Opportunities = () => {
  const { t } = useLanguage();

  const currentOpenings = [
    {
      type: 'PhD Position',
      title: 'Sustainable Catalytic Processes for Green Chemistry',
      description: 'Seeking a motivated PhD student to work on novel catalytic systems for environmentally friendly chemical production.',
      requirements: [
        'MSc in Chemical Engineering or related field',
        'Strong background in catalysis or reaction engineering',
        'Programming skills (Python/MATLAB) preferred',
        'English proficiency required'
      ],
      funding: 'CAPES Scholarship + Research Allowance',
      duration: '4 years',
      location: 'UFU - Uberlândia, Brazil',
      deadline: '2024-03-15',
      status: 'Open'
    },
    {
      type: 'Postdoc Position',
      title: 'AI-Driven Process Optimization',
      description: 'Postdoctoral researcher position focusing on machine learning applications in chemical process optimization.',
      requirements: [
        'PhD in Chemical Engineering, Computer Science, or related field',
        'Experience with machine learning and process control',
        'Publications in peer-reviewed journals',
        'Strong programming skills in Python/R'
      ],
      funding: 'FAPESP Fellowship - R$ 7,373/month',
      duration: '2 years (renewable)',
      location: 'UFU - Uberlândia, Brazil',
      deadline: '2024-02-28',
      status: 'Open'
    },
    {
      type: 'MSc Position',
      title: 'Biorefinery Integration for Circular Economy',
      description: 'Master\'s thesis project on integrated biomass conversion and waste utilization in biorefinery systems.',
      requirements: [
        'BSc in Chemical Engineering or related field',
        'GPA ≥ 7.0/10.0',
        'Interest in sustainability and bioprocessing',
        'Basic knowledge of process simulation'
      ],
      funding: 'CNPq Scholarship',
      duration: '2 years',
      location: 'UFU - Uberlândia, Brazil',
      deadline: '2024-04-30',
      status: 'Open'
    },
    {
      type: 'Visiting Researcher',
      title: 'International Exchange Program',
      description: 'Opportunities for visiting researchers from partner institutions to collaborate on ongoing projects.',
      requirements: [
        'Enrolled PhD student or Postdoc',
        'Research proposal aligned with lab interests',
        'Funding from home institution or fellowship',
        'Minimum 6-month commitment'
      ],
      funding: 'External funding required',
      duration: '6-12 months',
      location: 'UFU - Uberlândia, Brazil',
      deadline: 'Rolling admissions',
      status: 'Open'
    }
  ];

  const fellowships = [
    {
      name: 'CAPES Doctoral Scholarship',
      value: 'R$ 2,200/month',
      duration: '48 months',
      eligibility: 'Brazilian citizens and permanent residents',
      application: 'Through university graduate program'
    },
    {
      name: 'CNPq Research Productivity Fellowship',
      value: 'R$ 1,700-4,100/month',
      duration: '36-60 months',
      eligibility: 'PhD holders with research experience',
      application: 'Direct application to CNPq'
    },
    {
      name: 'FAPESP Postdoctoral Fellowship',
      value: 'R$ 7,373/month + benefits',
      duration: '24 months',
      eligibility: 'Recent PhD graduates',
      application: 'Direct application to FAPESP'
    },
    {
      name: 'International Exchange Scholarships',
      value: 'Variable',
      duration: '6-24 months',
      eligibility: 'Graduate students and postdocs',
      application: 'Through partnership agreements'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'Closing Soon':
        return 'bg-orange-100 text-orange-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('PhD')) return <GraduationCap className="h-5 w-5" />;
    if (type.includes('Postdoc') || type.includes('Visiting')) return <Briefcase className="h-5 w-5" />;
    if (type.includes('MSc')) return <GraduationCap className="h-5 w-5" />;
    return <Briefcase className="h-5 w-5" />;
  };

  const getTypeColor = (type: string) => {
    if (type.includes('PhD')) return 'bg-blue-500';
    if (type.includes('Postdoc')) return 'bg-purple-500';
    if (type.includes('MSc')) return 'bg-green-500';
    if (type.includes('Visiting')) return 'bg-orange-500';
    return 'bg-gray-500';
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('opportunitiesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            Join our research team and advance your career in chemical engineering
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Current Openings
          </h2>
          <div className="grid gap-6">
            {currentOpenings.map((opportunity, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${getTypeColor(opportunity.type)} rounded-lg flex items-center justify-center`}>
                    {getTypeIcon(opportunity.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {opportunity.title}
                          </h3>
                          <Badge className={getStatusColor(opportunity.status)}>
                            {opportunity.status}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="mb-3">
                          {opportunity.type}
                        </Badge>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Funding</p>
                          <p className="text-gray-600">{opportunity.funding}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Duration</p>
                          <p className="text-gray-600">{opportunity.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-600">{opportunity.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Deadline</p>
                          <p className="text-gray-600">{opportunity.deadline}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Requirements</p>
                      <ul className="space-y-1">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-academic-blue rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Fellowships */}
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Available Fellowships
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fellowships.map((fellowship, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {fellowship.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Value:</span>
                    <span className="text-gray-600">{fellowship.value}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Duration:</span>
                    <span className="text-gray-600">{fellowship.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Eligibility:</span>
                    <span className="text-gray-600">{fellowship.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Application:</span>
                    <span className="text-gray-600">{fellowship.application}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Application Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">Send CV, motivation letter, and transcripts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Application screening and evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-academic-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Online or in-person interview with the team</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Opportunities;
