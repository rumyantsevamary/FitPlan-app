import {
  SET_FIELD_VALUE,
  CLEAR_FORM
} from '../constants/exercisesCreateActionTypes';
import { AnyAction } from 'redux';
import { IExercise } from '../../common/models/exercisesModels';

const initialState: IExercise = {
  id: null,
  name: null,
  type: null,
  muscules: null,
  equipment: null,
  description: null
};

const exercisesCreateFieldsReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      const { fieldName, value } = action.payload;
      return { ...state, [fieldName]: value };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default exercisesCreateFieldsReducer;
