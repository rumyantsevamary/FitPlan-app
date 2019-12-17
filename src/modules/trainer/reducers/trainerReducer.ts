import { combineReducers } from 'redux';
import exercisesReducer from '../entities/exercises/common/reducers/exercisesReducer';

const trainerReducer = combineReducers({
  exercises: exercisesReducer
});

export default trainerReducer;
