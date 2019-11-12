import * as React from 'react';
import UserInfoContainer from '../../userInfo/containers/UserInfoContainer';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <UserInfoContainer />
    </header>
  );
};

export default Header;
