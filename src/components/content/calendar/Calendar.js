import React, {Component} from 'react'
import {months, weekDays} from '../../../constants/Dictionary'
import MonthContent from './MonthContent'
import DayDetails from './DayDetails'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekMode: false
        }
    }

    componentWillMount() {
        this.getPlannedEvents(this.props.calendar.year, this.props.calendar.month);
    }

    getPlannedEvents(year, month) {
        this.props.CalendarActions.getPlannedEvents(year, month);
    }

    changeMonth(direction) {
        let newMonth = this.props.calendar.month;
        let newYear = this.props.calendar.year;

        if (direction == "up" && this.props.calendar.month <= 10) {
            newMonth += 1;
        } else if (direction == "up" && this.props.calendar.month == 11) {
            newMonth = 0;
            newYear += 1;
        } else if (direction == "down" && this.props.calendar.month >= 1) {
            newMonth -= 1;
        } else if (direction == "down" && this.props.calendar.month == 0) {
            newMonth = 11;
            newYear -= 1;
        }
        this.props.CalendarActions.changeMonth(newMonth, newYear, this.getPlannedEvents(newYear, newMonth));
    }    

    changePeriodMode() {
        let currentMode = this.state.weekMode;
        this.setState({
            weekMode: !currentMode
        });
    }

    renderDetailsContent(year, month, events) {
        let isDetailsMode = this.props.calendar.showDetails;
        let detailsDay = this.props.calendar.detailsDay;
        if (isDetailsMode && detailsDay) {            
            let dayEvents = events.days.filter((item) => {return item.date == detailsDay})[0];
            return <DayDetails year={year} year={year} month={month} date={detailsDay} plannedEvents={dayEvents}/>
        }
        
    }
    
    render() {
        let that = this;
        let month = this.props.calendar.month;
        let year = this.props.calendar.year;
        let isWeekMode = this.state.weekMode;
        let isDetailsMode = this.state.detailsMode;
        let events = this.props.calendar.plannedEvents;
        let openDayDetails = this.props.CalendarActions.openDayDetails;
        return   <div>
            <div className="calendar-nav">
                <div className ="buttons">
                    <span className={isWeekMode ? "button chosen" : "button"} onClick={() => this.changePeriodMode()}>Неделя</span>
                    <span className={isWeekMode ? "button" : "button chosen"} onClick={() => this.changePeriodMode()}>Месяц</span>
                </div>
                <div className="paginator">
                    <span className="month-arrow" onClick={() => that.changeMonth('down')}>&lt; </span>
                        {months[month] + ' ' + year}
                    <span className="month-arrow" onClick={() => that.changeMonth('up')}> &gt;</span>
                </div>
            </div>
            {isWeekMode ? <div>WeekMode</div> : <MonthContent year={year} month={month} plannedEvents={events} openDayDetails={openDayDetails}/>}
            {this.renderDetailsContent(year, month, events)}
        </div>
    }
}
