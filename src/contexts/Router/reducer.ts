import { RouterInitState } from './state';

export type ReducerType = (
  state: Omit<RouterInitState, 'dispatch'>,
  payload: any
) => Omit<RouterInitState, 'dispatch'>;

export const reducer: ReducerType = (state, payload) => {
  return state;
};
