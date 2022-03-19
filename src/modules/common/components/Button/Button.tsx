import React from 'react';
import styles from './Button.module.css';

interface IProps {
  onClick: (event: any) => void;
  label: string;
}
const ButtonLink: React.FC<IProps> = ({ label, onClick }) => (
  <div onClick={onClick} className={styles.btn}>
    {label}
  </div>
);

export default ButtonLink;
