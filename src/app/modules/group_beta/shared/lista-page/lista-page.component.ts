import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import ConfigurationTransacciones from '../../transacciones/transacciones';
import { ActivatedRoute, Router } from '@angular/router';
import ConfigurationNotificaciones from '../../notificaciones/notificaciones';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import ConfigurationIdentidades from '../../identidades/identidades';
import ConfigurationUsuarios from '../../usuarios/usuarios';
import ConfigurationBancoIndustrial from '../../banco-industrial/banco-industrial';
import ConfigurationTarjetas from '../../tarjetas/tarjetas';
import ConfigurationContactos from '../../contactos/contactos';
import ConfigurationCuentas from '../../cuentas/cuentas';
import ConfigurationComercios from '../../comercios/comercios';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css'],
})
export class ListaPageComponent implements OnInit {
  config: any = '';
  public offset: number = 0;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = false;
  public orderName: 'asc' | 'desc' = 'desc';
  public url = '';
  public items: any[] = [];
  public limit: number = 30;
  public searchPlaceholder = 'Buscar';
  public opciones = [];
  public namePage: string = '';
  public sinType: boolean = false;
  public idOp: string | undefined;
  public namePageLista: string = '';
  public params: any = '';

  constructor(
    private router: Router,
    private location: Location,
    private abstractSv: AbstractService,
    private tokenSV: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    if (this.router.url == '/b/transacciones'){
      this.config = ConfigurationTransacciones;
      this.orderName = 'desc';
    }

    if (this.router.url.includes('transaccion-lista')) {
      console.log('listaTransacciones');
      this.config = ConfigurationTransacciones;
      this.namePageLista = 'transaccion-lista';
      this.idOp = this.route.snapshot.paramMap.get('id') || '';
      let param: any = this.route.snapshot.paramMap.get('params');
      this.params = JSON.parse(param);
      console.log(this.params);
    }

    if (this.router.url == '/b/notificaciones'){
      this.config = ConfigurationNotificaciones;
      this.orderName = 'desc';
    }

    if (this.router.url == '/b/identidades') {
      console.log('ruta',this.router.url)
      this.config = ConfigurationIdentidades;
      this.orderName = 'asc';
    }
    if (this.router.url == '/b/usuarios') {
      this.config = ConfigurationUsuarios;
      this.orderName = 'asc';
    }

    if (this.router.url == '/b/bind') {
      this.config = ConfigurationBancoIndustrial;
      this.orderName = 'asc';
      this.sinType = true;
    }

    if (this.router.url == '/b/tarjetas') {
      this.config = ConfigurationTarjetas;
      this.orderName = 'asc';
      this.sinType = false;
    }

    if (this.router.url == '/b/contactos') {
      this.config = ConfigurationContactos;
      this.orderName = 'asc';
      this.sinType = false;
    }

    if (this.router.url == '/b/cuentas') {
      this.config = ConfigurationCuentas;
      this.orderName = 'asc';
      this.sinType = false;
    }

    if (this.router.url == '/b/comercios') {
      this.config = ConfigurationComercios;
      this.orderName = 'asc';
      this.sinType = false;
    }

    this.namePage = this.router.url;
    this.opciones = this.config.filters;
    console.log(this.config);
    this.searchPlaceholder = this.config.placeholder;
    const datos = {
      text: '',
      filter: this.opciones,
      order: this.orderName,
    };
    this.getData(datos);
  }

  getData(datos?: any) {
    this.offset = 0;
    this.datos = datos;
    console.log(datos);
    this.end = false;
    this.showLoadMoreButton = false;
    // console.log(this.datos.filter[0].value)
    this.orderName = this.datos.order;
    this.url = this.createUrl(this.datos);
    console.log(this.url);
    this.abstractSv.get(this.url).subscribe((res) => {
      this.items = this.updateData(res);

      if (res.length < this.limit) {
        this.showLoadMoreButton = false;
      } else {
        this.showLoadMoreButton = true;
      }
    });
  }

