import React, { Component } from 'react'
import CalendarContainer from '../../containers/CalendarContainer.js'

class Content extends Component {
    render() {
        const activeContent = this.props.activeContent;
        let content;

        if (activeContent == 'calendar') {
            content = <CalendarContainer />;
        } else {
            content = <h1>error</h1>;
        }  
         return <div className="content">{content}</div>        
    }
}

export default Content