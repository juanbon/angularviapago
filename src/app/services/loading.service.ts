import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  isLoading = false;

  show(): void {
    this.isLoading = true;
    document.body.classList.add('loading'); // Agrega la clase CSS 'loading' al body
  }

  hide(): void {
    this.isLoading = false;
    document.body.classList.remove('loading'); // Elimina la clase CSS 'loading' del body
  }
}