  updateData(res: any): any[] {
    let items: any[] = res
    let addedItems: any[] = []

    // Modification for transactions
    if (this.router.url == '/b/transacciones'){
      items.forEach((e: any) => {
        if (e.type == 'transfer'){
          addedItems.push({id: e.id, date: e.date, humanDate: e.humanDate, humanType: e.humanType, number: e.number, sourceName: e.sourceName, targetName: e.targetName, amount: e.amount, status: e.status, currentBalance: e.targetCurrentBalance, updatedAt: e.updatedAt})
          e.amount *= -1
        }

        if (!e.currentBalance && e.targetCurrentBalance){
          e.currentBalance = e.targetCurrentBalance
        }
      });

      items = items.concat(addedItems)
      items = items.sort((e1: any, e2: any) => (e1.updatedAt < e2.updatedAt) ? 1 : (e1.updatedAt > e2.updatedAt) ? -1 : 0)
    }

    return items
  }

  createUrl(datos: any) {
    console.log(datos);
    const searchText = encodeURIComponent(datos.text.replace(/\s/g, ' '));
    console.log(searchText);
    let filterParams = '';
    let encodedUrl = '';
    if (datos.filter && Array.isArray(datos.filter)) {
      datos.filter.forEach((filterObj: any) => {
        const property = filterObj.property.en;
        const value = filterObj.value;
        console.log(value, 'value');
        console.log(property.en, 'property');
        console.log(filterObj, 'filterObj');

        // if (property && value) {
        //   const param = `filter[where][${property.en}]=${value}`;
        //   filterParams += `&${param}`;
        //   console.log(filterParams, param)
        // }
        if (property && value) {
          const param = `filter[where][${property}]=${value}`;
          filterParams += `&${param}`;
          console.log(filterParams);
        }
      });
    }
    if (this.router.url == '/b/transacciones') {
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][number]=${searchText}${filterParams}&filter[order][updatedAt]=${this.orderName}&filter[query]=${searchText}`;
      console.log(encodedUrl);
    }

    if (this.namePageLista == '/b/transaccion-lista') {
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][userAccountId]=${this.idOp}&filter[where][number]=${searchText}${filterParams}&filter[order][number]=${this.orderName}&filter[query]=${searchText}`;
      console.log(encodedUrl);
    }

