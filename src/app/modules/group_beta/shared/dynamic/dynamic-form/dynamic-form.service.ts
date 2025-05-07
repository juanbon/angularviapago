import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  public clicked = new EventEmitter<void>();

  constructor() { }

  emitClickEvent(e: any) {
    this.clicked.emit(e);
  }
}
