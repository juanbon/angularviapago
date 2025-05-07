import { Component } from '@angular/core';
import Config from './monitoreo-saldos';

@Component({
  selector: 'app-monitoreo-saldos',
  templateUrl: './monitoreo-saldos.component.html',
  styleUrls: ['./monitoreo-saldos.component.css']
})
export class MonitoreoSaldosComponent {
  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
