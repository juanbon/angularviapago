import { Component } from '@angular/core';
import Config from './permisos-usuarios';
 
@Component({
  selector: 'app-permisos-usuarios',
  templateUrl: './permisos-usuarios.component.html',
  styleUrls: ['./permisos-usuarios.component.css']
})
export class PermisosUsuariosComponent {
  config = Config;

}

  

