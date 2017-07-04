import React, {PropTypes, Component} from 'react'

export default class User extends Component {
    componentWillMount() {
        this.props.getCurrentUser()
    }

    render() {
        const name = this.props.cUser 
        const fetching = this.props.fetching
        return <div>
           { fetching ? <p> Loading... </p> : <p> {name}!</p>}
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
}