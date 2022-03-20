import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css';

interface IProps {
  path: string;
  label: string;
}
export const ButtonLink: React.FC<IProps> = ({ path, label }) => (
  <Link to={path} className={styles.btn_link}>
    {label}
  </Link>
);
