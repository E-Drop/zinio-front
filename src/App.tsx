import React from 'react';

import IssuesListContainer from './containers/IssuesListContainer';
import IssuesDetailContainer from './containers/IssuesDetailContainer';
import { useRoutes } from 'react-router-dom';
import {IssuesProvider} from './context/IssuesContext';

const App = () => {
  const routes = useRoutes([
      { path: '/', element: <IssuesProvider><IssuesListContainer /></IssuesProvider> },
      { path: '/issue/:id', element: <IssuesProvider><IssuesDetailContainer /></IssuesProvider> }
  ]);

  return routes;
};

export default App;
