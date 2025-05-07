import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-log-detalle',
  templateUrl: './log-detalle.component.html',
  styleUrls: ['./log-detalle.component.css']
})
export class LogDetalleComponent implements OnInit {
public data: any;

  constructor(    
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  let dataString: any = this.route.snapshot.paramMap.get('id');
    this.data = JSON.parse(dataString);
    console.log(this.data)
  
  }

  goBack(): void {
    this.location.back();
  }
  // get paramsAsJson(): string {
  //   return JSON.parse();
  // }

}
