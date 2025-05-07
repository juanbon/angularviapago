import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { ConfigurationPermiso, SearchPer } from '../permiso';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'src/app/modules/group_beta/presentation/services/snack-bar.service';

interface PermisoBody {
  id: string | null;
  userIdentityId: string;
  userDni: string | null;
  userId: string | null;
  status: string;
  type: string;
  transactionLimit: number | null;
  monthLimit: number | null;
  sailpointId: string | null;
  notes: string | null;
}

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
})
export class PermisoComponent implements OnInit {
  public opciones = SearchPer;
  config = ConfigurationPermiso[0];
  urlId: string | undefined;
  isCreate: boolean = false;
  titleData: any;
  public offset: number = 0;
  public url = '';
  public limit: number = 30;
  public namePage: string = '';
  public permisoData: any = '';
  public userItem: any;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = true;
  public orderName: 'asc' | 'desc' = 'asc';
  public items: any;
  public tipoSeleccionado: string | undefined;
  public permisoBody!: PermisoBody;
  public userDni: any;
  public dataResult: any;
  public idenId: any;
  // numero1: number | undefined;
  // numero2: number | undefined;
  // texto: string | undefined;

  // tipos: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private abstractSv: AbstractService,
    private router: Router,
    private translate: TranslateService,
    private snackbarSv: SnackBarService,

  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    if (this.router.url.includes('permisos-create')) this.namePage = 'permisos-create';
    if (this.router.url.includes('permisos-ver')) this.namePage = 'permisos-ver';
    if (this.router.url.includes('permisos-editar')) this.namePage = 'permisos-editar';

    // this.isCreate = true;
      this.config = ConfigurationPermiso[1];
      console.log(this.config);
      let name: any = this.route.snapshot.paramMap.get('name');
      let id: any = this.route.snapshot.paramMap.get('id');
      this.permisoData = {
        name: name,
        id: id,
      };
      
      this.opciones = SearchPer;
      console.log(this.config, this.titleData);
      this.isCreate = false;

      this.permisoBody = {
        id: null,
        userIdentityId: '50cebfc3-afa2-45e7-b385-c1264afe4158',
        userDni: '',
        userId: null,
        status: 'enable',
        type: 'full',
        transactionLimit: 0,
        monthLimit: 0,
        sailpointId: null,
        notes: null,
      };

