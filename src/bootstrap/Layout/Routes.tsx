import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import TrainerPage from './pages/TrainerPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/trainer">
      <TrainerPage />
    </Route>
    <Route path="/client">
      <div>ClientPage</div>
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

// TODO: заменить на Loader
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        404. No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Routes;
