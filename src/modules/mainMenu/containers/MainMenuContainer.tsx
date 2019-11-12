import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MainMenu from "../components/MainMenu";
import * as mainMenuActions from "../actions/MainMenuActions";

class MainMenuContainer extends React.Component {}

function mapStateToProps(state: any) {
  return {
    mainMenu: state.mainMenu
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    mainMenuActions: bindActionCreators(mainMenuActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
