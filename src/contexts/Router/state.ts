import { RouterActions } from './actions';
import { Dispatch } from 'react';

export type RouterInitState = {
  state: typeof initialState;
  dispatch: Dispatch<RouterActions>;
};

export const initialState = {
  location: new URL(window.location.href),
};
