import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { isEmpty } from 'lodash';
import { getExercisesListBegin } from '../../actions/trainingsListActions';
import {Loader} from 'components/Loader';
import { ITraining } from '../../../common/models/trainigsModels';
import {TrainingsListItem} from '../../components/TrainingsListItem/TrainingsListItem';
import styles from './TrainingsListContainer.module.css';

const trainingsListSelector = (
  state: any
): { list: ITraining[]; fetching: boolean } => {
  const { list, fetching } = state.content.trainings.list;
  return { list, fetching };
};

export const TrainingsListContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesListBegin());
  }, []);

  const { list, fetching } = useSelector(trainingsListSelector, shallowEqual);

  return fetching ? (
    <Loader />
  ) : (
    <div className={styles.trainings_list}>
      {!isEmpty(list) &&
        list.map((item: ITraining) => {
          return <TrainingsListItem item={item} key={item.id} />;
        })}
    </div>
  );
};
