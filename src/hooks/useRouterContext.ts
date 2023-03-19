import { RouterContext } from './../contexts/Router/context';
import { useContext } from 'react';

export const useRouterContext = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error(`You can't use Router outside of RouterProvider`);
  }
  return context;
};
