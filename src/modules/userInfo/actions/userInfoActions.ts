import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL
} from '../constants/userInfoActionTypes';

export const getCurrentUserBegin = () => ({
  type: GET_CURRENT_USER_BEGIN
});
export const getCurrentUserSuccess = (data: any) => ({
  type: GET_CURRENT_USER_SUCCESS,
  playload: data
});

export const getCurrentUserFalure = () => ({
  type: GET_CURRENT_USER_FAIL
});
