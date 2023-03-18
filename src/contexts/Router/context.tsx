import React, { FC, useReducer } from 'react';
import { createContext } from 'react';
import { Route } from '../../shared/types';
import { reducer } from './reducer';
import { RouterInitState } from './state';

export const RouterContext = createContext<RouterInitState | null>(null);

export interface ProviderProps {
  children: React.ReactNode;
  routes: Route[];
}

export const RouterProvider: FC<ProviderProps> = ({ children, routes }) => {
  const [state, dispatch] = useReducer(reducer, { routes, location: '' });
  return (
    <RouterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RouterContext.Provider>
  );
};
