import { combineReducers } from 'redux';
import exercisesListReducer from '../../list/reducers/exercisesListReducer';

const exercisesReducer = combineReducers({
  list: exercisesListReducer
});

export default exercisesReducer;
