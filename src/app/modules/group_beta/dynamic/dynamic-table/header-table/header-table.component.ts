import { Component, Input, OnInit } from '@angular/core';
import { FormTemplate } from '../../dynamic-form/model/form-template';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.css']
})
export class HeaderTableComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  new!: FormTemplate;
  @Input()
  report!: boolean;
  @Input()
  filters!: any[];
  @Input()
  functionReport!: (args: any) => void;
  @Input()
  functionNew!: (args: any) => void;
  @Input()
  showFilter!: boolean;
  @Input()
  showAdd!: boolean;
  @Input()
  showMaxItems: boolean = true;

  constructor(
    public dialog: MatDialog
  ) { 

  }

  ngOnInit(): void {
  }

  open() {
    this.functionNew(0);
  }

  download() {
    this.functionReport(0);
  }

}
