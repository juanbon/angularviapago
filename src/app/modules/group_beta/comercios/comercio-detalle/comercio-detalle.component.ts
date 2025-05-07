import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Search } from '../comercio';
import { SnackBarService } from '../../presentation/services/snack-bar.service';

@Component({
  selector: 'app-comercio-detalle',
  templateUrl: './comercio-detalle.component.html',
  styleUrls: ['./comercio-detalle.component.css'],
})
export class ComercioDetalleComponent implements OnInit {
  public comercioId: any;
  public url: string = '';
  public urlSearch: string = '';
  public userData$: Observable<any> | undefined;
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef | any;
  public sinFoto: any = null;
  public offset: number = 0;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = true;
  public orderName: 'asc' | 'desc' = 'asc';
  public items: any;
  public limit: number = 30;
  public titleData: any | any[] = [];
  public opciones = Search;
  public tModal: string = '';
  public placeholder: string = '';
  originData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private snackbarSv: SnackBarService
  ) {}

  ngOnInit(): void {
    this.comercioId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getComercioData();
  }

  getComercioData() {
    this.url = `stores/${this.comercioId}`;
    this.userData$ = this.abstractSv.get(this.url);
    // this.abstractSv.get(this.url).subscribe((res) => console.log(res));
  }

  goBack(): void {
    this.location.back();
  }

  gotoPage(a: string, data: any = '') {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
      console.log(data);
    }
    this.router.navigate([a, data]);

    console.log(a, data);
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      this.sinFoto = true;
      return '../../../../assets/img/item-avatar.png';
    } else {
      this.sinFoto = false;
      return avatar;
    }
  }

  imgAvatar(avatar: any) {
    if (!avatar) {
      return '../../../../assets/img/item-avatar.png';
    } else {
      return avatar;
    }
  }

  selectProfilePicture(): void {
    console.log('ssss');
    if (!this.sinFoto) {
      this.upDateImage(null);
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any): void {
    let file: File = event.target.files[0];
    console.log(file);
    //  console.log(file)
    this.upDateImage(file);
    event = '';
  }

  upDateImage(img: any) {
    let url = `${this.url}/image`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
    body.append('file', img);
    console.log(body);
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.getComercioData(),
    });
  }

  getData(datos?: any) {
    this.offset = 0;
    this.datos = datos;
    this.end = false;
    this.showLoadMoreButton = false;
    console.log(this.datos);
    this.orderName = this.datos.order;
    this.urlSearch = this.createUrl(this.datos);
    console.log(this.urlSearch);
    this.abstractSv.get(this.urlSearch).subscribe((res: any) => {
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
    console.log(datos);
    console.log(this.tModal);
    let encodedUrl: any;
    if (this.tModal == 'razonSocial') {
      encodedUrl = `usersIdentities/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Bwhere%5D%5Bname%5D%5Blike%5D=%25${datos.text}%25&filter%5Border%5D%5B${datos.filter[0].value}%5D=${this.orderName}`;
    }
    if (this.tModal == 'categorias') {
      encodedUrl = `categories/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Bwhere%5D%5Bname%5D%5Blike%5D=%25${datos.text}%25&filter%5Border%5D%5B${datos.filter[0].value}%5D=${this.orderName}`;
    }
    if (this.tModal == 'propietarios') {
      encodedUrl = `users/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Bwhere%5D%5Bname%5D%5Blike%5D=%25${datos.text}%25&filter%5Border%5D%5B${datos.filter[0].value}%5D=${this.orderName}`;
    }
    return encodedUrl;
  }

  loadMoreItems() {
    if (this.end) {
      this.showLoadMoreButton = false;
      return;
    }
    this.offset = this.items.length;
    this.urlSearch = this.createUrl(this.datos);
    this.abstractSv.get(this.urlSearch).subscribe((res: any) => {
      this.items = [...this.items, ...res];
      if (res.length < this.limit) {
        this.end = true;
        this.showLoadMoreButton = false;
      }
    });
  }

  tipoModal(tipo: any, data: any) {
    console.log(this.titleData);
    this.tModal = tipo;
    if (this.tModal == 'razonSocial') {
      this.placeholder = `Buscar CUIT`;
    }
    if (this.tModal == 'categorias') {
      this.placeholder = `Buscar categorías`;
      console.log(data);
      this.titleData = data;
      this.originData = [...data];
    }
    if (this.tModal == 'propietarios') {
      this.placeholder = `Buscar usuario`;
    }
    this.select(data, true);
    const datos = {
      text: '',
      filter: this.opciones,
      order: this.orderName,
    };
    this.getData(datos);
    console.log(tipo);
  }

  goToUserDetail() {
    this.router.navigate(['comercio-update', this.comercioId]);
  }

  select(titular: any, first?: any) {
    console.log(titular, this.titleData);
    if (titular.length == 0 || titular == '') return;

    if (this.tModal == 'categorias') {
      if (first) return;
      console.log(titular, this.titleData);
      if (typeof this.titleData !== 'object') {
        this.titleData = [];
      }
      const existingItem = this.titleData.find(
        (item: any) => item.id === titular.id
      );
      if (!existingItem) {
        this.titleData.push(titular);
      }
    } else {
      this.titleData = titular;
    }
  }

  delete(index: number) {
    this.titleData.splice(index, 1);
  }

  cerrarModal() {
    if (this.tModal == 'categorias') {
      this.titleData = this.originData;
    } else {
      this.titleData = '';
    }
  }

  guardarCambios(data: any) {
    let path;
    let body;
    if (this.tModal == 'razonSocial') {
      path = 'stores';
      body = { userIdentityId: data.id };
    }
    if (this.tModal == 'propietarios') {
      path = 'stores';
      body = { userId: data.id };
    }
    if (this.tModal == 'categorias') {
      path = 'stores';
      let objectBody = {
        model: 'storesCategories',
        field: 'storeId',
        other: 'categoryId',
      };
      body = { bulk: [{ ...objectBody, items: data }] };
    }
    let url = `${path}/${this.comercioId}`;
    let header = { 'x-content-type': 'on' };

    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => {
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
        this.cerrarModal();
      },
      error: (err) => {
        this.snackbarSv.showError(
          'Algo malo sucedió cuando intentamos guardar la información. Por favor, intentalo de nuevo más tarde.'
        );
        console.log(err);
      },
      complete: () => this.getComercioData(),
    });
  }
}
