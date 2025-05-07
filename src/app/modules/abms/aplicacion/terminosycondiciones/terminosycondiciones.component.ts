import { Component, OnInit } from '@angular/core';
import Config from './terminosycondiciones';

@Component({
  selector: 'app-terminosycondiciones',
  templateUrl: './terminosycondiciones.component.html',
  styleUrls: ['./terminosycondiciones.component.css']
})
export class TerminosycondicionesComponent implements OnInit {

  config = Config;

  constructor() { }

  ngOnInit(): void {



    setTimeout(function(){


let elm = document.querySelector<HTMLElement>('.navbar-expand-lg')!;

elm.style.display = 'block !important';


let elements1 :any= document.getElementsByClassName('mb-3');
let requiredElement1 :any= elements1[0];

requiredElement1.style.width = "20px !important";

    }, 2000);


let style = document.createElement('style');
style.innerHTML =` 



.ng-untouched.ng-pristine.ng-valid:not(ng-select) {
  position: relative !important;
  top: 0px !important;  
}




.ng-touched.ng-dirty.ng-valid:not(ng-select) {
  position: relative !important;
  top: 0px !important;  
}




.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--no-label {
position:relative !important;
top:-10px !important;
height:50px !important
}


.input-date.ng-star-inserted{
top: 3px !important;
    position: relative !important;
}

.title{ 

    position: relative !important;
    z-index: 9999 !important;
    margin-bottom: 15px !important;
}



.inputs.ng-star-inserted{

  float: left !important;
    clear: both !important;
    margin: 12px !important;

}


/*

.mdc-line-ripple.mdc-line-ripple--deactivating.ng-star-inserted{
  display:none  !important;
}

*/


.mat-mdc-form-field-subscript-wrapper{display:none !important}



.mat-mdc-form-field-infix>div{

  position:absolute !important; 

}


  /*   .navbar-expand-lg{display:none !important}   */

.mat-mdc-form-field-subscript-wrapper{display:none !important}

.mat-mdc-form-field-infix>div{

  position:absolute !important; 

}



/*




.mdc-text-field--filled:not(.mdc-text-field--disabled){

background-color:white !important

}

*/

/*

.ng-star-inserted{width:126% !important; }




.filter-container{display:flex !important;flex-wrap: unset !important}




.navbar-expand-lg{position: relative;
    left: -140px;}

*/

 `;


// Get the first script tag
var ref : any = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);

  }

}
