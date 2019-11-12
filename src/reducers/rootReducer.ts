import {combineReducers} from 'redux'
import user from '../modules/userInfo/reducers/user'
import mainMenu from '../modules/mainMenu/reducers/mainMenu'
import calendar from '../modules/calendar/reducers/calendar'

export default combineReducers({
    mainMenu,
    user,
    calendar
})