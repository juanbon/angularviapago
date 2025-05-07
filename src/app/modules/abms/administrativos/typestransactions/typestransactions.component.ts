import { Component, OnInit } from '@angular/core';
import Config from './typestransactions';

@Component({
  selector: 'app-typestransactions',
  templateUrl: './typestransactions.component.html',
  styleUrls: ['./typestransactions.component.css']
})
export class TypestransactionsComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
