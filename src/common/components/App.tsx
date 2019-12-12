import * as React from 'react';
import Header from '../../modules/header/components/Header';
import MainMenuContainer from '../../modules/mainMenu/containers/MainMenuContainer';
import ContentContainer from '../../bootstrap/containers/ContentContainer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainMenuContainer />
      <ContentContainer />
    </>
  );
};

export default App;
