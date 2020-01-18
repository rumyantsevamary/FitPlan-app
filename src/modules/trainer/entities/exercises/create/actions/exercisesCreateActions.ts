import {
  SET_DATA,
  SAVE_DATA_BEGIN,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_FAIL,
  SAVE_DATA_CANCELLED,
  CLEAR_FORM,
  SET_FIELD_VALUE
} from '../constants/exercisesCreateActionTypes';

export const setData = (data: any) => ({
  type: SET_DATA,
  payload: data
});

export const saveExerciseBegin = () => ({
  type: SAVE_DATA_BEGIN
});

export const saveExerciseSuccess = (data: any) => ({
  type: SAVE_DATA_SUCCESS,
  payload: { list: data }
});

export const saveExerciseFail = () => ({
  type: SAVE_DATA_FAIL
});

export const saveExerciseCancelled = () => ({
  type: SAVE_DATA_CANCELLED
});

export const clearForm = () => ({
  type: CLEAR_FORM
});

export const setFieldValue = (fieldName: string, value: any) => ({
  type: SET_FIELD_VALUE,
  payload: { fieldName, value }
});
