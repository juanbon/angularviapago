import { Component, OnInit } from '@angular/core';
import Config from './promotions';

@Component({
  selector: 'app-categorias',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
