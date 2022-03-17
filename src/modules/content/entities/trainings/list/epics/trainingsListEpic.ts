import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { getTrainingsListService } from '../services/trainingsListService';
import {
  GET_LIST_BEGIN,
  GET_LIST_CANCELLED
} from '../constants/trainingsListActionTypes';
import {
  getExercisesListFail,
  getExercisesListSuccess
} from '../actions/trainingsListActions';
import { of, Observable } from 'rxjs';

export const trainingsListEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_LIST_BEGIN),
    switchMap(() => {
      const { searchString } = state$.value.content.trainings.list;
      return getTrainingsListService(searchString).pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(getExercisesListFail());
          }
          return of(getExercisesListSuccess(response));
        }),
        takeUntil(action$.pipe(ofType(GET_LIST_CANCELLED))),
        // TODO: add error handler
        catchError(error => {
          console.log(error);
          return Observable.throw(error);
        })
      );
    })
  );
};
