import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userInfoReducer from '../modules/userInfo/reducers/userInfoReducer';
import trainerReducer from '../modules/trainer/reducers/trainerReducer';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    user: userInfoReducer,
    trainer: trainerReducer
  });

export default rootReducer;
