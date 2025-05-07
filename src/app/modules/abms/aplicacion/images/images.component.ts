import { Component, OnInit } from '@angular/core';
import Config from './images';

@Component({
  selector: 'app-categorias',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
