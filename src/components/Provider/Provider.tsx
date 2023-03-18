import React, { FC } from 'react';

export interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  console.log(children);

  return <div>{children}</div>;
};

export default Provider;
