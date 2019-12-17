import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setSearchString, clearForm } from '../../actions/exercisesListActions';
import * as styles from './SearchBlockContainer.module.css';

const serchStringSelector = (state: any) => {
  const { searchString } = state.trainer.exercises.list;
  return searchString;
};

const SearchBlockContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearForm());
  }, []);

  const searchString = useSelector(serchStringSelector);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    dispatch(setSearchString(newValue));
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
      <div className={styles.search_btn}>Поиск</div>
    </div>
  );
};

export default SearchBlockContainer;
