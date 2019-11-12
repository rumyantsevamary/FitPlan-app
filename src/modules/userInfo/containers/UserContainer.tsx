import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import User from "../components/User";
import * as userActions from "../actions/UserActions";

class UserContainer extends React.Component {}

function mapStateToProps(state: any) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
