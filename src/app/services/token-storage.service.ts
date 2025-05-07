import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const PE_KEY = 'auth-pe';
const TOKEN_KEY_BUSPLUS = 'auth_token_busplus';
const LAST_ACTIVITY_KEY = 'last-activity';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  abstractService: AbstractService;
  userToken: any;

  constructor(
    abstractService: AbstractService
  ) {
    this.abstractService = abstractService;
  }

  signOut(): void {
    localStorage.clear();
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);



    //console.log("GUARDADOOOOO",localStorage);
    
  }

  public getTokenBusPlus(): string | null {
    return localStorage.getItem(TOKEN_KEY_BUSPLUS);
  }

  public saveTokenBusPlus(tokenBusPlus: string): void {
    localStorage.removeItem(TOKEN_KEY_BUSPLUS);
    localStorage.setItem(TOKEN_KEY_BUSPLUS, tokenBusPlus);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    console.log(user, 'user')
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    // console.log(user)
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveLastActivity(lastActivity: number): void {
    localStorage.removeItem(LAST_ACTIVITY_KEY);
    localStorage.setItem(LAST_ACTIVITY_KEY, lastActivity.toString());
  }

  public getLastActivity(): any {
    return localStorage.getItem(LAST_ACTIVITY_KEY);
  }

  public validatePe(id: number): any {
    let pe = localStorage.getItem(PE_KEY);
    let permisos: Array<number> = [];

    if (pe) {
      permisos = JSON.parse(pe);
      return permisos.includes(id);
    }

    return false;
  }

  public clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  public validateToken(accessToken?: string): Promise<any> {


    return new Promise((resolve, reject) => {
      this.abstractService.post('users/user/profile', null, { 'x-access-token': accessToken })
        .subscribe(
          (data) => {
            console.log(data);
            if (accessToken) {
              this.saveToken(accessToken);
            }
           // return; 
            this.userToken = data;
            /*this.abstractService.get('adm/seguridad/permisos/search?IdUsuario=' + data.idusuario).subscribe(
              (data) => {
                let permisos: Array<number> = [];
                let parse: Array<any> = data;
                parse.forEach(function(e){
                  permisos.push(e.IdPantalla);
                });
                localStorage.removeItem(PE_KEY);
                localStorage.setItem(PE_KEY, JSON.stringify(permisos));
              },
              (error) => {
                //console.log('nok');
                //console.log(error);
              }
            );*/

       
            resolve(data);
          },
          (error) => {
            console.log(error);
            //console.log('nok');
            //console.log(error);
            reject(error);
          }
        );
    });
  }

  // public setUserData(data: any) {
  //   this.userToken = data;
  // }

  // public getDataUser(): Observable<any> {
  //   console.log(this.userToken)
  //   return of(this.userToken)
  // }
}
