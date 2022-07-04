import issueInterface from '../models/issueInterface';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};

export enum Types {
  getList = "GET_LIST",
  getOne = "GET_ONE"
}


// Issues

type IssuesPayload = {
  [Types.getList]: issueInterface[]
};

export type IssuesActions = ActionMap<IssuesPayload>[keyof ActionMap<
  IssuesPayload
>];

export const IssuesReducer = (
  state: issueInterface[],
  action: IssuesActions | IssueActions
) => {
  switch (action.type) {
    case Types.getList:
      return action.payload;
    default:
      return state;
  }
};

// Issue

type IssuePayload = {
  [Types.getOne]: issueInterface;
};

export type IssueActions = ActionMap<
  IssuePayload
>[keyof ActionMap<IssuePayload>];

export const IssueReducer = (
  state: issueInterface,
  action: IssuesActions | IssueActions
) => {
  switch (action.type) {
    case Types.getOne:
      return action.payload;
    default:
      return state;
  }
};
