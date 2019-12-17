import {
  GET_LIST_BEGIN,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  SET_SEARCH_STRING,
  CLEAR_FORM
} from '../constants/exercisesListActionTypes';
import { AnyAction } from 'redux';

const initialState: any = {
  searchString: '',
  list: null,
  fetching: true
};

const exercisesListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_BEGIN:
      return { ...state, fetching: true };
    case GET_LIST_SUCCESS:
      const { list } = action.payload;
      return { ...state, list, fetching: false };
    case GET_LIST_FAIL:
      console.log(action.payload);
      return state;
    case SET_SEARCH_STRING:
      const { searchString } = action.payload;
      return { ...state, searchString };
    case CLEAR_FORM:
      return { ...state, searchString: '' };
    default:
      return state;
  }
};

export default exercisesListReducer;
