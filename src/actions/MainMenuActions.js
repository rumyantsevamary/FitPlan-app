import {
    GET_MAIN_MENU_REQUEST,
    GET_MAIN_MENU_SUCCESS,
    GET_MAIN_MENU_FAIL,
    SET_ACTIVE_CONTENT
} from '../constants/MainMenu';
import { get } from 'axios';
import $ from 'jquery'

export function getMainMenu() {
    return (dispatch) => {
        dispatch({
            type: GET_MAIN_MENU_REQUEST
        })
        get("/api/mainMenu", "json")
            .then(function (data) {
                dispatch({
                    type: GET_MAIN_MENU_SUCCESS,
                    playload: data[0]
                })
            })
            .catch(function (err, textStatus) {
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