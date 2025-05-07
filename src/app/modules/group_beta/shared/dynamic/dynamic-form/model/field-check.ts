import { FieldBase } from './field-base';

export class ChekField extends FieldBase<string> {
  override controlType = 'checkbox';
}