export class FieldBase<T> {
  value: T|undefined;
  key: string;
  label: string;
  showLabel: boolean;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  url: string;
  text: string;
  readonly: boolean;
  pattern: string;
  msj: string;
  maxlength:number;

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      showLabel?: boolean;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      url?: string;
      text?: string;
      readonly?: boolean;
      options?: {key: string, value: string}[];
      pattern?: string;
      msj?: string;
      maxlength?:number;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.showLabel = options.showLabel || true;
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || 'textbox';
    this.type = options.type || 'text';
    this.options = options.options || [];
    this.url = options.url || '';
    this.text = options.text || '';
    this.readonly = options.readonly || false;
    this.pattern = options.pattern || '';
    this.msj = options.msj || '';
    this.maxlength = options.maxlength || 50;

  }
}
