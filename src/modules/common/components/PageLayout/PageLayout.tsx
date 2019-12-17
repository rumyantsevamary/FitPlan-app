import * as React from 'react';
import * as styles from './PageLayout.module.css';

const ExercisesList: React.FC = props => (
  <div className={styles.page}>{props.children}</div>
);

export default ExercisesList;
