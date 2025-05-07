import { Component, OnInit ,ViewChild,ElementRef  } from '@angular/core';
import { FieldComponent } from 'src/app/modules/group_beta/dynamic/dynamic-form/field/field.component';

import Config from './ajustesmanuales';

@Component({
  selector: 'app-ajustesmanuales',
  templateUrl: './ajustesmanuales.component.html',
  styleUrls: ['./ajustesmanuales.component.css']
})
export class AjustesmanualesComponent implements OnInit {

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
          paddingg-top: 8px;
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

    #idTransactionManual {
      width: 230px !important; /* Ajusta el valor según tus necesidades */
    }

    #idTransactionManual .ng-select-container.ng-has-value {
      width: 230px !important; /* Ajusta el valor según tus necesidades */
    }

        .table-custom {
    width: 170% !important;
    left: -34% !important;
    position: relative;
    }

    #cvu {
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }

    .inputs{
      padding:2px !important
    }


        #id{
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }


        #pomeloId {
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }


        #bindId {
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }

      #coelsaId {
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }
          #name {
      width: 300px !important; /* Ajusta el valor según tus necesidades */
    }


 `;


// Get the first script tag
var ref : any = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);


  }

}
