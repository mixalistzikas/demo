/* import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SiteService } from '../services/site.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   constructor(private router: Router,
      private siteService: SiteService,
      private injector: Injector) {
   }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let clonedRequest;
      if (req.body && req.body._refreshToken === 1) {
         clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.siteService.getRefreshJWToken())
         });
      } else {
         clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.siteService.getJWToken())
         });
      }

      let authenticationService = this.injector.get(AuthenticationService);

      return next.handle(clonedRequest)
         .catch((res) => {
            if ((res.status === 401 || res.status === 403) && res.error === 'Unauthorized') {

               return authenticationService.refreshToken().flatMap((data: any) => {


                  if (data.data && data.data.token !== '') {
                     this.siteService.setCurrentUser(data.data.user);
                     this.siteService.setCurrentUserPermissions(data.data.permissions);
                     this.siteService.setJWToken(data.data.token);
                     this.siteService.setRefreshJWToken(data.data.refreshToken);
                  } else {
                     this.siteService.removeCurrentUser();
                     this.siteService.removeCurrentUserPermissions();
                     this.siteService.removeJWToken();
                     this.siteService.removeRefreshJWToken();
                     this.siteService.socket.disconnect();
                     this.router.navigate(['./auth/login']);
                     return Observable.throw(res);
                  }
                  let clonedRequestRepeat = req.clone({
                     headers: req.headers.set('Authorization', 'Bearer ' + this.siteService.getJWToken())
                  });
                  return next.handle(clonedRequestRepeat);
               })
            } else if (res.status === 400 && res.error.error === 'token_not_provided') {
               this.router.navigate(['./auth/login']);
               return Observable.throw(res);
            } else if (res.status === 401 && res.error.error === 'token_invalid') {
               this.router.navigate(['./auth/login']);
               return Observable.throw(res);
            } else {
               return Observable.throw(res);
            }

         });
   }
}
 */