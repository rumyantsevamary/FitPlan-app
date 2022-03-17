import * as React from 'react';
import {SearchBlockContainer} from '../containers/SearchBlockContainer/SearchBlockContainer';
import {TrainingAddButton} from './TrainingAddButton';
import {TrainingsListContainer} from '../containers/TrainingsListContainer/TrainingsListContainer';

export const TrainingsList: React.FC = () => {
  return (
    <>
      <SearchBlockContainer />
      <TrainingAddButton />
      <TrainingsListContainer />
    </>
  );
};
