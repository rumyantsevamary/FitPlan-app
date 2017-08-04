import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import MainMenu from '../components/app/MainMenu'
import * as mainMenuActions from '../actions/MainMenuActions'


class MainMenuContainer extends Component {
}  

function mapStateToProps (state) {
    return {
        mainMenu: state.mainMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mainMenuActions: bindActionCreators(mainMenuActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);