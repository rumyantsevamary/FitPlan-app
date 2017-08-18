import React, {Component} from 'react'
import {monthsForm, weekDays} from '../../../constants/Dictionary'

export default class DayDetails extends Component {

    renderTrainings() {
        let trainings = this.props.plannedEvents.events;
        trainings = trainings.map((item, i) => {
            let exerciseList = item.exercises.map((exercise, indx) => {
                return <li key={indx}>{exercise.name + " " + exercise.volume}</li>
            })
            let imgStyle = {backgroundImage: "url('../img/settings.svg')"};
            return <div className="training-item" key={i}>
                <span className="clent-name">{item.client}</span><div className="settings-icon" style={imgStyle}></div>
                <ul className="exercise-list">
                    {exerciseList}
                </ul>
            </div>
        })

        return trainings;
    }
    
    render() {
        let month = monthsForm[this.props.month];
        let year = this.props.year;
        let day = this.props.date;
        let weekDay = weekDays[(new Date(year, this.props.month, day)).getDay()];
        let events = this.props.plannedEvents;
        return <div className="day-details">
                <span className="date">{weekDay + ", " + day +" "+ month + " " + year}</span>
                <div className="add-training"><span className="plus"> + </span><span>Создать тренировку</span></div>
                {this.renderTrainings()}
            </div>            
    }
}
