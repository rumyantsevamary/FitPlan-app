import {
  GET_MAIN_MENU_BEGIN,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAIL,
  SET_ACTIVE_CONTENT
} from '../constants/mainMenuActionTypes';
import { AnyAction } from 'redux';

const initialState: any = {
  userRole: 'unknown',
  menuItems: [],
  fetching: true,
  activeContent: 'calendar'
};

const mainMenuReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_MAIN_MENU_BEGIN:
      return { ...state, fetching: true };

    case GET_MAIN_MENU_SUCCESS:
      const {
        payload: { menuItems, userRole }
      } = action;

      return {
        ...state,
        menuItems,
        userRole,
        fetching: false
      };

    case GET_MAIN_MENU_FAIL:
      console.log(action.playload);
      return state;

    case SET_ACTIVE_CONTENT:
      return { ...state, activeContent: action.playload };

    default:
      return state;
  }
};
export default mainMenuReducer;
