import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  getMainMenuBegin,
  setActiveContent,
  getMainMenuCancelled
} from '../actions/mainMenuActions';
import * as styles from '../../../common/styles/styles.module.css';

const mainMenuSelector = (state: any) => {
  const { menuItems, fetching } = state.mainMenu;
  return {
    menuItems,
    fetching
  };
};

const MainMenu: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainMenuBegin());
    return () => dispatch(getMainMenuCancelled());
  }, []);

  const handleClick = (activeContent: string) => {
    dispatch(setActiveContent(activeContent));
  };

  const { menuItems, fetching } = useSelector(mainMenuSelector, shallowEqual);

  const menuList = menuItems.map((item: any, index: number) => {
    let divStyle = { backgroundImage: item.icon };
    return (
      <li key={index}>
        <div className={styles.menuIcon} style={divStyle}></div>
        <a onClick={() => handleClick(item.activeContent)}>{item.name}</a>
      </li>
    );
  });

  return (
    <nav className={styles.mainMenu}>
      {fetching ? (
        <span>Loading...</span>
      ) : (
        <ul className={styles.menuList}>{menuList}</ul>
      )}
    </nav>
  );
};
export default MainMenu;
