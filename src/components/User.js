import React, {PropTypes, Component} from 'react'

export default class User extends Component {
    componentWillMount() {
        this.props.getCurrentUser()
    }

    render() {
        const name = this.props.cUser 
        const fetching = this.props.fetching
        return <div className="usr">
           { fetching ? <span className="usr-name"> Loading... </span> : <span className="usr-name"> {name}</span>}
           <a href="/login" className="exit-btn">Выйти</a>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
}