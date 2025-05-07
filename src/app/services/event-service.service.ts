// event.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
optionUpdated = new EventEmitter<Array<{ key: string, value: string }>>();

  constructor() {}

emitOptionUpdated(option: Array<{ key: string, value: string }>) {
  this.optionUpdated.emit(option);
}
}