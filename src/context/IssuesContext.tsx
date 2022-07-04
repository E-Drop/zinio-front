import React, { ReactNode, createContext, useReducer, Dispatch } from "react";
import {
  IssuesReducer,
  IssueReducer,
  IssuesActions,
  IssueActions
} from "../reducers/reducers";
import issueInterface from '../models/issueInterface';

type InitialStateType = {
  issues: any[];
  issue: issueInterface;
};

const initialState = {
  issues: [],
  issue: {
    description:
      "I KILL GIANTS co-creator KEN NIIMURA (International Manga Award winner and Eisner nominee) brings a unique vision of life in Japan to the page in HENSHIN. The lives of a kid with peculiar superpowers, a lonely girl discovering herself in the big city, and a businessman on a long night out are some of the short stories included in this collection that will make you laugh, and even maybe shed a tear. Explore Tokyo as you've never seen it before under NIIMURA's masterful and imaginative storytelling, printed here for the first time in English.",
    id: 494505,
    cover_image:
      "https://cdn-assets.ziniopro.com/var/site_9829/storage/images/media2/cover380/4923-1-eng-US/cover2.jpg?t=ipad_portrait_cover",
    modified_at: "2020-11-26T09:21:52+0000",
    name: "Henshin",
  }
};

const IssuesContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<IssuesActions | IssueActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { issues, issue }: InitialStateType,
  action: IssuesActions | IssueActions
) => ({
  issues: IssuesReducer(issues as [], action),
  issue: IssueReducer(issue, action)
});

interface Props {
  children?: ReactNode
}

const IssuesProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <IssuesContext.Provider value={{ state, dispatch }}>
      {children}
    </IssuesContext.Provider>
  );
};

export { IssuesProvider, IssuesContext };