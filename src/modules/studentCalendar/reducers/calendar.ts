import {
  CHANGE_MONTH,
  GET_PLANNED_EVENTS_REQUEST,
  GET_PLANNED_EVENTS_SUCCESS,
  GET_PLANNED_EVENTS_FAIL,
  OPEN_DAY_DETAILS
} from "../../calendar/constants/Calendar";
import { AnyAction } from "redux";

const initialState: any = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  plannedEvents: {},
  showDetails: false,
  detailsDay: null
};

export default function calendarState(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        month: action.playload.month,
        year: action.playload.year
      };

    case GET_PLANNED_EVENTS_REQUEST:
      return { ...state, fetching: true };

    case GET_PLANNED_EVENTS_SUCCESS:
      return { ...state, fetching: false, plannedEvents: action.playload };

    case GET_PLANNED_EVENTS_FAIL:
      console.log(action.playload);
      return state;

    case OPEN_DAY_DETAILS:
      return { ...state, showDetails: true, detailsDay: action.playload };

    default:
      return state;
  }
}
