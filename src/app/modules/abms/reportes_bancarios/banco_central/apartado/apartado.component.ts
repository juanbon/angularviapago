import { Component } from '@angular/core';
import Config from './apartado';

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styleUrls: ['./apartado.component.css']
})
export class ApartadoComponent {
  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
