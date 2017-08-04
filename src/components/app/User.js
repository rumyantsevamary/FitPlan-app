import React, {PropTypes, Component} from 'react'

export default class User extends Component {
    componentWillMount() {
        this.props.userActions.getCurrentUser()
    }

    render() {
        const name = this.props.user.cUser 
        const fetching = this.props.user.fetching
        return <div className="usr">
           { fetching ? <span className="usr-name"> Loading... </span> : <span className="usr-name"> {name}</span>}
           <a href="/login" className="exit-btn">Выйти</a>
        </div>
    }
}
