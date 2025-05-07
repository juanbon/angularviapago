import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls = {
  search: 'webviewsSubtypes',
  get: 'webviewsSubtypes',
  post: 'webviewsSubtypes',
  put: 'webviewsSubtypes',
  delete: 'webviewsSubtypes',
};


//BUSCADOR
let filters = [
{
  key: 'filter[where][id][eq]',
  label: 'Id',
  type: 'text',
  url: null,
  data: null,
  value: null,
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
    }]

//SHOW
let typeShow = [
  {
    key: 'id',
    label: 'Id',
    type: 'number',
    url: null,
    data: null,
    notShow: [''],
    readonly: true,
  },
  {
    key: 'description',
    label: 'Descripcion',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false,
  },
  {
    key: 'createdAt',
    label: 'Creado',
    type: 'date',
    url: null,
    data: null,
    notShow: ['edit'],
    readonly: true
},
{
    key: 'updatedAt',
    label: 'Modificado',
    type: 'date',
    url: null,
    data: null,
    notShow: ['edit'],
    readonly: true
},{
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url:'',
        data: null,
        notShow: [''],
        readonly: false
    }]

//POST
let postFields = [{
    key: 'description',
    label: 'Descripcion',
    type: 'text'
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
}]

// Configuración
const Config = {
  title: 'Tipos TyC',
  columnId: 'id',
  url: urls,
  filters: filters,
  types: typeShow,
  showGet: false,
  showAdd: true,
  showEdit: true,
  showDelete: true,
  permiso: 0,
  showForm: new FormTemplate(
    JSON.parse(JSON.stringify(typeShow)),
    '',
    ACTION_FORM.SHOW,
    '',
    urls.get,
    1
  ),
  editForm: new FormTemplate(
    JSON.parse(JSON.stringify(typeShow)),
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
