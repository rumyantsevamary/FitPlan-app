import React from 'react';
import cx from 'classnames';
import {
  ETrainingType,
  ITraining
} from '../../../common/models/trainigsModels';
import styles from './TrainingsListItem.module.css';

interface IProps {
  item: ITraining;
}

export const TrainingsListItem: React.FC<IProps> = ({ item }: IProps) => {
  const { id, name, type, muscules, equipment, description } = item;
  return (
    <div className={styles.item}>
      <div className={styles.item_header}>
        <div
          className={cx(
            styles.item_type_logo,
            type === ETrainingType.CARDIO
              ? styles.cardio_icon
              : styles.power_icon
          )}
        ></div>
      </div>
      <div className={styles.item_body}>
        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Name</div>
          <div className={styles.item_field_value}>{name}</div>
        </div>

        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Muscules</div>
          <div className={styles.item_field_value}>
            {muscules.reduce((previousValue, currentValue) => {
              return `#${currentValue} ${previousValue}`;
            }, '')}
          </div>
        </div>

        <div className={styles.item_field}>
          <div className={styles.item_field_label}>Equipment</div>
          <div className={styles.item_field_value}>{equipment}</div>
        </div>

        <div className={cx(styles.item_field, styles.item_field_descripton)}>
          <div className={styles.item_field_label}>Description</div>
          <div className={styles.item_field_value}>{description}</div>
        </div>
      </div>
    </div>
  );
};
