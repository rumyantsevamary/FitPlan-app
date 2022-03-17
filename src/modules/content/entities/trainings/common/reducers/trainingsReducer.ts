import { combineReducers } from 'redux';
import {trainingsListReducer} from '../../list/reducers/trainingsListReducer';
import {trainingsCreateReducer} from '../../create/reducers/trainingsCreateReducer';

export const trainingsReducer = combineReducers({
  list: trainingsListReducer,
  create: trainingsCreateReducer
});
