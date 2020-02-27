import { combineEpics } from 'redux-observable';
import userInfoEpic from '../modules/userInfo/epics/userInfoEpic';
import trainerEpic from '../modules/trainer/epics/trainerEpic';

const rootEpic = combineEpics(userInfoEpic, trainerEpic);

export default rootEpic;
