import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { saveExerciseService } from '../services/exercisesCreateService';
import {
  SAVE_DATA_BEGIN,
  SAVE_DATA_CANCELLED
} from '../constants/exercisesCreateActionTypes';
import {
  saveExerciseFail,
  saveExerciseSuccess
} from '../actions/exercisesCreateActions';
import { of, Observable } from 'rxjs';

const exercisesListEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(SAVE_DATA_BEGIN),
    switchMap(() => {
      const { searchString } = state$.value.trainer.exercises.list;
      return saveExerciseService(searchString).pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(saveExerciseFail());
          }
          return of(saveExerciseSuccess(response));
        }),
        takeUntil(action$.pipe(ofType(SAVE_DATA_CANCELLED))),
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
