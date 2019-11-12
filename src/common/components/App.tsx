import * as React from 'react';
import Header from '../../modules/header/components/Header';
import MainMenuContainer from '../../modules/mainMenu/containers/MainMenuContainer';
import ContentContainer from '../../bootstrap/containers/ContentContainer';

class App extends React.Component<any> {
  render() {
    return (
      <>
        <Header />
        <MainMenuContainer />
        <ContentContainer />
      </>
    );
  }
}

export default App;
