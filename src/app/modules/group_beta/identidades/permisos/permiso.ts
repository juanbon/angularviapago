import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";
import { FieldBase } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/field-base";


// URLs
let urls = {
  search: 'users',
  get: 'usersIdentitiesGrants/',
  post: 'usersIdentitiesGrants',
  put: 'usersIdentitiesGrants/'
};

// FieldsEdit
let fieldsEdit = [
    new FieldBase<any>({
        showLabel: true,
        required: true,
        url: '', 
        text: '',
        controlType: 'textbox',
        key: 'cuit',
        label: '',
        type: 'text',
        value: '',
        order: 5,
        readonly: false
      }),
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
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'name',
    label: '',
    type: 'hidden',
    value: '',
    order: 100,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'userId',
    label: '',
    type: 'hidden',
    value: '',
    order: 1,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'firstName',
    label: '',
    type: 'text',
    value: '',
    order: 4,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'lastName',
    label: '',
    type: 'text',
    value: '',
    order: 3,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'type',
    label: '',
    type: 'select',
    options: [
        {key:'personal', value:'personal'},
        {key:'business', value:'business'}
],
    value: '',
    order: 2,
    readonly: true
  }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'subtype',
    label: '',
    type: 'select',
    options: [{key:'basic', value:'basic'}],
    value: '',
    order: 9,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'checkbox',
    key: 'feeExempt',
    label: '',
    type: 'bools',
    // options: [{key:'uno', value:'uno'}],
    value: 'false',
    order: 6,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'checkbox',
    key: 'taxExempt',
    label: '',
    type: 'bools',
    // options: [{key:'uno', value:'uno'}],
    value: '',
    order: 7,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'status',
    label: '',
    type: 'select',
     options: [
        {key:'pending', value:'pending'},
        {key:'enable', value:'enable'},
        {key:'disable', value:'disable'},
        {key:'error', value:'error'},

    ],
    value: '0',
    order: 8,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'textarea',
    key: 'notes',
    label: '',
    type: 'textarea',
    value: '',
    order: 15,
    readonly: false
  }),
];

// FieldsSave
let fieldsSave = [
    new FieldBase<any>({
        showLabel: true,
        required: false,
        url: '', 
        text: '',
        controlType: 'textbox',
        key: 'userDni',
        label: 'DNI',
        type: 'text',
        value: '',
        order: 1,
        readonly: true
      }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'type',
    label: 'Tipo',
    type: 'select',
    options: [
        {key:'full', value:'Full'},
        {key:'target', value:'Solo pagar'},
        {key:'source', value:'Solo recibir'},
        {key:'query', value:'Consulta'},
        {key:'sailpoint', value:'Punto de venta'}
      ],
    value: 'full',
    order: 2,
    readonly: false
  }),
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
    key: 'userIdentityId',
    label: '',
    type: 'hidden',
    value: '',
    order: 200,
    showLabel: false,
    readonly: true,
    
  }),
  // new FieldBase<any>({
  //   required: false,
  //   url: '', 
  //   text: '',
  //   controlType: 'textbox',
  //   key: 'name',
  //   label: '',
  //   type: 'hidden',
  //   value: '',
  //   order: 100,
  //   showLabel: false,
  //   readonly: true,
    
  // }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'transactionLimit',
    label: 'Límite de transacción',
    type: 'number',
    value: '',
    order: 3,
    readonly: false,
    pattern: '^[0-9]+$'
  }),
  new FieldBase<any>({
    showLabel: true,
    required: true,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'monthLimit',
    label: 'Límite por mes',
    type: 'number',
    value: '',
    order: 4,
    readonly: false,
    pattern: '^[0-9]+$'
  }),
  
  new FieldBase<any>({
    required: false,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'userId',
    label: '',
    type: 'hidden',
    value: '',
    order: 1,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    required: false,
    url: '', 
    text: '',
    controlType: 'textbox',
    key: 'sailpointId',
    label: '',
    type: 'hidden',
    value: '',
    order: 1,
    showLabel: false,
    readonly: true,
    
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'select',
    key: 'status',
    label: '',
    type: 'hidden',
     options: [
        {key:'enable', value:'enable'},
        {key:'disable', value:'disable'},

    ],
    value: 'pending',
    order: 8,
    readonly: false
  }),
  new FieldBase<any>({
    showLabel: true,
    required: false,
    url: '', 
    text: '',
    controlType: 'textarea',
    key: 'notes',
    label: '',
    type: 'textarea',
    value: '',
    order: 15,
    readonly: false
  }),
];

// Configuración Editar
const ConfigSave: FormTemplate = {
  title: "Permiso",
  action: ACTION_FORM.SAVE,
  post_url: urls.post,
  show_url: urls.search,
  id: '',
  fields: fieldsSave,
};

// Configuración
const ConfigEdit: FormTemplate = {
    title: "Permiso",
    action: ACTION_FORM.EDIT,
    post_url: urls.post,
    show_url: urls.get,
    id: '',
    fields: fieldsEdit,
  };

export const ConfigurationPermiso: FormTemplate[] = [
    ConfigEdit,
    ConfigSave   
];

export const SearchPer = [
    {
      "property": {"es": "Ordenar por", "en": "order"},
      "match": [
        {"label": {"es": "DNI", "en": "dni"}},
      
      ],
      "value": "dni"
    },
]    

