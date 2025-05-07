import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { catchError, Observable, of, throwError } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import moment from 'moment';
import { environment } from 'src/environments/environment';

const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end
const TOKEN_HEADER_KEY_BUSPLUS = 'x-api-key';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Logout por limite de tiempo
    const authUser = this.token.getUser()
    if(authUser){
      const lastActivity = this.token.getLastActivity()
      const dateNow = Date.parse(new Date().toISOString())
      if (((dateNow - lastActivity) / 60000) > environment.timeout) /* <<< 10 = Limite de tiempo en minutos antes de cerrar la sesion */
      {
        this.token.signOut();
        this.router.navigateByUrl(`/login`);
      }
      else{
        this.token.saveLastActivity(Date.parse(new Date().toISOString()))
      }
    }

    // Logout por token vencido
    let authReq = req;
    const token = this.token.getToken();
    let tokenBusPlus = this.token.getTokenBusPlus();
    console.log('TOKEN-BUS-PLUS:' , tokenBusPlus );
    console.log('TOKEN-VIA-PAGO:' , token );

    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token).set(TOKEN_HEADER_KEY_BUSPLUS, tokenBusPlus!)});
    }
    return next.handle(authReq).pipe(catchError(x => this.handleAuthError(x)));;
    
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.token.clearToken();
      this.router.navigateByUrl(`/login`);
      return of(err.message);
    }
    return throwError(err);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
