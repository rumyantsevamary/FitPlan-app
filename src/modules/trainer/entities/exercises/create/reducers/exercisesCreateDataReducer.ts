import {
  SAVE_DATA_BEGIN,
  SAVE_DATA_FAIL,
  SAVE_DATA_SUCCESS,
  CLEAR_FORM
} from '../constants/exercisesCreateActionTypes';
import { AnyAction } from 'redux';

const initialState: any = {
  data: null,
  fetching: true
};

const exercisesCreateDataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SAVE_DATA_BEGIN:
      return { ...state, fetching: true };
    case SAVE_DATA_SUCCESS:
      return { ...state, fetching: false };
    case SAVE_DATA_FAIL:
      console.log(action.payload);
      return state;
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default exercisesCreateDataReducer;
