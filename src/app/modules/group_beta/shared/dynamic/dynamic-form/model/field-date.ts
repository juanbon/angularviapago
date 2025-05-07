import { FieldBase } from "./field-base";

export class DateField extends FieldBase<string> {
    override controlType = 'date';
}