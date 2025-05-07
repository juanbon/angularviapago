import { Component } from '@angular/core';
import Config from './stockprepagas';

@Component({
  selector: 'app-stockprepagas',
  templateUrl: './stockprepagas.component.html',
  styleUrls: ['./stockprepagas.component.css']
})
export class StockprepagasComponent {
  config = Config
  
  constructor() { }

  ngOnInit(): void {

   // defaultSelect = '1';




var style = document.createElement('style');
style.innerHTML =` 

        .ng-has-value{
          padding-top: 8px;
          padding-left: 10px !important;
        }

        #table-download {
            width: -webkit-fill-available !important;
          
         
        }



 `;


// Get the first script tag
var ref : any = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);
  }


}
