
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Camera, Music, BookOpen, MapPin } from 'lucide-react';

const Hobbies = () => {
  const { t } = useLanguage();

  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing moments and landscapes, especially during travels and academic conferences.',
      icon: Camera,
      activities: ['Nature photography', 'Urban landscapes', 'Academic events']
    },
    {
      title: 'Music',
      description: 'Playing guitar and listening to various music genres for relaxation.',
      icon: Music,
      activities: ['Classical guitar', 'Brazilian music', 'Jazz appreciation']
    },
    {
      title: 'Reading',
      description: 'Beyond technical literature, enjoying fiction and historical books.',
      icon: BookOpen,
      activities: ['Historical fiction', 'Science fiction', 'Biographies']
    },
    {
      title: 'Travel',
      description: 'Exploring new places and cultures, often combining with academic activities.',
      icon: MapPin,
      activities: ['Cultural experiences', 'Academic conferences', 'Nature exploration']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Personal Interests & Hobbies
          </h1>
          <p className="text-lg text-gray-600">
            Beyond academic pursuits, exploring creativity and personal enrichment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-blue rounded-lg">
                  <hobby.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {hobby.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    {hobby.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Work-Life Balance
          </h2>
          <p className="text-gray-600">
            Maintaining a healthy balance between academic responsibilities and personal interests 
            is essential for creativity and well-being. These activities provide inspiration and 
            fresh perspectives that often enhance my academic work.
          </p>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Hobbies;
