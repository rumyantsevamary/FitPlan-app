import {
  GET_LIST_BEGIN,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_CANCELLED
} from '../constants/exercisesListActionTypes';

export const getExercisesListBegin = (searchString: string) => ({
  type: GET_LIST_BEGIN,
  playload: { searchString }
});
export const getExercisesListSuccess = (data: any) => ({
  type: GET_LIST_SUCCESS,
  playload: data
});

export const getExercisesListFail = () => ({
  type: GET_LIST_FAIL
});

export const getExercisesListCancelled = () => ({
  type: GET_LIST_CANCELLED
});
