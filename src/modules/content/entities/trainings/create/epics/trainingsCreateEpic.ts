import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { saveTrainingService } from '../services/trainingsCreateService';
import {
  SAVE_DATA_BEGIN,
  SAVE_DATA_CANCELLED
} from '../constants/trainingsCreateActionTypes';
import {
  saveExerciseFail,
  saveExerciseSuccess
} from '../actions/trainingsCreateActions';
import { push } from 'connected-react-router';
import { CONTENT_ROUTES_MAP } from 'modules/content/bootstrap/RoutesMap';
import { of, Observable, concat } from 'rxjs';

export const trainingsCreateEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(SAVE_DATA_BEGIN),
    switchMap(() => {
      const { fields } = state$.value.content.trainings.create;
      return saveTrainingService(fields).pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(saveExerciseFail());
          }
          return concat(
            of(saveExerciseSuccess(response)),
            of(push(CONTENT_ROUTES_MAP.TRAININGS.LIST))
          );
        }),
        takeUntil(action$.pipe(ofType(SAVE_DATA_CANCELLED))),
        // TODO: add error handler
        catchError(error => {
          console.log(error);
          return Observable.throw(error);
        })
      );
    })
  );
};
