import { combineReducers } from 'redux';
import {trainingsReducer} from '../entities/trainings/common/reducers/trainingsReducer';

export const contentReducer = combineReducers({
  trainings: trainingsReducer
});
