import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { ConfirmComponentComponent } from '../../dynamic-table/confirm-component/confirm-component.component';
import { LogsModificaciones } from '../../dynamic-table/logs-modificaciones/logs-modificaciones.component';
import { SnackBarService, ToastConfig } from '../../../presentation/services/snack-bar.service';
import { FieldBase } from '../model/field-base';
import { FieldControlService } from '../model/field-control.service';
import { ACTION_FORM, FormTemplate } from '../model/form-template';
import * as moment from 'moment';
import { FieldComponent } from '../field/field.component';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ FieldControlService ]
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  dataForm = '';
  abstractService: AbstractService;
  snackBarService: SnackBarService;
  fields: FieldBase<any>[] = [];
  edit: boolean = false;
  require: string = '';
  items!: any[];
  editBlackList: Array<any>=[]
  spinner: boolean = false;
  @ViewChildren(FieldComponent)
  ngselect!: QueryList<FieldComponent>;
  @Input()
  config!: FormTemplate;
  @Input()
  closeCallbackFunction!: (args: any) => void;
  src:any;
  @Input()
  logs?: FormTemplate | null = null;
  @Input()
  columnId!: string;
  @Input()
  columns!: any[];

  configSnackBar: ToastConfig = {
    duration: 7000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };


  constructor(
    private qcs: FieldControlService,
    abstractService: AbstractService,
    snackBarService: SnackBarService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.abstractService = abstractService;
    this.snackBarService = snackBarService;
  }

  ngOnInit() {
    this.fields = this.config.fields.sort((a, b) => a.order - b.order);

    switch(this.config.action) {
      case ACTION_FORM.SHOW: {
        this.edit = false;
        this.showData();
        break;
      }
      case ACTION_FORM.EDIT: {
        this.edit = true;
        this.showData();
        break;
      }
      case ACTION_FORM.SAVE: {
        let postFields: Array<any> = [];

        this.fields.forEach(function(e){
          postFields.push(
            new FieldBase({
              key: e.key,
              label: e.label,
              type: e.type,
              url: e.url,
              options: e.options,
              maxlength : e.maxlength,
              dependence: e.dependence,
              children: e.children,
              dependentFields: e.dependentFields,
              require: e.require

            }));
            if(e.require === 'required'){
              FormComponent.prototype.require = e.require
            }
        });
        this.fields = postFields;

        this.form = this.qcs.toFormGroup(this.fields as FieldBase<string>[]);
        this.edit = true;
        this.require = FormComponent.prototype.require
        break;
      }
      default:
        break;
    }
  }

  onSubmit() {
    this.dataForm = JSON.stringify(this.form.getRawValue());

    if (this.config.action == ACTION_FORM.SAVE) {
      this.spinner = true;

      this.abstractService.post(this.config.post_url, this.dataForm).subscribe(
        data => {
          this.spinner = false;
          this.closeCallbackFunction(0);
          this.snackBarService.showSuccess("Elemento nuevo generado correctamente");
        },
        error => {
          this.spinner = false;
          this.snackBarService.showError(error.error.message, this.configSnackBar);
        }
      );
    }
    if (this.config.action == ACTION_FORM.EDIT) {
      const dialogRef = this.dialog.open(ConfirmComponentComponent, {
        width: '450px',
        height: '150px',
        disableClose: true,
        data: {
          title: "Editar",
          content: 'Desea editar el elemento?',
        }
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        this.spinner = true;

        if (result) {
          this.abstractService.put(this.config.show_url + '/' + this.config.id, this.dataForm).subscribe(
            data => {
              this.snackBarService.showSuccess("Elemento editado correctamente");
              this.showData();
            },
            error => {
              this.spinner = false;
              this.snackBarService.showError(error.error.message, this.configSnackBar);
            }
          );
        }else{
          this.spinner = false;
        }
      });
    }
  }

  showData() {
    this.spinner = true;
    let editBlackList = this.editBlackList
    this.abstractService.get(this.config.show_url + '/' + this.config.id).subscribe(
      data => {
        let fieldsShow: Array<any> = [];
        let fieldsReadonly: Array<any> = this.fields;
        let edit: boolean = !this.edit;

        if(!edit && data.FechaVigenciaDesde){
           data.FechaVigenciaDesde = moment(data.FechaVigenciaDesde).format();
        }

        fieldsReadonly.forEach(function(f){
          if(f.notShow && (f.notShow.indexOf('edit') > -1)){
            editBlackList.push(f.key)
          }
        })
        Object.keys(data).forEach(function(e)
        {
          let readonly: boolean = edit;
          let type: string = 'text';
          let url: string = '';
          let options: {key: string, value: string}[] = [];
          let dependence: boolean | null = false;
          let children: string | null = '';
          let dependentFields: string | null = '';
          let parent: string | null = '';
          //let require: string | null = '';

          fieldsReadonly.forEach(function(f){
            if (f.key === e) {
              if (f.readonly === true) {
                readonly = true;
              }
              if(f.options){
                options = f.options
              }

              if(f.dependence){
              dependence = f.dependence
              }

              if(f.children){
              children = f.children
              }


              if(f.dependentFields){
              dependentFields = f.dependentFields
              }

              if(f.parent){
              parent = f.parent
              }
              // if(f.require){
              //   require = f.require
              // }

              type = f.type;
              url = f.url;
            }
          });
            if(editBlackList.indexOf(e) === -1){
              let label:string = e
              fieldsReadonly.forEach(function(f){
                if(f.key === e){
                  label = f.label
                }
              })
              fieldsShow.push (new FieldBase({
                  key: e,
                  label: label,
                  readonly: readonly,
                  options:options,
                  type: type,
                  url: url,
                  dependence:dependence,
                  children:children,
                  dependentFields:dependentFields,
                  parent:parent/*,
                  require: require*/

                })
              )
              // if(require === 'required'){
              //   FormComponent.prototype.require = require
              // }
            }
        });
        this.fields = fieldsShow;

        this.form = this.qcs.toFormGroup(this.fields as FieldBase<string>[]);

        //this.require = FormComponent.prototype.require
        this.spinner = false;
        this.ngselect.changes.subscribe(() => {
          this.ngselect.toArray().forEach(e=>{
            if(e.field.type == 'select' &&  data[e.field.key]){
              e.selected =  data[e.field.key]
            }
            if(e.field.type ==='image' &&  data[e.field.key]){
                e.src=data[e.field.key]
            }
            if(e.field.type ==='image32px' &&  data[e.field.key]){
              e.src1=data[e.field.key]
            }
            if(e.field.type ==='image130px' &&  data[e.field.key]){
              e.src2=data[e.field.key]
            }
          })
          this.changeDetectorRef.detectChanges();
        })
        this.fields.forEach(element => {
          this.form.controls[element.key].setValue(data[element.key]);
        });
      },
      error => {
        this.spinner = false;
        console.log(error);
        this.snackBarService.showError("Error al cargar los elementos", this.configSnackBar);
      }
    );
  }

  closeDialog() {
    this.closeCallbackFunction(0);
  }

  getUrlUpdatedLogs(message: FormTemplate, id: string) {
    let url = '';
    if (typeof message != 'undefined') {
      url = message.logs_url + '?'+id+'=' + message.id;
      return url;
    }else{
      return url;
    }
  }

 onLogs() {


  if(this.logs){

  this.dataForm = JSON.stringify(this.form.getRawValue());

   this.spinner = true;
   let url = this.getUrlUpdatedLogs(this.logs,this.columnId);


    this.abstractService.get(url).subscribe(
      (data) => {



        this.spinner = false;
        this.items = data;


          if(Object.keys(data).length == 0){

              this.snackBarService.showError('No se encontraron modificaciones.', this.configSnackBar);
              return;


            }else{

              let columns: any = [];
              let searchBlackList: Array<any> = ['TotalPages','Page'];
              let booleans: Array<string> = [];

              let columns_black_list: Array<any> = searchBlackList;


          if(Object.keys(data).length > 0){

              Object.keys(data[0]).forEach(function(e)
              {
                const index = columns_black_list.indexOf(e);
                if (index < 0) {
                  let columnKey = {key: e, text: e};
                  columns.push(columnKey);
                }
              });

              this.columns = columns;

            }

            const dialogRef = this.dialog.open(LogsModificaciones, {
              width: 'auto',
              height: 'auto',
              disableClose: false,
              data: {
                title: "Cambios",
                content: data,
                columns: this.columns
              }
            });


          }



      },
      (error) => {
        this.spinner = false;
        if (error.status == 404) {
       //   this.items = [];
          this.snackBarService.showError('No se encontraron modificaciones.', this.configSnackBar);
        }
      }
    );


  }


  }

}
