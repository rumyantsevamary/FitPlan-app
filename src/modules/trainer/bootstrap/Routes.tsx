import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TRAINER_ROUTES_MAP } from './RoutesMap';
import ExercisesList from '../entities/exercises/list/components/ExercisesList/ExercisesList';
import Loader from '../../common/components/Loader/Loader';

const Routes: React.FC = () => (
  <Switch>
    <Route path={TRAINER_ROUTES_MAP.CALENDAR}>
      <div>
        <Loader />
      </div>
    </Route>
    <Route path={TRAINER_ROUTES_MAP.TRAININGS}>
      <div>Trainings Page</div>
    </Route>
    <Route path={TRAINER_ROUTES_MAP.EXERCISES}>
      <ExercisesList />
    </Route>
    <Route path={TRAINER_ROUTES_MAP.CLIENTS}>
      <div>Clients Page</div>
    </Route>
    <Route path={TRAINER_ROUTES_MAP.PROFILE}>
      <div>Profile Page</div>
    </Route>

    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

// TODO: заменить на Loader
function NoMatch() {
  const { pathname } = useLocation();
  return (
    <div>
      <h3>
        404. No match for <code>{pathname}</code>
      </h3>
    </div>
  );
}

export default Routes;
