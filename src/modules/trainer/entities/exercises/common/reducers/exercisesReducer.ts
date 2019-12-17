import { combineReducers } from 'redux';
import exercisesListReducer from '../../list/reducers/exercisesListReducer';
import exercisesCreateReducer from '../../create/reducers/exercisesCreateReducer';

const exercisesReducer = combineReducers({
  list: exercisesListReducer,
  create: exercisesCreateReducer
});

export default exercisesReducer;
