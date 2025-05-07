import { Component , OnInit } from '@angular/core';
import Config from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
 
  config = Config;

  ngOnInit(): void{
  
 }
}
 

 