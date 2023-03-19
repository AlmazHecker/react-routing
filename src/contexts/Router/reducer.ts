import { initialState } from './state';
import { RouterActions, ActionType, SetLocation } from './actions';

export type ReducerType = (
  state: typeof initialState,
  action: RouterActions
) => typeof initialState;

export const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case ActionType.SetLocation:
      return { ...state, location: action.payload };

    default:
      return state;
  }
};

export const setLocation: SetLocation = (location) => ({
  type: ActionType.SetLocation,
  payload: location,
});
