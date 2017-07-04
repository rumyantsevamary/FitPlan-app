import { GET_CURRENT_USER_REQUEST,
         GET_CURRENT_USER_SUCCESS,
         GET_CURRENT_USER_FAIL }	from '../constants/User'

const initialState = {
    name: 'Mary',
    fetching: 'true'
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_USER_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            })
        case GET_CURRENT_USER_SUCCESS:
            return Object.assign({}, state, {
                fetching: false, cUser: action.playload
            }) 
        case GET_CURRENT_USER_FAIL:
            console.log(action.playload)
            return state
        default:
            return state;
    }   
    
}