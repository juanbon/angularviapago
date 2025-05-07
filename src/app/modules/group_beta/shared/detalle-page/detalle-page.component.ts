import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationIden, Search } from '../../identidades/identidad'
import { ConfigurationTransaccion } from '../../transacciones/transaccion';
import { Location } from '@angular/common';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { ConfigurationUsuario } from '../../usuarios/usuario';
import { ConfigurationPuntoDeVenta } from '../../comercios/punto-de-venta';
import { Observable, map } from 'rxjs';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-detalle-page',
  templateUrl: './detalle-page.component.html',
  styleUrls: ['./detalle-page.component.css']
})
export class DetallePageComponent implements OnInit {

  config = ConfigurationIden[1];
  urlId: string | undefined;
  isCreate: boolean | undefined;
  titleData: any;
  public userData$: Observable<any> | undefined;
  public userImageData$: Observable<any> | undefined;
  public opciones = Search;
  public offset: number = 0;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = true;
  public orderName: 'asc' | 'desc' = 'asc';
  public url = '';
  public urlImageData = '';
  public items: any;
  public limit: number = 30;
  public namePage: string = '';
  @ViewChild('fileInput') fileInput: ElementRef | any;
  public sinFoto: any = null;
  public sailpointId: any;
  public placeholder: string = '';
  public privilege: any = null;
  @ViewChild('pdfContent')
  htmlContent!: ElementRef;
  pdfItem: any;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private abstractSv: AbstractService,
    private router: Router) {
      let user: any = localStorage.getItem('auth-user');
      if (user) this.privilege = JSON.parse(user)['access'];
        console.log(this.privilege)
     }

  ngOnInit(): void {
    console.log(this.router)
    this.sailpointId = this.route.snapshot.paramMap.get('id');

    if (this.router.url.includes('transaccion')) {
      this.isCreate = true;
      this.namePage = 'transaccion';
      console.log('transaccion');
      this.config =  ConfigurationTransaccion[0];
    }

    if (this.router.url.includes('usuario-detalle')) {
      this.isCreate = true;
      this.namePage = 'usuario-detalle';
      console.log('usuario-detalle');
      this.config =  ConfigurationUsuario[0];
    }

    if (this.router.url.includes('punto-de-venta-detalle')) {
      this.isCreate = true;
      this.namePage = 'punto-de-venta-detalle';
      console.log('punto-de-venta-detalle');
      this.placeholder = 'Buscar comercio';
      this.config =  ConfigurationPuntoDeVenta[0];
    }
    // this.isCreate = this.router.url == '/identidad-create' ? true : false;
    // this.config = this.isCreate ? ConfigurationIden[1] : ConfigurationIden[0];
    this.config.id = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.config)
    this.getSucursalData();
    if (this.isCreate) {
      const datos = {
        text: '',
        filter: this.opciones,
        order: this.orderName
      };
      this.getData(datos);
      console.log(datos)
    }
    this.getImageSelfie();

    }

  closeForm = (args:any): void => {
    console.log('Callback invocado desde el hijo con argumento:', args);
    this.goBack();
  }

  gotoComercio(a:any, page?:any) {
    this.router.navigate([a, page]);
  }

  gotoPage(a: string, page: any = '') {
    if (typeof page === 'object') {
      page = JSON.stringify(page);
      console.log(page)

    }
    if (this.namePage === 'usuario-detalle') {
      if(this.privilege !== 'administrator') return
      a = 'usuario-update';

  } else  if (this.namePage === 'punto-de-venta-detalle') {
    a = 'sucursal-detalle';
} else {
    a = 'usuario-detalle';
  }
    this.router.navigate([a, page]);
    console.log(a, page)

  }

  title(event: any) {
    this.titleData = event;
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      this.sinFoto = true;
      return  '../../../../assets/img/item-avatar.png'
   } else {
      this.sinFoto = false;
  return avatar;
  };

   }

   imgAvatar(avatar: any) {
    if (!avatar) {
      return  '../../../../assets/img/item-avatar.png'
   } else {
    return avatar;
    };
   }


   getData(datos?:any){
    this.offset = 0;
    this.datos = datos;
    this.end = false;
    this.showLoadMoreButton = false;
    this.orderName = this.datos?.order
      this.url = this.createUrl(this.datos);
      this.abstractSv.get(this.url).subscribe((res: any)=> {
        this.items = res;

        if (res.length < this.limit) {this.showLoadMoreButton = false;
        } else {
          this.showLoadMoreButton = true;
        }
      })
    }

    getImageSelfie(){
      const data = this.abstractSv.get(`users/${this.route.snapshot.paramMap.get('id')}`)

      data.subscribe((res) => {
        this.urlImageData = `usersIdentitiesImages/${res.personalUserIdentity.id}/1`
        this.userImageData$ = this.abstractSv.get(this.urlImageData).pipe(
          map((res) => {
            const response = {
              image: {}
            };

            const Base64 = 'data:image/png;base64,'
            response.image = Base64 + res[0].image;

            return response;
          }));
      });
    }

    createUrl(datos: any){
      console.log(datos)
     return `stores/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][name][like]=%${datos.text}%&filter[order][${datos.filter[0].value}]=${this.orderName}`
    }

  getSucursalData(){
    let url = `${this.config.show_url}${this.config.id}`;
    console.log(url)
    this.userData$ =  this.abstractSv.get(url);
    this.userData$.subscribe((res: any) => {
      console.log(res)
      this.pdfItem = res;
   })
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

  //imagen select

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
   console.log(file)
     this.upDateImage(file)
     event = '';


  }

  async upDateImage(img: any) {
    console.log(img)
    let url = `${this.url}/image`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
    body.append('file', img);
    console.log(body, img)
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.getData()
    })
  }

  goToSailpointDetail(branch: any, store: any) {
      branch = JSON.stringify(branch);
      store = JSON.stringify(store);
    this.router.navigate(['punto-de-venta-update', this.sailpointId, store, branch]);
  }

  navigateToDetail(item: any, type: string) {
    console.log(item);
    let route: string;

    switch (type) {
      case 'identidad':
        route = 'identidad-detalle';
        break;
      case 'cuenta':
        route = 'cuenta-detalle';
        break;
      case 'cards':
        route = 'tarjeta-detalle';
        break;
      default:
        return;
    }

    this.router.navigate([route, item.id]);
  }

  guardarCambios(data: any) {
    console.log(data)
    if (!data) return;
    let url = `sailpoints/${this.sailpointId}`;
    let header = { 'x-content-type': 'on' };
    let body = { storeId: data.id };

      this.abstractSv.put(url, body, header).subscribe({
        next: (res) => this.getSucursalData(),
        error: (err) => console.log(err),

      });
    }

generatePDF() {
  const doc = new jsPDF('p', 'pt', 'a4');

  const content = this.htmlContent.nativeElement;
  doc.html(content,  {
   callback: function(doc){
    doc.save('document.pdf');
   },
   margin:10,
   windowWidth: 200,
   width:100
  });
}
}
