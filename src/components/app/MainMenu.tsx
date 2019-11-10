import * as React from "react";
import * as styles from "./styles.module.css";

export default class MainMenu extends React.Component<any> {
  componentWillMount() {
    this.props.mainMenuActions.getMainMenu();
  }
  setActiveContent(activeContent: string) {
    this.props.mainMenuActions.setActiveContent(activeContent);
  }

  render() {
    const menuItems = this.props.mainMenu.menuItems;
    const fetching = this.props.mainMenu.fetching;
    const that = this;

    const menuList = menuItems.map(function(item: any, index: number) {
      let divStyle = { backgroundImage: item.icon };
      return (
        <li key={index}>
          <div className={styles.menuIcon} style={divStyle}></div>
          <a onClick={() => that.setActiveContent(item.activeContent)}>
            {item.name}
          </a>
        </li>
      );
    });

    return (
      <nav className={styles.mainMenu}>
        {fetching ? (
          <span>Loading...</span>
        ) : (
          <ul className={styles.menuList}>{menuList}</ul>
        )}
      </nav>
    );
  }
}
