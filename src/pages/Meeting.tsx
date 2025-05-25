import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, Users, Mail } from 'lucide-react';

const Meeting = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              Solicitar Reunião
            </h1>
            <p className="text-xl text-ufu-blue">
              Agende uma reunião para discussões acadêmicas, orientação ou colaborações
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário de Solicitação */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-ufu-navy mb-6">Dados da Reunião</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Nome Completo *
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="seu.email@exemplo.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Instituição
                      </label>
                      <Input placeholder="Universidade/Empresa" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Posição/Cargo
                      </label>
                      <Input placeholder="Estudante/Professor/Profissional" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ufu-navy mb-2">
                      Tipo de Reunião *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de reunião" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="orientacao">Orientação Acadêmica</SelectItem>
                        <SelectItem value="pesquisa">Discussão de Pesquisa</SelectItem>
                        <SelectItem value="colaboracao">Proposta de Colaboração</SelectItem>
                        <SelectItem value="consultoria">Consultoria</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Data Preferida
                      </label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ufu-navy mb-2">
                        Horário Preferido
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00 - 09:00</SelectItem>
                          <SelectItem value="09:00">09:00 - 10:00</SelectItem>
                          <SelectItem value="10:00">10:00 - 11:00</SelectItem>
                          <SelectItem value="11:00">11:00 - 12:00</SelectItem>
                          <SelectItem value="14:00">14:00 - 15:00</SelectItem>
                          <SelectItem value="15:00">15:00 - 16:00</SelectItem>
                          <SelectItem value="16:00">16:00 - 17:00</SelectItem>
                          <SelectItem value="17:00">17:00 - 18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ufu-navy mb-2">
                      Duração Estimada
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Duração da reunião" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="90">1 hora e 30 minutos</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ufu-navy mb-2">
                      Formato da Reunião
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Como prefere realizar a reunião?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Presencial (UFU)</SelectItem>
                        <SelectItem value="teams">MS Teams</SelectItem>
                        <SelectItem value="meet">Google Meet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ufu-navy mb-2">
                      Assunto/Objetivo da Reunião *
                    </label>
                    <Textarea 
                      placeholder="Descreva brevemente o que gostaria de discutir na reunião..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ufu-navy mb-2">
                      Informações Adicionais
                    </label>
                    <Textarea 
                      placeholder="Qualquer informação adicional relevante (documentos, links, etc.)"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-ufu-blue hover:bg-ufu-navy text-white">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Solicitação
                    </Button>
                    <Button type="button" variant="outline" className="border-ufu-blue text-ufu-blue">
                      Limpar
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Informações da Reunião */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-ufu-blue" />
                  <h3 className="text-lg font-semibold text-ufu-navy">Disponibilidade</h3>
                </div>
                <div className="space-y-2 text-sm text-ufu-blue">
                  <p><strong>Segunda a Sexta:</strong> 8:00 - 18:00</p>
                  <p><strong>Sábados:</strong> Apenas com agendamento</p>
                  <p><strong>Domingos:</strong> Indisponível</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-ufu-blue" />
                  <h3 className="text-lg font-semibold text-ufu-navy">Tempo de Resposta</h3>
                </div>
                <p className="text-sm text-ufu-blue">
                  Solicitações são respondidas em até 24-48 horas durante dias úteis.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-ufu-blue" />
                  <h3 className="text-lg font-semibold text-ufu-navy">Tipos de Reunião</h3>
                </div>
                <div className="space-y-2 text-sm text-ufu-blue">
                  <p>• Orientação acadêmica</p>
                  <p>• Discussões de pesquisa</p>
                  <p>• Propostas de colaboração</p>
                  <p>• Consultoria técnica</p>
                  <p>• Palestras e workshops</p>
                </div>
              </Card>

              <Card className="p-6 bg-ufu-light">
                <h3 className="text-lg font-semibold text-ufu-navy mb-2">Dica</h3>
                <p className="text-sm text-ufu-navy">
                  Para reuniões urgentes, entre em contato diretamente por telefone: 
                  <strong> (34) 3230-9536</strong>
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
