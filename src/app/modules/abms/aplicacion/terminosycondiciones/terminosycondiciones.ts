import {
  FormTemplate,
  ACTION_FORM,
} from 'src/app/modules/group_beta/dynamic/dynamic-form/model/form-template';

//URLs
let urls = {
  search: 'webviews?filter[where][idType][eq]=1',
  get: 'webviews',
  post: 'webviews',
  put: 'webviews',
  delete: 'webviews',
};

//BUSCADOR
let filters = [
  {
    key: 'filter[where][id][eq]',
    label: 'Id Termino y Condicion',
    type: 'text',
    url: null,
    data: null,
    value: null
  },
  {
    key: 'filter[where][validSince][lte]',
    label: 'FechaDesde',
    type: 'date',
    url: null,
    data: 1,
    value: null,
    class: 'FechaDesde',
  },
  {
    key: 'filter[where][validSince][gte]',
    label: 'FechaHasta',
    type: 'date',
    url: null,
    data: 2,
    value: null,
    class: 'FechaHasta',
  },

    {
        key: 'filter[where][status][eq]',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
];

//CAMPOS
let types = [
  {
    key: 'id',
    label: 'Termino y Condicion',
    type: 'number',
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
    notShow: ['search', 'edit'],
    readonly: false,
  },
  {
    key: 'subtype',
    label: 'Tipo TyC',
    type: 'text',
    url: null,
    data: null,
    notShow: ['edit'],
    readonly: false,
  },
  {
    key: 'text',
    label: 'Descripcion',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false,
  },
  {
    key: 'file',
    label: 'PDF',
    type: 'File',
    url: null,
    data: null,
    notShow: [''],
    readonly: false,
  },
  {
    key: 'extension',
    label: 'Formato',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'validSince',
    label: 'Fecha Vigente',
    type: 'date',
    url: null,
    data: null,
    notShow: [''],
    readonly: false,
  },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url:'',
        data: null,
        notShow: [''],
        readonly: false
    },
  {
    key: 'idType',
    label: 'Tipo',
    type: 'select',
    url: 'webviewsTypes?filter[where][id][eq]=1',
    data: null,
    notShow: ['search'],
    readonly: true,
  },
  {
    key: 'idSubtype',
    label: 'Subtipo',
    type: 'select',
    url: 'webviewsSubtypes',
    data: null,
    notShow: ['search'],
    readonly: true,
  },
  {
    key: 'createdAt',
    label: 'Creado',
    type: 'date',
    options: null,
    url: '',
    data: null,
    notShow: [''],
    readonly: false,
  },
  {
    key: 'updatedAt',
    label: 'Modificado',
    type: 'date',
    options: null,
    url: '',
    data: null,
    notShow: [''],
    readonly: false,
  },
  {
    key: 'webviewType',
    label: '',
    type: 'object',
    options: null,
    url: '',
    data: null,
    notShow: ['search', 'edit'],
    readonly: false,
  },
  {
    key: 'webviewSubtype',
    label: '',
    type: 'object',
    options: null,
    url: '',
    data: null,
    notShow: ['search', 'edit'],
    readonly: false,
  },
];

//POST
let postFields = [
  {
    key: 'text',
    label: 'Descripcion',
    type: 'text',
  },
  {
    key: 'validSince',
    label: 'Fecha Vigente',
    type: 'date',
  },
  {
    key: 'file',
    label: 'Archivo',
    type: 'File',
  },
  {
    key: 'idType',
    label: 'Tipo',
    type: 'select',
    url: 'webviewsTypes?filter[where][id][eq]=1',
    readonly: true,
  },
  {
    key: 'idSubtype',
    label: 'Subtipo',
    type: 'select',
    url: 'webviewsSubtypes',
    readonly: true,
  },
  {
    key: 'extension',
    label: 'Formato',
    type: 'select',
    options:[{key:'PDF',value:'PDF'}],
    readonly: true,
  },
  {
    key: 'status',
    label: 'Estado',
    type: 'select',
    options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
    url:'',
    data: null,
    notShow: [''],
    readonly: false
}
];

// Configuración
const Config = {
  title: 'Terminos y Condicion',
  columnId: 'id',
  url: urls,
  filters: filters,
  types: types,
  showGet: false,
  showAdd: true,
  showEdit: true,
  showDelete: true,
  permiso: 0,
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
  paginated: true,
};

export default Config;
