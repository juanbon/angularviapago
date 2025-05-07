import { Component, OnInit } from '@angular/core';
import Config from './users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsuariosComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {
  }

}
