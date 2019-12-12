import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import userInfoReducer from '../modules/userInfo/reducers/userInfoReducer';
import mainMenu from '../modules/mainMenu/reducers/mainMenu';
import calendar from '../modules/calendar/reducers/calendar';

const rootReducer = (history: any) =>  combineReducers({
  router: connectRouter(history),
  mainMenu,
  user: userInfoReducer,
  calendar
});

export default rootReducer