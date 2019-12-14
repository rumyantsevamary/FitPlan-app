import * as React from 'react';
import * as styles from './Header.module.css'
import UserInfoContainer from '../../../../modules/userInfo/containers/UserInfoContainer';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  return (
    <header className={styles.header_block}>
      <Logo />
      <UserInfoContainer />
    </header>
  );
};

export default Header;
