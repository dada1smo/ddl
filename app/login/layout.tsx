import { ReactNode } from 'react';

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default LoginLayout;
