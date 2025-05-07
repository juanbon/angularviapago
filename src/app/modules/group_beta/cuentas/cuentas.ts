import {
  FormTemplate,
  ACTION_FORM,
} from 'src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template';

//URLs
let urls = {
  search: 'usersAccounts',
  get: 'usersAccounts',
  post: 'usersAccounts',
  put: 'usersAccounts',
  delete: 'usersAccounts',
};
//BUSCADOR
let filters = [
  {
    property: { es: 'Ordenar por', en: 'order' },
    match: [
      { label: { es: 'Nombre', en: 'name' } },
      { label: { es: 'Fecha de actualización', en: 'updatedAt' } },
      { label: { es: 'Fecha de creación', en: 'createdAt' } },
    ],
    value: 'name',
  },
  {
    property: { es: 'Estado', en: 'status' },
    match: [
      { label: { es: 'Pendiente', en: 'pending' } },
      { label: { es: 'Proceso', en: 'process' } },
      { label: { es: 'Habilitado', en: 'enable' } },
      { label: { es: 'Deshabilitado', en: 'disable' } },
      { label: { es: 'Error', en: 'error' } },
    ],
    value: '',
  },
  {
    property: { es: 'Tipo', en: 'type' },
    match: [
      { label: { es: 'Pesos', en: 'bind' } },
      { label: { es: 'Virtual', en: 'virtual' } },
    ],
    value: '',
  },
];

//CAMPOS
let types = [
  {
    key: 'id',
    label: '',
    type: 'hidden',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'type',
    label: '',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'status',
    label: ' ',
    type: 'success',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'number',
    label: ' ',
    type: 'number',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'name',
    label: ' ',
    type: 'text',
    url: null,
    data: null,
    // child:'name',
    notShow: [''],
    readonly: true,
  },
  {
    key: 'cvu',
    label: ' ',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'alias',
    label: ' ',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'balance',
    label: ' ',
    type: 'price',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
];

//POST
let postFields = null;

// Configuración
const ConfigurationCuentas = {
  title: 'Cuentas',
  columnId: 'id',
  url: urls,
  filters: filters,
  placeholder: 'Buscar número de cuenta',
  types: types,
  showGet: true,
  showAdd: false,
  showEdit: false,
  showDelete: false,
  goTo: '/b/cuenta-detalle',
  permiso: 0,
  col: 12,
  showForm: new FormTemplate(
    JSON.parse(JSON.stringify(types)),
    '',
    ACTION_FORM.SHOW,
    '',
    urls.get,
    1
  ),
  editForm: new FormTemplate(
    JSON.parse(JSON.stringify(types)),
    '',
    ACTION_FORM.EDIT,
    '',
    urls.put,
    1
  ),
  saveForm: new FormTemplate(
    JSON.parse(JSON.stringify(postFields)),
    '',
    ACTION_FORM.SAVE,
    urls.post,
    ''
  ),
};

export default ConfigurationCuentas;
