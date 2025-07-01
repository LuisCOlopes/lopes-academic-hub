
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Link, ExternalLink } from 'lucide-react';

const Publications = () => {
  const { t } = useLanguage();

  const recentPublications = [
    {
      title: "Operability for Process Flowsheet Analysis",
      authors: "FERREIRA, ULYSSES GUILHERME; NEIRO, SÉRGIO MAURO DA SILVA; Oliveira-Lopes, Luís Cláudio; DA COSTA, THIAGO VAZ; BISPO, HELENO; LIMA, FERNANDO VINES",
      journal: "Digital Chemical Engineering",
      year: 2025,
      volume: "15",
      pages: "100229",
      type: "Journal Article",
      doi: "10.1016/j.dche.2025.100229",
      paperUrl: "https://doi.org/10.1016/j.dche.2025.100229",
      pdfUrl: "https://www.sciencedirect.com/science/article/pii/S2772508125000134/pdfft?md5=ebd7fc256361b889db4c04255b62686c&pid=1-s2.0-S2772508125000134-main.pdf"
    },
    {
      title: "Simulation of carbon monoxide dispersion released from a fleet in urban environment",
      authors: "SOUZA, D. B.; BARROZO, M. A.; OLIVEIRA-LOPES, L.C.; MURATA, V. V.",
      journal: "Brazilian Journal of Chemical Engineering",
      year: 2025,
      volume: "42",
      pages: "1",
      type: "Journal Article",
      doi: "10.1007/s43153-025-00534-7",
      paperUrl: "https://doi.org/10.1007/s43153-025-00534-7"
    },
    {
      title: "Detecção e diagnóstico de falhas em processos químicos: aplicação de inteligência artificial",
      authors: "GRANZOTTO, MATHEUS HENRIQUE; Oliveira-Lopes, Luís Cláudio",
      journal: "Observatorio de la Economía Latinoamericana",
      year: 2024,
      volume: "22",
      pages: "e3805",
      type: "Journal Article",
      doi: "10.55905/oelv22n3-137",
      paperUrl: "https://doi.org/10.55905/oelv22n3-137"
    },
    {
      title: "Fault-Tolerant Control for Quadcopters Under Actuator and Sensor Faults",
      authors: "OKADA, KENJI FABIANO ÁVILA; MORAIS, ANIEL SILVA; RIBEIRO, LAURA; AMARAL DA LUZ, CAIO MEIRA; TOFOLI, FERNANDO LESSA; LIMA, GABRIELA VIEIRA; LOPES, LUÍS CLÁUDIO OLIVEIRA",
      journal: "Sensors",
      year: 2024,
      volume: "24",
      pages: "7299 - 22",
      type: "Journal Article",
      doi: "10.3390/s24227299",
      paperUrl: "https://doi.org/10.3390/s24227299",
      pdfUrl: "https://www.mdpi.com/1424-8220/24/22/7299"
    },
    {
      title: "Detection of Volatile Organic Compounds (VOCs) in Indoor Environments Using Nano Quadcopter",
      authors: "OLIVEIRA, ALINE MARA; MORAIS, ANIEL SILVA; LIMA, GABRIELA VIEIRA; SOUZA, RAFAEL MONTEIRO JORGE ALVES; OLIVEIRA-LOPES, LUIS CLÁUDIO",
      journal: "Drones",
      year: 2023,
      volume: "7",
      pages: "660",
      type: "Journal Article",
      doi: "10.3390/drones7110660",
      paperUrl: "https://doi.org/10.3390/drones7110660",
      pdfUrl: "https://www.mdpi.com/2504-446X/7/11/660"
    },
    {
      title: "Mathematical modeling of solids-drilling fluid separation in shale shakers in oil fields: A state of art review",
      authors: "NASCENTES, CLEUTON L.; MURATA, VALÉRIA VIANA; OLIVEIRA-LOPES, LUIS CLÁUDIO",
      journal: "Journal of Petroleum Science and Engineering",
      year: 2022,
      volume: "208",
      pages: "109270",
      type: "Journal Article",
      doi: "10.1016/j.petrol.2021.109270",
      paperUrl: "https://doi.org/10.1016/j.petrol.2021.109270"
    },
    {
      title: "Modified Artificial Potential Field for the Path Planning of Aircraft Swarms in Three-Dimensional Environments",
      authors: "SOUZA, RAFAEL MONTEIRO JORGE ALVES DE; LIMA, GABRIELA VIEIRA; MORAIS, ANIEL SILVA DE; Oliveira-Lopes, Luís Cláudio; RAMOS, DANIEL COSTA; TOFOLI, FERNANDO LESSA",
      journal: "Sensors",
      year: 2022,
      volume: "22",
      pages: "1558",
      type: "Journal Article",
      doi: "10.3390/s22041558",
      paperUrl: "https://doi.org/10.3390/s22041558",
      pdfUrl: "https://www.mdpi.com/1424-8220/22/4/1558"
    },
    {
      title: "Enhanced algorithm for randomised model structure selection",
      authors: "FAGUNDES, L. P.; MORAIS, A. S.; Oliveira-Lopes, L. C.; MORAIS, J. S.",
      journal: "International Journal of Systems Science",
      year: 2021,
      volume: "53",
      pages: "1 - 20",
      type: "Journal Article",
      doi: "10.1080/00207721.2021.1988755",
      paperUrl: "https://doi.org/10.1080/00207721.2021.1988755"
    },
    {
      title: "Fault-tolerant control by means of moving horizon virtual actuators: Concepts and experimental investigation",
      authors: "COSTA, THIAGO V.; SENCIO, RAFAEL R.; Oliveira-Lopes, Luís Cláudio; SILVA, FLÁVIO V.",
      journal: "Control Engineering Practice",
      year: 2021,
      volume: "107",
      pages: "104683",
      type: "Journal Article",
      doi: "10.1016/j.conengprac.2020.104683",
      paperUrl: "https://doi.org/10.1016/j.conengprac.2020.104683"
    }
  ];

  const bookChapters = [
    {
      title: "RECEPÇÃO: A PRIMEIRA IMPRESSÃO É A QUE FICA",
      book: "ATENDIMENTO TERAPÂUTICO NA PANDEMIA DA COVID-19 MULTIPROFISSIONAL ON-LINE",
      authors: "LIMA, A. J. O.; Costa, B G; Moreira, B. P.; França, K T S; Oliveira-Lopes, Luís Cláudio; Félix, Q. C. A.",
      editors: "Elaine Saraiva Calderari; Fabíola Alves Gomes; Karine Santana de Azevedo Zago; Marciana Gonçalves Farinha",
      publisher: "Uberlândia",
      year: 2022,
      volume: "1",
      pages: "35-41"
    },
    {
      title: "Partitioned Based Cooperative Distributed Model Predictive Control for Large-Scale Nonlinear Systems",
      book: "Computer Aided Chemical Engineering",
      authors: "ROCHA, ROSIANE R.; OLIVEIRA-LOPES, LUÍS C.",
      publisher: "Elsevier",
      year: 2018,
      pages: "727-732",
      chapterUrl: "https://doi.org/10.1016/B978-0-444-64241-7.50116-6"
    },
    {
      title: "A Closed-loop Dynamic Rescheduling Strategy Applied to Chemical Production Problems",
      book: "Computer Aided Chemical Engineering",
      authors: "de Paula, Frederico S.; Neiro, Sérgio M.S.; Murata, Valéria V.; OLIVEIRA-LOPES, LUÍS C.",
      publisher: "Elsevier",
      year: 2018,
      pages: "1369-1374",
      chapterUrl: "https://doi.org/10.1016/B978-0-444-64241-7.50223-8"
    },
    {
      title: "A Cooperative Distributed Model Predictive Control for Nonlinear Systems with Automatic Partitioning",
      book: "Computer Aided Chemical Engineering",
      authors: "ROCHA, ROSIANE R.; OLIVEIRA-LOPES, LUÍS C.",
      publisher: "Elsevier",
      year: 2016,
      pages: "2205-2210",
      chapterUrl: "https://doi.org/10.1016/B978-0-444-63428-3.50372-6"
    },
    {
      title: "Nonconventional Renewable Sources in Brazil and Their Impact on the Success of Bioenergy",
      book: "Biofuels in Brazil",
      authors: "Oliveira-Lopes, Luís Cláudio; da Silva, Cláudio H. Ferreira",
      editors: "S. S. da Silva; A. K. Chandel",
      publisher: "Springer International Publishing",
      year: 2014,
      pages: "413-435",
      chapterUrl: "https://link.springer.com/book/10.1007/978-3-319-05020-1"
    },
    {
      title: "Reconfigurable stabilizing control applied to a neutralization process",
      book: "Computer Aided Chemical Engineering",
      authors: "COSTA, THIAGO V.; Fileti, Ana M.F.; OLIVEIRA-LOPES, LUÍS C.; SILVA, FLÁVIO V.",
      publisher: "Elsevier",
      year: 2012,
      pages: "1652-1656",
      chapterUrl: "https://doi.org/10.1016/B978-0-444-59506-5.50161-9"
    },
    {
      title: "On l1-Predictive Control of Mixed-Logical Dynamical Systems",
      book: "Computer Aided Chemical Engineering",
      authors: "de Souza Júnior, David L.; OLIVEIRA-LOPES, LUÍS C.",
      publisher: "Elsevier",
      year: 2009,
      pages: "1401-1406",
      chapterUrl: "https://doi.org/10.1016/S1570-7946(09)70624-8"
    },
    {
      title: "Hybrid System Descriptions for Chemical Engineering Processes",
      book: "Computer Aided Chemical Engineering",
      authors: "OLIVEIRA-LOPES, LUÍS C.",
      publisher: "Elsevier",
      year: 2009,
      pages: "101-106",
      chapterUrl: "https://doi.org/10.1016/S1570-7946(09)70237-8"
    }
  ];

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              {t('publicationsTitle')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('publicationsDescription')}
            </p>
          </div>

          {/* Publication Stats */}
          <section className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">180+</div>
                <div className="text-gray-600">{t('totalPublications')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">600+</div>
                <div className="text-gray-600">{t('totalCitations')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">12</div>
                <div className="text-gray-600">{t('hIndex')}</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-academic-blue mb-2">13</div>
                <div className="text-gray-600">{t('i10Index')}</div>
              </Card>
            </div>
          </section>

          {/* Recent Publications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('recentPublications')}</h2>
            <div className="space-y-6">
              {recentPublications.map((pub, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm">{pub.authors}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="font-medium text-academic-blue">
                          {pub.journal}
                        </span>
                        <span>{pub.year}</span>
                        {pub.volume && <span>Vol. {pub.volume}</span>}
                        {pub.pages && <span>pp. {pub.pages}</span>}
                      </div>
                      {pub.doi && (
                        <p className="text-xs text-gray-500 mt-1">
                          DOI: {pub.doi}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {pub.paperUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-academic-blue border-academic-blue"
                        onClick={() => window.open(pub.paperUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('viewPaper')}
                      </Button>
                    )}
                    {pub.pdfUrl && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600"
                        onClick={() => window.open(pub.pdfUrl, '_blank')}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        {t('downloadPdf')}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Book Chapters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('bookChapters')}</h2>
            <div className="space-y-4">
              {bookChapters.map((chapter, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{chapter.authors}</p>
                  <p className="text-gray-600 mb-2">
                    In: <span className="font-medium">{chapter.book}</span>
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    {chapter.editors && <span>Editors: {chapter.editors}</span>}
                    <span>{chapter.publisher}, {chapter.year}</span>
                    {chapter.volume && <span>Vol. {chapter.volume}</span>}
                    <span>pp. {chapter.pages}</span>
                  </div>
                  {chapter.chapterUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-academic-blue border-academic-blue"
                      onClick={() => window.open(chapter.chapterUrl, '_blank')}
                    >
                      <Link className="h-4 w-4 mr-2" />
                      {t('viewChapter')}
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('academicProfiles')}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-academic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Scholar</h3>
                <p className="text-gray-600 mb-4">{t('googleScholarDescription')}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://scholar.google.pt/citations?user=ToR1aUIAAAAJ&hl=pt-BR&oi=ao', '_blank')}
                >
                  {t('visitProfile')}
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">ResearchGate</h3>
                <p className="text-gray-600 mb-4">{t('researchGateDescription')}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.researchgate.net/profile/Luis-Claudio-Oliveira-Lopes', '_blank')}
                >
                  {t('visitProfile')}
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lattes CV</h3>
                <p className="text-gray-600 mb-4">{t('lattesCvDescription')}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('http://lattes.cnpq.br/9971842873202479', '_blank')}
                >
                  {t('visitProfile')}
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">ORCID</h3>
                <p className="text-gray-600 mb-4">{t('orcidDescription')}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://orcid.org/0000-0003-4224-5586', '_blank')}
                >
                  {t('visitProfile')}
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Publications;
