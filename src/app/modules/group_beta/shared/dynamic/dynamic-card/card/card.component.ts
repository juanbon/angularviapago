import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() avatar: string = '';
  @Input() title: string | null | undefined = '';
  @Input() actionButton: boolean = false;
  @Input() description: string | null | undefined = '';
  @Input() text: string | null | undefined = '';
  @Input() label: string | null | undefined = '';
  @Input() headerLabelTop: string | null | undefined = '';
  @Input() headerLabelBottom: string | null | undefined = '';
  @Input() item: any;
  @Input() types: any;
  @Input() showGet: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() short: boolean = false;
  @Input() sinType: boolean = false;
  @Input()
  closeCallbackFunction!: (args: any, id:string) => void;
  
  public detail = true;
  constructor() { }

  ngOnInit(): void {
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      return  '../../../../assets/img/item-thumbnail.png'
    }else{
      return avatar
    };
  }

    trimLabel(label: string): string {
    return label.trim();
  }

   getClassForValue(value: string): string {
    if (value === 'error' || value === 'cancel') {
      return 'text-red';
    } else if (value === 'confirm') {
      return 'text-green';
    } else if (value === 'reverse') {
      return 'text-gray';
    } else {
      return '';
    }
  }

  closeDialog(a:any, id:string) {
    console.log(a, id)
    if (this.closeCallbackFunction) {
      this.closeCallbackFunction(a, id);
    }
  }

}
