import {
  GET_LIST_BEGIN,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_CANCELLED,
  SET_SEARCH_STRING,
  CLEAR_FORM
} from '../constants/trainingsListActionTypes';

export const getExercisesListBegin = () => ({
  type: GET_LIST_BEGIN
});
export const getExercisesListSuccess = (data: any) => ({
  type: GET_LIST_SUCCESS,
  payload: { list: data }
});

export const getExercisesListFail = () => ({
  type: GET_LIST_FAIL
});

export const getExercisesListCancelled = () => ({
  type: GET_LIST_CANCELLED
});

export const setSearchString = (searchString: string) => ({
  type: SET_SEARCH_STRING,
  payload: { searchString }
});

export const clearForm = () => ({
  type: CLEAR_FORM
});
