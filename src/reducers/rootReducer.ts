import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userInfoReducer from '../modules/userInfo/reducers/userInfoReducer';
import {contentReducer} from '../modules/content/reducers/contentReducer';

export const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    user: userInfoReducer,
    content: contentReducer
  });
