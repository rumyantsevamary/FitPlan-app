import * as React from "react";
import Header from "./Header";
import MainMenuContainer from "../../containers/MainMenuContainer";
import ContentContainer from "../../containers/ContentContainer";
import * as styles from "./styles.css";

class App extends React.Component<any> {
  render() {
    return (
      <div className={styles.header}>
        <Header />
        <MainMenuContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
