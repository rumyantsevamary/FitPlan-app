import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { getCurrentUserService } from '../services/userInfoService';
import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_CANCELLED
} from '../constants/userInfoActionTypes';
import {
  getCurrentUserFail,
  getCurrentUserSuccess
} from '../actions/userInfoActions';
import { push } from 'connected-react-router';
import { concat, of, Observable } from 'rxjs';

const userInfoEpic = (action$: any) => {
  return action$.pipe(
    ofType(GET_CURRENT_USER_BEGIN),
    switchMap(() =>
      getCurrentUserService().pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(getCurrentUserFail());
          }
          return concat(
            // TODO: Получать с бэка роль пользователя и перенаправлять на нужную страницу
            //of(push('/trainer')),
            of(getCurrentUserSuccess(response))
          );
        }),
        takeUntil(action$.pipe(ofType(GET_CURRENT_USER_CANCELLED))),
        // TODO: доработать общий error handler
        catchError(error => {
          console.log(error);
          return Observable.throw(error);
        })
      )
    )
  );
};

export default userInfoEpic;
