import { NextResponse } from 'next/server';

export const USER_LOGIN_MOCK = {
  email: 'example@email.com',
  password: 'my_password_123',
};

export async function POST(request: Request) {
  const body = await request.json();

  if (
    body.email === USER_LOGIN_MOCK.email &&
    body.password === USER_LOGIN_MOCK.password
  ) {
    return NextResponse.json(
      {
        token: '123456789',
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { error: { message: 'Usuário e/ou senha inválidos' } },
    { status: 400 }
  );
}
