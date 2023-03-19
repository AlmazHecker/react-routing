export enum ActionType {
  SetLocation,
}

export type SetLocation = (val: URL) => {
  type: ActionType.SetLocation;
  payload: URL;
};

export type RouterActions = ReturnType<SetLocation>;
