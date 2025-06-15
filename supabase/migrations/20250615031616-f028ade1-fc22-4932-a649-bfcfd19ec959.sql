
-- Habilitar RLS nas tabelas que não têm políticas definidas
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_requests ENABLE ROW LEVEL SECURITY;

-- Criar políticas para permitir inserção pública nas tabelas de contato
-- Estas tabelas são para formulários públicos, então qualquer um pode inserir
CREATE POLICY "Anyone can insert contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can insert meeting requests" 
  ON public.meeting_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Apenas admins podem ler as mensagens (quando autenticação for implementada)
CREATE POLICY "Only authenticated users can view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (false); -- Por enquanto ninguém pode ler, até implementar autenticação

CREATE POLICY "Only authenticated users can view meeting requests" 
  ON public.meeting_requests 
  FOR SELECT 
  USING (false); -- Por enquanto ninguém pode ler, até implementar autenticação
