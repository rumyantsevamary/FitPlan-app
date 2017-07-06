import {combineReducers} from 'redux'
import user from './user'
import mainMenu from './mainMenu'

export default combineReducers({
    mainMenu,
    user
})