import * as React from 'react';
import SearchBlockContainer from '../../containers/SearchBlockContainer/SearchBlockContainer';
import * as styles from './ExerciseList.module.css';

const ExercisesList: React.FC = () => {
  return (
    <div className={styles.exercises_list}>
      <SearchBlockContainer />
      {/* <AddButtonContainer />
      <ExercisesListContainer /> */}
    </div>
  );
};

export default ExercisesList;
