import { CONTENT_ROUTES_MAP } from '../bootstrap/RoutesMap';

export const MAIN_MENU_CONFIG = [
  {
    icon: "url('../img/calendar.svg')",
    name: 'Calendar',
    path: CONTENT_ROUTES_MAP.CALENDAR
  },
  {
    icon: "url('../img/trainings.svg')",
    name: 'Trainings',
    path: CONTENT_ROUTES_MAP.TRAININGS.LIST
  },
  {
    icon: "url('../img/profile.svg')",
    name: 'Profile',
    path: CONTENT_ROUTES_MAP.PROFILE
  }
];
