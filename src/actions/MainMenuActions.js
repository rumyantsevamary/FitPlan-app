import {
    GET_MAIN_MENU_REQUEST,
    GET_MAIN_MENU_SUCCESS,
    GET_MAIN_MENU_FAIL,
    SET_ACTIVE_CONTENT
} from '../constants/MainMenu'
import $ from 'jquery'

export function getMainMenu() {
    return (dispatch) => {
        dispatch({
            type: GET_MAIN_MENU_REQUEST
        })
         $.ajax({
                type: "GET",
                url: "/api/mainMenu",
                dataType: "json"
            })
            .success(function(data) {
                dispatch({
                    type: GET_MAIN_MENU_SUCCESS,
                    playload: data[0]
                })
            })
            .error(function(err, textStatus) {
                dispatch({
                type: GET_MAIN_MENU_FAIL,
                payload: textStatus,
                error: true
                })
            })
    }
}

export function setActiveContent(activeContent) {
    return (dispatch) => {
        dispatch({
            type: SET_ACTIVE_CONTENT,
            playload: activeContent
        })
    }
}