import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import UserContainer	from '../../containers/UserContainer'
import Logo	from './Logo'


class Header extends Component {
  render() {
    return <header>  
            <Logo />
            <UserContainer />
        </header>
  }
}

export default Header
