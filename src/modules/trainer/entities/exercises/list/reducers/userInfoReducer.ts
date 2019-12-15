import {
  GET_LIST_BEGIN,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL
} from '../constants/exercisesListActionTypes';
import { AnyAction } from 'redux';

const initialState: any = {
  searchString: '',
  list: null,
  fetching: true
};

export default function userstate(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_LIST_BEGIN:
      return { ...state, fetching: true };
    case GET_LIST_SUCCESS:
      const { list } = action.payload;
      return { ...state, list, fetching: false };
    case GET_LIST_FAIL:
      console.log(action.playload);
      return state;
    default:
      return state;
  }
}
