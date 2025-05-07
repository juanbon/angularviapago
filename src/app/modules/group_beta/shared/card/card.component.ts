import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() avatar: string = '../../../../assets/img/item-thumbnail.png' || '';
  @Input() title: string | null | undefined = '';
  @Input() actionButton: boolean = false;
  @Input() description: string | null | undefined = '';
  @Input() text: string | null | undefined = '';
  @Input() label: string | null | undefined = '';
  @Input() headerLabelTop: string | null | undefined = '';
  @Input() headerLabelBottom: string | null | undefined = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.description, this.avatar)
  }

  imgPerfil(avatar: any) {
    if (!avatar) {return  '../../../../../assets/img/item-thumbnail.png'
   } else {
return this.avatar};
   
   }  
}
