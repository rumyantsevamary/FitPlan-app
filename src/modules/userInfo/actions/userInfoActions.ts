import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_CANCELLED
} from '../constants/userInfoActionTypes';

export const getCurrentUserBegin = () => ({
  type: GET_CURRENT_USER_BEGIN
});
export const getCurrentUserSuccess = (data: any) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: data
});

export const getCurrentUserFail = () => ({
  type: GET_CURRENT_USER_FAIL
});

export const getCurrentUserCancelled = () => ({
  type: GET_CURRENT_USER_CANCELLED
});
