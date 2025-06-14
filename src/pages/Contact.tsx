import React, { useState } from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ExternalLink, User } from 'lucide-react';
import { useDownload } from '@/hooks/useDownload';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { t } = useLanguage();
  const { handleDownload, isDownloading } = useDownload();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact message:', formData);
      
      const { data: result, error } = await supabase.functions.invoke('submit-forms', {
        body: {
          type: 'contact-message',
          data: formData,
        },
      });

      if (error) {
        console.error('Submission error:', error);
        toast({
          title: "Erro ao enviar mensagem",
          description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
          variant: "destructive",
        });
        return;
      }

      console.log('Submission successful:', result);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Sua mensagem foi enviada para lcol@ufu.br. Responderemos em breve.",
      });

      // Limpar formulário
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        institution: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      name: t('linkedin'),
      url: 'https://www.linkedin.com/in/luís-cláudio-oliveira-lopes-a1b28414',
      icon: User
    },
    {
      name: 'MS Teams',
      url: 'https://teams.microsoft.com/l/chat/0/0?users=lcol@ufu.br',
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sobrenome *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Seu sobrenome"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instituição
                  </label>
                  <Input 
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    placeholder="Sua instituição ou empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('subject')} *
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sua mensagem..."
                    rows={6}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-academic-blue hover:bg-academic-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : t('sendMessage')}
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => handleDownload('contact-campusMap', 1)}
                  disabled={isDownloading}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {isDownloading ? 'Baixando...' : t('campusMap')}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => handleDownload('contact-directions', 1)}
                  disabled={isDownloading}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {isDownloading ? 'Baixando...' : t('directionsToOffice')}
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
