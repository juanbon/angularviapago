import { Component, OnInit } from '@angular/core';
import Config from './tipos-terminos-ycondiciones';

@Component({
  selector: 'app-tipos-terminos-ycondiciones',
  templateUrl: './tipos-terminos-ycondiciones.component.html',
  styleUrls: ['./tipos-terminos-ycondiciones.component.css']
})
export class TiposTerminosYCondicionesComponent implements OnInit {

  config = Config;

  constructor() { }

  ngOnInit(): void {
  }
}
