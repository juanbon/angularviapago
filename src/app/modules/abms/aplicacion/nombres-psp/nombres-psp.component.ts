import { Component, OnInit } from '@angular/core';
import Config from './nombres-psp';

@Component({
  selector: 'app-nombres-psp',
  templateUrl: './nombres-psp.component.html',
  styleUrls: ['./nombres-psp.component.css']
})
export class NombresPspComponent implements OnInit {

  config = Config

  constructor() { }

  ngOnInit(): void {
  }
}
