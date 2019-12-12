import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { getMainMenuService } from '../services/mainMenuService';
import {
  GET_MAIN_MENU_BEGIN,
  GET_MAIN_MENU_CANCELLED
} from '../constants/mainMenuActionTypes';
import {
  getMainMenuFail,
  getMainMenuSuccess
} from '../actions/mainMenuActions';
import { of } from 'rxjs';

const mainMenuEpic = (action$: any) => {
  return action$.pipe(
    ofType(GET_MAIN_MENU_BEGIN),
    switchMap(() =>
      getMainMenuService().pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(getMainMenuFail());
          }
          // TODO: response?.data?.[0]
          console.log(response)
          return of(getMainMenuSuccess(response[0]));
        }),
        takeUntil(action$.pipe(ofType(GET_MAIN_MENU_CANCELLED))),
        // TODO: доработать общий error handler
        catchError(error => console.log(error))
      )
    )
  );
};

export default mainMenuEpic;
