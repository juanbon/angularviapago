import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../dynamic-form/model/field-base';
import { FieldControlService } from '../../dynamic-form/model/field-control.service';
import { FilterDataService } from '../service/filter-data.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.css']
})
export class HeaderFilterComponent implements OnInit {

  @Input()
  filters!: any[];

  field!: FieldBase<string>;
  form!: FormGroup;

  filterDataService: FilterDataService;

  constructor(
    filterDataService: FilterDataService,
    private qcs: FieldControlService,
    private communicationService: CommunicationService 
  ) {
    this.filterDataService = filterDataService;
  }


  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.filters as FieldBase<string>[]);
  }

  onSearch() {
    let data: { key: string; value: any; }[] = [];
    this.filters.forEach(filter => {

      if (this.form.get(filter.key)?.value != null && this.form.get(filter.key)?.value != '') {
        if (filter.type == 'date')
          data.push({ key: filter.key, value: this.form.get(filter.key)?.value.toISOString().split('T')[0] });
        else if (filter.key.includes('[like]'))
          data.push({ key: filter.key, value: '%' + this.form.get(filter.key)?.value + '%' });
        else
          data.push({ key: filter.key, value: this.form.get(filter.key)?.value });
      }
    });
    this.filterDataService.filterData(data);
  }

  clear() {
    this.form.reset();
    this.filterDataService.filterData(undefined);
    this.communicationService.emitChildselectorFunctionEvent(); // limpia los select dependientes
  }

}
