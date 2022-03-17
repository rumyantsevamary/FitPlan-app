import { combineEpics } from 'redux-observable';
import {trainingsListEpic} from '../../list/epics/trainingsListEpic';
import {trainingsCreateEpic} from '../../create/epics/trainingsCreateEpic';

export const trainingsEpic = combineEpics(trainingsListEpic, trainingsCreateEpic);
