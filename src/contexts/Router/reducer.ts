import { RouterActions, ActionType, SetLocation } from './actions';
import { RouterInitState } from './state';

export type ReducerType = (
  state: RouterInitState,
  action: RouterActions
) => RouterInitState;

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
