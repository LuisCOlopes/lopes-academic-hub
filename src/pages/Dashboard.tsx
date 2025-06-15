
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AcademicLayout from '@/components/AcademicLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Mail, Calendar, User, CheckCircle, Clock } from 'lucide-react';

interface ContactMessage {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  institution?: string;
  subject: string;
  message: string;
  status?: string;
  created_at: string;
}

interface MeetingRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  institution?: string;
  subject: string;
  description?: string;
  meeting_format: string;
  meeting_type?: string;
  preferred_date: string;
  preferred_time: string;
  status?: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [meetingRequests, setMeetingRequests] = useState<MeetingRequest[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    try {
      const [contactResponse, meetingResponse] = await Promise.all([
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
        supabase.from('meeting_requests').select('*').order('created_at', { ascending: false })
      ]);

      if (contactResponse.data) setContactMessages(contactResponse.data);
      if (meetingResponse.data) setMeetingRequests(meetingResponse.data);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao carregar dados.',
        variant: 'destructive',
      });
    } finally {
      setLoadingData(false);
    }
  };

  const updateContactMessageStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Status atualizado',
        description: 'Status foi atualizado com sucesso.',
      });

      fetchData();
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao atualizar status.',
        variant: 'destructive',
      });
    }
  };

  const updateMeetingRequestStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('meeting_requests')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Status atualizado',
        description: 'Status foi atualizado com sucesso.',
      });

      fetchData();
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao atualizar status.',
        variant: 'destructive',
      });
    }
  };

  if (loading || !user || !isAdmin) {
    return null;
  }

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'read':
        return <Badge variant="secondary"><CheckCircle className="w-3 h-3 mr-1" />Lida</Badge>;
      case 'resolved':
        return <Badge variant="default"><CheckCircle className="w-3 h-3 mr-1" />Resolvida</Badge>;
      case 'pending':
        return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />Pendente</Badge>;
      default:
        return <Badge variant="destructive"><Mail className="w-3 h-3 mr-1" />Nova</Badge>;
    }
  };

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-ufu-light to-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-ufu-navy mb-4">
              Dashboard Administrativo
            </h1>
            <p className="text-lg text-ufu-blue">
              Gerencie mensagens de contato e solicitações de reunião
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mensagens de Contato</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contactMessages.length}</div>
                <p className="text-xs text-muted-foreground">
                  {contactMessages.filter(m => m.status === 'unread').length} não lidas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Solicitações de Reunião</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{meetingRequests.length}</div>
                <p className="text-xs text-muted-foreground">
                  {meetingRequests.filter(m => m.status === 'pending').length} pendentes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Contatos</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contactMessages.length + meetingRequests.length}</div>
                <p className="text-xs text-muted-foreground">
                  Todas as interações
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList>
              <TabsTrigger value="messages">Mensagens de Contato</TabsTrigger>
              <TabsTrigger value="meetings">Solicitações de Reunião</TabsTrigger>
            </TabsList>

            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Mensagens de Contato</CardTitle>
                  <CardDescription>
                    Gerencie todas as mensagens recebidas através do formulário de contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Assunto</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactMessages.map((message) => (
                        <TableRow key={message.id}>
                          <TableCell>
                            {message.first_name} {message.last_name}
                          </TableCell>
                          <TableCell>{message.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{message.subject}</TableCell>
                          <TableCell>{getStatusBadge(message.status)}</TableCell>
                          <TableCell>
                            {new Date(message.created_at).toLocaleDateString('pt-BR')}
                          </TableCell>
                          <TableCell className="space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateContactMessageStatus(message.id, 'read')}
                            >
                              Marcar como Lida
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => updateContactMessageStatus(message.id, 'resolved')}
                            >
                              Resolver
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="meetings">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitações de Reunião</CardTitle>
                  <CardDescription>
                    Gerencie todas as solicitações de reunião recebidas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Assunto</TableHead>
                        <TableHead>Data Preferida</TableHead>
                        <TableHead>Formato</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {meetingRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            {request.first_name} {request.last_name}
                          </TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{request.subject}</TableCell>
                          <TableCell>
                            {new Date(request.preferred_date).toLocaleDateString('pt-BR')} às {request.preferred_time}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{request.meeting_format}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(request.status)}</TableCell>
                          <TableCell className="space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateMeetingRequestStatus(request.id, 'confirmed')}
                            >
                              Confirmar
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => updateMeetingRequestStatus(request.id, 'completed')}
                            >
                              Completar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Dashboard;
