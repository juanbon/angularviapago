import {
  FormTemplate,
  ACTION_FORM,
} from 'src/app/modules/group_beta/dynamic/dynamic-form/model/form-template';

//URLs
let urls = {
  search: 'pspWallets',
  get: 'pspWallets',
  post: 'pspWallets',
  put: 'pspWallets',
  delete: 'pspWallets',
};

//BUSCADOR
let filters = [
  {
    key: 'filter[where][id][eq]',
    label: 'Id PSP',
    type: 'number',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'filter[where][businessName][like]',
    label: 'Razon Social',
    type: 'text',
    url: null,
    data: null,
    value: null,
  },
];

//CAMPOS
let typesEdit = [
  {
    key: 'id',
    label: 'Id PSP',
    type: 'number',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'cuit',
    label: 'CUIT',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'businessName',
    label: 'Razon Social',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'fantasyName',
    label: 'Nombre de Fantasia',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'createdAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  },
  {
    key: 'updatedAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  },
  {
    key: 'deletedAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  }
];

//SHOW
let typesShow = [
  {
    key: 'id',
    label: 'Id PSP',
    type: 'number',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'cuit',
    label: 'CUIT',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'businessName',
    label: 'Razon Social',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'fantasyName',
    label: 'Nombre de Fantasia',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'createdAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  },
  {
    key: 'updatedAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  },
  {
    key: 'deletedAt',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true,
  }
];

//POST
let postFields = [
  {
    key: 'id',
    label: 'Id PSP',
    type: 'number',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'cuit',
    label: 'CUIT',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'businessName',
    label: 'Razon Social',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  },
  {
    key: 'fantasyName',
    label: 'Nombre de Fantasia',
    type: 'text',
    url: '',
    data: null,
    notShow: ['']
  }
];

// Configuración
const Config = {
  title: 'Nombres PSP',
  columnId: 'id',
  url: urls,
  filters: filters,
  types: typesShow,
  showGet: false,
  showAdd: true,
  showEdit: true,
  showDelete: true,
  permiso: 0,
  showForm: new FormTemplate(
    JSON.parse(JSON.stringify(typesShow)),
    '',
    ACTION_FORM.SHOW,
    '',
    urls.get,
    1
  ),
  editForm: new FormTemplate(
    JSON.parse(JSON.stringify(typesEdit)),
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
