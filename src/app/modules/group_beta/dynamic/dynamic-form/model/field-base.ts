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
  maxlength: number;
  dependence:boolean | null;
  children:string | null;
  dependentFields:string | null;
  parent:string | null;
  require: string;

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
      maxlength?: number;
      dependence?:boolean | null;
      children?:string | null;
      dependentFields?:string | null;
      parent?:string | null;
      require?:string;

    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.showLabel = options.showLabel || true;
    this.required = !!options.required;
    this.require = options.require || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || 'textbox';
    this.type = options.type || 'text';
    this.options = options.options || [];
    this.url = options.url || '';
    this.text = options.text || '';
    this.readonly = options.readonly || false;
    this.maxlength = options.maxlength || 255;
    this.dependence = options.dependence ?? null; // Usando el operador de fusión nula para asignar un valor por defecto
    this.children = options.children ?? null; // Usando el operador de fusión nula para asignar un valor por defecto
    this.dependentFields = options.dependentFields ?? null; // Usando el operador de fusión nula para asignar un valor por defecto
    this.parent = options.parent ?? null;

  }
}
