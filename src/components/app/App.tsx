import * as React from "react";
import Header from "./Header";
import MainMenuContainer from "../../containers/MainMenuContainer";
import ContentContainer from "../../containers/ContentContainer";

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
