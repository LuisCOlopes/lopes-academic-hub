
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Film, Music, BookOpen, MapPin } from 'lucide-react';

const Hobbies = () => {
  const { t } = useLanguage();

  const hobbies = [
    {
      title: 'Cinema',
      description: 'Apreciação de filmes de diversos gêneros, especialmente dramas e ficção científica.',
      icon: Film,
      activities: ['Filmes clássicos', 'Cinema nacional', 'Ficção científica']
    },
    {
      title: 'Música',
      description: 'Tocar violão e apreciar diversos gêneros musicais para relaxamento.',
      icon: Music,
      activities: ['Violão clássico', 'Música brasileira', 'Apreciação de jazz']
    },
    {
      title: 'Leitura',
      description: 'Além da literatura técnica, gosto de ficção e livros históricos.',
      icon: BookOpen,
      activities: ['Ficção histórica', 'Ficção científica', 'Biografias']
    },
    {
      title: 'Viagens',
      description: 'Explorar novos lugares e culturas, frequentemente combinando com atividades acadêmicas.',
      icon: MapPin,
      activities: ['Experiências culturais', 'Conferências acadêmicas', 'Exploração da natureza']
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('hobbiesTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('hobbiesSubtitle')}
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
            Equilíbrio entre Trabalho e Vida Pessoal
          </h2>
          <p className="text-gray-600">
            Manter um equilíbrio saudável entre responsabilidades acadêmicas e interesses pessoais 
            é essencial para a criatividade e bem-estar. Essas atividades proporcionam inspiração e 
            perspectivas novas que frequentemente enriquecem meu trabalho acadêmico.
          </p>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Hobbies;
