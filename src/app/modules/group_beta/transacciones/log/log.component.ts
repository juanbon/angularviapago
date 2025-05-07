import { Component, Input, OnChanges } from '@angular/core';
import { Log } from '../transaccion';
import { Router } from '@angular/router';
declare const Object: any;

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnChanges {
@Input() items: any;
@Input() titulo: string = '';
@Input() userData: any;
logs = Log;

  constructor(private router:Router) { }

  ngOnChanges(): void {
//    console.log('aca,', this.logs)
 //   console.log(this.titulo, this.items, this.userData)
  }

  getObject(item: any){
    return Object.keys(item)
  }

  goTo(item:any) {
    let objetUser = { item: item, user: this.userData, titulo: this.titulo}
    let toString:any = JSON.stringify(objetUser);
    console.log(toString)
    this.router.navigate(['transaccion/log', toString])
  }

}
