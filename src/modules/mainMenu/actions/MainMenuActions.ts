import {
  GET_MAIN_MENU_REQUEST,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAIL,
  SET_ACTIVE_CONTENT
} from '../constants/MainMenu';
import axios from 'axios';

export function getMainMenu() {
  return (dispatch: Function) => {
    dispatch({
      type: GET_MAIN_MENU_REQUEST
    });
    axios
      .get("/api/mainMenu")
      .then(function(request: any) {
        dispatch({
          type: GET_MAIN_MENU_SUCCESS,
          playload: request.data[0]
        });
      })
      .catch((textStatus: string) => {
        dispatch({
          type: GET_MAIN_MENU_FAIL,
          payload: textStatus,
          error: true
        });
      });
  };
}

export function setActiveContent(activeContent: any) {
  return (dispatch: Function) => {
    dispatch({
      type: SET_ACTIVE_CONTENT,
      playload: activeContent
    });
  };
}
