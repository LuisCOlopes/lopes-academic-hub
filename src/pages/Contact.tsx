
import React from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ExternalLink, User, GraduationCap } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: 'luis.lopes@ufu.br',
      link: 'mailto:luis.lopes@ufu.br'
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+55 (34) 3239-4292',
      link: 'tel:+553432394292'
    },
    {
      icon: MapPin,
      label: t('location'),
      value: 'FEQUI/UFU - Campus Santa Mônica\nUberlândia, MG - Brasil',
      link: '#'
    }
  ];

  const relevantLinks = [
    {
      name: t('universityProfile'),
      url: 'https://www.ufu.br',
      icon: GraduationCap
    },
    {
      name: t('researchGate'),
      url: 'https://www.researchgate.net',
      icon: User
    },
    {
      name: t('googleScholar'),
      url: 'https://scholar.google.com',
      icon: User
    },
    {
      name: t('linkedin'),
      url: 'https://www.linkedin.com/in/luís-cláudio-oliveira-lopes-a1b28414',
      icon: User
    },
    {
      name: t('orcid'),
      url: 'https://orcid.org',
      icon: User
    },
    {
      name: t('lattes'),
      url: 'http://lattes.cnpq.br',
      icon: User
    }
  ];

  return (
    <AcademicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('contactForm')}
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')}
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')}
                  </label>
                  <Input type="email" placeholder="seu.email@exemplo.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <Input placeholder="Assunto da mensagem" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <Textarea 
                  placeholder="Sua mensagem..."
                  rows={6}
                />
              </div>
              <Button className="w-full bg-academic-blue hover:bg-academic-blue/90">
                {t('sendMessage')}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contactInfo')}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <info.icon className="h-5 w-5 text-academic-blue mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{info.label}</p>
                      <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-academic-blue" />
                  <span className="font-medium text-gray-900">{t('officeHours')}</span>
                </div>
                <p className="text-gray-600">{t('mondayToFriday')}: 8:00 - 17:00</p>
                <p className="text-sm text-gray-500 mt-2">
                  {t('responseTime')}: 1-2 {t('businessDays')}
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('relevantLinks')}
              </h2>
              <div className="grid gap-3">
                {relevantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-academic-blue" />
                    <span className="text-gray-700">{link.name}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('officeLocation')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-4">
                Faculdade de Engenharia Química<br />
                Universidade Federal de Uberlândia<br />
                Campus Santa Mônica<br />
                Uberlândia, MG - Brasil<br />
                CEP: 38400-902
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t('campusMap')}
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('directionsToOffice')}
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
              <p className="text-gray-500">Mapa da localização</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Contact;
