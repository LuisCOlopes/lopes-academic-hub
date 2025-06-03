
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Calendar, Video, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { contactMessageSchema, type ContactMessageForm } from '@/lib/validations';

const Contact = () => {
  const { t } = useLanguage();

  const form = useForm<ContactMessageForm>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      institution: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactMessageForm) => {
    try {
      console.log('Submitting contact message:', data);
      
      const { data: result, error } = await supabase.functions.invoke('submit-forms', {
        body: {
          type: 'contact-message',
          data: data,
        },
      });

      if (error) {
        console.error('Submission error:', error);
        toast.error('Erro ao enviar mensagem. Tente novamente.');
        return;
      }

      console.log('Submission successful:', result);
      toast.success('Mensagem enviada com sucesso! Responderemos em até 48 horas.');
      form.reset();
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Erro inesperado. Tente novamente.');
    }
  };

  const handleClearForm = () => {
    form.reset();
    toast.info('Formulário limpo.');
  };

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-ufu-blue">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-ufu-navy mb-6">{t('contactInformation')}</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-ufu-blue rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">{t('email')}</h3>
                      <p className="text-ufu-blue">lcol@ufu.br</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">{t('phone')}</h3>
                      <p className="text-ufu-blue">+55 (34) 3230-9536</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">MS-Teams</h3>
                      <a 
                        href="https://teams.microsoft.com/l/chat/0/0?users=lcol@ufu.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ufu-blue hover:text-ufu-navy"
                      >
                        Start Chat
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-800 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/lu%C3%ADs-cl%C3%A1udio-oliveira-lopes-a1b28414?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgkwwG1ayTG6XiYt7XFuiRQ%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ufu-blue hover:text-ufu-navy"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">{t('officeAddress')}</h3>
                      <p className="text-ufu-blue whitespace-pre-line">
                        {t('officeAddressText')}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ufu-navy">{t('officeHours')}</h3>
                      <p className="text-ufu-blue whitespace-pre-line">
                        {t('officeHoursText')}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-ufu-blue hover:bg-ufu-navy text-white"
                onClick={() => window.open('https://calendar.google.com', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t('scheduleMeeting')}
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-ufu-navy mb-6">{t('sendMessage')}</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('firstName')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('firstName')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('lastName')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('lastName')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('emailAddress')} *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t('emailAddress')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('institution')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('institution')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('subject')} *</FormLabel>
                          <FormControl>
                            <Input placeholder={t('subject')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('message')} *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('message')}
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-ufu-blue hover:bg-ufu-navy text-white"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? 'Enviando...' : t('sendMessage')}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="border-ufu-blue text-ufu-blue"
                        onClick={handleClearForm}
                      >
                        {t('clearForm')}
                      </Button>
                    </div>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-ufu-light rounded-lg">
                  <p className="text-sm text-ufu-navy">
                    <strong>Nota:</strong> {t('noteText')}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Contact;
