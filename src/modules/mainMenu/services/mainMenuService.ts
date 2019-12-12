import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const getMainMenuService = (): Observable<any> => {
  const url = '/api/mainMenu';

  return ajax.get(url).pipe(
    map((data: AjaxResponse) => data.response),
    // TODO: доработать общий error handler
    catchError((error: any) => console.log(error))
  );
};
