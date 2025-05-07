// src/app/services/transaccion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  constructor(private http: HttpClient) {}

  getTransacciones(params: { from: string; to: string; types?: string[] }): Observable<any> {
    const url = `${environment.apiBase}/transacciones`;
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-access-token': accessToken || '' });
  
    let httpParams = new HttpParams()
      .set('from', params.from)
      .set('to', params.to);
  
    if (params.types && params.types.length > 0) {
      httpParams = httpParams.set('types', params.types.join(','));
    }
  
    return this.http.get(url, { headers, params: httpParams });
  }
  

  getTipos(): Observable<any> {
    const url = `${environment.apiBase}/transacciones/tipos`; // Otro endpoint sugerido
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-access-token': accessToken || '' });
    return this.http.get(url, { headers });
  }
}
