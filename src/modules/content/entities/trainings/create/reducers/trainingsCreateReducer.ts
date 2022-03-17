import { combineReducers } from 'redux';
import {trainingsCreateDataReducer} from './trainingsCreateDataReducer';
import {trainingsCreateFieldsReducer} from './trainingsCreateFieldsReducer';

export const trainingsCreateReducer = combineReducers({
  data: trainingsCreateDataReducer,
  fields: trainingsCreateFieldsReducer
});
