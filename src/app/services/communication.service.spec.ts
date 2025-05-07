import { TestBed } from '@angular/core/testing';
import { CommunicationService } from './communication.service';

describe('CommunicationService', () => {
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit childselectorFunctionEvent', () => {
    spyOn(service.childselectorFunctionEvent, 'emit');
    service.emitChildselectorFunctionEvent();

    console.log('childselectorFunctionEvent emitted'); // Agregamos un console.log() aquí

    expect(service.childselectorFunctionEvent.emit).toHaveBeenCalled();
  });
});