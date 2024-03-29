import { MODULE_ACTION_NAMESPACE } from '../../common/constants/trainingsActionTypes';

const ENTITY_ACTION_NAMESPACE = `${MODULE_ACTION_NAMESPACE}_CREATE`;

export const SET_DATA = `${ENTITY_ACTION_NAMESPACE}_SET_DATA`;
export const SAVE_DATA_BEGIN = `${ENTITY_ACTION_NAMESPACE}_SAVE_DATA_BEGIN`;
export const SAVE_DATA_SUCCESS = `${ENTITY_ACTION_NAMESPACE}_SAVE_DATA_SUCCESS`;
export const SAVE_DATA_FAIL = `${ENTITY_ACTION_NAMESPACE}_SAVE_DATA_FAIL`;
export const SAVE_DATA_CANCELLED = `${ENTITY_ACTION_NAMESPACE}_SAVE_DATA_CANCELLED`;
export const SET_FIELD_VALUE = `${ENTITY_ACTION_NAMESPACE}_SET_FIELD_VALUE`;
export const CLEAR_FORM = `${ENTITY_ACTION_NAMESPACE}_CLEAR_FORM`;
