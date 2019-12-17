import { TRAINER_ROUTES_MAP } from '../bootstrap/RoutesMap';

export const MAIN_MENU_CONFIG = [
  {
    icon: "url('../img/calendar.svg')",
    name: 'Календарь',
    path: TRAINER_ROUTES_MAP.CALENDAR
  },
  {
    icon: "url('../img/trainings.svg')",
    name: 'Тренировки',
    path: TRAINER_ROUTES_MAP.TRAININGS
  },
  {
    icon: "url('../img/exercises.svg')",
    name: 'Упражнения',
    path: TRAINER_ROUTES_MAP.EXERCISES.LIST
  },
  {
    icon: "url('../img/clients.svg')",
    name: 'Клиенты',
    path: TRAINER_ROUTES_MAP.CLIENTS
  }
];