    if (this.namePageLista == 'transaccion-lista') {
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][userAccountId]=${this.idOp}&filter[where][number]=${searchText}${filterParams}&filter[order][number]=${this.orderName}&filter[query]=${searchText}`;
   //   console.log(encodedUrl);
    }


    // https://sandbox.viapago.com.ar/api/transactions/?filter[offset]=0&filter[limit]=30&filter[where][userAccountId]=4683331e-5653-48c3-8cb8-3f1a49994db5&filter[order][number]=desc

    if (this.router.url == '/b/notificaciones') {
      if (searchText) {
        filterParams = `&filter[where][title][like]=%25${searchText}%25`;
      }
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}${filterParams}&filter[order][createdAt]=${this.orderName}&filter[query]=${searchText}`;
    }
    if (this.router.url == '/b/identidades') {
      encodedUrl = `${this.config.url.search}/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Bwhere%5D%5Bname%5D%5Blike%5D=%25${searchText}%25&filter%5Bwhere%5D%5Bstatus%5D=${datos.filter[1].value}&filter%5Bwhere%5D%5Btype%5D=${datos.filter[2].value}&filter%5Bwhere%5D%5Bsubtype%5D=${datos.filter[3].value}&filter%5Border%5D%5B${datos.filter[0].value}%5D=${this.orderName}`;
    }
    if (this.router.url == '/b/usuarios') {
      let estado =
        datos.filter[1]?.value === undefined
          ? 'enable'
          : datos.filter[1]?.value;
      let orden =
        datos.filter[0]?.value === undefined ? 'name' : datos.filter[0]?.value;
      console.log(datos.filter);
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][name][like]=%25${searchText}%25&filter[where][status]=${estado}&filter[order][${orden}]=${datos?.order}&filter[query]=${searchText}`;
    }

    if (this.router.url == '/b/bind') {
      // https://sandbox.viapago.com.ar/api/bind/transactions?offset=0&limit=200&categories=TRANSFERENCIAS_ENVIADAS
      // let buscar = searchText
      //   ? `&filter[where][number][like]=%25${searchText}%25`
      //   : '';
      // let query = searchText ? `&filter[query]=${searchText}` : '';
      console.log(datos)
      encodedUrl = `${this.config.url.search}?offset=${this.offset}&limit=200&categories=${datos.filter[0]?.value}`;
    }

    if (this.router.url == '/b/tarjetas') {
      let estado = datos.filter[1]?.value;
      let orden =
        datos.filter[0]?.value === '' ? 'name' : datos.filter[0]?.value;
      console.log('orden', orden);
      let estadoString = estado ? `&filter[where][status]=${estado}` : '';
      let buscar = searchText
        ? `&filter[where][name][like]=%25${searchText}%25`
        : '';
      let query = searchText ? `&filter[query]=${searchText}` : '';
      encodedUrl = `${this.config.url.search}/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Border%5D%5B${orden}%5D=${datos?.order}${estadoString}${buscar}${query}`;
    }

    if (this.router.url == '/b/contactos' || this.router.url == '/b/comercios') {
      let orden =
        datos.filter[0]?.value === '' ? 'name' : datos.filter[0]?.value;
      let buscar = searchText
        ? `&filter[where][name][like]=%25${searchText}%25`
        : '';
      let query = searchText ? `&filter[query]=${searchText}` : '';
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][status]=${datos.filter[1]?.value}&filter[order][${orden}]=${this.orderName}${buscar}${query}`;
    }

    if (this.router.url == '/b/cuentas') {
      // let estado = datos.filter[1]?.value;
      let orden =
        datos.filter[0]?.value === ''
          ? 'userIdentity.name'
          : datos.filter[0]?.value;
      let buscar = searchText
        ? `&filter[where][number][like]=%25${searchText}%25`
        : '';
      let query = searchText ? `&filter[query]=${searchText}` : '';
      encodedUrl = `${this.config.url.search}/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][status]=${datos.filter[1]?.value}&filter[where][type]=${datos.filter[2]?.value}&filter[order][${orden}]=${this.orderName}${buscar}${query}`;
    }
    console.log(encodedUrl);
    return encodedUrl;
  }

  loadMoreItems() {
    if (this.end) {
      this.showLoadMoreButton = false;
      return;
    }
    this.offset = this.items.length;
    this.url = this.createUrl(this.datos);
    this.abstractSv.get(this.url).subscribe((res: any) => {
      this.items = [...this.items, ...this.updateData(res)];
      if (res.length < this.limit) {
        this.end = true;
        this.showLoadMoreButton = false;
      }
    });
  }

  action(event: any) {
    console.log(event);
    if (event.arg == 'delete') {
      this.delete(event.id);
    }
  }

  async delete(id: string) {
    let tok = await this.tokenSV.getToken();
    //  console.log(tok)userToken['accessToken'];
    console.log(tok);
    let hea = {
      'content-type': 'application/json; charset=UTF-8',
      'x-access-token': tok,
    };
    let body = undefined;
    let url = `${this.config.url.delete}/${id}`;
    this.abstractSv.put(url, body, hea).subscribe((res: any) => {
      console.log(res);
      const datos = {
        text: '',
        filter: this.opciones,
        order: this.orderName,
      };
      this.getData(datos);
    });
  }

  navigateTo() {
    let to = '';
    if (this.namePage == '/b/usuarios') to = '/b/usuario-create';
    if (this.namePage == '/b/identidades') to = '/b/identidad-create';
    if (this.namePage == '/b/comercios') to = '/b/comercio-create';

    this.router.navigate([to]);
    // console.log(id)
  }

  goBack(): void {
    this.location.back();
  }
}
