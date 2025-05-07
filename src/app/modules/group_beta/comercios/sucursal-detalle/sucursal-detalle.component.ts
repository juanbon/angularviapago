import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { Search } from '../sucursal';

@Component({
  selector: 'app-sucursal-detalle',
  templateUrl: './sucursal-detalle.component.html',
  styleUrls: ['./sucursal-detalle.component.css']
})
export class SucursalDetalleComponent implements OnInit {
  public branchId: any;
  public url: string = '';
  public userData$: Observable<any> | undefined;
  @ViewChild('myModal') 
  modal!: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef | any;
  public sinFoto: any = null;
  public offset: number = 0;
  public datos: any;
  public end: boolean = false;
  public showLoadMoreButton: boolean = true;
  public orderName: 'asc' | 'desc' = 'asc';
  public items: any;
  public limit: number = 30;
  public titleData: any;
  public opciones = Search;
  public tModal: string = ''

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.branchId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getSucursalData();
    const datos = {
      text: '',
      filter: this.opciones,
      order: this.orderName
    };
     this.getData(datos);

  }

  getSucursalData(){
    let url = `branches/${this.branchId}`;
    this.userData$ =  this.abstractSv.get(url);
  //   .subscribe((res: any) => {
  //     console.log(res)
  //   this.userData$ = res;
     
  //  })
  this.abstractSv.get(url)
    .subscribe((res: any) => {
      console.log(res)
     
   })
  }

  // gotoPage(page: any) {
  //   this.router.navigate(['comercio-detalle', page]);
  // }
  goBack(): void {
    this.location.back();
  }

  gotoPage(a: string, data: any = '') {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
      console.log(data)

    }
    this.router.navigate([a, data]);

    console.log(a, data)

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

   selectProfilePicture(): void {
    console.log('ssss', this.sinFoto);
    if (!this.sinFoto) {
      this.upDateImage(null);
    } else {
      this.fileInput.nativeElement.click();
    }

}
onFileSelected(event: any): void {
  let file: File = event.target.files[0];
 console.log(file)
//  console.log(file)
   this.upDateImage(file)
   event = '';
}


upDateImage(img: any) {
  let url = `branches/${this.branchId}/image`;
  let header = { 'x-content-type': 'on' };
  let body = new FormData();
    body.append('file', img);
    console.log(body)
  this.abstractSv.put(url, body, header).subscribe({
    next: (res) => console.log(res),
    error: (err) => console.log(err),
    complete: () => this.getSucursalData()
  })
}

getData(datos?:any){
  this.offset = 0;
  this.datos = datos;
  this.end = false;
  this.showLoadMoreButton = false;
  console.log(this.datos)
  this.orderName = this.datos.order
    this.url = this.createUrl(this.datos);
    console.log(this.url)
    this.abstractSv.get(this.url).subscribe((res: any)=> {
      this.items = res;
      if (res.length < this.limit) {this.showLoadMoreButton = false;
      } else {
        this.showLoadMoreButton = true;
      }
      console.log(res)
    })
  }

createUrl(datos: any){
  console.log(datos)
 return `stores/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][name][like]=%${datos.text}%&filter[order][${datos.filter[0].value}]=${this.orderName}`
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

guardarCambios(data: any) {
  console.log(data)
  if (!data) return;
  let url = `branches/${this.branchId}`;
  let header = { 'x-content-type': 'on' };
  let body = { storeId: data.id };
  
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => this.getSucursalData(),
      error: (err) => console.log(err),
      complete: () => this.cerrarModal()
    });
  }

  goToBranchDetail() {  
    this.router.navigate(['sucursal-update', this.branchId]);
  }

select(titular: any) {
  this.titleData = titular;
  console.log(this.titleData)
}

cerrarModal() {
  this.titleData = '';
  // console.log(this.modal.nativeElement)
  // this.modal.nativeElement.hide();
}


}
