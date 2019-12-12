import {
  CHANGE_MONTH,
  GET_PLANNED_EVENTS_REQUEST,
  GET_PLANNED_EVENTS_SUCCESS,
  GET_PLANNED_EVENTS_FAIL,
  OPEN_DAY_DETAILS
} from '../constants/Calendar';
import axios from 'axios';

export function changeMonth(month: any, year: any) {
  return (dispatch: Function) => {
    dispatch({
      type: CHANGE_MONTH,
      playload: {
        month: month,
        year: year
      }
    });
  };
}

export function getPlannedEvents(year: any, month: any) {
  return (dispatch: Function) => {
    dispatch({
      type: GET_PLANNED_EVENTS_REQUEST
    });
    axios
      .post('/api/plannedActions', {
        year: year,
        month: month
      })
      .then(function(data) {
        dispatch({
          type: GET_PLANNED_EVENTS_SUCCESS,
          playload: data
        });
      })
      .catch((textStatus: string) => {
        dispatch({
          type: GET_PLANNED_EVENTS_FAIL,
          payload: textStatus,
          error: true
        });
      });
  };
}

export function openDayDetails(day: any) {
  return (dispatch: Function) => {
    dispatch({
      type: OPEN_DAY_DETAILS,
      playload: day
    });
  };
}