      if (this.namePage == 'permisos-ver' || this.namePage == 'permisos-editar') {
        this.isCreate = true;
        this.idenId = this.route.snapshot.paramMap.get('idenId');
      this.getDataPermiso(this.idenId);
 
      }
    
  }

  getDataPermiso(idenId: any) {
    this.url = this.createUrl(idenId);
    this.abstractSv.get(this.url).subscribe((res: any) => {
      this.dataResult = res;
      console.log(this.dataResult)
      if (this.namePage == 'permisos-create'){
      this.translate.get(res.status).subscribe((translatedStatus: string) => {
        res.status = translatedStatus;
      });
    }
      this.permisoBody = {
        id: res.id,
        userIdentityId: res.userIdentityId,
        userDni: '',
        userId: res.userId,
        status: res.status,
        type: res.type,
        transactionLimit: res.transactionLimit !== null ? res.transactionLimit : 0,
        monthLimit: res.monthLimit !== null ? res.monthLimit : 0,
        sailpointId: res.sailpoint,
        notes: res?.notes,
      };
      if (this.namePage == 'permisos-editar') {
        this.titleData = this.dataResult.user
      }
    })
  }

  getData(datos?: any) {
    this.offset = 0;
    this.datos = datos;
    this.end = false;
    this.showLoadMoreButton = false;
    console.log(this.datos.filter[0].value);
    this.orderName = this.datos.order;
    this.url = this.createUrl(this.datos);
    console.log(this.url);
    this.abstractSv.get(this.url).subscribe((res: any) => {
      this.items = res;
      if (res.length < this.limit) {
        this.showLoadMoreButton = false;
      } else {
        this.showLoadMoreButton = true;
      }
      console.log(res);
    });
  }

  enviarFormulario(action: string) {
    this.permisoBody.userIdentityId = this.permisoData.id;
    this.permisoBody.userDni = null;
    console.log(this.permisoBody);
      let url = `${this.config.post_url}`;
      let header = { 'x-content-type': 'on' };
      let body = this.permisoBody;
      if (action == 'update') {
        url = this.createUrl(this.idenId)
        this.abstractSv.put(url, body, header).subscribe({
          next: (res) => this.snackbarSv.showSuccess('La operación se realizó correctamente'),
          error: (err) => this.snackbarSv.showError('Ha ocurrido un error'),
          complete: () => this.goBack(),
        });
      };

      // {
      //   "method": "PUT",
      //   "uri": "/api/usersIdentitiesGrants/7441d214-4a20-49ea-8940-5a3756205b26",
      //   "body": {
      //     "id": "7441d214-4a20-49ea-8940-5a3756205b26",
      //     "userIdentityId": "a228ee69-0ccd-49ad-8c64-2bf22f70db61",
      //     "userDni": null,
      //     "userId": "119a91d8-4f5d-4ac5-b457-b17c68eb8aa2",
      //     "status": "enable",
      //     "type": "full",
      //     "transactionLimit": 99999,
      //     "monthLimit": null,
      //     "sailpointId": null,
      //     "notes": null
      //   },
      //   "headers": {
      //     "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMyIsInN0YXR1cyI6ImVuYWJsZSIsImFjY2VzcyI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODkwMjQ0MDksImV4cCI6MTY4OTExMDgwOX0.C7hhfFw-ForCVBtfqbx4bSA6OIJjBxDVSM-j-aLkBjM"
      //   }
      // }
      
      if(action == 'post') {
      this.abstractSv.post(url, body, header).subscribe({
        next: (res) => this.snackbarSv.showSuccess('La operación se realizó correctamente'),
        error: (err) => this.snackbarSv.showError('Ha ocurrido un error'),
        complete: () => this.goBack(),
      });
    }
    };
    // this.permisoBody = {
    //   id: null,
    //   userIdentityId: '50cebfc3-afa2-45e7-b385-c1264afe4158',
    //   userDni: null,
    //   userId: null,
    //   status: 'enable',
    //   type: 'full',
    //   transactionLimit: null,
    //   monthLimit: null,
    //   sailpointId: null,
    //   notes: null,
    // };
  

    

  getDatosDNI(datos: any) {
    console.log(datos);
    if (datos.text == '' || isNaN(datos.text)) return;
    this.url = this.createUrl(datos);
    this.abstractSv.get(this.url).subscribe({
      next: (res: any) => {
        console.log(res);
        this.userItem = res;
        this.userDni = datos.text;
        // {"method":"POST",
        // "uri":"/api/usersIdentitiesGrants/",
        // "body":{
        //   "id":null,
        //   "userIdentityId":"50cebfc3-afa2-45e7-b385-c1264afe4158",
        //   "userDni":null,
        //   "userId":null,
        //   "status":"enable",
        //   "type":"full",
        //   "transactionLimit":null,
        //   "monthLimit":null,
        //   "sailpointId":null,
        //   "notes":null},
        //   "headers"
      },
      error: (err) => {
        console.error(err);
        this.userItem = '';
      },
    });
    // https://sandbox.viapago.com.ar/api/users/getByDni/1822062
  }

  createUrl(datos: any) {
    let url = '';
    console.log(datos);
    if (this.namePage == 'permisos-create') {
      url = `${this.config.show_url}/getByDni/${datos.text}`;
    }
    if (this.namePage == 'permisos-ver' || this.namePage == 'permisos-editar') {
      url = `${this.config.post_url}/${datos}`;
    }
    if (this.namePage == 'permisos-editar') {
      if (datos.text) {
        url = `${this.config.show_url}/getByDni/${datos.text}`;
      } else {
      url = `${this.config.post_url}/${datos}`;
      }
    }
    return url;
  }

  goBack(): void {
    this.location.back();
  }

  gotoPage(page?: any) {
    this.router.navigate(['usuario-detalle', page]);
  }

  gotoIden(page?: any) {
    this.router.navigate(['identidad-detalle', page]);
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      return '../../../../assets/img/item-thumbnail.png';
    } else {
      return avatar;
    }
  }

  select(titular: any) {
    console.log(titular);
    this.titleData = titular;
    this.permisoBody.userDni = this.userDni;
    this.permisoBody.userId = this.titleData.id;
  }

  borrarSearch() {
    this.titleData = '';
    // this.userDni = '';
    this.permisoBody.userDni = '';
    this.permisoBody.userId = '';
  }

  editarPermisos(idenId: string) {
    console.log(idenId)
    this.router.navigate(['permisos-editar', {idenId:idenId, name:this.permisoData.name, id:this.permisoData.id}]);
  }
  
}
