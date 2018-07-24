import * as React from 'react';
import Header from './Header'
import MainMenuContainer from '../../containers/MainMenuContainer'
import ContentContainer from '../../containers/ContentContainer'
import * as styles from './styles.css';


class App extends React.Component {
  render() {
    return <div className={styles.header}>
      <Header/>
          Hello world
        </div>
  }
}

export default App
