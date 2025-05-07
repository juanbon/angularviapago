import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { ConfirmComponentComponent } from '../../dynamic-table/confirm-component/confirm-component.component';
import { SnackBarService } from '../../../../presentation/services/snack-bar.service';
import { FieldBase } from '../model/field-base';
import { FieldControlService } from '../model/field-control.service';
import { ACTION_FORM, FormTemplate } from '../model/form-template';
import * as moment from 'moment';
import { orderBy } from 'lodash';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  spinner: boolean = false;
  @Input() userId?: string = '';
  @Input()
  config!: FormTemplate;
  @Input()
  closeCallbackFunction!: (args: any) => void;
  @Input() namePage: string = '';

  @Output() title = new EventEmitter<any>();

  constructor(
    private qcs: FieldControlService,
    abstractService: AbstractService,
    snackBarService: SnackBarService,
    public dialog: MatDialog,
    private tokenSV: TokenStorageService
  ) {
    this.abstractService = abstractService;
    this.snackBarService = snackBarService;
  }

  ngOnInit() {
    this.fields = orderBy(this.config.fields, ['order']);
    // this.fields = this.config.fields.sort((a, b) => a.order - b.order);

    // this.orderedFields = orderBy(this.fields, ['order']);
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
        console.log(this.fields)
        this.fields.forEach(function(e){
          console.log(e, 'formulario')
          postFields.push(
            new FieldBase({
              key: e.key,
              label: e.label !== '' && e.label !== null ? e.label : e.key,
              type: e.type,
              options: e.options,
              url: e.url,
              readonly: e.readonly,
              order: e.order,
              value: e.value,
              showLabel: true,
              pattern: e.pattern,
              required: e.required
            }));
        });


        console.log(postFields)
        this.fields = postFields;

        this.form = this.qcs.toFormGroup(this.fields as FieldBase<string>[]);
        console.log(this.form)
        this.edit = true;
        console.log(this.edit)
        break;
      }
      default:
        break;
    }
  }



  //
  async postUserData(value: any){
   let tok =  await this.tokenSV.getToken()
  //  console.log(tok)userToken['accessToken'];
   console.log(tok)
   const body = this.convertirCadenasVaciasANull(value);
console.log(body)
  let hea = {
    'content-type': "application/json; charset=UTF-8",
    'x-access-token':  tok
  }
  console.log(body, hea)
  // headers['x-access-token']

   this.abstractService.post(this.config.post_url, body, hea).subscribe({
    next: (res)=>{
      this.spinner = false;
      this.closeCallbackFunction(0);
      this.snackBarService.showSuccess("Elemento nuevo generado correctamente");
    },
    error: (error)=> {
      this.spinner = false;
          console.log(error);
          this.snackBarService.showError('Algo malo sucedió cuando intentamos guardar la información. Por favor, intentalo de nuevo más tarde.');
    }
    });
  }


  convertirCadenasVaciasANull(objeto: any): void {
    for (let key in objeto) {
      if (typeof objeto[key] === 'object' && objeto[key] !== null) {
        this.convertirCadenasVaciasANull(objeto[key]); // Recursivamente, si el valor es otro objeto
      } else if (objeto[key] === "") {
        objeto[key] = null; // Si el valor es una cadena vacía, se cambia a null
      }
    }
    return objeto;
  }

  onSubmit() {
    if (this.namePage == 'usuario-create') {
      this.postUserData(this.form.getRawValue())
    return
    }
    if (this.userId) this.form.controls['userId'].setValue(this.userId);

    let data = this.convertirCadenasVaciasANull(this.form.getRawValue())
    console.log(data);
    this.dataForm = JSON.stringify(data);
    console.log(this.dataForm)
    if (this.config.action == ACTION_FORM.SAVE) {
      this.spinner = true;
      console.log(this.dataForm)
      this.abstractService.post(this.config.post_url, this.dataForm).subscribe(
        data => {
          this.spinner = false;
          this.closeCallbackFunction(0);
          this.snackBarService.showSuccess("Elemento nuevo generado correctamente");
        },
        error => {
          this.spinner = false;
          console.log(error);
          this.snackBarService.showError('Algo malo sucedió cuando intentamos guardar la información. Por favor, intentalo de nuevo más tarde.');
        }
      );
    }

    // body":{"id":"218720e1-537b-4525-be82-a78bfaa031ea","userId":"119a91d8-4f5d-4ac5-b457-b17c68eb8aa2","contactUserId":"04a072fa-aa50-4859-9e8b-ce082f732658","status":"enable","type":"internal","name":"Maxi Marelli","notes":null,"phone":"666","email":"maximiliano.marelli@gmail.com","link1":null,"link2":null,"link3":null,"link4":null,"cbu":null,"alias":null}

    if (this.config.action == ACTION_FORM.EDIT) {
      const dialogRef = this.dialog.open(ConfirmComponentComponent, {
        width: '450px',
        height: '220px',
        disableClose: true,
        data: {
          title: "Editar",
          content: 'Desea editar el elemento?',
        }
      });

      dialogRef.afterClosed().subscribe(async (result: any) => {
        this.spinner = true;
        if (this.form.valid) {
          let tok =  await this.tokenSV.getToken()
         //  console.log(tok)userToken['accessToken'];
          console.log(tok)
         let hea = {
           'content-type': "application/json; charset=UTF-8",
           'x-access-token':  tok
         }

        if (result) {
          console.log('ver this.dataForm, hea', this.dataForm, hea)
          this.abstractService.put(this.config.show_url + this.config.id, this.dataForm, hea).subscribe(
            data => {
              console.log(data, 'datos')
              this.snackBarService.showSuccess("Elemento editado correctamente");
              this.showData();
            },
            error => {
              this.spinner = false;
              this.snackBarService.showError('Algo malo sucedió cuando intentamos guardar la información. Por favor, intentalo de nuevo más tarde.');
            }
          );
        }else{
          this.spinner = false;
        }
      }
      });
    }
  }

  showData() {
    console.log(this.config.show_url + '/' + this.config.id)
    this.spinner = true;
    this.abstractService.get(this.config.show_url + '/' + this.config.id).subscribe(
      data => {
        this.title.emit(data?.user)
        console.log('traer', data)
        let fieldsShow: Array<any> = [];
        let fieldsReadonly: Array<any> = this.fields;
       console.log( 'identidades', fieldsReadonly)
        let edit: boolean = !this.edit;


        if(!edit && data.FechaVigenciaDesde){
/*
            const D = new Date(moment(data.FechaVigenciaDesde).format());
            data.FechaVigenciaDesde = (D.getMonth() + 1)+'-'+D.getDate()+'-'+D.getFullYear();
          }else{
            */

           data.FechaVigenciaDesde = moment(data.FechaVigenciaDesde).format();

         }

         console.log('data del bd',data)

        Object.keys(data).forEach(function(e)
        {
          // console.log('f data del formulario', fieldsReadonly)
          let readonly: boolean = edit;
          let type: string = 'text';
          let url: string = '';
          let options: [] = [];
          let value: any;
          let order: any;
          let label: string = '';
          let pattern: string = '';
          let msj: string = '';
          let required: any;
          let showLabel: boolean = true;
          //  console.log('fieldsReadonly', fieldsReadonly);
          fieldsReadonly.forEach(function(f){
            //  console.log('ffff', f)
            if (f.key === e) {
              if (f.readonly === true) {
                readonly = true;
              }
             console.log('showlabel', f)
              type = f.type;
              url = f.url;
              label = f.label !== '' && f.label !== null ? f.label : f.key,
              order = f.order;
              showLabel = f.showLabel;
              pattern = f.pattern;
              msj = f.msj;
              required = f.required;
              if (f.type === 'select' || f.type === 'selectWLabel') {
                options = f.options;
              }

              console.log('showlabel', label)

            }


          });

if (e === fieldsReadonly.find((f) => f.key === e)?.key) {
  fieldsShow.push(
            new FieldBase({
              key: e,
              label: label,
              readonly: readonly,
              type: type,
              url: url,
              options: options,
              order: order,
              value: value,
              required: required,
              showLabel: showLabel,
              pattern: pattern,
              msj: msj

            })
            );
            console.log(fieldsShow)
          }
        });

        if (this.namePage == 'usuario-update') {
          fieldsShow.push(
            new FieldBase({
              showLabel: true,
              required: false,
              url: '',
              text: '',
              controlType: 'text',
              key: 'password',
              label: 'password',
              type: 'password',
              value: '',
              order: 9,
              readonly: false,
              pattern: '^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$',
              msj: 'La clave debe tener al menos 6 caracteres, contener letras y números',
            })
          )
        }
        // console.log(fieldsShow)
        this.fields = orderBy(fieldsShow, ['order']);
        // this.fields = orderBy(this.config.fields, ['order']);
        // console.log(this.fields)

        this.form = this.qcs.toFormGroup(this.fields as FieldBase<string>[]);

        this.spinner = false;

        this.fields.forEach(element => {
          this.form.controls[element.key].setValue(data[element.key]);
        });

        // console.log(this.form, 'formulario con valores')
      },
      error => {
        this.spinner = false;
        console.log(error);
        this.snackBarService.showError("Error al cargar los elementos");
      }
    );
  }

  closeDialog() {
    // this.closeCallbackFunction(0);
    if (this.closeCallbackFunction) {
      this.closeCallbackFunction('Argumento del hijo');
    }
    // console.log(this.closeCallbackFunction(0))
  }

}
