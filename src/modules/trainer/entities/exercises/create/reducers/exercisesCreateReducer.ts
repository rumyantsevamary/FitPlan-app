import { combineReducers } from 'redux';
import exercisesCreateDataReducer from './exercisesCreateDataReducer';
import exercisesCreateFieldsReducer from './exercisesCreateFieldsReducer';

const exercisesCreateReducer = combineReducers({
  data: exercisesCreateDataReducer,
  fields: exercisesCreateFieldsReducer
});

export default exercisesCreateReducer;
