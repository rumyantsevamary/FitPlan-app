import { ofType } from 'redux-observable';
import { mergeMap, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { isNil } from 'lodash';
import { saveExerciseService } from '../services/exercisesCreateService';
import {
  SAVE_DATA_BEGIN,
  SAVE_DATA_CANCELLED
} from '../constants/exercisesCreateActionTypes';
import {
  setData,
  saveExerciseFail,
  saveExerciseSuccess
} from '../actions/exercisesCreateActions';
import { push } from 'connected-react-router';
import { TRAINER_ROUTES_MAP } from 'modules/trainer/bootstrap/RoutesMap';
import { of, Observable, concat } from 'rxjs';

const exercisesListEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(SAVE_DATA_BEGIN),
    switchMap(() => {
      const { fields } = state$.value.trainer.exercises.create;
      return saveExerciseService(fields).pipe(
        mergeMap((response: any) => {
          if (isNil(response)) {
            return of(saveExerciseFail());
          }
          return concat(
            of(saveExerciseSuccess(response)),
            of(push(TRAINER_ROUTES_MAP.EXERCISES.LIST))
          );
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
