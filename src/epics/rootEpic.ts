import { combineEpics } from 'redux-observable';
import userInfoEpic from '../modules/userInfo/epics/userInfoEpic';

const rootEpic = combineEpics(userInfoEpic);

export default rootEpic;
