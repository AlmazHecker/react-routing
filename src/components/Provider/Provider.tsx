import React, { FC } from 'react';

export interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = (children) => {
  return <>{children}</>;
};

export default Provider;
