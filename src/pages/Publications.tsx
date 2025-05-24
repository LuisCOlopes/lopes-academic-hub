
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Link } from 'lucide-react';

const Publications = () => {
  const { t } = useLanguage();

  const publications = [
    {
      title: "Optimization of Distillation Processes Using Machine Learning Algorithms",
      authors: "Lopes, L.C.O., Silva, A.M., Santos, R.P.",
      journal: "Chemical Engineering Science",
      year: 2024,
      volume: "289",
      pages: "119-132",
      type: "Journal Article",
      citations: 15
    },
    {
      title: "Sustainable Chemical Process Design: A Green Engineering Approach",
      authors: "Lopes, L.C.O., Oliveira, M.F.",
      journal: "Journal of Cleaner Production",
      year: 2023,
      volume: "425",
      pages: "138-151",
      type: "Journal Article",
      citations: 28
    },
    {
      title: "Advanced Control Strategies for Chemical Reactors",
      authors: "Lopes, L.C.O., Costa, J.L., Ferreira, P.A.",
      journal: "Industrial & Engineering Chemistry Research",
      year: 2023,
      volume: "62",
      pages: "8756-8769",
      type: "Journal Article",
      citations: 22
    },
    {
      title: "Green Solvents in Chemical Separation Processes",
      authors: "Lopes, L.C.O., Dias, T.R.",
      conference: "International Conference on Chemical Engineering",
      year: 2024,
      location: "São Paulo, Brazil",
      type: "Conference Paper",
      citations: 5
    }
  ];

  const bookChapters = [
    {
      title: "Process Optimization in Chemical Engineering",
      book: "Advances in Chemical Process Engineering",
      editors: "Editor, A.B., Editor, C.D.",
      publisher: "Academic Press",
      year: 2023,
      pages: "156-189"
    },
    {
      title: "Sustainable Manufacturing in the Chemical Industry",
      book: "Green Engineering Practices",
      editors: "Editor, E.F., Editor, G.H.",
      publisher: "Springer",
      year: 2022,
      pages: "234-267"
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Publications
            </h1>
            <p className="text-xl text-gray-600">
              Research contributions to the scientific community
            </p>
          </div>

          {/* Publication Stats */}
          <section className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">50+</div>
                <div className="text-gray-600">Total Publications</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">1,200+</div>
                <div className="text-gray-600">Total Citations</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">18</div>
                <div className="text-gray-600">h-index</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">25</div>
                <div className="text-gray-600">i10-index</div>
              </Card>
            </div>
          </section>

          {/* Recent Publications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Journal Articles</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="font-medium text-academic-blue">
                          {pub.journal || pub.conference}
                        </span>
                        <span>{pub.year}</span>
                        {pub.volume && <span>Vol. {pub.volume}</span>}
                        {pub.pages && <span>pp. {pub.pages}</span>}
                        {pub.location && <span>{pub.location}</span>}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        pub.type === 'Journal Article' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {pub.type}
                      </span>
                      <span className="text-xs text-gray-500">{pub.citations} citations</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="text-academic-blue border-academic-blue">
                      <Link className="h-4 w-4 mr-2" />
                      View Paper
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Book Chapters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Book Chapters</h2>
            <div className="space-y-4">
              {bookChapters.map((chapter, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                  <p className="text-gray-600 mb-2">
                    In: <span className="font-medium">{chapter.book}</span>
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span>Editors: {chapter.editors}</span>
                    <span>{chapter.publisher}, {chapter.year}</span>
                    <span>pp. {chapter.pages}</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-academic-blue border-academic-blue">
                    <Link className="h-4 w-4 mr-2" />
                    View Chapter
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Academic Profiles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Scholar</h3>
                <p className="text-gray-600 mb-4">Complete citation metrics and publication list</p>
                <Button variant="outline" size="sm">Visit Profile</Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">ResearchGate</h3>
                <p className="text-gray-600 mb-4">Research network and collaboration platform</p>
                <Button variant="outline" size="sm">Visit Profile</Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lattes CV</h3>
                <p className="text-gray-600 mb-4">Brazilian academic curriculum platform</p>
                <Button variant="outline" size="sm">Visit Profile</Button>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Publications;
