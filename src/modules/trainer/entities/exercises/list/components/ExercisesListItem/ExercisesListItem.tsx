import * as React from 'react';
import cx from 'classnames';
import {
  EExerciseType,
  IExercise
} from '../../../common/models/exercisesModels';
import * as styles from './ExercisesListItem.module.css';

interface IProps {
  item: IExercise;
}

const ExercisesListItem: React.FC<IProps> = ({ item }: IProps) => {
  const { id, name, type, muscules, equipment, description } = item;
  return (
    <div className={styles.item}>
      <div className={styles.item_header}>
        <div
          className={cx(
            styles.item_type_logo,
            type === EExerciseType.CARDIO
              ? styles.cardio_icon
              : styles.power_icon
          )}
        ></div>
      </div>
      <div className={styles.item_body}>
        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Название</div>
          <div className={styles.item_field_value}>{name}</div>
        </div>

        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Учавствующие мышцы</div>
          <div className={styles.item_field_value}>
            {muscules.reduce((previousValue, currentValue) => {
              return `#${currentValue} ${previousValue}`;
            }, '')}
          </div>
        </div>

        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Оборудование</div>
          <div className={styles.item_field_value}>{equipment}</div>
        </div>

        <div className={cx(styles.item_field, styles.item_field_descripton)}>
          <div className={styles.item_field_label}>Описание</div>
          <div className={styles.item_field_value}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesListItem;
