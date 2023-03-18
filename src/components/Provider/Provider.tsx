import React, { FC, Provider } from 'react';

export interface ProviderProps {
  children: string;
}

const Provider: FC<ProviderProps> = (children) => {
  return <button>{children}</button>;
};

export default Provider;
