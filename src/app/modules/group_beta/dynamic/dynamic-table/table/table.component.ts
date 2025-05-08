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
import { PageEvent } from '@angular/material/paginator';

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


  totalItems = 0;
  pageSize = 50;
  currentPage = 0;

  //currentPage = 1;
  totalPages = 0;
  page = 1;
  fields: any[] = [];
  closeCallbackFunction = (args: any): void => {
    this.showForm = false;
    this.headerTitle = this.title;
    this.loadTable(this.filterData);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
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

  filterData: any[] = [];


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
  
    if (typeof this.permiso === 'number' && this.permiso > 0) {
      this.permiso = this.tokenStorageService.validatePe(this.permiso) ? 1 : 0;
    } else {
      this.permiso = 1;
    }
  
    this.headerTitle = this.title;
    this.initEmit = false;
  
    this.filterSubscribe$ = this.filterDataService.currentMessage.subscribe(message => {
      if (!this.initEmit) {
        this.initEmit = true;
        return; // 🔐 salta la primera emisión automática
      }
  
      this.totalPages = 0;
      this.currentPage = 0;
      this.filterData = message;
      this.loadTable(message);
    });
  
    this.filterData = this.filter || [];
    this.loadTable(this.filterData); // solo una llamada real
  }
  
  

  ngOnDestroy() {
    this.filterSubscribe$.unsubscribe();
  }

 



  loadTable(message: any[]): void {
    this.spinner = true;
    const url = this.getUrlUpdated(message, false);
  
    this.abstractService.get(url, this.usaApiBoletos).subscribe({
      next: (data) => {
        const items = Array.isArray(data) ? data : data.data;
        this.items = items;
  
        if (!items || items.length === 0) {
          this.snackBarService.showError('No se encontraron resultados');
          this.spinner = false;
          return;
        }
  
        // Procesar columnas
        const columns: any[] = [];
        const searchBlackList = ['TotalPages', 'Page'];
        const booleans: string[] = [];
  
        this.fields.forEach((field) => {
          if (field.type === 'bool') {
            booleans.push(field.key);
          }
          if (Array.isArray(field.notShow) && field.notShow.includes('search')) {
            searchBlackList.push(field.key);
          }
        });
  
        Object.keys(items[0]).forEach((key) => {
          if (!searchBlackList.includes(key)) {
            let label = key;
            this.fields.forEach((f) => {
              if (f.key === key) {
                label = f.label;
              }
            });
            const displayKey = key === 'enable' ? true : key === 'disable' ? false : key;
            columns.push({ key: displayKey, text: label });
          }
        });
  
        this.columns = columns;
        this.booleans = booleans;
  
        this.showMaxItems = this.items.length < this.maxItemsValue;
  
        // Manejo de paginación
        if (this.paginated) {
          if (data.TotalPages) {
            this.totalPages = data.TotalPages;
          } else if (data.last_page) {
            this.totalPages = data.last_page;
          } else {
            this.totalPages = 1; // fallback por si no viene nada
          }
        }
  
        this.totalItems = data.total ?? items.length;
        this.spinner = false;
      },
      error: (error) => {
        this.spinner = false;
        this.items = [];
  
        const message =
          error.error?.message_detail || error.error?.message || 'Error desconocido';
        this.snackBarService.showError(message);
  
        if (error.status === 404) {
          this.snackBarService.showError(message);
        }
      },
    });
  }
  
        


  getUrlUpdated(message: any[], allPages: boolean) {
    let params = '';
  
    message?.forEach(f => {
      params += `${f.key}=${f.value}&`;
    });
  
    if (allPages) {
      params += 'Page=-1&';
    } else {
      params += `Page=${this.currentPage + 1}&PageSize=${this.pageSize}&`;
    }
  
    return this.validateURL(`${this.urlSearch}?${params.slice(0, -1)}`);
  }
  
  /*

  getUrlUpdated(message: any[], allPages: boolean) {
    let url = '';
    if (message != undefined && message != []) {
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

  */

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
    this.currentPage = 0;
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
