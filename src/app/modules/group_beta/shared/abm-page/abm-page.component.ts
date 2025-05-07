import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationIden, Search } from '../../identidades/identidad';
import { Location } from '@angular/common';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { ConfigurationUsuario } from '../../usuarios/usuario';
import { ConfigurationContacto } from '../../contactos/contacto';
import { ConfigurationComercio } from '../../comercios/comercio';
import { ConfigurationBeneficio } from '../../comercios/beneficio';
import { ConfigurationSucursal } from '../../comercios/sucursal';
import { ConfigurationPuntoDeVenta } from '../../comercios/punto-de-venta';

@Component({
  selector: 'app-abm-page',
  templateUrl: './abm-page.component.html',
  styleUrls: ['./abm-page.component.css'],
})
export class AbmPageComponent implements OnInit {
  config = ConfigurationIden[1];
  urlId: string | undefined;
  isCreate: boolean = false;
  titleData: any;
  public opciones = Search;
  public offset: number = 0;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = true;
  public orderName: 'asc' | 'desc' = 'asc';
  public url = '';
  public items: any;
  public limit: number = 30;
  public namePage: string = '';
  public receivedData: any;
  public comercio: any;
  public sucursal: any;
  public titular: string = 'titular';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private abstractSv: AbstractService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url == 'b/identidad-create') {
      this.isCreate = true;
      this.config = ConfigurationIden[1];
      console.log(this.config);
      this.opciones = Search;
    }
    if (this.router.url.includes('identidad-update')) {
      this.isCreate = false;
      this.config = ConfigurationIden[0];
      console.log(this.config);
      this.opciones = Search;
    }

    if (this.router.url.includes('usuario-create')) {
      this.isCreate = true;
      this.namePage = 'usuario-create';
      console.log('usuario-create');
      this.config = ConfigurationUsuario[2];
      console.log(this.config);
    }

    if (this.router.url.includes('usuario-update')) {
      this.isCreate = true;
      this.namePage = 'usuario-update';
      console.log('usuario-update');
      this.config = ConfigurationUsuario[1];
      console.log(this.config);
    }

    if (this.router.url.includes('contacto-update')) {
      this.isCreate = true;
      this.namePage = 'contacto-update';
      console.log('contacto-update');
      this.config = ConfigurationContacto[1];
      console.log(this.config);
    }

    if (this.router.url.includes('comercio-create')) {
      this.isCreate = true;
      this.namePage = 'comercio-create';
      console.log('comercio-create');
      this.config = ConfigurationComercio[2];
      console.log(this.config);
      this.titular = 'Propietario';
    }

    if (this.router.url.includes('comercio-update')) {
      this.isCreate = true;
      this.namePage = 'comercio-update';
      console.log('comercio-update');
      this.config = ConfigurationComercio[1];
      console.log(this.config);
    }

    if (this.router.url.includes('beneficio-create')) {
      this.isCreate = true;
      this.namePage = 'beneficio-create';
      console.log('beneficio-create');
      this.route.params.subscribe((params : any) => {
        this.receivedData = JSON.parse(params?.idComercio)
        console.log(this.receivedData);
      })
      this.config = ConfigurationBeneficio[2];
      const field = this.config.fields.find(field => field.key === 'storeId');
      if (field) {
        field.value = this.receivedData?.id;
      }
      console.log(this.config, field);
    }


    if (this.router.url.includes('beneficio-update')) {
      this.isCreate = true;
      this.namePage = 'beneficio-update';
      console.log('beneficio-update');
      this.config = ConfigurationBeneficio[1];
      console.log(this.config);
    }

    if (this.router.url.includes('sucursal-create')) {
      this.isCreate = true;
      this.namePage = 'sucursal-create';
      console.log('sucursal-create');
      this.route.params.subscribe((params : any) => {
        this.receivedData = JSON.parse(params?.idComercio)
        console.log(this.receivedData);
      })
      this.config = ConfigurationSucursal[2];
      const field = this.config.fields.find(field => field.key === 'storeId');
      if (field) {
        field.value = this.receivedData?.id;
      }
      console.log(this.config, field);
    }

    if (this.router.url.includes('sucursal-update')) {
      this.isCreate = true;
      this.namePage = 'sucursal-update';
      console.log('sucursal-update');
      this.config = ConfigurationSucursal[1];
      console.log(this.config);
    }
    
    if (this.router.url.includes('punto-de-venta-create')) {
      this.isCreate = true;
      this.namePage = 'punto-de-venta-create';
      console.log('punto-de-venta-create');
      this.route.params.subscribe((params : any) => {
        this.receivedData = JSON.parse(params?.idSucursal)
        console.log(this.receivedData);
      })
      this.config = ConfigurationPuntoDeVenta[2];
      const field = this.config.fields.find(field => field.key === 'branchId');
      if (field) {
        field.value = this.receivedData?.id;
      }
      console.log(this.config, field);
    }

    if (this.router.url.includes('punto-de-venta-update')) {
      this.isCreate = true;
      this.namePage = 'punto-de-venta-update';
      console.log('punto-de-venta-update');
      this.config = ConfigurationPuntoDeVenta[1];
      console.log(this.config);
      let comercioString: any = this.route.snapshot.paramMap.get('comercio');
      let sucursalString: any = this.route.snapshot.paramMap.get('sucursal');
      this.comercio = JSON.parse(comercioString);
      this.sucursal = JSON.parse(sucursalString);
    }

    this.config.id = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.config);
    if (this.isCreate) {
      const datos = {
        text: '',
        filter: this.opciones,
        order: this.orderName,
      };
      this.getData(datos);
      console.log(datos);
    }
  }

  closeForm = (args: any): void => {
    console.log('Callback invocado desde el hijo con argumento:', args);
    this.goBack();
  };

  gotoPage(namePage: string, page?: any) {
    if (this.namePage == 'punto-de-venta-create') namePage = 'sucursal-detalle';
    this.router.navigate([namePage, page]);
  }

  title(event: any) {
    console.log(event);
    this.titleData = event;
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      return '../../../../assets/img/item-thumbnail.png';
    } else {
      return avatar;
    }
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

  createUrl(datos: any) {
    let url = '';
    console.log(datos);
    if (this.namePage == 'contacto-update') {
      url = `${this.config.show_url}${this.config.id}`;
    } else {
      url = `users/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][name][like]=%${datos.text}%&filter[where][status]=${datos.filter[1].value}&filter[order][${datos.filter[0].value}]=${this.orderName}`;
    }
    return url;
  }

  loadMoreItems() {
    if (this.end) {
      this.showLoadMoreButton = false;
      return;
    }
    this.offset = this.items.length;
    this.url = this.createUrl(this.datos);
    this.abstractSv.get(this.url).subscribe((res: any) => {
      this.items = [...this.items, ...res];
      if (res.length < this.limit) {
        this.end = true;
        this.showLoadMoreButton = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  select(titular: any) {
    this.titleData = titular;
  }
}
