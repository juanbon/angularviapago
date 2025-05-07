import { Component, OnInit } from '@angular/core';
import Config from './frecuentes';

@Component({
  selector: 'app-frecuentes',
  templateUrl: './frecuentes.component.html',
  styleUrls: ['./frecuentes.component.css']
})
export class FrecuentesComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
