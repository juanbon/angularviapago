import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-component',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.css']
})
export class ConfirmComponentComponent implements OnInit {

  constructor(
		public dialogRef: MatDialogRef<ConfirmComponentComponent>,
		@Inject(MAT_DIALOG_DATA) public data: {
			title: string,
			content: string,
		}
	) { }

  ngOnInit(): void {
  }

}
