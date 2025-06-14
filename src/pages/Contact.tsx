
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
      value: 'lcol@ufu.br',
      link: 'mailto:lcol@ufu.br'
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
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
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
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contactInfo')}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <info.icon className="h-5 w-5 text-academic-blue mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900">{info.label}</p>
                      <p className="text-gray-600 whitespace-pre-line text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-academic-blue" />
                  <span className="font-medium text-gray-900">{t('officeHours')}</span>
                </div>
                <p className="text-gray-600 text-sm">{t('mondayToFriday')}: 8:00 - 17:00</p>
                <p className="text-xs text-gray-500 mt-2">
                  {t('responseTime')}: 1-2 {t('businessDays')}
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {t('relevantLinks')}
              </h2>
              <div className="grid gap-2">
                {relevantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg border hover:bg-gray-50 transition-colors text-sm"
                  >
                    <link.icon className="h-4 w-4 text-academic-blue" />
                    <span className="text-gray-700 flex-1">{link.name}</span>
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Office Location with Map */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('officeLocation')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Endereço Completo</h3>
                <p className="text-gray-600 mb-4">
                  Faculdade de Engenharia Química<br />
                  Universidade Federal de Uberlândia<br />
                  Campus Santa Mônica<br />
                  Av. João Naves de Ávila, 2121<br />
                  Uberlândia, MG - Brasil<br />
                  CEP: 38400-902
                </p>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t('campusMap')}
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t('directionsToOffice')}
                </Button>
              </div>
            </div>
            
            <div className="w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7548.491582301935!2d-48.263410943488886!3d-18.92051167542757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44574c062bad3%3A0x656d242f316ee167!2sUniversidade%20Federal%20de%20Uberl%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1749918839854!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Contact;
