import {
    CHANGE_MONTH,
    GET_PLANNED_EVENTS_REQUEST,
    GET_PLANNED_EVENTS_SUCCESS,
    GET_PLANNED_EVENTS_FAIL,
    OPEN_DAY_DETAILS
} from '../constants/Calendar';
import { post } from 'axios';

export function changeMonth(month, year) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_MONTH,
            playload: {
                month: month,
                year: year
            }
        })
    }
}

export function getPlannedEvents(year, month) {
    return (dispatch) => {
        dispatch({
            type: GET_PLANNED_EVENTS_REQUEST
        })
        post("/api/plannedActions", {
            year: year,
            month: month
        },
            "json")
            .then(function (data) {
                dispatch({
                    type: GET_PLANNED_EVENTS_SUCCESS,
                    playload: data
                })
            })
            .catch(function (err, textStatus) {
                dispatch({
                    type: GET_PLANNED_EVENTS_FAIL,
                    payload: textStatus,
                    error: true
                })
            })
    }
}

export function openDayDetails(day) {
    return (dispatch) => {
        dispatch({
            type: OPEN_DAY_DETAILS,
            playload: day
        })
    }
}

