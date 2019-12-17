import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TRAINER_ROUTES_MAP } from './RoutesMap';
import ExercisesList from '../entities/exercises/list/components/ExercisesList';
import ExercisesCreateFormContainer from '../entities/exercises/create/containers/ExercisesCreateFormContainer/ExercisesCreateFormContainer';
import { Loader, PageLayout } from 'components';

const Routes: React.FC = () => (
  <PageLayout>
    <Switch>
      <Route path={TRAINER_ROUTES_MAP.CALENDAR}>
        <div>
          <Loader />
        </div>
      </Route>
      <Route path={TRAINER_ROUTES_MAP.TRAININGS}>
        <div>Trainings Page</div>
      </Route>
      <Route path={TRAINER_ROUTES_MAP.EXERCISES.LIST}>
        <ExercisesList />
      </Route>
      <Route path={TRAINER_ROUTES_MAP.EXERCISES.CREATE}>
        <ExercisesCreateFormContainer />
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
  </PageLayout>
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
