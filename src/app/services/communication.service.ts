import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  childselectorFunctionEvent: EventEmitter<void> = new EventEmitter<void>();

  emitChildselectorFunctionEvent() {
    console.log('Emitting childselectorFunctionEvent'); // Agrega console.log() para verificar si se está ejecutando correctamente
    this.childselectorFunctionEvent.emit();
  }
}