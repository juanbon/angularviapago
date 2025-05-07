import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from './field-base';

@Injectable({
	providedIn: 'root'
})
export class FieldControlService {
  constructor() { }

  toFormGroup(fields: FieldBase<string>[] ) {
    const group: any = {};

   
  fields.forEach(field => {
    const validators = field.required ? [Validators.required] : [];
    if (field.pattern) {
      validators.push(Validators.pattern(field.pattern));
    }

    group[field.key] = new FormControl(field.value || '', validators);
  // console.log(group[field.key])
  });

  return new FormGroup(group);
}
}
