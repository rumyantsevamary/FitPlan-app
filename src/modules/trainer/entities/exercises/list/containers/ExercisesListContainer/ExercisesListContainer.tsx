import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { isEmpty } from 'lodash';
import { getExercisesListBegin } from '../../actions/exercisesListActions';
import Loader from '../../../../../../common/components/Loader/Loader';
import { IExercise } from '../../../common/models/exercisesModels';
import ExercisesListItem from '../../components/ExercisesListItem/ExercisesListItem';
import * as styles from './ExercisesListContainer.module.css';

const exercisesListSelector = (
  state: any
): { list: IExercise[]; fetching: boolean } => {
  const { list, fetching } = state.trainer.exercises.list;
  return { list, fetching };
};

const ExercisesListContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesListBegin());
  }, []);

  const { list, fetching } = useSelector(exercisesListSelector, shallowEqual);

  return fetching ? (
    <Loader />
  ) : (
    <div className={styles.exercises_list}>
      {!isEmpty(list) &&
        list.map((item: IExercise) => {
          return <ExercisesListItem item={item} key={item.id} />;
        })}
    </div>
  );
};

export default ExercisesListContainer;
