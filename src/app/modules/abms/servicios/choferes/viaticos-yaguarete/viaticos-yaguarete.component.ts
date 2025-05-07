import { Component } from '@angular/core';
import Config from './viaticos-yaguarete';

@Component({
  selector: 'app-viaticos-yaguarete',
  templateUrl: './viaticos-yaguarete.component.html',
  styleUrls: ['./viaticos-yaguarete.component.css']
})
export class ViaticosYaguareteComponent {
  config = Config;

  constructor() { }

  ngOnInit(): void {
  }

}
