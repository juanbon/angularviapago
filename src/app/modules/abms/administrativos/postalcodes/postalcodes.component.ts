import { Component, OnInit ,ViewChild,ElementRef  } from '@angular/core';
import { FieldComponent } from 'src/app/modules/group_beta/dynamic/dynamic-form/field/field.component';

import Config from './postalcodes';

@Component({
  selector: 'app-postalcodes',
  templateUrl: './postalcodes.component.html',
  styleUrls: ['./postalcodes.component.css']
})
export class PostalcodesComponent implements OnInit {

     @ViewChild('idProvince2') idProvince2!: ElementRef;



  config = Config;
  
  constructor() { }




   ngOnInit(): void {



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


    #idLocality .ng-dropdown-panel-items.scroll-host[role="listbox"] {
      width: 310px !important;
    }

    #idLocality .ng-select-container {
      width: 310px !important;
    }

 `;


// Get the first script tag
var ref : any = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);


  }

}
