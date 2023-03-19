export enum ActionType {
  SetLocation,
}

export type SetLocation = (val: string) => {
  type: ActionType.SetLocation;
  payload: string;
};

export type RouterActions = ReturnType<SetLocation>;
