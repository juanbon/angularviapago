import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { Search } from '../contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public userId: any;
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

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getUserData();
    const datos = {
      text: '',
      filter: this.opciones,
      order: this.orderName
    };
    this.getData(datos);

  }

  getUserData(){
    this.url = `contacts/${this.userId}`;
    this.userData$ =  this.abstractSv.get(this.url)
  //   .subscribe((res: any) => {
  //     console.log(res)
  //   this.userData$ = res;
     
  //  })
  // this.abstractSv.get(this.url)
  //   .subscribe((res: any) => {
  //     console.log(res)
     
  //  })
  }


  goBack(): void {
    this.location.back();
  }

  gotoPage(page: any) {
    this.router.navigate(['usuario-detalle', page]);
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
  //  console.log(file)
     this.upDateImage(file)
     event = '';
  }

  upDateImage(img: any) {
    let url = `contacts/${this.userId}/image`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
      body.append('file', img);
      console.log(body)
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.getUserData()
    })
  }

  getData(datos?:any){
    this.offset = 0;
    this.datos = datos;
    this.end = false;
    this.showLoadMoreButton = false;
    console.log(this.datos.filter[0].value)
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
   return `users/?filter[offset]=${this.offset}&filter[limit]=${this.limit}&filter[where][name][like]=%${datos.text}%&filter[where][status]=${datos.filter[1].value}&filter[order][${datos.filter[0].value}]=${this.orderName}`
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

  select(titular: any) {
    this.titleData = titular;
    console.log(this.titleData)
  }

  guardarCambios(data: any) {
  console.log(data)
  let url = `contacts/${this.userId}`;
  let header = { 'x-content-type': 'on' };
  let body = { userId: data.id };
  
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => this.getUserData(),
      error: (err) => console.log(err),
      complete: () => this.cerrarModal()
    });
  }

  cerrarModal() {
    this.titleData = '';
    // this.modal.nativeElement.hide();
  }
  

}
