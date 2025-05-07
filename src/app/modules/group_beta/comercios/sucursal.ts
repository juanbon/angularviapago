import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";
import { FieldBase } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/field-base";


// URLs
let urls = {
  search: 'branches',
  get: 'branches/',
  post: 'branches/',
  put: 'branches/'
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
      value: 'aaaaa',
      order: 110,
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
      key: 'phone',
      label: '',
      type: 'text',
      // options: [],
      value: '',
      order: 6,
      readonly: false,     
      pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
    }),
    new FieldBase<any>({
      showLabel: true,
      required: false,
      url: '', 
      text: '',
      controlType: 'text',
      key: 'email',
      label: '',
      type: 'text',
      // options: [{key:'uno', value:'uno'}],
      value: '',
      order: 7,
      readonly: false,
      pattern:"^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    }),
    new FieldBase<any>({
      showLabel: true,
      required: false,
      url: '', 
      text: '',
      controlType: 'link1',
      key: 'link1',
      label: 'Sitio Web',
      type: 'text',
      value: '',
      order: 11,
      readonly: false,
      pattern: '^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$'
    }),
    new FieldBase<any>({
      showLabel: true,
      required: false,
      url: '', 
      text: '',
      controlType: 'link2',
      key: 'link2',
      label: 'Instagram',
      type: 'text',
      value: '',
      order: 12,
      readonly: false,
      pattern: '^[A-Za-z0-9_.]{1,30}\/?$'
    }),
    new FieldBase<any>({
      showLabel: true,
      required: false,
      url: '', 
      text: '',
      controlType: 'link3',
      key: 'link3',
      label: 'Facebook',
      type: 'text',
      value: '',
      order: 13,
      readonly: false,
      pattern: '^[A-Za-z0-9_.]{1,}\/?$'
    }),
    new FieldBase<any>({
      showLabel: false,
      required: false,
      url: '', 
      text: '',
      controlType: 'link4',
      key: 'link4',
      label: 'Twitter',
      type: 'text',
      value: '',
      order: 14,
      readonly: false,
      pattern: '.{5,}'
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
    required: true,
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
  value: 'aaaaa',
  order: 110,
  showLabel: false,
  readonly: true,
}),
//   new FieldBase<any>({
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'textbox',
//     key: 'status',
//     label: 'title',
//     type: '',
//     value: 'title',
//     order: 2,
//     showLabel: true,
//     readonly: true,
    
//   }),
//   new FieldBase<any>({
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'access',
//     label: '',
//     type: 'text',
//     value: '',
//     order: 3,
//     showLabel: true,
//     readonly: true,
    
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'username',
//     label: '',
//     type: 'text',
//     // options: [{key:'uno', value:'uno'}],
//     value: '',
//     order: 4,
//     readonly: true
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'number',
//     key: 'number',
//     label: '',
//     type: 'text',
//     value: '',
//     order: 5,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'textbox',
//     key: 'sourceName',
//     label: '',
//     type: '',
//     value: '',
//     order: 6,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'select',
//     key: 'type',
//     label: '',
//     type: 'select',
//     options: [
//         {key:'personal', value:'personal'},
//         {key:'business', value:'business'}
// ],
//     value: '',
//     order: 2,
//     readonly: true
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: true,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'phone',
//     label: '',
//     type: 'text',
//     // options: [],
//     value: '',
//     order: 7,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: false,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'email',
//     label: '',
//     type: 'text',
//     // options: [{key:'uno', value:'uno'}],
//     value: '',
//     order: 8,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: false,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'pomeloId',
//     label: '',
//     type: 'text',
//     // options: [{key:'uno', value:'uno'}],
//     value: '',
//     order: 9,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: false,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'systemVersion',
//     label: '',
//     type: 'text',
//     value: '',
//     order: 10,
//     readonly: false
//   }),
//   new FieldBase<any>({
//     showLabel: true,
//     required: false,
//     url: '', 
//     text: '',
//     controlType: 'text',
//     key: 'notes',
//     label: '',
//     type: 'text',
//     value: '',
//     order: 11,
//     readonly: false
//   }),

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
    value: 'aaaaa',
    order: 110,
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
    key: 'phone',
    label: '',
    type: 'text',
    // options: [],
    value: '',
    order: 6,
    readonly: false,     
    pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'text',
    key: 'email',
    label: '',
    type: 'text',
    // options: [{key:'uno', value:'uno'}],
    value: '',
    order: 7,
    readonly: false,
    pattern:"^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'link1',
    key: 'link1',
    label: 'Sitio Web',
    type: 'text',
    value: '',
    order: 11,
    readonly: false,
    pattern: '^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$'
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'link2',
    key: 'link2',
    label: 'Instagram',
    type: 'text',
    value: '',
    order: 12,
    readonly: false,
    pattern: '^[A-Za-z0-9_.]{1,30}\/?$'
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'link3',
    key: 'link3',
    label: 'Facebook',
    type: 'text',
    value: '',
    order: 13,
    readonly: false,
    pattern: '^[A-Za-z0-9_.]{1,}\/?$'
  }),
  new FieldBase<any>({
    showLabel: false,
    required: false,
    url: '', 
    text: '',
    controlType: 'link4',
    key: 'link4',
    label: 'Twitter',
    type: 'text',
    value: '',
    order: 14,
    readonly: false,
    pattern: '.{5,}'
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
  title: "Sucursal",
  action: ACTION_FORM.SHOW,
  post_url: urls.post,
  show_url: urls.get,
  id: '',
  fields: fieldsShow,
};

// Configuración Editar
const ConfigEdit: FormTemplate = {
    title: "Editar Sucursal",
    action: ACTION_FORM.EDIT,
    post_url: urls.post,
    show_url: urls.get,
    id: '',
    fields: fieldsEdit,
  };


// Configuración Save
const ConfigSave: FormTemplate = {
    title: "Crear Sucursal",
    action: ACTION_FORM.SAVE,
    post_url: urls.post,
    show_url: urls.get,
    id: '',
    fields: fieldsSave,
  };

export const ConfigurationSucursal: FormTemplate[] = [
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