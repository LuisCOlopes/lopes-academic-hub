
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Code, Video, GraduationCap, Download, ExternalLink, Youtube } from 'lucide-react';
import { useDownload } from '@/hooks/useDownload';
import { validateYouTubeUrl } from '@/utils/downloadUtils';

const StudentResources = () => {
  const { t } = useLanguage();
  const { handleDownload, isDownloading } = useDownload();

  const processControlVideos = [
    {
      title: 'Controle de Processos Químicos - Introdução - Aula 1',
      description: 'Conceitos fundamentais de controle de processos químicos',
      url: 'https://youtu.be/94AG13FOuLE',
      videoId: '94AG13FOuLE',
      views: '12.5K',
      duration: '45 min'
    },
    {
      title: 'Controle de Processos Químicos - Classificação e Graus de Liberdade - Aula 2',
      description: 'Classificação de sistemas e análise de graus de liberdade',
      url: 'https://youtu.be/zN5l9xt7J4Y',
      videoId: 'zN5l9xt7J4Y',
      views: '8.2K',
      duration: '38 min'
    },
    {
      title: 'Controle de Processos Químicos - Revisão sobre Controle Seletivo',
      description: 'Revisão dos conceitos de controle seletivo',
      url: 'https://youtu.be/_AOhsOwpA8E',
      videoId: '_AOhsOwpA8E',
      views: '6.7K',
      duration: '42 min'
    },
    {
      title: 'Controle de Processos Químicos - Controle Cascata e de Razão',
      description: 'Estratégias de controle cascata e controle de razão',
      url: 'https://youtu.be/zDUU55n4CBA',
      videoId: 'zDUU55n4CBA',
      views: '9.1K',
      duration: '51 min'
    },
    {
      title: 'Controle de Processos Químicos - Controle Feedforward',
      description: 'Implementação e aplicação do controle feedforward',
      url: 'https://youtu.be/yU85HXzb8uw',
      videoId: 'yU85HXzb8uw',
      views: '7.3K',
      duration: '39 min'
    },
    {
      title: 'Análise de Sistemas de Controle - Estabilidade',
      description: 'Critérios de estabilidade em sistemas de controle',
      url: 'https://youtu.be/05QptEIRJUI',
      videoId: '05QptEIRJUI',
      views: '5.8K',
      duration: '47 min'
    }
  ];

  const instrumentationVideos = [
    {
      title: 'Instrumentação - parte I - Introdução',
      description: 'Introdução aos conceitos de instrumentação industrial',
      url: 'https://youtu.be/4FRTXzXPTbA',
      videoId: '4FRTXzXPTbA',
      views: '15.2K',
      duration: '35 min'
    },
    {
      title: 'Instrumentação - parte II - Pressão',
      description: 'Medição e controle de pressão em processos industriais',
      url: 'https://youtu.be/_wnUGvXo6Co',
      videoId: '_wnUGvXo6Co',
      views: '11.4K',
      duration: '41 min'
    },
    {
      title: 'Instrumentação - parte III - Temperatura',
      description: 'Instrumentos para medição de temperatura',
      url: 'https://youtu.be/reQ2ZXUmtv0',
      videoId: 'reQ2ZXUmtv0',
      views: '9.8K',
      duration: '38 min'
    },
    {
      title: 'Instrumentação - parte IV - Vazão',
      description: 'Medição de vazão em sistemas industriais',
      url: 'https://youtu.be/05QptEIRJUI',
      videoId: '05QptEIRJUI',
      views: '10.5K',
      duration: '44 min'
    },
    {
      title: 'Instrumentação - parte V - Nível',
      description: 'Instrumentação para medição e controle de nível',
      url: 'https://youtu.be/wzDM3aQqOxg',
      videoId: 'wzDM3aQqOxg',
      views: '8.9K',
      duration: '36 min'
    }
  ];

  const courseNotes = [
    {
      title: 'Controle de Processos Químicos - Apostila Completa',
      description: 'Material completo sobre controle PID e controle avançado',
      size: '4.2 MB',
      downloads: 2156,
      pages: 180
    },
    {
      title: 'Modelagem e Simulação de Processos',
      description: 'Fundamentos de modelagem matemática de processos',
      size: '3.8 MB',
      downloads: 1489,
      pages: 145
    },
    {
      title: 'Otimização de Processos Químicos',
      description: 'Técnicas de otimização aplicadas à engenharia química',
      size: '3.1 MB',
      downloads: 1245,
      pages: 120
    },
    {
      title: 'Instrumentação e Controle Industrial',
      description: 'Instrumentos de medição e sistemas de controle',
      size: '2.9 MB',
      downloads: 1034,
      pages: 98
    }
  ];

  const computationalCodes = [
    {
      title: 'Códigos Scilab - Controle de Processos',
      description: 'Scripts para simulação e controle de processos químicos',
      language: 'Scilab',
      files: 25,
      downloads: 1567
    },
    {
      title: 'Controladores PID em Python',
      description: 'Implementação de controladores PID e algoritmos de sintonia',
      language: 'Python',
      files: 18,
      downloads: 1398
    },
    {
      title: 'Simulação AVEVA - Modelos Industriais',
      description: 'Modelos de processos químicos em ambiente AVEVA',
      language: 'AVEVA',
      files: 12,
      downloads: 743
    },
    {
      title: 'Algoritmos de Otimização - MATLAB',
      description: 'Códigos para otimização de processos',
      language: 'MATLAB',
      files: 15,
      downloads: 892
    }
  ];

  const miniCourses = [
    {
      title: 'Controle Avançado de Processos Químicos',
      description: 'Minicurso de 20 horas sobre técnicas avançadas',
      duration: '20 horas',
      topics: ['Controle MPC', 'Controle Robusto', 'Sistemas Multivariáveis'],
      materials: 'Slides + Exercícios + Códigos'
    },
    {
      title: 'Python para Engenheiros Químicos',
      description: 'Programação aplicada à engenharia química',
      duration: '16 horas',
      topics: ['NumPy', 'SciPy', 'Matplotlib', 'Simulação'],
      materials: 'Notebooks + Datasets + Projetos'
    },
    {
      title: 'Transição Energética e Sustentabilidade',
      description: 'Descarbonização e eletrificação de processos',
      duration: '12 horas',
      topics: ['Energia Renovável', 'Eficiência Energética', 'Economia Circular'],
      materials: 'Apresentações + Estudos de Caso'
    }
  ];

  const handleYouTubeClick = (url: string) => {
    if (validateYouTubeUrl(url)) {
      window.open(url, '_blank');
    } else {
      console.error('URL do YouTube inválida:', url);
    }
  };

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Recursos Educacionais
          </h1>
          <p className="text-lg text-gray-600">
            Material didático e recursos acadêmicos para apoio ao ensino e aprendizagem
          </p>
        </div>

        <div className="grid gap-8">
          {/* Course Notes Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Apostilas e Material Didático
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {courseNotes.map((note, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {note.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {note.description}
                      </p>
                    </div>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>{note.size}</span>
                      <span className="mx-2">•</span>
                      <span>{note.pages} páginas</span>
                      <span className="mx-2">•</span>
                      <span>{note.downloads} downloads</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-academic-blue hover:bg-academic-blue/90"
                      onClick={() => handleDownload('studentResources-notes', index + 1)}
                      disabled={isDownloading}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      {isDownloading ? 'Baixando...' : 'Download'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Computational Codes Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Códigos Computacionais
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {computationalCodes.map((code, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {code.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {code.description}
                      </p>
                    </div>
                    <Badge variant="outline">{code.language}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>{code.files} arquivos</span>
                      <span className="mx-2">•</span>
                      <span>{code.downloads} downloads</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-academic-blue text-academic-blue">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Educational Videos Section - Controle de Processos */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-600 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Vídeos Educacionais - Controle de Processos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {processControlVideos.map((video, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {video.description}
                      </p>
                    </div>
                    <Badge variant="outline">YouTube</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>{video.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{video.views} visualizações</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleYouTubeClick(video.url)}
                    >
                      <Youtube className="h-4 w-4 mr-1" />
                      Assistir
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Educational Videos Section - Instrumentação */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-600 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Vídeos Educacionais - Instrumentação
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {instrumentationVideos.map((video, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {video.description}
                      </p>
                    </div>
                    <Badge variant="outline">YouTube</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span>{video.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{video.views} visualizações</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleYouTubeClick(video.url)}
                    >
                      <Youtube className="h-4 w-4 mr-1" />
                      Assistir
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Mini-courses Section */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-academic-blue rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Minicursos Especializados
              </h2>
            </div>

            <div className="grid gap-4">
              {miniCourses.map((course, index) => (
                <Card key={index} className="p-4 border">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {course.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500">
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{course.materials}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-academic-blue hover:bg-academic-blue/90">
                        <Download className="h-4 w-4 mr-1" />
                        Material
                      </Button>
                      <Button size="sm" variant="outline">
                        Mais Info
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Política de Uso
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>• Material destinado exclusivamente para fins educacionais</p>
            <p>• Cite a fonte ao utilizar o material em trabalhos acadêmicos</p>
            <p>• Uso comercial não autorizado sem permissão prévia</p>
            <p>• Relate problemas ou sugerências para: lclaudio@ufu.br</p>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default StudentResources;
