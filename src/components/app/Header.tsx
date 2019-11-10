import * as React from "react";
import UserContainer from "../../containers/UserContainer";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <UserContainer />
      </header>
    );
  }
}

export default Header;
