import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar, Clock, MapPin, Video, Users } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { meetingRequestSchema, type MeetingRequestForm } from '@/lib/validations';

const Meeting = () => {
  const { t } = useLanguage();
  
  const form = useForm<MeetingRequestForm>({
    resolver: zodResolver(meetingRequestSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      institution: '',
      meetingFormat: undefined,
      meetingType: undefined,
      preferredDate: '',
      preferredTime: '',
      subject: '',
      description: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: MeetingRequestForm) => {
    try {
      console.log('Submitting meeting request:', data);
      
      const { data: result, error } = await supabase.functions.invoke('submit-forms', {
        body: {
          type: 'meeting-request',
          data: data,
        },
      });

      if (error) {
        console.error('Submission error:', error);
        toast.error('Erro ao enviar solicitação. Tente novamente.');
        return;
      }

      console.log('Submission successful:', result);
      toast.success('Solicitação enviada com sucesso! Você receberá uma resposta em até 48 horas.');
      form.reset();
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Erro inesperado. Tente novamente.');
    }
  };

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              {t('meetingTitle')}
            </h1>
            <p className="text-lg text-ufu-blue">
              {t('meetingSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-ufu-navy mb-6">Solicitar Reunião</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('firstName')} *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
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
                            <Input placeholder="Seu sobrenome" {...field} />
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
                          <Input type="email" placeholder="seu.email@exemplo.com" {...field} />
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
                          <Input placeholder="Sua instituição ou empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="meetingFormat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Formato da Reunião *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="presencial" id="presencial" />
                              <Label htmlFor="presencial" className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Presencial (UFU)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="teams" id="teams" />
                              <Label htmlFor="teams" className="flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                MS Teams
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="meet" id="meet" />
                              <Label htmlFor="meet" className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Google Meet
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="meetingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Reunião</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo de reunião" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="academic">Discussão Acadêmica</SelectItem>
                            <SelectItem value="research">Orientação de Pesquisa</SelectItem>
                            <SelectItem value="collaboration">Colaboração</SelectItem>
                            <SelectItem value="consulting">Consultoria</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data Preferida *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Horário Preferido *</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto/Objetivo da Reunião *</FormLabel>
                        <FormControl>
                          <Input placeholder="Descreva brevemente o que gostaria de discutir na reunião..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição Detalhada</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva detalhadamente o objetivo da reunião e tópicos específicos a serem discutidos..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Informações Adicionais</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Qualquer informação adicional relevante (documentos, links, contexto específico, etc.)"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ufu-blue hover:bg-ufu-navy text-white"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                  </Button>
                </form>
              </Form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-ufu-navy mb-4">Informações Importantes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <Clock className="h-4 w-4" />
                    <span>Reuniões geralmente duram 30-60 minutos</span>
                  </div>
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <Calendar className="h-4 w-4" />
                    <span>Resposta em até 48 horas</span>
                  </div>
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <MapPin className="h-4 w-4" />
                    <span>Presencial ou virtual (conforme disponibilidade)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-ufu-navy mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-ufu-blue">
                  <p><strong>Segunda a Sexta:</strong> 8:00 - 17:00</p>
                  <p><strong>Localização:</strong> Faculdade de Engenharia Química, UFU</p>
                  <p><strong>Sala:</strong> Por agendamento</p>
                </div>
              </Card>

              <Card className="p-6 bg-ufu-light">
                <h3 className="text-lg font-semibold text-ufu-navy mb-2">Contato Direto</h3>
                <p className="text-ufu-navy mb-3">
                  Para questões urgentes ou esclarecimentos:
                </p>
                <p className="text-ufu-blue font-medium">
                  📞 +55 (34) 3239-4292<br/>
                  ✉️ lcol@ufu.br
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Meeting;
