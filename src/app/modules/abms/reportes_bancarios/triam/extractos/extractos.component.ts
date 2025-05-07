import { Component } from '@angular/core';
import Config from './extractos';

@Component({
  selector: 'app-extractos',
  templateUrl: './extractos.component.html',
  styleUrls: ['./extractos.component.css']
})
export class ExtractosComponent {
  config = Config
  
  constructor() { 

  }
  
  ngOnInit(): void {

  }

}
