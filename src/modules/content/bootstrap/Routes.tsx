import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CONTENT_ROUTES_MAP } from './RoutesMap';
import {TrainingsList} from '../entities/trainings/list/components/TrainingsList';
import {TrainingsCreateFormContainer} from '../entities/trainings/create/containers/ExercisesCreateFormContainer/TrainingsCreateFormContainer';
import { Loader, PageLayout } from 'components';

const Routes: React.FC = () => (
  <PageLayout>
    <Switch>
      <Route path={CONTENT_ROUTES_MAP.CALENDAR}>
        <div>
          <Loader />
        </div>
      </Route>
      <Route path={CONTENT_ROUTES_MAP.TRAININGS.LIST}>
        <TrainingsList />
      </Route>
      <Route path={CONTENT_ROUTES_MAP.TRAININGS.CREATE}>
        <TrainingsCreateFormContainer />
      </Route>
      <Route path={CONTENT_ROUTES_MAP.PROFILE}>
        <div>Profile Page</div>
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </PageLayout>
);

// TODO: replace with Loader.
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
