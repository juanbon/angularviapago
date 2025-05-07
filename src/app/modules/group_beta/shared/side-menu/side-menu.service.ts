import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    const url = `${environment.apiBase}/menu`;



    
    const accessToken = localStorage.getItem('token'); // o this.tokenStorage.getToken();
  
    const headers = new HttpHeaders({
      'x-access-token': accessToken || ''
    });
  
    return this.http.get<any>(url, { headers });
  }
  
  

}
