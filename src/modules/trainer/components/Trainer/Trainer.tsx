import * as React from 'react';
import Routes from '../../bootstrap/Routes';
import MainMenu from '../../../common/components/MainMenu/MainMenu';
import { MAIN_MENU_CONFIG } from '../../constants/mainMenuConfig';
import * as styles from './Trainer.module.css';

const Trainer: React.FC = () => {
  return (
    <div className={styles.trainer_block}>
      <MainMenu menuItems={MAIN_MENU_CONFIG} />
      <Routes />
    </div>
  );
};

export default Trainer;
