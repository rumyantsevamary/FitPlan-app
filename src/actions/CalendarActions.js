import {
    CHANGE_MONTH
} from '../constants/Calendar'
import $ from 'jquery'

export function changeMonth(direction) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_MONTH,
            playload: direction
        })     
    }
}
