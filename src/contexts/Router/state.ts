import { RouterActions } from './actions';
import { Route } from './../../shared/types';
import { Dispatch } from 'react';

export type RouterInitState = {
  routes: Route[];
  location: URL;

  dispatch: Dispatch<RouterActions>;
};
