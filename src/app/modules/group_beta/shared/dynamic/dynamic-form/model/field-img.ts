import { FieldBase } from './field-base';

export class ImgField extends FieldBase<string> {
  override controlType = 'img';
}