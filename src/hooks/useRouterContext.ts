import { RouterInitState } from './../contexts/Router/state';
import { RouterContext } from './../contexts/Router/context';
import { useContext } from 'react';

export const useRouterContext = (): RouterInitState | null => {
  const state = useContext(RouterContext);
  return state;
};
