import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from 'components/Button';
import { ButtonLink } from 'components/ButtonLink';
import { CONTENT_ROUTES_MAP } from 'modules/content/bootstrap/RoutesMap';
import { ETrainingType } from '../../../common/models/trainigsModels';
import {
  setFieldValue,
  clearForm,
  saveExerciseBegin
} from '../../actions/trainingsCreateActions';
import styles from './TrainingsCreateFormContainer.module.css';

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
  } = state.content.trainings.create.fields;
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
      <div>{props.children}</div>
    </div>
  );
};

const TrainingTypeSelect: React.FC<any> = ({ value, onChange }: any) => (
  <FormControl>
    <Select className={styles.select_input} value={value} onChange={onChange}>
      <MenuItem value={ETrainingType.CARDIO}>Cardio</MenuItem>
      <MenuItem value={ETrainingType.POWER}>Power</MenuItem>
    </Select>
    <FormHelperText>Choose type of the trining</FormHelperText>
  </FormControl>
);

export const TrainingsCreateFormContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => { dispatch(clearForm()) };
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
      <div className={styles.form_header}>Create a new trining</div>
      <div className={styles.form_body}>
        <FormRow label="Type of training">
          <TrainingTypeSelect
            value={type}
            onChange={handleChangeFactory('type')}
          />
        </FormRow>

        <FormRow label="Name">
          <TextField
            value={name}
            placeholder="For example: Push-ups, Burpees"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('name')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Muscules">
          <TextField
            value={muscules}
            placeholder="For example: Triceps, Abs"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('muscules')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Equipment">
          <TextField
            value={equipment}
            placeholder="For example: dumbbells, barbell"
            variant="outlined"
            size="small"
            onChange={handleChangeFactory('equipment')}
            className={styles.text_input}
          />
        </FormRow>

        <FormRow label="Training's description">
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
          <Button label="Save" onClick={handleSave} />
          <ButtonLink path={CONTENT_ROUTES_MAP.TRAININGS.LIST} label="Cancel" />
        </div>
      </div>
    </div>
  );
};
