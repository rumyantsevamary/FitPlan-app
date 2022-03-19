import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const getCurrentUserService = (): Observable<any> => {
  const url = '/api/currentUser';

  return ajax.get(url).pipe(
    map((data: any) => data.response),
    // TODO: доработать общий error handler
    catchError(error => {
      console.log(error);
      return of(error);
    })
  );
};
