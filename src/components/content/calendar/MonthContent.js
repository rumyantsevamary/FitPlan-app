import React, {Component} from 'react'
import {months, weekDays} from '../../../constants/Dictionary'

export default class MonthContent extends Component {

    renderWeekDays() {
        let calendarHeader = [];
        weekDays.forEach((day, index) => {
            calendarHeader.push(<li className="weekDay-item" key={index}>{day}</li>);
        });

        return calendarHeader;
    }

    getDaysNum(month, year) {
        let daysNum;
        if (
            month == 0 ||
            month == 2 ||
            month == 4 ||
            month == 6 ||
            month == 7 ||
            month == 9 ||
            month == 11
        ) {
            daysNum = 31;
        } else if ( month == 1 && year%4 != 0) {
            daysNum = 28;
        } else if ( month == 1 && year%4 == 0) {
            daysNum = 29;
        } else {
             daysNum = 30;
        }

        return daysNum;
    }

    renderDays(year, month, events) {
        let daysNum = this.getDaysNum(month, year);
        let daysArr = [];

        for (let i=1; i <= daysNum; i++) {
            let weekClass = "";
            if (i == 1) {
                weekClass = 'firstDay-' + (new Date(year, month, i).getDay());
            }

            let dayClass = "";            
            let content;
            if (!Array.isArray(events) && events.days) {
                events.days.forEach((day) => {
                    if (day.date == i) {
                        dayClass="has-event"
                        let eventsList = [];
                        for (let j = 0; j < day.events.length && j < 2; j++) {
                            eventsList.push(<li className={"event-name"} key={j}>{day.events[j].client}</li>); 
                        }
                        if (day.events.length > 2) {
                            eventsList.push(<li className={"dots"} key={2}>. . .</li>);
                        }
                        content = <ul className="event-list">{eventsList}</ul>;                             
                    };                        
                }); 
            }
            let day = <span>{i}</span>;

            daysArr.push(
                <div className={weekClass + " day " + dayClass} key={i} onClick={() => this.openDayDetails(i)}>
                    {day}
                    {content}
                </div>
            )
        }

        return daysArr;
    }

    openDayDetails(day) {
        this.props.openDayDetails(day);
    }
    
    render() {
        let month = this.props.month;
        let year = this.props.year;
        let events = this.props.plannedEvents;
        return <div className="month-calendar">
                    <div className="month-calendar-header">
                        <ul>
                            {this.renderWeekDays()}
                        </ul>
                    </div>
                    <div className="month-body">
                        {this.renderDays(year, month, events)}
                    </div>
                </div>            
    }
}
