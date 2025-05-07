import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AbstractService {
  constructor(private http: HttpClient) {}

  get(path: string , usaApiBoletos?: boolean ): Observable<any> {
    console.log('abstract-path',path);
	
		var url = usaApiBoletos ? environment.apiBoletos : environment.apiBase;
    url += `/${path}`;

    console.log('abstract-url',url)
		
    return this.http.get<any>(url, httpOptions);
  }

  post(path: string, element: any, httpOp?: any): Observable<any> {
    const url = `${environment.apiBase}/${path}`;
    const httpOptionDos = httpOp
      ? {
          headers: new HttpHeaders(httpOp),
        }
      : httpOptions;
    console.log(element, httpOptionDos);
    // let options = header ? httpOptions : undefined;
    return this.http.post<any>(url, element, httpOptionDos);
  }

  put(path: string, element?: any, httpOp?: any): Observable<any> {
    const httpOptionDos = httpOp
      ? {
          headers: new HttpHeaders(httpOp),
        }
      : httpOptions;

    const url = `${environment.apiBase}/${path}`;
    console.log('url', url);
    console.log(element);
    let body;
    if (typeof element === 'string') {
      try {
        body = JSON.parse(element);
      } catch (error) {
        body = undefined;
      }
    } else if (typeof element === 'object' || element instanceof FormData) {
      body = element;
    } else {
      body = undefined;
    }

    console.log('element', body);
    console.log('httpoption', httpOptionDos);

    return this.http.put<any>(url, body, httpOptionDos);
  }

  delete(path: string): Observable<any> {
    const url = `${environment.apiBase}/${path}`;

    return this.http.delete<any>(url, httpOptions);
  }

  /**
   * Format object to HTTP QS
   *
   * @param {Object} body - Body
   * @return {Object}
   */
  private formatObjectToHttpQs(params: any, prefix: any = '') {
    // Define result
    let result = [];

    // Create result items
    for (let p in params) {
      if (p && params.hasOwnProperty(p)) {
        let k = prefix ? prefix + '[' + p + ']' : p;
        let v = params[p];
        if (typeof v === 'object') {
          let d: any = this.formatObjectToHttpQs(v, k);
          if (d) {
            result.push(d);
          }
        } else {
          result.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
        }
      }
    }

    // Return result
    return result.join('&');
  }

  /**
   * Format HTTP QS
   *
   * @param {Object} qs - Query string
   * @return {String}
   */
  private formatHttpQs(qs: any): string {
    return qs ? '?' + this.formatObjectToHttpQs(qs) : '';
  }

  /**
   * Format HTTP body
   *
   * @param {Object} body - Body
   * @return {Object}
   */
  private formatHttpBody(body: any): any {
    return body;
  }
}
