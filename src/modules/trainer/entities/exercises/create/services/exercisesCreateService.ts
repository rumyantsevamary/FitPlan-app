import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const saveExerciseService = (exercise: any): Observable<any> => {
  const url = '/api/exercises/create';

  return ajax.post(url, { exercise }).pipe(
    map((data: AjaxResponse) => data.response),
    // TODO: доработать общий error handler
    catchError(error => {
      console.log(error);
      return Observable.throw(error);
    })
  );
};
