import * as React from 'react';
import { Input } from 'antd';
import * as styles from './ExercisesCreateFormContainer.module.css';

interface IProps {
  label: string;
  children?: JSX.Element;
}

const FormRow: React.FC<IProps> = (props: IProps) => {
  const { label } = props;
  return (
    <div className={styles.form_row}>
      <div className={styles.row_label}>{label}</div>
      <div className={styles.row_content}>{props.children}</div>
    </div>
  );
};

const ExercisesCreateFormContainer: React.FC = () => {
  return (
    <div className={styles.create_form}>
      <div className={styles.form_header}>Создание нового упражнения</div>
      <div className={styles.form_body}>
        <FormRow label="Тип упражнения"></FormRow>

        <FormRow label="Название упражнения">
          <Input
            size="large"
            placeholder="Например: Болгарские выпады, Берпи"
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Учавствующие мышцы"></FormRow>

        <FormRow label="Инвентарь"></FormRow>

        <FormRow label="Описание упражнения"></FormRow>
      </div>
    </div>
  );
};

export default ExercisesCreateFormContainer;
