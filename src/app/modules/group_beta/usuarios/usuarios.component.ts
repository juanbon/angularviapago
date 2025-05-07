import { Component, OnInit } from '@angular/core';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public url = '';
  public offset: number = 0;
  public limit: number = 30;
  public orderName: 'asc' | 'desc' = 'asc';
  public items: any;
  public showLoadMoreButton: boolean = false;
  public end: boolean = false;
  public datos: any;
  public searchPlaceholder: string = 'Buscar usuario';
  public opciones = [
            {
              "property": {"es": "Ordenar por", "en": "order"},
              "match": [
                {"label": {"es": "Nombre", "en": "name"}},
                {"label": {"es": "Fecha de actualización", "en": "updatedAt"}},
                {"label": {"es": "Fecha de creación", "en": "createdAt"}}
              ],
              "value": "name"
            },
            {
              "property": {"es": "Estado", "en": "state"},
              "match": [
                { "label": {"es": "Pendiente", "en": "pending"}},
                {"label": {"es": "Habilitado", "en": "enable"}},
                { "label": {"es": "Deshabilitado", "en": "disable"}}
              
              ],
              "value": ""
            },
        ]    

  constructor(
    private abstractSv: AbstractService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const datos = {
      text: '',
      filter: this.opciones,
      order: this.orderName
    };
    this.getData(datos);
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
    this.abstractSv.get(this.url).subscribe(res=> {
      this.items = res;
      if (res.length < this.limit) {this.showLoadMoreButton = false;
      } else {
        this.showLoadMoreButton = true;
      }
      console.log(res)
    })
  }

createUrl(datos: any) {
  const searchText = encodeURIComponent(datos.text.replace(/\s/g, ' '));
  return `users/?filter%5Boffset%5D=${this.offset}&filter%5Blimit%5D=${this.limit}&filter%5Bwhere%5D%5Bname%5D%5Blike%5D=%25${searchText}%25&filter%5Border%5D%5Bname%5D=asc&filter%5Bquery%5D=${searchText}`;
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

  navigate(id: string) {
    this.router.navigate(['/usuario-detalle', id]);
    console.log(id)
  }
}