import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Content from "../components/app/Content";

class ContentContainer extends React.Component {}

function mapStateToProps(state: any) {
  return {
    activeContent: state.mainMenu.activeContent
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    //contentContainerActions: bindActionCreators(contentContainerActions, dispatch) - template
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
