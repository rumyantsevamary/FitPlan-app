import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CONTENT_ROUTES_MAP } from './RoutesMap';
import {TrainingsList} from '../entities/trainings/list/components/TrainingsList';
import {TrainingsCreateFormContainer} from '../entities/trainings/create/containers/TrainingsCreateFormContainer/TrainingsCreateFormContainer';
import {CalendarContainer} from '../entities/calendar/containers/CalendarContainer';
import { PageLayout } from 'components';

export const ContentRoutes: React.FC = () => (
  <PageLayout>
    <Routes>
      <Route path={CONTENT_ROUTES_MAP.CALENDAR} element={<CalendarContainer />}/>
      <Route path={CONTENT_ROUTES_MAP.TRAININGS.LIST} element={<TrainingsList />}/>
      <Route path={CONTENT_ROUTES_MAP.TRAININGS.CREATE} element={<TrainingsCreateFormContainer />}/>
      <Route path={CONTENT_ROUTES_MAP.PROFILE} element={<div>Profile Page</div>}/>
      <Route path="*" element ={<NoMatch />}/>
    </Routes>
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
