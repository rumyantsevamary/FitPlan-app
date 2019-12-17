import * as React from 'react';
import { Link } from 'react-router-dom';
import { TRAINER_ROUTES_MAP } from '../../../../../bootstrap/RoutesMap';
import * as styles from './ExerciseAddButton.module.css';

const ExerciseAddButton: React.FC = () => (
  <Link to={TRAINER_ROUTES_MAP.EXERCISES.CREATE} className={styles.add_btn}>
    + Добавить упражнение
  </Link>
);

export default ExerciseAddButton;