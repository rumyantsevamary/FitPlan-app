import {
    CHANGE_MONTH,
    GET_PLANNED_EVENTS_REQUEST,
    GET_PLANNED_EVENTS_SUCCESS,
    GET_PLANNED_EVENTS_FAIL,
    OPEN_DAY_DETAILS
} from '../constants/Calendar'
import $ from 'jquery'

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
         $.ajax({
                type: "POST",
                url: "/api/plannedActions",
                data: {
                    year: year,
                    month: month
                },
                dataType: "json"
            })
            .success(function(data) {
                dispatch({
                    type: GET_PLANNED_EVENTS_SUCCESS,
                    playload: data
                })
            })
            .error(function(err, textStatus) {
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

