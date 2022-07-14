import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse,   } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';




@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  {

  constructor(private storage: Storage) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  return from(this.storage.get('token'))
    .pipe(
        switchMap(token => {
            if (token !==null) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }

            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                      return event;
                    }
                    return;
                }),
                catchError((error: HttpErrorResponse) => throwError(error))
            );
        })
    );
}

}
