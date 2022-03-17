import { combineEpics } from 'redux-observable';
import {trainingsEpic} from '../entities/trainings/common/epics/trainingsEpic';

export const contentEpic = combineEpics(trainingsEpic);
