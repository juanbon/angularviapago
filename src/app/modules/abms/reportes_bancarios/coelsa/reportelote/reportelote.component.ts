import { Component, OnInit } from '@angular/core';
import Config from './reportelote';

@Component({
  selector: 'app-reportelote',
  templateUrl: './reportelote.component.html',
  styleUrls: ['./reportelote.component.css']
})
export class ReporteloteComponent implements OnInit {

  config = Config;
  
  constructor() { }

  ngOnInit(): void {


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
