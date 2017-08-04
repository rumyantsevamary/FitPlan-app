import React, { Component } from 'react'
import Header from './Header'
import MainMenuContainer from '../../containers/MainMenuContainer'
import ContentContainer from '../../containers/ContentContainer'


class App extends Component {
  render() {
    return <div>
            <Header />
            <MainMenuContainer />
            <ContentContainer />
        </div>
  }
}

export default App
