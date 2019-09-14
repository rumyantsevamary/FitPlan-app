import {
    GET_CURRENT_USER_REQUEST,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL
} from '../constants/User';
import { get } from 'axios';

export function getCurrentUser() {
    return (dispatch) => {
        dispatch({
            type: GET_CURRENT_USER_REQUEST
        })
        get("/api/currentUser", "json")
            .then(function (data) {
                dispatch({
                    type: GET_CURRENT_USER_SUCCESS,
                    playload: data
                })
            })
            .catch(function (err, textStatus) {
                dispatch({
                    type: GET_CURRENT_USER_FAIL,
                    payload: textStatus,
                    error: true
                })
            })
    }
}