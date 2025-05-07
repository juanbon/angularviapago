import { Component } from '@angular/core';
import Config from './archivos';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent {
  config = Config
  
  constructor() { }

  ngOnInit(): void {
  }

}
