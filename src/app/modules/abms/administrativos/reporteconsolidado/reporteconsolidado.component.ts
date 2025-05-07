import { Component, OnInit } from '@angular/core';
import Config from './reporteconsolidado';

@Component({
  selector: 'app-reporteconsolidado',
  templateUrl: './reporteconsolidado.component.html',
  styleUrls: ['./reporteconsolidado.component.css']
})
export class ReporteConsolidadoComponent {
  config = Config
  
  constructor() { }

  ngOnInit(): void {



    setTimeout(function(){



        const div = document.createElement('button');

        div.className = 'btn btn-outline-primary rounded-pill buttom-cstm-download solo_excel';

        var referenceNode23:any = document.querySelector('.buttom-cstm-download');   

        referenceNode23.style.visibility = 'hidden';  

        const li = document.createElement('i');

        li.className = 'bi bi-download';

        div.append(li);

        referenceNode23.parentNode.insertBefore(div,referenceNode23.nextSibling);

      var button:any = document.querySelector('.solo_excel');

      button.addEventListener('click', function() {    

          const checkExist = setInterval(function () {

              if (document.querySelector('.loadings')) {

              let loadings2:any = document.querySelector('.loadings'); 

                loadings2.style.display = 'none';

                clearInterval(checkExist);
             
              }
          }, 10);


  let referenceNode2a:any = document.querySelector('.buttom-cstm');  


    referenceNode2a.click();

    setTimeout(() => {

      var referenceNode23b:any = document.querySelector('.buttom-cstm-download'); 

    referenceNode23b.click();


    }, 2000);


   }, false);


    var referenceNode2:any = document.querySelector('.buttom-cstm');
 

   referenceNode2.style.opacity = '0';

   referenceNode2.style.visibility = 'hidden';





    }, 5);



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
