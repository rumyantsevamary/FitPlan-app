import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, ButtonLink } from 'components';
import { TRAINER_ROUTES_MAP } from 'modules/trainer/bootstrap/RoutesMap';
import { EExerciseType } from '../../../common/models/exercisesModels';
import {
  setFieldValue,
  clearForm,
  saveExerciseBegin
} from '../../actions/exercisesCreateActions';
import * as styles from './ExercisesCreateFormContainer.module.css';
interface IProps {
  label: string;
  children?: JSX.Element;
}

const fieldsDataSelector = (state: any) => {
  const {
    name,
    type,
    muscules,
    equipment,
    description
  } = state.trainer.exercises.create.fields;
  return {
    name,
    type,
    muscules,
    equipment,
    description
  };
};

const FormRow: React.FC<IProps> = (props: IProps) => {
  const { label } = props;
  return (
    <div className={styles.form_row}>
      <div className={styles.row_label}>{label}</div>
      <div className={styles.row_content}>{props.children}</div>
    </div>
  );
};

const ExerciseTypeSelect: React.FC<any> = ({ value, onChange }: any) => (
  <FormControl>
    <Select className={styles.select_input} value={value} onChange={onChange}>
      <MenuItem value={EExerciseType.CARDIO}>Кардио</MenuItem>
      <MenuItem value={EExerciseType.POWER}>Силовое</MenuItem>
    </Select>
    <FormHelperText>Выберите тип упражнения</FormHelperText>
  </FormControl>
);

const ExercisesCreateFormContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearForm());
  }, []);

  const { name, type, muscules, equipment, description } = useSelector(
    fieldsDataSelector,
    shallowEqual
  );

  const handleChangeFactory = (fieldName: string) => (event: any) => {
    const { value } = event.target;
    dispatch(setFieldValue(fieldName, value));
  };

  const handleSave = () => {
    dispatch(saveExerciseBegin());
  };

  return (
    <div className={styles.create_form}>
      <div className={styles.form_header}>Создание нового упражнения</div>
      <div className={styles.form_body}>
        <FormRow label="Тип упражнения">
          <ExerciseTypeSelect
            value={type}
            onChange={handleChangeFactory('type')}
          />
        </FormRow>

        <FormRow label="Название упражнения">
          <TextField
            value={name}
            placeholder="Например: Болгарские выпады, Берпи"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('name')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Учавствующие мышцы">
          <TextField
            value={muscules}
            placeholder="Например: Трицепсы, Мышцы пресса"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('muscules')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Инвентарь">
          <TextField
            value={equipment}
            placeholder="Например: Гантели, TRX петли"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('equipment')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Описание упражнения">
          <TextField
            value={description}
            multiline
            rows="3"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('description')}
            className={styles.text_input}
          />
        </FormRow>

        <div className={styles.buttons}>
          <Button label="Сохранить" onClick={handleSave} />
          <ButtonLink path={TRAINER_ROUTES_MAP.EXERCISES.LIST} label="Отмена" />
        </div>
      </div>
    </div>
  );
};

export default ExercisesCreateFormContainer;
