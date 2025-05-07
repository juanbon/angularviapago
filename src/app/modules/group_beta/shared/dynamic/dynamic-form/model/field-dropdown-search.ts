import { FieldBase } from './field-base';

export class DropdownSearchField extends FieldBase<string> {
  override controlType = 'dropdown-search';
}
