import React, {Component} from 'react'
import CalendarBody from './CalendarBody'

export default class Calendar extends Component {
    changeMonth(direction) {
        this.props.CalendarActions.changeMonth(direction);
    }
    
    render() {
        let that = this;
        let month = this.props.calendar.month;
        let year = this.props.calendar.year;
        return   <div>
            <div className="calendar-nav">
                <div className ="buttons">
                    <button>Неделя</button>
                    <button>Месяц</button>
                </div>
                <div className="paginator">
                    <span onClick={() => that.changeMonth('down')}>&lt;</span>
                        {month + ' ' + year}
                    <span onClick={() => that.changeMonth('up')}>&gt;</span>
                </div>
            </div>
            <CalendarBody />
        </div>
    }
}
