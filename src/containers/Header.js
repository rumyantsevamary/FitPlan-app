import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import User	from '../components/User'
import * as userActions from '../actions/UserActions'


class Header extends Component {
  render() {
      const {user} = this.props    
      const {getCurrentUser} = this.props.userActions
    return <header>  
            <div className="logo"> 
                <div className="img"></div>          
                <h1>                               
                    <span className="fit">Fit</span><span className="Plan">Plan</span>
                </h1>
            </div>
            <User 
                name={user.name} 
                getCurrentUser={getCurrentUser} 
                fetching={user.fetching} 
                cUser={user.cUser}/>
        </header>
  }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
