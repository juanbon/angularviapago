import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";
import { FieldBase } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/field-base";


// URLs
let urls = {
  search: 'sailpoints',
  get: 'sailpoints/',
  post: 'sailpoints/',
  put: 'sailpoints/'
};

// fieldsEdit
let fieldsEdit = [

   
  new FieldBase<any>({
    required: false,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'id',
    label: '',
    type: 'hidden',
    value: '',
    order: 101,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    required: false,
    url: '',
    text: '',
    controlType: 'textbox',
    key: 'storeId',
    label: '',
    type: 'hidden',
    value: '',
    order: 110,
    showLabel: false,
    readonly: true,
  }),
  new FieldBase<any>({
    required: false,
    url: '',
    text: '',
    controlType: 'textbox',
    key: 'branchId',
    label: '',
    type: 'hidden',
    value: '',
    order: 115,
    showLabel: false,
    readonly: true,
  }),
  new FieldBase<any>({
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'name',
    label: '',
    type: 'text',
    value: '',
    order: 1,
    showLabel: true,
    readonly: false,
    pattern: '.{2,}',

    
  }),
  new FieldBase<any>({
    required: true,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'status',
    label: '',
    type: 'select',
    options: [
            {key:'enable', value:'enable'},
            {key:'disable', value:'disable'}
    ],
    value: 'enable',
    order: 2,
    showLabel: true,
    readonly: false,
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'text',
    key: 'notes',
    label: 'Notas',
    type: 'text',
    value: '',
    order: 15,
    readonly: false,
    pattern: '^[A-Za-z0-9]{1,}.+'
  }),
  ];



// fieldsShow
let fieldsShow = [
 

    new FieldBase<any>({
        required: false,
        url: '', 
        text: '',
        controlType: 'textbox',
        key: 'id',
        label: '',
        type: 'hidden',
        value: '',
        order: 101,
        showLabel: false,
        readonly: true,
        
      }),
      new FieldBase<any>({
        required: false,
        url: '',
        text: '',
        controlType: 'textbox',
        key: 'storeId',
        label: '',
        type: 'hidden',
        value: '',
        order: 110,
        showLabel: false,
        readonly: true,
      }),
      new FieldBase<any>({
        required: false,
        url: '',
        text: '',
        controlType: 'textbox',
        key: 'branchId',
        label: '',
        type: 'hidden',
        value: '',
        order: 115,
        showLabel: false,
        readonly: true,
      }),
      new FieldBase<any>({
        required: true,
        url: '', 
        text: '',
        controlType: 'textbox',
        key: 'name',
        label: '',
        type: 'title',
        value: '',
        order: 1,
        showLabel: true,
        readonly: false,
        pattern: '.{2,}',
    
        
      }),
      new FieldBase<any>({
        required: true,
        url: '', 
        text: '',
        controlType: 'select',
        key: 'status',
        label: '',
        type: 'select',
        options: [
                {key:'enable', value:'enable'},
                {key:'disable', value:'disable'}
        ],
        value: 'enable',
        order: 2,
        showLabel: true,
        readonly: false,
      }),
      new FieldBase<any>({
        showLabel: true,
        required: false,
        url: '', 
        text: '',
        controlType: 'text',
        key: 'notes',
        label: 'Notas',
        type: 'text',
        value: '',
        order: 15,
        readonly: false,
        pattern: '^[A-Za-z0-9]{1,}.+'
      }),
];

//fieldsSave
let fieldsSave = [

  new FieldBase<any>({
    required: false,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'id',
    label: '',
    type: 'hidden',
    value: '',
    order: 101,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    required: false,
    url: '',
    text: '',
    controlType: 'textbox',
    key: 'storeId',
    label: '',
    type: 'hidden',
    value: '',
    order: 110,
    showLabel: false,
    readonly: true,
  }),
  new FieldBase<any>({
    required: false,
    url: '',
    text: '',
    controlType: 'textbox',
    key: 'branchId',
    label: '',
    type: 'hidden',
    value: '',
    order: 115,
    showLabel: false,
    readonly: true,
  }),
  new FieldBase<any>({
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'name',
    label: '',
    type: 'text',
    value: '',
    order: 1,
    showLabel: true,
    readonly: false,
    pattern: '.{2,}',

    
  }),
  new FieldBase<any>({
    required: true,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'status',
    label: '',
    type: 'select',
    options: [
            {key:'enable', value:'enable'},
            {key:'disable', value:'disable'}
    ],
    value: 'enable',
    order: 2,
    showLabel: true,
    readonly: false,
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'text',
    key: 'notes',
    label: 'Notas',
    type: 'text',
    value: '',
    order: 15,
    readonly: false,
    pattern: '^[A-Za-z0-9]{1,}.+'
  }),
];

// Configuración Mostrar
const ConfigShow: FormTemplate = {
  title: "Punto de venta",
  action: ACTION_FORM.SHOW,
  post_url: urls.post,
  show_url: urls.get,
  id: '',
  fields: fieldsShow,
};

// Configuración Editar
const ConfigEdit: FormTemplate = {
    title: "Editar punto de venta",
    action: ACTION_FORM.EDIT,
    post_url: urls.post,
    show_url: urls.get,
    id: '',
    fields: fieldsEdit,
  };


// Configuración Save
const ConfigSave: FormTemplate = {
    title: "Crear punto de venta",
    action: ACTION_FORM.SAVE,
    post_url: urls.post,
    show_url: urls.get,
    id: '',
    fields: fieldsSave,
  };

export const ConfigurationPuntoDeVenta: FormTemplate[] = [
    ConfigShow,
    ConfigEdit,
    ConfigSave
];

export const Search = [
    {
      "property": {"es": "Ordenar por", "en": "order"},
      "match": [
        {"label": {"es": "Nombre", "en": "name"}},
        {"label": {"es": "Fecha de actualización", "en": "updatedAt"}},
        {"label": {"es": "Fecha de creación", "en": "createdAt"}}
      ],
      "value": "name"
    },
]    