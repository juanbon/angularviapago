import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { Subscription } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { FormTemplate } from 'src/app/modules/group_beta/dynamic/dynamic-form/model/form-template';
import { SnackBarService } from 'src/app/modules/group_beta/presentation/services/snack-bar.service';
import { FilterDataService } from 'src/app/modules/group_beta/dynamic/dynamic-table/service/filter-data.service';
import { ConfirmComponentComponent } from 'src/app/modules/group_beta/dynamic/dynamic-table/confirm-component/confirm-component.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input()
  title!: string;
  @Input()
  columns!: any[];
  @Input()
  types!: Array<any>;
  @Input()
  urlBase!: string;
  @Input()
  urlDelete!: string;
  @Input()
  urlSearch!: string;
  @Input()
  columnId!: string;
  @Input()
  show!: FormTemplate;
  @Input()
  save!: FormTemplate;
  @Input()
  edit!: FormTemplate;
  @Input()
  report!: boolean;
  @Input()
  filter!: any[];
  @Input()
  paginated!: boolean;
  @Input()
  showGet!: boolean;
  @Input()
  showAdd!: boolean;
  @Input()
  showEdit!: boolean;
  @Input()
  showDelete!: boolean;
  @Input()
  permiso!: number;
  @Input()
  usaApiBoletos!: boolean;
  @Input()
  maxItemsValue!: number;
  @Input()
  allPagesReport!: boolean;
  @Input()
  urlLogs?: string | null = null;
  @Input()
  showLogs!: boolean;
  @Input()
  logs?: FormTemplate | null = null;
  @Input()
  hideTable: boolean = false; 



  config!: FormTemplate;
  showForm: boolean = false;
  headerTitle = '';
  showMaxItems: boolean = true;

  spinner: boolean = false;

  booleans: Array<string> = [];

  currentPage = 1;
  totalPages = 0;
  page = 1;
  fields: any[] = [];
  closeCallbackFunction = (args: any): void => {
    this.showForm = false;
    this.headerTitle = this.title;
    this.loadTable(this.filterData);
  }

  newData = (args: any): void => {
    this.config = this.save;
    this.headerTitle = "Ingresar " + this.title;
    this.showForm = true;
  }

  items!: any[];
  abstractService: AbstractService;
  snackBarService: SnackBarService;

  filterData = [];

  filterDataService!: FilterDataService;
  filterSubscribe$: Subscription = new Subscription();

  initEmit = false;

  constructor(
    abstractService: AbstractService,
    public dialog: MatDialog,
    snackBarService: SnackBarService,
    filterDataService: FilterDataService,
    private tokenStorageService: TokenStorageService,
  ) {
    this.abstractService = abstractService;
    this.snackBarService = snackBarService;
    this.filterDataService = filterDataService;
  }

  ngOnInit(): void {
    this.fields = this.show.fields.sort((a, b) => a.order - b.order);
    if(typeof this.permiso === 'number' && this.permiso > 0){
      this.permiso = this.tokenStorageService.validatePe(this.permiso) ? 1 : 0;
    }else{
      this.permiso = 1;
    }
    this.initEmit = false;
    this.headerTitle = this.title;
    this.filterSubscribe$ = this.filterDataService.currentMessage.subscribe(
      message => {
        if (this.initEmit) {
          this.totalPages = 0;
          this.currentPage = 1;
          this.filterData = message;
          this.loadTable(message);
        } else {
          this.initEmit = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.filterSubscribe$.unsubscribe();
  }

  loadTable(message: any[]): void {
    this.spinner = true;
    let url = this.getUrlUpdated(message, false);
    this.abstractService.get(url , this.usaApiBoletos).subscribe(
      (data) => {


  if(data.length>0){

        this.spinner = false;
        this.items = data;
        let columns: any = [];
        let searchBlackList: Array<any> = ['TotalPages','Page'];
        let booleans: Array<string> = [];

        this.fields.forEach(function(e){
          if(e.type === 'bool') {
            booleans.push(e.key);
          }
          if (e.notShow instanceof Array) {
            const index = e.notShow.indexOf('search');
            if (index > -1) {
              searchBlackList.push(e.key);
            }
          }
        });

        let columns_black_list: Array<any> = searchBlackList;
        let fields = this.fields;

        Object.keys(data[0]).forEach(function(e)
        {
          let label:string = e
          fields.forEach(function(f){
            if(f.key === e){
                label = f.label
            }
          })
          let dato = e
          let header
          const index = columns_black_list.indexOf(e);
          if (index < 0) {
            header = dato === 'enable'?true : dato === 'disable' ? false: dato
            let columnKey = {key: header, text: label};
            columns.push(columnKey);
          }
        });

        this.columns = columns;
        this.booleans = booleans;


        if(this.items.length>=this.maxItemsValue){

          this.showMaxItems = false;

        }else{

        this.showMaxItems = true;

        }

        if (this.paginated && this.items.length > 0) this.totalPages = this.items[0].TotalPages;

            }else{

         this.snackBarService.showError('No se encontraron resultados');

      }



        
      },
      (error) => {
       this.snackBarService.showError(error.error.message_detail?error.error.message_detail:error.error.message);
        this.spinner = false;
        if (error.status == 404) {
          this.items = [];
          this.snackBarService.showError(error.error.message_detail?error.error.message_detail:error.error.message);
        }
      }
    );
  }

  getUrlUpdated(message: any[], allPages: boolean) {
    let url = '';
    if (message != undefined/* && message != []*/) {
      let filter = "";
      message.forEach(element => {
        filter = filter + element.key + '=' + element.value + '&';
      });
      (this.paginated) ? url = this.urlSearch + '?Page=' + this.currentPage + '&' : url = this.urlSearch + '?';
      if (allPages){
        url = this.urlSearch + '?Page=-1&'
      }
      return this.validateURL(url + filter.substring(0, filter.length - 1));
    } else {
      (this.paginated) ? url = this.urlSearch + '?Page=' + this.currentPage : url = this.urlSearch;
      if (allPages){
        url = this.urlSearch + '?Page=-1'
      }
      return url;
    }
  }

  validateURL(url: string) {
    const index = url.lastIndexOf("?");
    if (index !== -1) {
      const count = url.split("?").length - 1;
      if (count > 1){
        url = url.substring(0, index) + "&" + url.substring(index + 1);
      }
    }
    return url
  }

  showData(id: any) {
    this.show.id = id;

    this.headerTitle = "Ver " + this.title;
    this.config = this.show;
    this.showForm = true;

  if (this.logs) {

    this.logs = this.logs;
    this.logs.id = id;

    }

  }

  editData(id: any) {
    this.edit.id = id;

    this.headerTitle = "Editar " + this.title;
    this.config = this.edit;
    this.showForm = true;
  }

  deleteData(id: any) {
    const dialogRef = this.dialog.open(ConfirmComponentComponent, {
      width: '450px',
      height: '150px',
      disableClose: true,
      data: {
        title: "Eliminar",
        content: 'Desea eliminar el elemento seleccionado?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.abstractService.delete(this.urlDelete + '/' +  id).subscribe(
          data => {
            this.loadTable(this.filterData);
            this.snackBarService.showSuccess("Elemento eliminado correctamente");
          },
          error => {
            console.log(error);
            this.snackBarService.showError(error.error.message);
          }
        );
      }
    });
  }

  downloadReport = (args: any): void => {
    let url = this.getUrlUpdated(this.filterData, this.allPagesReport);
    this.abstractService.get(url, this.usaApiBoletos).subscribe(
      data => {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'VB');

        var date = new Date();
        var output_date = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2) + '_' + date.getHours() + ":" + date.getMinutes();

        XLSX.writeFile(wb, "REPORTE-" + this.title + "-" + output_date + ".xlsx");
      },
      error => {
        if ((error.error.message_detail)&&(error.error.message_detail.includes("SQL Server")))
        {
          const errorMessage = error.error.message_detail.substring(error.error.message_detail.lastIndexOf('[SQL Server]')).replace('[SQL Server]', '')
          this.snackBarService.showError(errorMessage);
        }
        else{

          if(error.error.message_detail){

          this.snackBarService.showError(error.error.message_detail);

          }
        
        }
      }
    );
  }

  /*loadHeader() {
    let head: string[] = [];

    this.columns.forEach(element => {
      head.push(element.text);
    });

    return [head];
  }*/

  /*loadData() {
    let data: any[] = [];
    this.items.forEach(element => {
      let row: string[] = [];
      this.columns.forEach(col => {
        row.push(element[col.key]);
      });
      data.push(row);
    });

    return data;
  }*/

  next() {
    if (this.currentPage != this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.page = this.currentPage;
    }
    this.loadTable(this.filterData);
  }

  prev() {
    if (this.currentPage != 1) {
      this.currentPage = this.currentPage - 1;
      this.page = this.currentPage;
    }
    this.loadTable(this.filterData);
  }

  first() {
    this.currentPage = 1;
    this.page = this.currentPage;
    this.loadTable(this.filterData);
  }

  last() {
    this.currentPage = this.totalPages;
    this.page = this.currentPage;
    this.loadTable(this.filterData);
  }

  change() {
    let pageInput = Number((document.getElementById("page") as HTMLInputElement).value);
    if (pageInput != null && pageInput >=1 && pageInput <= this.totalPages) {
      this.currentPage = pageInput;
      this.page = pageInput;
      this.loadTable(this.filterData);
    } else {
      this.snackBarService.showError("Número de página ingresada inválida");
    }
  }

}
