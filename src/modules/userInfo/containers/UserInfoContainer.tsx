import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import UserInfo from '../components/UserInfo/UserInfo';
import {
  getCurrentUserBegin,
  getCurrentUserCancelled
} from '../actions/userInfoActions';

const currentUserSelector = (state: any) => {
  const { cUser, fetching } = state.user;
  return { currentUser: cUser, isLoading: fetching };
};

const UserInfoContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserBegin());
    return () => dispatch(getCurrentUserCancelled());
  }, []);

  const { currentUser, isLoading } = useSelector(
    currentUserSelector,
    shallowEqual
  );

  return <UserInfo currentUser={currentUser} isLoading={isLoading} />;
};

export default UserInfoContainer;
