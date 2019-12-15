import * as React from 'react';
import * as styles from './SearchBlockContainer.module.css';

const SearchBlockContainer: React.FC = () => {
  return (
    <div className={styles.search_block}>
      <input className={styles.search_field} type="text" />
      <div className={styles.search_btn}>Поиск</div>
    </div>
  );
};

export default SearchBlockContainer;
