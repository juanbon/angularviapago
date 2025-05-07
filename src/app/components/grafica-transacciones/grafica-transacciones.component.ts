import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafica-transacciones',
  templateUrl: './grafica-transacciones.component.html',
  styleUrls: ['./grafica-transacciones.component.css']
})
export class GraficaTransaccionesComponent implements OnInit {
  chartData: any[] = [];
  tiposDisponibles: { id: number; key: string; value: string }[] = [];
  selectedTipos: string[] = [];
  fromDate = ''; // YYYY-MM-DD
  toDate = '';

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  view: [number, number] = [1200, 400];
showLegend = true;
showLabels = true;



  constructor(private transaccionService: TransaccionService) {}

  ngOnInit(): void {
    this.cargarTipos();
    const today = new Date();
    const priorDate = new Date().setDate(today.getDate() - 30);
  
    this.fromDate = new Date(priorDate).toISOString().split('T')[0];
    this.toDate = today.toISOString().split('T')[0];
  }
  


/*
  fromDate: string = '';
toDate: string = '';   */
minToDate: string = '';
maxToDate: string = '';
maxFromDate: string = '';

actualizarRangoToDate() {
  if (!this.fromDate) return;

  const from = new Date(this.fromDate);
  const minTo = new Date(from);
  const maxTo = new Date(from);
  maxTo.setDate(maxTo.getDate() + 18); // Máximo 14 días

  this.minToDate = this.formatDate(minTo);
  this.maxToDate = this.formatDate(maxTo);

  // También opcionalmente podrías impedir elegir un "Desde" en el futuro
  const today = new Date();
  this.maxFromDate = this.formatDate(today);

  // Resetear toDate si está fuera del rango
  if (this.toDate) {
    const to = new Date(this.toDate);
    if (to < minTo || to > maxTo) {
      this.toDate = '';
    }
  }
}

formatDate(date: Date): string {
  return date.toISOString().split('T')[0]; // yyyy-mm-dd
}





cargarTipos() {
  this.transaccionService.getTipos().subscribe((tipos: any[]) => {
    console.log(tipos);  // Verifica lo que se recibe del servidor

    // Usamos datos estáticos correctos
    this.tiposDisponibles = [
      { "id": 27, "key": "accreditation", "value": "Acreditacion" },
      { "id": 28, "key": "accreditation_credit", "value": "Acreditacion de credito" },
      { "id": 29, "key": "accreditation_ultra", "value": "Acreditacion Ultra" },
      { "id": 2, "key": "cashback", "value": "Cashback por Viapago" },
      { "id": 21, "key": "cashin_coelsa", "value": "Cobranza por QR" }
    ];

    // Seleccionamos los tipos basados en los datos estáticos
    this.selectedTipos = this.tiposDisponibles.map(t => t.key);

    this.filtrar();
  });
}







  

  filtrar() {
    if (!this.fromDate || !this.toDate || this.selectedTipos.length === 0) return;
  
    const allTypesSelected = this.selectedTipos.length === this.tiposDisponibles.length;
  
    const params: any = {
      from: this.fromDate,
      to: this.toDate
    };
  
    if (!allTypesSelected) {
      params.types = this.selectedTipos;
    }
  
    this.transaccionService.getTransacciones(params).subscribe(data => {




/*

      data = [
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

      */








      this.procesarDatos(data);
    });
  }
  

  procesarDatos(transacciones: any[]) {
    const dataGrouped = transacciones.reduce((acc, { day, type, total_amount }) => {
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
