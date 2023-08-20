import { zodCustom } from '@/lib/zod';

// to add: locale
export const loginValidation = zodCustom.object({
  email: zodCustom.string().min(1, { message: 'E-mail é obrigatório' }).email({
    message: 'Deve ser um e-mail válido',
  }),
  password: zodCustom
    .string()
    .min(6, { message: 'Senha deve conter pelo menos 6 caracteres' }),
});

export type UserLogin = zodCustom.infer<typeof loginValidation>;
