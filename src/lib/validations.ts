
import { z } from 'zod';

export const meetingRequestSchema = z.object({
  firstName: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  lastName: z.string().min(1, 'Sobrenome é obrigatório').max(100, 'Sobrenome muito longo'),
  email: z.string().email('Email inválido'),
  institution: z.string().max(200, 'Nome da instituição muito longo').optional(),
  meetingFormat: z.enum(['presencial', 'teams', 'meet'], {
    required_error: 'Formato da reunião é obrigatório'
  }),
  meetingType: z.enum(['academic', 'research', 'collaboration', 'consulting', 'other']).optional(),
  preferredDate: z.string().min(1, 'Data é obrigatória'),
  preferredTime: z.string().min(1, 'Horário é obrigatório'),
  subject: z.string().min(1, 'Assunto é obrigatório').max(200, 'Assunto muito longo'),
  description: z.string().max(2000, 'Descrição muito longa').optional(),
  additionalInfo: z.string().max(1000, 'Informações adicionais muito longas').optional(),
});

export const contactMessageSchema = z.object({
  firstName: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  lastName: z.string().min(1, 'Sobrenome é obrigatório').max(100, 'Sobrenome muito longo'),
  email: z.string().email('Email inválido'),
  institution: z.string().max(200, 'Nome da instituição muito longo').optional(),
  subject: z.string().min(1, 'Assunto é obrigatório').max(200, 'Assunto muito longo'),
  message: z.string().min(1, 'Mensagem é obrigatória').max(2000, 'Mensagem muito longa'),
});

export type MeetingRequestForm = z.infer<typeof meetingRequestSchema>;
export type ContactMessageForm = z.infer<typeof contactMessageSchema>;
