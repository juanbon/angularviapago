import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {} // Inyecta tu servicio de precarga

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    setTimeout(() => {
        this.loadingService.show(); // Oculta la precarga después de recibir la respuesta
        }, 500);    return next.handle(request).pipe(
    finalize(() => {
    setTimeout(() => {
        this.loadingService.hide(); // Oculta la precarga después de recibir la respuesta
        }, 1000);
})
    );
  }
}
