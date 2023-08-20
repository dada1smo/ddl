import { USER_LOGIN_MOCK } from '@/app/login/api/route';
import { rest } from 'msw';

export const loginHandler = [
  rest.post('https://my.backend/login', async (req, res, ctx) => {
    const body = await req.json();

    if (
      body.email === USER_LOGIN_MOCK.email &&
      body.password === USER_LOGIN_MOCK.password
    ) {
      return res(
        ctx.status(200),
        ctx.json({
          token: '123456789',
        })
      );
    }

    return res(
      ctx.status(400),
      ctx.json({
        error: { message: 'Usuário e/ou senha inválidos' },
      })
    );
  }),
];
