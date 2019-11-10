import {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL
} from "../constants/User";
import axios from "axios";

export function getCurrentUser() {
  return (dispatch: Function) => {
    dispatch({
      type: GET_CURRENT_USER_REQUEST
    });
    axios
      .get("/api/currentUser")
      .then(function(response: any) {
        dispatch({
          type: GET_CURRENT_USER_SUCCESS,
          playload: response.data
        });
      })
      .catch((textStatus: string) => {
        dispatch({
          type: GET_CURRENT_USER_FAIL,
          payload: textStatus,
          error: true
        });
      });
  };
}
