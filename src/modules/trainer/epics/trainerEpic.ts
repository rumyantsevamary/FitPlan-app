import { combineEpics } from 'redux-observable';
import exercisesEpic from '../entities/exercises/common/epics/exercisesEpic';

const trainerEpic = combineEpics(exercisesEpic);

export default trainerEpic;
