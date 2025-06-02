import React, { useState } from 'react';
import AcademicLayout from '@/components/AcademicLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Video, Users } from 'lucide-react';

const Meeting = () => {
  const { t } = useLanguage();
  const [meetingFormat, setMeetingFormat] = useState('');

  return (
    <AcademicLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            {t('meetingTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('meetingSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Solicitar Reunião</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('firstName')} *
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('lastName')} *
                  </label>
                  <Input placeholder="Seu sobrenome" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('emailAddress')} *
                </label>
                <Input type="email" placeholder="seu.email@exemplo.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('institution')}
                </label>
                <Input placeholder="Sua instituição ou empresa" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Formato da Reunião *
                </label>
                <RadioGroup value={meetingFormat} onValueChange={setMeetingFormat} className="space-y-3">
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Reunião
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de reunião" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Discussão Acadêmica</SelectItem>
                    <SelectItem value="research">Orientação de Pesquisa</SelectItem>
                    <SelectItem value="collaboration">Colaboração</SelectItem>
                    <SelectItem value="consulting">Consultoria</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data Preferida *
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horário Preferido *
                  </label>
                  <Input type="time" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto/Objetivo da Reunião *
                </label>
                <Input placeholder="Descreva brevemente o que gostaria de discutir na reunião..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição Detalhada
                </label>
                <Textarea 
                  placeholder="Descreva detalhadamente o objetivo da reunião e tópicos específicos a serem discutidos..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Informações Adicionais
                </label>
                <Textarea 
                  placeholder="Qualquer informação adicional relevante (documentos, links, contexto específico, etc.)"
                  rows={3}
                />
              </div>
              
              <Button className="w-full bg-academic-blue hover:bg-academic-blue/90">
                Enviar Solicitação
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Importantes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Reuniões geralmente duram 30-60 minutos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Resposta em até 48 horas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Presencial ou virtual (conforme disponibilidade)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Segunda a Sexta:</strong> 8:00 - 17:00</p>
                <p><strong>Localização:</strong> Faculdade de Engenharia Química, UFU</p>
                <p><strong>Sala:</strong> Por agendamento</p>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contato Direto</h3>
              <p className="text-gray-600 mb-3">
                Para questões urgentes ou esclarecimentos:
              </p>
              <p className="text-academic-blue font-medium">
                📞 +55 (34) 3239-4292<br/>
                ✉️ lclaudio@ufu.br
              </p>
            </Card>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Meeting;
