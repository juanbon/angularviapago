import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SnackBarService } from '../../presentation/services/snack-bar.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  public tarjetaId: any;
  public url: string = '';
  public userData$: Observable<any> | undefined;
  public sinFoto: any = null;
  public showModal: boolean = false;
  public showModalPIN: boolean = false;
  public showSelect: boolean = false;
  public nroTarjeta: string | undefined;
  public pin: string | undefined;
  public selectMotivo: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenSV: TokenStorageService,
    private location: Location,
    private translate: TranslateService,
    private snackbarSv: SnackBarService,
    private abstractSv: AbstractService,
  ) { }

  ngOnInit(): void {
    this.tarjetaId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getTarjetaData();
  }

  getTarjetaData() {
    this.url = `cards/${this.tarjetaId}`;
    this.userData$ =  this.abstractSv.get(this.url)
this.abstractSv.get(this.url).subscribe(res=> console.log(res))
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      this.sinFoto = true;
      return  '../../../../assets/img/item-thumbnail.png'
   } else {
    this.sinFoto = false;
    return avatar;
    };
   } 

   goBack(): void {
    this.location.back();
  }

  gotoPage(url: string, page?:any) {
    this.router.navigate([url, page]);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.nroTarjeta = '';
    this.pin = '';
    this.showModal = false;
  }

  openModalPIN() {
    this.showModalPIN = true;
  }

  closeModalPIN() {
    this.pin = '';
    this.showModalPIN = false;
  }

  openSelect() {
    this.showSelect = true;
  }

  closeSelect() {
    this.selectMotivo = '';
    this.showSelect = false;
  }

  deshabilitar() {
   console.log(this.selectMotivo);
  let body = {
      "cardId":this.tarjetaId,
      "reason":this.selectMotivo
    };
    this.url = `pomelo/cards/disable`;
    this.sendData(body);
  }

activar() {
  let body = {
    "cardId":this.tarjetaId,
    "pan":this.nroTarjeta,
    "pin":this.pin
  };
  this.url = `pomelo/cards/activate`;
  this.sendData(body);
}

pausar() {
  let body = {
    "cardId":this.tarjetaId,
  };
  this.url = `pomelo/cards/block`;
  this.sendData(body);
}

changePIN() {
  let body = {
    "cardId":this.tarjetaId,
    "pin":this.pin
  };
  this.url = `pomelo/cards/changePin`;
  this.sendData(body);
}

 async sendData(body: any){
    let tok =  await this.tokenSV.getToken()
    //  console.log(tok)userToken['accessToken'];
  
    let hea = { 
      'content-type': "application/json; charset=UTF-8",
      'x-access-token':  tok
    }

    console.log(body)
   
    this.abstractSv.post(this.url, body, hea).subscribe({
      next: (res)=>{
        console.log(res);
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
        this.goBack();
      },
      error: (err)=> {
        console.error(err);
        this.snackbarSv.showError('Se produjo un error');
        this.closeModal();
        this.closeModalPIN()
        this.closeSelect();
      }

})
  }

}
//deshabilitar
// {"method":"post",
// "uri":"/api/pomelo/cards/disable",
// "body":{
//   "cardId":"ede26095-588b-4c9e-addd-ccd259ed62ca",
//   "reason":"LOST"
// },
// "headers":
// {"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMyIsInN0YXR1cyI6ImVuYWJsZSIsImFjY2VzcyI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODgzOTQ5NjQsImV4cCI6MTY4ODQ4MTM2NH0.DmVI4sFvMFGSjoeAscITVCj_TiDTcDFBtR8PNggY88E"}
// } 
// al endpoint : https://sandbox.viapago.com.ar/api/pomelo/cards/disable

    
// activar
// {"method":"post",
// "uri":"/api/pomelo/cards/activate",
// "body":{
//   "cardId":"ede26095-588b-4c9e-addd-ccd259ed62ca",
//   "pan":"33333333333333",
//   "pin":"2222"
// },
// "headers":{
//   "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMyIsInN0YXR1cyI6ImVuYWJsZSIsImFjY2VzcyI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODgzOTI3NjYsImV4cCI6MTY4ODQ3OTE2Nn0.1dkoHzJCfNr25g744ZSpm0t4ixBY-CkIStiqkmFgsTA"
// }
// } 
// al endpoint : https://sandbox.viapago.com.ar/api/pomelo/cards/activate
  