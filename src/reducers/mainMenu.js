import {
    GET_MAIN_MENU_REQUEST,
    GET_MAIN_MENU_SUCCESS,
    GET_MAIN_MENU_FAIL,
    SET_ACTIVE_CONTENT } from '../constants/MainMenu'

const initialState = {
    userRole: 'unknown',
    menuItems: [],
    fetching: true,
    activeContent: 'calendar'
};

export default function mainMenuState(state = initialState, action) {
    switch (action.type) {
        case GET_MAIN_MENU_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            })

        case GET_MAIN_MENU_SUCCESS:
            return Object.assign({}, state, {
                fetching: false, menuItems: action.playload.menuItems, userRole: action.playload.userRole
            }) 

        case GET_MAIN_MENU_FAIL:
            console.log(action.playload)
            return state;

        case SET_ACTIVE_CONTENT:
            return Object.assign({}, state, {
                activeContent: action.playload
            })
            
        default:
            return state;

        
    }   
    
}