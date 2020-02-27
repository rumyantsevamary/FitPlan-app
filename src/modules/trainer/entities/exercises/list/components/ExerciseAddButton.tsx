import * as React from 'react';
import { ButtonLink } from 'components';
import { TRAINER_ROUTES_MAP } from 'modules/trainer/bootstrap/RoutesMap';

const ExerciseAddButton: React.FC = () => (
  <ButtonLink
    path={TRAINER_ROUTES_MAP.EXERCISES.CREATE}
    label="+ Добавить упражнение"
  />
);

export default ExerciseAddButton;
