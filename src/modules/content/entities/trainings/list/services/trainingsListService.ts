import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const getTrainingsListService = (
  searchString: string
): Observable<any> => {
  const params = new URLSearchParams({ searchString });
  const url = `/api/trainings/list?${params}`;

  return ajax.get(url).pipe(
    map((data: any) => data.response),
    // TODO: доработать общий error handler
    catchError(error => {
      console.log(error);
      return error;
    })
  );
};
