import * as React from 'react';
import * as styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.img}></div>
      <h1 className={styles.logo_header}>
        <span className={styles.fit}>Fit</span>
        <span>Plan</span>
      </h1>
    </div>
  );
};

export default Logo;
