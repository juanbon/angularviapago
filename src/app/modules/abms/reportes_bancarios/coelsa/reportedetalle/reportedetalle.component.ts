import { Component, OnInit } from '@angular/core';
import Config from './reportedetalle';

@Component({
  selector: 'app-reportedetalle',
  templateUrl: './reportedetalle.component.html',
  styleUrls: ['./reportedetalle.component.css']
})
export class ReportedetalleComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {

   // defaultSelect = '1';


    setTimeout(function(){

    const el = document.createElement('hr');

    el.classList.add('hrColor');

    var referenceNode:any = document.querySelector('.filter-container>.ng-star-inserted:nth-of-type(6)');

    referenceNode.parentNode.insertBefore(el,referenceNode);



if(referenceNode){

  const div = document.createElement('div');

  div.className = 'title';

  div.className = 'title_tienda_nube';

  div.innerHTML = `Filtros TiendaNube`;

var referenceNode2:any = document.querySelector('.hrColor');

referenceNode2.parentNode.insertBefore(div,referenceNode2.nextSibling);

}


    }, 10);


var style = document.createElement('style');
style.innerHTML =` 

        .ng-has-value{
          padding-top: 8px;
          padding-left: 10px !important;
        }

        #table-download {
            width: auto !important;
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
