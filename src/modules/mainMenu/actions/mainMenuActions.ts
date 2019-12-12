import {
  GET_MAIN_MENU_BEGIN,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAIL,
  SET_ACTIVE_CONTENT,
  GET_MAIN_MENU_CANCELLED
} from '../constants/mainMenuActionTypes';
import axios from 'axios';

export const getMainMenuBegin = () => ({
  type: GET_MAIN_MENU_BEGIN
});

export const getMainMenuSuccess = (data: any) => ({
  type: GET_MAIN_MENU_SUCCESS,
  payload: data
});

export const getMainMenuFail = () => ({
  type: GET_MAIN_MENU_FAIL
});

export const getMainMenuCancelled = () => ({
  type: GET_MAIN_MENU_CANCELLED
});

export function getMainMenu() {
  return (dispatch: Function) => {
    dispatch({
      type: GET_MAIN_MENU_BEGIN
    });
    axios
      .get('/api/mainMenu')
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

export const setActiveContent = (activeContent: any) => ({
  type: SET_ACTIVE_CONTENT,
  playload: activeContent
});
