'use client';

import { Button } from '@/components/button';
import Column from '@/components/flex/column';
import Row from '@/components/flex/row';
import Form from '@/components/form';
import { Input } from '@/components/form/base/input';
import FormInput from '@/components/form/controlled/input';
import Typography from '@/components/typography';
import useCustomHook from '@/hooks/use-custom-form';
import useLogin from '@/modules/authentication/hooks/use-login';
import {
  loginValidation,
  UserLogin,
} from '@/modules/authentication/validation/login.validation';
import { FunctionComponent } from 'react';

const Login: FunctionComponent = () => {
  const defaultValues: UserLogin = {
    email: '',
    password: '',
  };

  const { control, errors, handleSubmit } = useCustomHook<UserLogin>({
    validationSchema: loginValidation,
    defaultValues,
  });
  const { postLogin } = useLogin();

  const onSubmit = async (data: UserLogin) => {
    await postLogin(data);
  };

  return (
    <div className="h-screen">
      <Row gutter="none" className="h-full">
        <Column md={5} gutter="none">
          <div className="h-full flex flex-col items-stretch justify-center px-8">
            <Typography as="h1" variant="h1">
              Entrar
            </Typography>
            <Form
              control={control}
              errors={errors}
              handleSubmit={handleSubmit((data) => onSubmit(data as UserLogin))}
            >
              <FormInput
                lg={12}
                md={12}
                fieldName="email"
                label="E-mail"
                placeholder="E-mail"
              />
              <FormInput
                lg={12}
                md={12}
                fieldName="password"
                label="Senha"
                placeholder="Senha"
                type="password"
                info="Dica: Insira um e-mail válido"
              />
              <Column>
                <Button type="submit" expand="medium">
                  Entrar
                </Button>
              </Column>
            </Form>
          </div>
        </Column>
        <Column md={7} gutter="none">
          <div className="bg-accent-50 h-full">Test</div>
        </Column>
      </Row>
    </div>
  );
};

export default Login;
