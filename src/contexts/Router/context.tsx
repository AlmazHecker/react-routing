import React, { FC, useReducer } from 'react';
import { createContext } from 'react';

import { reducer } from './reducer';
import { initialState, RouterInitState } from './state';

export const RouterContext = createContext<RouterInitState | null>(null);

export interface ProviderProps {
  children: React.ReactNode;
}

const RouterProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export default RouterProvider;
