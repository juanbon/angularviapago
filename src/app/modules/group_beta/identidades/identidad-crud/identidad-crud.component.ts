import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationIden, Search } from '../identidad';
import { Location } from '@angular/common';
import { AbstractService } from 'src/app/services/abstract-requests.service';

@Component({
  selector: 'app-identidad-crud',
  templateUrl: './identidad-crud.component.html',
  styleUrls: ['./identidad-crud.component.css']
})
export class IdentidadCrudComponent implements OnInit {
  config = ConfigurationIden[1];
  urlId: string | undefined;
  isCreate: boolean | undefined;
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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private abstractSv: AbstractService,
    private router: Router) { }

  ngOnInit(): void {
    this.isCreate = this.router.url == '/identidad-create' ? true : false; 
    this.config = this.isCreate ? ConfigurationIden[1] : ConfigurationIden[0];
    this.config.id = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.config)
    if (this.isCreate) {
      const datos = {
        text: '',
        filter: this.opciones,
        order: this.orderName
      };
      this.getData(datos);
      console.log(datos)
    }
    
    }

  closeForm = (args:any): void => {
    console.log('Callback invocado desde el hijo con argumento:', args);
    this.goBack();
  }

  gotoPage(page?:any) {
    this.router.navigate(['usuario-detalle', page]);
  }

  title(event: any) {
    this.titleData = event;
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      return  '../../../../assets/img/item-thumbnail.png'
   } else {
return avatar;
};
   
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

   goBack(): void {
    this.location.back();
  }

  select(titular: any) {
    this.titleData = titular;
  }
 
}
