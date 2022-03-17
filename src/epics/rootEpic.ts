import { combineEpics } from 'redux-observable';
import userInfoEpic from '../modules/userInfo/epics/userInfoEpic';
import {contentEpic} from '../modules/content/epics/contentEpic';

const rootEpic = combineEpics(userInfoEpic, contentEpic);

export default rootEpic;
