import * as React from 'react';

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
    const user = this.props.user;
    const fetching = this.props.user.fetching;
    return (
      <div className="usr">
        {fetching ? (
          <span className="usr-name"> Loading... </span>
        ) : (
          <span className="usr-name"> {user && user.cUser && user.cUser.name}</span>
        )}
        <a href="/login" className="exit-btn">
          Выйти
        </a>
      </div>
    );
  }
}
