import { Component, OnInit } from '@angular/core';
import Config from './feeTaxConfigs';

@Component({
  selector: 'app-feeTaxConfigs',
  templateUrl: './feeTaxConfigs.component.html',
  styleUrls: ['./feeTaxConfigs.component.css']
})
export class FeeTaxConfigsComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
