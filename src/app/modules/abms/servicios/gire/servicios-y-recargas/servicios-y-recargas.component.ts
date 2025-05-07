import { Component } from '@angular/core';
import Config from './servicios-y-recargas';

@Component({
  selector: 'app-servicios-y-recargas',
  templateUrl: './servicios-y-recargas.component.html',
  styleUrls: ['./servicios-y-recargas.component.css']
})
export class ServiciosYRecargasComponent {
  config = Config;

  constructor() { }

  ngOnInit(): void {
  }

}
