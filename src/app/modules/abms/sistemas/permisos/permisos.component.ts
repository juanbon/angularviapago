import { Component } from '@angular/core';
import Config from './permisos';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  config = Config;
}
