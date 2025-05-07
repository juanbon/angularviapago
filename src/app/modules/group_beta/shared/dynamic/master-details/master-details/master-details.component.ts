import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent implements OnInit {

  base = [
    {
      "id": 1,
      "name": "Base",
      "description": "Reporte de bases",
      "action": "Listar subgrupos"
    },
    {
      "id": 2,
      "name": "Terminal",
      "description": "Reporte de terminales",
      "action": "Listar subgrupos"
    },
    {
      "id": 3,
      "name": "Localidad",
      "description": "Reporte de localidades",
      "action": "Listar subgrupos"
    }
  ];
  sub_base = [
    {
      "id_parent": 1,
      "name": "Base",
      "description": "Reporte de bases",
      "action": "Listar subgrupos"
    },
    {
      "id_parent": 1,
      "name": "Base",
      "description": "Reporte de terminales por base",
      "action": "Listar subgrupos"
    },
    {
      "id_parent": 1,
      "name": "Base",
      "description": "Reporte de bases por colectivos",
      "action": "Listar subgrupos"
    },
    {
      "id_parent": 1,
      "name": "Base",
      "description": "Reporte de bases por ventas",
      "action": "Listar subgrupos"
    },
    {
      "id_parent": 2,
      "name": "Terminal",
      "description": "Reporte de localidades llenas",
      "action": "Listar subgrupos"
    },
    {
      "id_parent": 3,
      "name": "Localidad",
      "description": "Reporte de terminal completo",
      "action": "Listar subgrupos"
    }
  ];

  subgroup: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subgroup = [];
    this.showGroup(1);
  }

  showGroup(id: any) {
    this.subgroup = this.sub_base.filter(element => element.id_parent == id );
  }

  showReport() {
    this.router.navigate(['/base-report']);
  }

}
