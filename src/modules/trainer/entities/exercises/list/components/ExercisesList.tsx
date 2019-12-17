import * as React from 'react';
import SearchBlockContainer from '../containers/SearchBlockContainer/SearchBlockContainer';
import ExerciseAddButton from './ExerciseAddButton/ExerciseAddButton';
import ExercisesListContainer from '../containers/ExercisesListContainer/ExercisesListContainer';

const ExercisesList: React.FC = () => {
  return (
    <>
      <SearchBlockContainer />
      <ExerciseAddButton />
      <ExercisesListContainer />
    </>
  );
};

export default ExercisesList;
