import { Component } from '@angular/core';
import Config from './transacciones';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent {
  config = Config

  constructor() { }

  ngOnInit(): void {



      var style = document.createElement('style');
      style.innerHTML =` 


              .ng-has-value{
                padding-top: 8px;
                padding-left: 10px !important;
              }

              #table-download {
                  width: -webkit-fill-available !important;
                  overflow: auto !important;

              }

              #content{
                  overflow: auto !important
              } 




       `;


      // Get the first script tag
      var ref : any = document.querySelector('script');

      // Insert our new styles before the first script tag
      ref.parentNode.insertBefore(style, ref);
        
        
  }

}
