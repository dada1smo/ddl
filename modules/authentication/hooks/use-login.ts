import { UserLogin } from '../validation/login.validation';

export default function useLogin() {
  const postLogin = async (data: UserLogin) => {
    try {
      const response = await fetch('/login/api', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      console.log(await response.json());
    } catch (error: any) {
      console.log(await error.json());
    }
  };

  return {
    postLogin,
  };
}
