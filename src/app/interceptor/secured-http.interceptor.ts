import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import 'rxjs/add/operator/do';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';

@Injectable()
export class SecuredHttpInterceptor implements HttpInterceptor {

    token = 'VMn9C4rMHquRDepnANu7hZuAnDsvqdZs';
    constructor(private router: Router, private loader: NgxSpinnerService){

    }

    /**
     * Intercepts the http request and add the bearer token of the currently logged user.
     *
     * @param request http request
     * @param next http handler
     */
    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

      request = request.clone( {
        setHeaders: {
          Authorization: 'Bearer ' + this.token
        }
      });

      let countInterceptor = 0;
      if (request.url.indexOf('Total') === -1){
        this.loader.show();
      }


      return next.handle( request ).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loader.hide();
          }

        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // console.log("401 error occured");
              this.router.navigate(['/covid'], {skipLocationChange: false});
            }
            countInterceptor--;
            this.loader.hide();
          }
        }));
    }
}
