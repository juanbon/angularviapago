import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { FieldBase } from '../model/field-base';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicFormService } from '../dynamic-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent implements OnInit {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  @Input() show!: boolean;
  @Input() header!: boolean;
  public showPassword: boolean = false;

  abstractService: AbstractService;
  defaultValueEstado = '';
  File = '1' as string;
  rowLength: number = 1;
  userId: any = '';
  dataToJson: any;
  referenceLabel: boolean = false;

  constructor(
    abstractService: AbstractService,
    private dateAdapter: DateAdapter<Date>,
    private translate: TranslateService,
    private router:Router,
    private dynamicSv: DynamicFormService
    ) {
    this.translate.setDefaultLang('es');
    this.abstractService = abstractService;
    this.dateAdapter.setLocale('en-GB'); 

  }

  ngOnInit(): void {
      //  console.log(this.form.value, 'component FORM')
      //  console.log(this.field, 'component FIeld')
    if (this.field && this.field.type == "select" && this.field.url) {
      this.abstractService.get(this.field.url).subscribe(data => {
        this.field.options = [];
        // console.log('data de field component', data)
        data.forEach((element: any) => {
          this.field.options.push({ key: element[Object.keys(element)[0]], value: element[Object.keys(element)[0]] + ' - ' + element[Object.keys(element)[1]]});
        }); 
      });
    } 
  
  //   if (this.field && this.field.type == "sub") {
  //     this.avatar = this.form.controls[this.field.key].value.image;
  //     this.userId = this.form.controls[this.field.key].value.id
  //    this.form.controls[this.field.key].setValue(this.form.controls[this.field.key].value.name)
    
  // }

    if (this.field && this.field.type == "Estado") {
        this.defaultValueEstado = this.form.controls["Estado"].value?'Activo':'Inactivo';
    }
    // console.log(this.field.type)

    if (this.field && this.field?.type == "objectChild") {
     this.form.controls[this.field?.key].setValue(this.form.value[this.field.key]?.type);
  }



    if (this.field && this.field.type == "File") {

      this.File = this.form.controls["text"].value?'1':'0';

    }

    if (this.field && this.field.type == "textarea") {
    this.rowLength =  this.getRowCount(this.form.controls[this.field.key])
    // console.log(this.rowLength)
    }

  }

  getRowCount(content: any): number {
    // console.log(content)
    const lines = content.value.split('\n');
    return lines.length;
  }

  // action(e:any, url: any) {
  //   if (url !== 'action') return;
  //   this.dynamicSv.emitClickEvent(e)
  // }
  

   getFile(files: FileList) {

        const fileToUpload = files.item(0);

        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload as Blob);
        reader.onload = () => {

         this.form.controls["texto"].setValue(reader.result as string);

       }

    }

  

    downloadPdf() {

      const d = new Date();
      const downloadLink = document.createElement('a');
      const fileName = 'TerminoCondicion'+d.getTime()+'.pdf';
      downloadLink.href = this.form.controls["texto"].value;
      downloadLink.download = fileName;
      downloadLink.click();

    }

    toDate(dateString: string) {
    return  new Date(dateString);
    }

  navigateTo(goto:string, id:string) {
    this.router.navigate([goto, id]);  
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // transformData(data: any) {
  //   this.dataToJson = JSON.parse(data)
  //   if(this.dataToJson) this.referenceLabel = true;
  //   console.log('ACAAAAAAAA',this.dataToJson)

  //   // return this.dataToJson.companyName;
  // }

}



