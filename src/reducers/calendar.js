import { 
    CHANGE_MONTH,
    GET_PLANNED_EVENTS_REQUEST,
    GET_PLANNED_EVENTS_SUCCESS,
    GET_PLANNED_EVENTS_FAIL,
    OPEN_DAY_DETAILS 
}	from '../constants/Calendar'

const initialState = {
    month: (new Date).getMonth(),
    year: (new Date).getFullYear(),
    plannedEvents: {},
    showDetails: false,
    detailsDay: null
};

export default function calendarState(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MONTH:
            return Object.assign({}, state, {
                month: action.playload.month, 
                year: action.playload.year
            })

        case GET_PLANNED_EVENTS_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            })

        case GET_PLANNED_EVENTS_SUCCESS:
            return Object.assign({}, state, {
                fetching: false, plannedEvents: action.playload
            }) 

        case GET_PLANNED_EVENTS_FAIL:
            console.log(action.playload)
            return state;

        case OPEN_DAY_DETAILS:
            return Object.assign({}, state, {
                showDetails: true, detailsDay: action.playload
            }) 

        default:
            return state;
    }       
}

