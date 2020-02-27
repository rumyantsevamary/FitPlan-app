import { combineEpics } from 'redux-observable';
import exercisesListEpic from '../../list/epics/exercisesListEpic';
import exersisesCreateEpic from '../../create/epics/exercisesCreateEpic';

const exercisesEpic = combineEpics(exercisesListEpic, exersisesCreateEpic);

export default exercisesEpic;
