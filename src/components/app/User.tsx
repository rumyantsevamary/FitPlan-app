import * as React from "react";
import * as styles from "./styles.module.css";

interface IProps {
  userActions: {
    getCurrentUser: Function;
  };
  user: any;
}

export default class User extends React.Component<IProps> {
  componentWillMount() {
    this.props.userActions.getCurrentUser();
  }

  render() {
    console.log(this.props)
    const user = this.props.user;
    const fetching = this.props.user.fetching;
    return (
      <div className={styles.usr}>
        <span className={styles.usrName}>
          {fetching ? "Loading..." : user && user.cUser}
        </span>
        <a href="/login" className={styles.exitBtn}>
          Выйти
        </a>
      </div>
    );
  }
}
