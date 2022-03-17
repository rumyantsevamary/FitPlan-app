import {
  SET_FIELD_VALUE,
  CLEAR_FORM
} from '../constants/trainingsCreateActionTypes';
import { AnyAction } from 'redux';
import { ITraining } from '../../common/models/trainigsModels';

const initialState: ITraining = {
  id: null,
  name: null,
  type: null,
  muscules: null,
  equipment: null,
  description: null
};

export const trainingsCreateFieldsReducer = (
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
