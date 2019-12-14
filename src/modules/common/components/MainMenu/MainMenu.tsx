import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './MainMenu.module.css';

interface IProps {
  menuItems: any[];
}

const MainMenu: React.FC<IProps> = ({ menuItems }) => {
  return (
    <nav className={styles.mainMenu}>
      <ul className={styles.menuList}>
        {menuItems.map((item: any, index: number) => {
          let iconStyle = { backgroundImage: item.icon };
          return (
            <li key={index}>
              <Link to={item.path} className={styles.menuItem}>
                <div className={styles.menuIcon} style={iconStyle}></div>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default MainMenu;
