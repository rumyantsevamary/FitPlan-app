import { combineReducers } from 'redux';
import userInfoReducer from '../modules/userInfo/reducers/userInfoReducer';
import mainMenu from '../modules/mainMenu/reducers/mainMenu';
import calendar from '../modules/calendar/reducers/calendar';

export default combineReducers({
  mainMenu,
  user: userInfoReducer,
  calendar
});
