import * as React from 'react';
import * as styles from './UserInfo.modules.css';

interface IProps {
  currentUser: any;
  isLoading: boolean;
}

const UserInfo: React.FC<IProps> = (props: IProps) => {
  const { currentUser, isLoading } = props;

  return (
    <div className={styles.user}>
      <span>
        {isLoading ? 'Loading...' : currentUser}
      </span>
      <a href="/login" className={styles.exitBtn}>
        Выйти
      </a>
    </div>
  );
};

export default UserInfo;
