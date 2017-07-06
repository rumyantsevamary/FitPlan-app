import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import Header from './Header'
import MainMenu from '../components/MainMenu'
import * as mainMenuActions from '../actions/MainMenuActions'


class App extends Component {
  render() {
      const {mainMenu} = this.props
      const {getMainMenu} = this.props.mainMenuActions
    return <div>
            <Header />
            <MainMenu 
                getMainMenu={getMainMenu}
                fetching={mainMenu.fetching} 
                menuItems={mainMenu.menuItems}
            />
        </div>
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
