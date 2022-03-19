import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchString,
  clearForm,
  getExercisesListBegin
} from '../../actions/trainingsListActions';
import styles from './SearchBlockContainer.module.css';

const serchStringSelector = (state: any) => {
  const { searchString } = state.content.trainings.list;
  return searchString;
};

export const SearchBlockContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {dispatch(clearForm())};
  }, []);

  const searchString = useSelector(serchStringSelector);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    dispatch(setSearchString(newValue));
  };

  const handleBtnClick = () => {
    dispatch(getExercisesListBegin());
  };

  return (
    <div className={styles.search_block}>
      <input
        className={styles.search_field}
        type="text"
        value={searchString}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          handleChange(event)
        }
      />
      <div className={styles.search_btn} onClick={handleBtnClick}>
        Поиск
      </div>
    </div>
  );
};
