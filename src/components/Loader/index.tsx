import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loader.module.css'

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress color="secondary" />
    </div>
  );
}