import { Component, Input, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { FieldBase } from '../model/field-base';
import { DateAdapter } from '@angular/material/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { CommunicationService } from 'src/app/services/communication.service';


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

  abstractService: AbstractService;
  defaultValueEstado = '';
  File = '1' as string;
  selected:any;
  src:any;
  src1:any;
  src2:any;
  children: any[] = [];
  selectedParent: number | null = null;
  selectedChildren: number | null = null;


 constructor(
    abstractService: AbstractService,
    private dateAdapter: DateAdapter<Date>,
    private eventService: EventServiceService, 
    private changeDetectorRef: ChangeDetectorRef, 
    private communicationService: CommunicationService

  ) {
    this.abstractService = abstractService;
    this.dateAdapter.setLocale('en-GB');

  this.communicationService.childselectorFunctionEvent.subscribe(() => {
    this.clearDependences();
  });

  }



clearDependences() {

    if(this.field.dependence){
      this.children = this.field.options;
    }

}


 ngOnInit(): void {


     this.eventService.optionUpdated.subscribe((options: any[]) => {
      this.children = options;
      this.changeDetectorRef.detectChanges();
});


    let dependentFieldsControl2 = this.field.parent ? this.form.get(this.field.parent) : null;

    if (this.field && this.field.type == "select" && this.field.url) {

      if(((this.field.options)&&(this.field.parent))&&((this.field.options.length === 0) || !this.field.options)){

        const dependentFieldsControlParent = this.form.get(this.field.parent);

        let valueParent = (dependentFieldsControlParent)?dependentFieldsControlParent.value:'';

        this.abstractService.get(this.field.url+'/?'+this.field.parent+'='+valueParent).subscribe(data => {

          this.field.options = [];

            data.forEach((element: any) => {
             // this.field.options.push({ key: element[Object.keys(element)[0]], value: element[Object.keys(element)[0]] + ' - ' + element[Object.keys(element)[1]]});
             this.field.options.push({ key: element[Object.keys(element)[1]], value: element[Object.keys(element)[3]] });
            });

            this.children = this.field.options; 

            if(!this.selected){
              this.selected =  this.field.options[0].key
            }
        
        });

      }else{

     
        this.abstractService.get(this.field.url).subscribe(data => {

          this.field.options = [];

            data.forEach((element: any) => {
             // this.field.options.push({ key: element[Object.keys(element)[0]], value: element[Object.keys(element)[0]] + ' - ' + element[Object.keys(element)[1]]});
           
             this.field.options.push({ key: element[Object.keys(element)[1]], value: element[Object.keys(element)[2]] + " ("+element[Object.keys(element)[1]]+")" });
            });

            this.children = this.field.options; 

            if(!this.selected){
              this.selected =  this.field.options[0].key
            }
        
        });
    
      }


    }else if(this.field && this.field.type == "select" && this.field.options.length > 0){
      this.selected =  this.field.options[0].key
    }


    if (this.field && this.field.type == "Estado") {
        this.defaultValueEstado = this.form.controls["Estado"].value?'Activo':'Inactivo';
    }


    if (this.field && this.field.type == "File") {

      this.File = this.form.controls["file"].value?'1':'0';

    }



  }



 onParentChange(selectedValue: any,field: any) {


  this.abstractService.get(field.children+'/?'+field.key+'='+selectedValue).subscribe(data => {

    this.children = [];
    data.forEach((element: any) => {
      this.children.push({ key: element[Object.keys(element)[0]], value: element[Object.keys(element)[0]] + ' - ' + element[Object.keys(element)[1]]});
    });

   const dependentFieldsControl = this.form.get(field.dependentFields);

  if (dependentFieldsControl) {
    dependentFieldsControl.setValue(null);
  }

  this.eventService.emitOptionUpdated(this.children);

  });
}


   getFilePDF(files: FileList) {

        const fileToUpload = files.item(0);
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload as Blob);
        reader.onload = () => {
         let stringBase64 = reader.result as string
         this.form.controls["file"].setValue(stringBase64.replace("data:application/pdf;base64,", ""));
        }
    }
    getFileUpload(files: FileList) {
      const fileToUpload = files.item(0);
      if(fileToUpload){
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload)
        reader.onloadend = () => {
          this.src = reader.result
          this.form.controls["image"].setValue(reader.result as string);
        };
      }
    }

    getFileUploadMultiple(files: FileList) {
      const fileToUpload = files.item(0);
      if(fileToUpload){
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload)
        reader.onloadend = () => {
          const imgEl =new Image;
          imgEl.src = reader.result?.toString() || '';
          imgEl.onload = () => {
            const resized1 = this.resizeImage(imgEl, 32);
            document.querySelector("#img32px")!.setAttribute("src", resized1);
            const resized2 = this.resizeImage(imgEl, 130);
            this.src2 = resized2
            this.form.controls["logo32px"].setValue(resized1 as string);
            this.form.controls["logo130px"].setValue(resized2 as string);
          }
        };
      }
    }

    resizeImage (imgEl:any, wantedWidth:number) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const aspect = imgEl.width / imgEl.height;

      canvas.width = wantedWidth;
      canvas.height = wantedWidth / aspect;

      ctx!.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL();
    }
    downloadPdf() {

      const d = new Date();
      const downloadLink = document.createElement('a');
      const fileName = 'TerminoCondicion'+d.getTime()+'.pdf';
      downloadLink.href = this.form.controls["file"].value;
      downloadLink.download = fileName;
      downloadLink.click();

    }

}



