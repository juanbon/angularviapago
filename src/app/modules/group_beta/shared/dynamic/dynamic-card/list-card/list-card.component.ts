import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnChanges {
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
  // @Input()
  // show!: FormTemplate;
  // @Input()
  // save!: FormTemplate;
  // @Input()
  // edit!: FormTemplate;
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
  @Input() data: any;
  @Input() goTo: string = '';
  @Input() col: number = 3;
  @Input() short: boolean = false;
  spinner: boolean = false;
  items!: any[];
  booleans: Array<string> = [];
  prices: Array<string> = [];
  @Input() sinType: boolean = false

  @Output() action = new EventEmitter<any>()
  constructor(private router: Router) { }

  ngOnChanges(): void {
    this.loadTable()
    console.log(this.goTo, this.showDelete)
  }


  navigate(goTo:string, id?: string) {
    console.log(goTo, id)
    this.router.navigate([goTo, id]);
    
  }

  loadTable(message?: any[]): void {
    this.spinner = true;
    // let url = this.getUrlUpdated(message);
    // this.abstractService.get(url).subscribe(
      // (data) => {
        console.log(this.data, "Tablecomponent")
        this.spinner = false;
        let filteredItems: any[] = [];
  
        // mostrar los elementos según los tipos especificados
        this.data.forEach((item: any) => {
          let filteredItem: any = {};
          this.types.forEach((type) => {
            // console.log(type)
            if (type.type === 'datetime') {
              filteredItem[type.key] = new Date(item[type.key]);
            } else {
              filteredItem[type.key] = item[type.key];
            }
          });
          filteredItems.push(filteredItem);
        });
  
        this.items = filteredItems;
        console.log('ACCCCA', this.items)
        // this.items = data;
        let columns: any = [];
        let searchBlackList: Array<any> = ['TotalPages','Page'];
        let booleans: Array<string> = [];
        let prices: Array<string> = [];

        this.types.forEach(function(e){
          console.log(e)
          if(e.type === 'bool') {
            booleans.push(e.key);
          }
          if(e.type === 'price') {
            prices.push(e.key);
          }
          if (e.notShow instanceof Array) {
            const index = e.notShow.indexOf('search');
            if (index > -1) {
              searchBlackList.push(e.key);
            }
          }
        });

        let columns_black_list: Array<any> = searchBlackList;
        if (this.items.length === 0) return;
        Object.keys(this.items[0]).forEach(function(e)
        {
          const index = columns_black_list.indexOf(e);

          if (index < 0) {
            let columnKey = {key: e, text: e};
            columns.push(columnKey);
          }
        });

        this.columns = columns;
        this.booleans = booleans;
        this.prices = prices;
console.log(this.paginated, this.items)
        // if (this.paginated && this.items.length > 0) this.totalPages = this.items[0].TotalPages;
      // },
      // (error) => {
      //   this.spinner = false;
      //   if (error.status == 404) {
      //     this.items = [];
      //     this.snackBarService.showError(error.error.message_detail);
      //   }
      // }
    // );
  }

  closeForm = (args:string, id:string): void => {
    console.log('Callback invocado desde el hijo con argumento:', args, id);
    let argument = {
     arg: args, 
      id: id
    };
    if (args === 'get') this.navigate(this.goTo, id)
    this.action.emit(argument);
  }



  

}
