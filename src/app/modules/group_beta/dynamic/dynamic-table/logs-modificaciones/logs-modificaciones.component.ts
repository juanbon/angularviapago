import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logs-modificaciones',
  templateUrl: './logs-modificaciones.component.html',
  styleUrls: ['./logs-modificaciones.component.css']
})
export class LogsModificaciones implements OnInit {

  constructor(
		public dialogRef: MatDialogRef<LogsModificaciones>,
		@Inject(MAT_DIALOG_DATA) public data: {
			title: string,
			content: any[],
			columns: any[];
		}
	) { }

  ngOnInit(): void {
  }



  getColor(data : any[],index : number,header:any,row: any[]): string {

  		if((header=='LogOperacion')||(header=='LogFecha')||(header=='LogUsuario')){

  			return '#ffe4c4';

  		}

			return ( ( (data[index+1] !== undefined )&&(data[index+1][header] !== undefined )&&(data[index+1][header] != row[header])) || ( (data[index-1] !== undefined )&&(data[index-1][header] !== undefined )&&(data[index-1][header] != row[header]))) ? '#add8e6' : 'white';

}

}
