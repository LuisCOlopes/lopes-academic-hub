
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
              <h2 className="text-2xl font-semibold text-ufu-navy mb-6">{t('requestMeeting')}</h2>
              
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
                            <Input placeholder={t('firstNamePlaceholder')} {...field} />
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
                            <Input placeholder={t('lastNamePlaceholder')} {...field} />
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
                          <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
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
                          <Input placeholder={t('institutionPlaceholder')} {...field} />
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
                        <FormLabel>{t('meetingFormat')} *</FormLabel>
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
                                {t('inPerson')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="teams" id="teams" />
                              <Label htmlFor="teams" className="flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                {t('msTeams')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="meet" id="meet" />
                              <Label htmlFor="meet" className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {t('googleMeet')}
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
                        <FormLabel>{t('meetingType')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('selectMeetingType')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="academic">{t('academicDiscussion')}</SelectItem>
                            <SelectItem value="research">{t('researchGuidance')}</SelectItem>
                            <SelectItem value="collaboration">{t('collaboration')}</SelectItem>
                            <SelectItem value="consulting">{t('consulting')}</SelectItem>
                            <SelectItem value="other">{t('other')}</SelectItem>
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
                          <FormLabel>{t('preferredDate')} *</FormLabel>
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
                          <FormLabel>{t('preferredTime')} *</FormLabel>
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
                        <FormLabel>{t('subject')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('subjectPlaceholder')} {...field} />
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
                        <FormLabel>{t('description')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('descriptionPlaceholder')}
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
                        <FormLabel>{t('additionalInfo')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('additionalInfoPlaceholder')}
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
                    {form.formState.isSubmitting ? t('sending') : t('sendRequest')}
                  </Button>
                </form>
              </Form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-ufu-navy mb-4">{t('importantInformation')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <Clock className="h-4 w-4" />
                    <span>{t('meetingDuration')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <Calendar className="h-4 w-4" />
                    <span>{t('responseTime')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ufu-blue">
                    <MapPin className="h-4 w-4" />
                    <span>{t('locationInfo')}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-ufu-navy mb-4">{t('officeHours')}</h3>
                <div className="space-y-2 text-ufu-blue">
                  <p><strong>{t('mondayToFriday')}</strong> {t('timeRange')}</p>
                  <p><strong>{t('locationLabel')}</strong> {t('locationValue')}</p>
                  <p><strong>{t('roomLabel')}</strong> {t('roomValue')}</p>
                </div>
              </Card>

              <Card className="p-6 bg-ufu-light">
                <h3 className="text-lg font-semibold text-ufu-navy mb-2">{t('directContact')}</h3>
                <p className="text-ufu-navy mb-3">
                  {t('urgentQuestions')}
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
