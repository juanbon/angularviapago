import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafica-transacciones',
  templateUrl: './grafica-transacciones.component.html',
  styleUrls: ['./grafica-transacciones.component.css']
})
export class GraficaTransaccionesComponent implements OnInit {

  // Datos estáticos de la API simulada
  transacciones = [
    { "day": "2023-09-01", "type": "cashin_coelsa", "total": 3, "total_amount": "460.80" },
    { "day": "2023-09-01", "type": "cashout_coelsa", "total": 4, "total_amount": "151.73" },
    { "day": "2023-09-04", "type": "cashin_coelsa", "total": 1, "total_amount": "153.60" },
    { "day": "2023-09-04", "type": "cashout_coelsa", "total": 1, "total_amount": "12.31" },
    { "day": "2023-09-05", "type": "cashout_coelsa", "total": 4, "total_amount": "40.32" },
    { "day": "2023-09-06", "type": "cashout_coelsa", "total": 3, "total_amount": null },
    { "day": "2023-09-07", "type": "cashout_coelsa", "total": 4, "total_amount": "2011.34" },
    { "day": "2023-09-08", "type": "cashin_coelsa", "total": 5, "total_amount": "3024.79" },
    { "day": "2023-09-11", "type": "cashin_coelsa", "total": 1, "total_amount": "333.33" },
    { "day": "2023-09-11", "type": "cashout_sube", "total": 1, "total_amount": "150.00" },
    { "day": "2023-09-11", "type": "cashout_bind", "total": 2, "total_amount": "220.00" },
    { "day": "2023-09-11", "type": "cashout_coelsa", "total": 16, "total_amount": "1380.52" },
    { "day": "2023-09-11", "type": "transfer", "total": 6, "total_amount": "600.00" },
    // Añade más datos si es necesario
  ];

  // Configuración de la gráfica
  view: [number, number] = [700, 400];

  showLegend = true;
  showLabels = true;




 
  
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal, // ✅ forma correcta
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  

  // Variable que almacenará los datos procesados
  //chartData: { name: string; value: number }[] = [];


  constructor() { }

  ngOnInit(): void {
    // Procesamos los datos para adaptarlos a la gráfica
    this.procesarDatos();
  }

  // Función para procesar los datos
  chartData: any[] = [];

  procesarDatos() {
    const dataGrouped = this.transacciones.reduce((acc, { day, type, total_amount }) => {
      const date = new Date(day).toLocaleDateString();
  
      if (!acc[date]) acc[date] = [];
  
      acc[date].push({
        name: type,
        value: parseFloat(total_amount || "0")
      });
  
      return acc;
    }, {} as Record<string, { name: string; value: number }[]>);
  
    this.chartData = Object.entries(dataGrouped).map(([date, series]) => ({
      name: date,
      series
    }));
  }
  
  
    

}

    /*


    this.chartData = Object.entries(dataGrouped).map(([date, types]) => ({
      name: date,
      series: Object.entries(types).map(([type, amount]) => ({
        name: type,
        value: amount
      }))
    }));
  }


  */
  


