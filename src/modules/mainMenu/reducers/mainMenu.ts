import {
  GET_MAIN_MENU_REQUEST,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAIL,
  SET_ACTIVE_CONTENT
} from "../constants/MainMenu";
import { AnyAction } from "redux";

const initialState: any = {
  userRole: "unknown",
  menuItems: [],
  fetching: true,
  activeContent: "calendar"
};

export default function mainMenuState(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_MAIN_MENU_REQUEST:
      return { ...state, fetching: true };

    case GET_MAIN_MENU_SUCCESS:
      return {
        ...state,
        fetching: false,
        menuItems: action.playload.menuItems,
        userRole: action.playload.userRole
      };

    case GET_MAIN_MENU_FAIL:
      console.log(action.playload);
      return state;

    case SET_ACTIVE_CONTENT:
      return { ...state, activeContent: action.playload };

    default:
      return state;
  }
}
