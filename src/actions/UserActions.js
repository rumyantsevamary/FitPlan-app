import {
    GET_CURRENT_USER_REQUEST,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL
} from '../constants/User'
import $ from 'jquery'

export function getCurrentUser() {
    return (dispatch) => {
        dispatch({
            type: GET_CURRENT_USER_REQUEST
        })
         $.get("/api/currentUser", "json")
            .done(function(data) {
                dispatch({
                    type: GET_CURRENT_USER_SUCCESS,
                    playload: data
                })
            })
            .fail(function(err, textStatus) {
                dispatch({
                type: GET_CURRENT_USER_FAIL,
                payload: textStatus,
                error: true
                })
            })
    }
}