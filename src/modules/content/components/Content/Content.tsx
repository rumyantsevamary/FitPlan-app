import * as React from 'react';
import Routes from '../../bootstrap/Routes';
import { MainMenu } from 'components';
import { MAIN_MENU_CONFIG } from '../../constants/mainMenuConfig';
import * as styles from './Content.module.css';

const Content: React.FC = () => {
  return (
    <div className={styles.content_block}>
      <MainMenu menuItems={MAIN_MENU_CONFIG} />
      <Routes />
    </div>
  );
};

export default Content;
