import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const saveTrainingService = (training: any): Observable<any> => {
  const url = '/api/trainings/create';

  return ajax.post(url, { training }).pipe(
    map((data: any) => data.response),
    // TODO: доработать общий error handler
    catchError(error => {
      console.log(error);
      return error;
    })
  );
};
