import React from 'react';

import IssuesListContainer from './containers/IssuesListContainer';
import IssuesDetailContainer from './containers/IssuesDetailContainer';
import {
  Routes,
  Route,
  useRoutes
} from 'react-router-dom';

const App = () => {
  const routes = useRoutes([
      { path: '/', element: <IssuesListContainer /> },
      { path: '/issue/:id', element: <IssuesDetailContainer /> }
  ]);

  return routes;
};

export default App;
