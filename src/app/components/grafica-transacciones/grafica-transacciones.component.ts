import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-grafica-transacciones',
  templateUrl: './grafica-transacciones.component.html',
  styleUrls: ['./grafica-transacciones.component.css']
})
export class GraficaTransaccionesComponent implements OnInit {
  chartData: any[] = [];
  pieChartData: any[] = [];  // Datos para el gráfico de torta
  tiposDisponibles: { id: number; key: string; value: string }[] = [];
  selectedTipos: string[] = [];
  fromDate = ''; // YYYY-MM-DD
  toDate = '';

  legendPosition = LegendPosition.Right;

  chartDataByStatus: any[] = [];


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#FF5733', // Rojo
      '#808080', // Gris (reemplazado el naranja)
      '#1E90FF', // Azul
      '#32CD32', // Verde
      '#8A2BE2', // Violeta
      '#FFD700', // Amarillo
      '#FF1493', // Rosa fuerte
      '#00CED1', // Turquesa
      '#8B4513', // Marrón
      '#800080',  // Púrpura
       '#39FF14'
    ]
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

  minToDate: string = '';
  maxToDate: string = '';
  maxFromDate: string = '';


  procesarDatosPorStatus(transacciones: any[]) {
    const dataGroupedByStatus = transacciones.reduce((acc, { status, total }) => {
      if (!acc[status]) acc[status] = 0;
      acc[status] += total; // Sumar el total de transacciones por estado
      return acc;
    }, {} as Record<string, number>);
  
    // Asignamos los resultados procesados para el gráfico de torta por estado
    this.chartDataByStatus = Object.entries(dataGroupedByStatus).map(([status, totalAmount]) => ({
      name: status,  // 'name' será el 'status' como 'confirm', 'cancel', etc.
      value: totalAmount // El valor es la cantidad total de transacciones para ese estado
    }));
  }
  


  actualizarRangoToDate() {
    if (!this.fromDate) return;

    const from = new Date(this.fromDate);
    const minTo = new Date(from);
    const maxTo = new Date(from);
    maxTo.setDate(maxTo.getDate() + 18); // Máximo 14 días

    this.minToDate = this.formatDate(minTo);
    this.maxToDate = this.formatDate(maxTo);

    const today = new Date();
    this.maxFromDate = this.formatDate(today);

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
      this.tiposDisponibles = tipos;
      this.selectedTipos = [];
      this.filtrar();
    });
  }

  filtrar() {
    if (!this.fromDate || !this.toDate) return;
  
    const allTypesSelected = this.selectedTipos.length === 0;
  
    const params: any = {
      from: this.fromDate,
      to: this.toDate
    };
  
    if (!allTypesSelected) {
      params.types = this.selectedTipos;
    }
  
    this.transaccionService.getTransacciones(params).subscribe(data => {
      this.procesarDatos(data); // Para el gráfico de barras por tipo
      this.procesarDatosPorStatus(data); // Para el gráfico de torta por estado
    });
  }
  

  onLegendLabelClick(event: any): void {
    console.log('Hiciste clic en la leyenda:', event);

    const clickedType = event.name;

    if (this.selectedTipos.includes(clickedType)) {
      this.selectedTipos = this.selectedTipos.filter(t => t !== clickedType);
    } else {
      this.selectedTipos.push(clickedType);
    }

    console.log('Tipos seleccionados:', this.selectedTipos);

    this.filtrar();
  }

  procesarDatos(transacciones: any[]) {
    const dataGrouped = transacciones.reduce((acc, { day, type, total_amount }) => {
      const date = new Date(day).toLocaleDateString();
      if (!acc[date]) acc[date] = [];

      const tipoSeleccionado = this.tiposDisponibles.find(t => t.key === type);
      const displayName = tipoSeleccionado ? tipoSeleccionado.value : type;

      acc[date].push({
        name: displayName,
        value: parseFloat(total_amount || "0")
      });
      return acc;
    }, {} as Record<string, { name: string; value: number }[]>);

    this.chartData = Object.entries(dataGrouped).map(([date, series]) => ({
      name: date,
      series
    }));

    // Ahora agrupamos por tipo para el gráfico de torta
    const pieData = transacciones.reduce((acc, { type, total_amount }) => {
      const tipoSeleccionado = this.tiposDisponibles.find(t => t.key === type);
      const displayName = tipoSeleccionado ? tipoSeleccionado.value : type;

      if (!acc[displayName]) {
        acc[displayName] = 0;
      }
      acc[displayName] += parseFloat(total_amount || "0");
      return acc;
    }, {} as Record<string, number>);

    this.pieChartData = Object.entries(pieData).map(([name, value]) => ({
      name,
      value
    }));
  }
}
