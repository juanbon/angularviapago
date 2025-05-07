import { Component } from '@angular/core';
import Config from './saldos-cierre';

@Component({
  selector: 'app-saldos-cierre',
  templateUrl: './saldos-cierre.component.html',
  styleUrls: ['./saldos-cierre.component.css']
})
export class SaldosCierreComponent {
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

        .mat-mdc-text-field-wrapper{

          top:-18px !important;
          background-color:transparent  !important
        }

        .mdc-text-field--filled{

         
          background-color:transparent  !important
        }


.mdc-text-field--filled:not(.mdc-text-field--disabled) {
    background-color: transparent  !important;
}

        .mat-mdc-form-field-infix:hover{

          background-color:transparent  !important
        }

        .mat-mdc-form-field-infix:hover{

         
          background-color:transparent  !important
        }


.mat-mdc-form-field-infix:hover(.mdc-text-field--disabled) {
    background-color: transparent  !important;
}

.mat-mdc-form-field-focus-overlay{
background-color:transparent !important;
}

.mdc-line-ripple{
  display:none !important 
}


.mat-mdc-button-base{
  top:14px !important
}

 `;


// Get the first script tag
var ref : any = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);





  }

}
