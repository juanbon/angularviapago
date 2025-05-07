import { Component, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';

interface DatosProcesados {
  text: string;
  filter: string[];
  order: 'asc' | 'desc'
}

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnChanges {
  @Input() optionGroups: any;
  @Input() url: string = '';
  @Output() datoProcesado: EventEmitter<DatosProcesados> = new EventEmitter<DatosProcesados>();
  public searchTerm: any = '';
  @Input() searchPlaceholder: any = ''
  public dropdownOpen: boolean = false;
  public selectedGroup: any;
  public abreModal: boolean = false;
  public items: any;
  public ascendingOrder: boolean = true;
  
  constructor() { }

  ngOnChanges(): void {
    console.log(this.searchPlaceholder)
  }

  onSubmit() {
    //  this.getData()
    console.log(this.searchTerm)
    const datos: DatosProcesados = {
      text: this.searchTerm,
      filter: this.optionGroups,
      order: this.ascendingOrder ? 'asc' : 'desc'
    };
     this.datoProcesado.emit(datos);
     console.log(datos);
   }

   clearSearch() {
    this.searchTerm = ''; 
    this.onSubmit();
  }
 
   onSelectOption(event: any): void {
     const selectedOption = event.target.value;
     console.log('Opción seleccionada:', selectedOption);
   }

   toggleDropdown() {
    this.abreModal = !this.abreModal;
  }


  onDropdownClick(event: MouseEvent) {
    if (this.dropdownOpen) { 
      event.stopPropagation();
  }
  }
  
  @HostListener('document:click')
  onDocumentClick() {
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    }
    if (this.abreModal){ 
      this.dropdownOpen = true;
      this.abreModal = false
    }
  }

  onOptionChange(groupIndex: number, selectedValue: string) {
    this.optionGroups[groupIndex].value = selectedValue;
    console.log('Selected Value:', selectedValue, this.optionGroups);
  this.onSubmit()
  }

  toggleOrder() {
    this.ascendingOrder = !this.ascendingOrder;
    this.onSubmit();
  }

  async clearFilters() {
    await this.optionGroups.forEach((group:any) => {
      console.log(this.optionGroups)
      group.value = '';
      group.match.value = null; 
    });
   
    this.dropdownOpen = false;
    this.onSubmit();

    console.log(this.optionGroups)
    // Realiza la acción deseada para borrar los filtros
  }

}
