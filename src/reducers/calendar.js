import { CHANGE_MONTH }	from '../constants/Calendar'

const initialState = {
    month: (new Date).getMonth(),
    year: (new Date).getFullYear()
};

export default function calendarState(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MONTH:
            let newMonth = state.month;
            let newYear = state.year;

            if (action.playload == "up" && state.month <= 10) {
                newMonth += 1;
            } else if (action.playload == "up" && state.month == 11) {
                newMonth = 0;
                newYear += 1;
            } else if (action.playload == "down" && state.month >= 1) {
                newMonth -= 1;
            } else if (action.playload == "down" && state.month == 0) {
                newMonth = 11;
                newYear -= 1;
            }

            return Object.assign({}, state, {
                month: newMonth, 
                year: newYear
            })

        default:
            return state;
    }   
    
}