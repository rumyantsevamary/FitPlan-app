import * as React from 'react';
import Header from '../Header/Header';
import MainMenuContainer from '../../../../modules/mainMenu/containers/MainMenuContainer/MainMenuContainer';
import ContentContainer from '../../../containers/ContentContainer';
import * as styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MainMenuContainer />
      <ContentContainer />
    </div>
  );
};

export default App;
