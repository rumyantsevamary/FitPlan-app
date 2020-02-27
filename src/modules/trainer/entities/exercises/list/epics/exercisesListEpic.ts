import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { getExercisesListService } from '../services/exercisesListService';
import {
  GET_LIST_BEGIN,
  GET_LIST_CANCELLED
} from '../constants/exercisesListActionTypes';
import {
  getExercisesListFail,
  getExercisesListSuccess
} from '../actions/exercisesListActions';
import { of, Observable } from 'rxjs';

const exercisesListEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_LIST_BEGIN),
    switchMap(() => {
      const { searchString } = state$.value.trainer.exercises.list;
      return getExercisesListService(searchString).pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(getExercisesListFail());
          }
          return of(getExercisesListSuccess(response));
        }),
        takeUntil(action$.pipe(ofType(GET_LIST_CANCELLED))),
        // TODO: доработать общий error handler
        catchError(error => {
          console.log(error);
          return Observable.throw(error);
        })
      );
    })
  );
};

export default exercisesListEpic;
