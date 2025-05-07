import { Component } from '@angular/core';
import Config from './pagos-viaticos';

@Component({
  selector: 'app-pagos-viaticos',
  templateUrl: './pagos-viaticos.component.html',
  styleUrls: ['./pagos-viaticos.component.css']
})
export class PagosViaticosComponent {
  config = Config
  
  constructor() { }

  ngOnInit(): void {
  }

}
