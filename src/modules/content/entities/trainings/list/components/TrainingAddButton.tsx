import * as React from 'react';
import { ButtonLink } from 'components/ButtonLink';
import { CONTENT_ROUTES_MAP } from 'modules/content/bootstrap/RoutesMap';

export const TrainingAddButton: React.FC = () => (
  <ButtonLink
    path={CONTENT_ROUTES_MAP.TRAININGS.CREATE}
    label="+ Add training"
  />
);
