import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const getExercisesListService = (
  searchString: string
): Observable<any> => {
  const params = new URLSearchParams({ searchString });
  const url = `/api/exersises/list?${params}`;

  return ajax.get(url).pipe(
    map((data: AjaxResponse) => data.response),
    // TODO: доработать общий error handler
    catchError(error => {
      console.log(error);
      return Observable.throw(error);
    })
  );
};
