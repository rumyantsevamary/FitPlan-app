import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import Calendar from '../components/content/calendar/Calendar.js'
import * as CalendarActions from '../actions/calendarActions'

class CalendarContainer extends Component {
}  

function mapStateToProps (state) {
    return {
        calendar: state.calendar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        CalendarActions: bindActionCreators(CalendarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);