import { combineEpics } from 'redux-observable';
import exercisesListEpic from '../../list/epics/exercisesListEpic';

const exercisesEpic = combineEpics(exercisesListEpic);

export default exercisesEpic;
