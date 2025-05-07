import { Component, OnInit } from '@angular/core';
import Config from './recargas';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
