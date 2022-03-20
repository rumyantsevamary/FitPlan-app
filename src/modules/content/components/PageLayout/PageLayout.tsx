import React from 'react';
import styles from './PageLayout.module.css';

export const PageLayout: React.FC = (props) => (
  <div className={styles.page}>{props.children}</div>
);
