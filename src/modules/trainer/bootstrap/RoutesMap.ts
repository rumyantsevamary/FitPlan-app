export const ROOT_PATH = '/trainer';

export const TRAINER_ROUTES_MAP = {
  CALENDAR: `${ROOT_PATH}/calendar`,
  TRAININGS: `${ROOT_PATH}/trainings`,
  EXERCISES: {
    LIST: `${ROOT_PATH}/exercises/list`,
    CREATE: `${ROOT_PATH}/exercises/create`
  },
  CLIENTS: `${ROOT_PATH}/clients`,
  PROFILE: `${ROOT_PATH}/profile`
};
