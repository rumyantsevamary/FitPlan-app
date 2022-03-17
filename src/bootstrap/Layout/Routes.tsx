import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import {ROOT_PATH} from './constants/layoutConsts'
import ContentPage from './pages/ContentPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path={ROOT_PATH}>
      <ContentPage />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        404. No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Routes;
