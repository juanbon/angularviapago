import { Component, OnInit } from '@angular/core';
import Config from './usuarios-viapago';

@Component({
  selector: 'app-usuarios-viapago',
  templateUrl: './usuarios-viapago.component.html',
  styleUrls: ['./usuarios-viapago.component.css']
})
export class UsuariosViaPagoComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {



    setTimeout(function(){


    var referenceNode:any = document.querySelector('.buttom-cstm');
    referenceNode.style.display = 'none';


    var referenceNode2:any = document.querySelector('.buttom-cstm-clear');
    referenceNode2.style.display = 'none';


    var referenceNode3:any = document.querySelector('.inputs');
    referenceNode3.style.display = 'none';


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
