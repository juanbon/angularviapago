import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from 'src/app/services/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
    private tokenSV: TokenStorageService,
    ) {}

  //login(username: string, password: string): Observable<any> {
  //  const url = `${environment.apiBase}/security/token`;
  //  const clave_acceso = `${environment.keyAccess}`;
  //
  //  return this.http.post(
  //    url,
  //    {
  //      username,
  //      password,
  //    },
  //    httpOptions
  //  );
  //}

  signin(username: string, password: string, systemVersion?: "3.9.8"): Observable<any> {
    const url = `${environment.apiBase}/users/user/signin`;
   console.log('aca')
    return this.http.post(url, {
      systemVersion,
      username,
      password
    }, httpOptions);
  }

  // logout() {
  //   const url = `${environment.apiBase}/sesion/cerrar_sesion`;

  //   return this.http.get(url, httpOptions);
  // }

   logout(): Observable<any>{
    let tok = this.tokenSV.getToken();
    let hea: any = {
      'content-type': 'application/json; charset=UTF-8',
      'x-access-token': tok,
    };
    const url = `${environment.apiBase}/users/user/signout`;
     const httpOptionDos =  {
			headers: new HttpHeaders(hea)
		}
    let element;
    //   ? {
    //       headers: new HttpHeaders(httpOp),
    //     }
    //   : httpOptions;
    // console.log(element, httpOptionDos);

    // let options = header ? httpOptions : undefined;
    return this.http.post<any>(url, element, httpOptionDos);
  }

  restore(email: string): Observable<any> {
    const url = `${environment.apiBase}/usuarios/recuperar`;

    return this.http.post(url, { Email: email }, httpOptions);
  }

  updatePassword(email: string, pass: string, hash: string): Observable<any> {
    const url = `${environment.apiBase}/usuarios/clave`;

    return this.http.put(
      url,
      { Email: email, Clave: pass, Hash: hash },
      httpOptions
    );
  }
}
