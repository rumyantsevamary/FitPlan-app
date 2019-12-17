import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL
} from '../constants/userInfoActionTypes';
import { AnyAction } from 'redux';

const initialState: any = {
  cUser: null,
  fetching: true
};

const userInfoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENT_USER_BEGIN:
      return { ...state, fetching: true };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, fetching: false, cUser: action.playload };
    case GET_CURRENT_USER_FAIL:
      console.log(action.playload);
      return state;
    default:
      return state;
  }
}

export default userInfoReducer;