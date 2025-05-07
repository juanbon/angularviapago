
import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
  search: 'userspermissions',
  get: 'userspermissions',
  post: 'userspermissions',
  put: 'userspermissions',
  delete: 'userspermissions'
};


//BUSCADOR
let filters = [
  {
    key: 'name',
    label: 'Usuario',
    type: 'text',
    url: null,
    data: null,
  },
  {
    key: 'permission',
    label: 'Permiso',
    type: 'text',
    url: null,
    data: null,
  },
];

//CAMPOS
let typesEdit = [{}];

//SHOW
let typeShow = [
  {
    key: 'userId',
    label: 'Id Usuario',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true
  },
  {
    key: 'name',
    label: 'Usuario',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: true
  },
  {
    key: 'permissionId',
    label: 'Id Permiso',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
  },
  {
    key: 'permission',
    label: 'Permiso',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
  },
  {
    key: 'status',
    label: 'Estado',
    type: 'select',
    options: [{ key: 'enable', value: 'enable' }, { key: 'disable', value: 'disable' }],
    url: null,
    data: null,
    notShow: ['search'],
    readonly: false
  },
  {
    key: 'firstName',
    label: 'Nombre usuario',
    type: 'text',
    url: null,
    data: null,
    notShow: ['search'],
    readonly: true
  },
  {
    key: 'lastName',
    label: 'Apellido Usuario',
    type: 'text',
    url: null,
    data: null,
    notShow: ['search'],
    readonly: true
  },

  {
    key: 'username',
    label: 'username',
    type: 'text',
    url: null,
    data: null,
    notShow: ['search'],
    readonly: true
  },
  {
    key: 'email',
    label: 'Email',
    type: 'text',
    url: null,
    data: null,
    notShow: ['search'],
    readonly: false
  },
  {
    key: 'id',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true
  },
  {
    key: 'updatedAt',
    label: 'updatedAt',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true
  },
  {
    key: 'createdAt',
    label: 'createdAt',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search', 'edit'],
    readonly: true
  }
];

//POST
let postFields = [
  {
    key: 'userId',
    label: 'Usuario',
    type: 'select',
    url: 'userspermissions/search/users',
    data: null,
    notShow: [''],
    readonly: true
  },
  {
    key: 'permissionId',
    label: 'Permiso',
    type: 'select',
    url: 'permissions',
    data: null,
    notShow: ['search'],
    readonly: true
  },
  {
    key: 'status',
    label: 'Estado',
    type: 'select',
    options: [{ key: 'enable', value: 'enable' }, { key: 'disable', value: 'disable' }],
    url: '',
    data: null,
    notShow: [''],
    readonly: false
  },
];


// Configuración
const Config = {
  title: "Permisos por Usuarios",
  columnId: "id",
  url: urls,
  filters: filters,
  types: typesEdit,
  showGet: true,
  showAdd: true,
  showEdit: false,
  showDelete: true,
  permiso: 0,
  showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
    ACTION_FORM.SHOW, '', urls.get, 1),
  editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
    ACTION_FORM.EDIT, '', urls.put, 1),
  saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
    ACTION_FORM.SAVE, urls.post, ''),
  paginated: true
}

export default Config;
