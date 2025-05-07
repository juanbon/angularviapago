import { Component, OnInit } from '@angular/core';
import Config from './localities';

@Component({
  selector: 'app-localities',
  templateUrl: './localities.component.html',
  styleUrls: ['./localities.component.css']
})
export class LocalitiesComponent implements OnInit {

  config = Config;
  
  constructor() { }

   ngOnInit(): void {

   // defaultSelect = '1';



var style = document.createElement('style');
style.innerHTML =` 


.ng-select-container{
  width:180px !important;
}




     textarea{
         
          height:150px !important;
        }

        .ng-has-value{
          padding-top: 8px;
          padding-left: 10px !important;
        }

        #table-download {
            width: auto !important;
            overflow: auto !important;
            font-size:10px !important;
             min-width: 100% !important;

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
