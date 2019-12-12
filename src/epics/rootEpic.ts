import { combineEpics } from 'redux-observable';
import userInfoEpic from '../modules/userInfo/epics/userInfoEpic';
import mainMenuEpic from '../modules/mainMenu/epics/mainMenuEpic';

const rootEpic = combineEpics(userInfoEpic, mainMenuEpic);

export default rootEpic;
