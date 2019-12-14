import * as React from 'react';
import Header from '../Header/Header';
import Routes from '../../Routes';
import * as styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
