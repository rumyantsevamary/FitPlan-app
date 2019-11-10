import {combineReducers} from 'redux'
import user from './user'
import mainMenu from './mainMenu'
import calendar from './calendar'

export default combineReducers({
    mainMenu,
    user,
    calendar
})