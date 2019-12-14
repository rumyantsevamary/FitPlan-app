import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import userInfoReducer from '../modules/userInfo/reducers/userInfoReducer';

const rootReducer = (history: any) =>  combineReducers({
  router: connectRouter(history),
  user: userInfoReducer,
});

export default rootReducer