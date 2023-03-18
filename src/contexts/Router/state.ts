import { Route } from './../../shared/types';
import { Dispatch } from 'react';

export type RouterInitState = {
  routes: Route[];
  location: string;

  dispatch: Dispatch<any>;
};