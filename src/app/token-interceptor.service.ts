/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  {

  constructor(private storage: Storage,private router: Router) {
    this.storage.create();
  }

  private isValidRequestForInterceptor(requestGiven: HttpRequest<any>): boolean {
    if(requestGiven.url.includes('termii') || ((requestGiven.url.includes('users') ||
     requestGiven.url.includes('comptes')) && requestGiven.method=='POST') ){
      console.log('intercept ignore');
        return false;
    }
    return true;
}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  if (this.isValidRequestForInterceptor(request)) {
    return from(this.storage.get('token'))
    .pipe(
        switchMap(token => {
            if (token !==null) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            else { (this.router.navigate(['login'])); }

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

  return next.handle(request);


}

}
