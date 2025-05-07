import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'notifications',
    get: 'notifications',
    post: 'notifications',
    put: 'notifications',
    delete: 'notifications/disable'
};
//BUSCADOR
let filters = [ 
      {
        "property": {"es": "Estado", "en": "status"},
        "match": [
          { "label": {"es": "Pendiente", "en": "pending"}},
          { "label": {"es": "Leido", "en": "readed"}},
          
        ],
        "value": ""
      },
    ]

//CAMPOS
let types = [
    {
        key: 'id',
        label: '',
        type: 'hidden',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'createdAt',
        label: '',
        type: 'dateshort',
        url: null,
        data: null,
        notShow: [''],
        readonly: true,
    },
   
    {
        key: 'title',
        label: ' ',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'message',
        label: ' ',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
  
]; 

//POST
let postFields = null;


// Configuración
const ConfigurationNotificaciones = {
    title: "Notificaciones",
    columnId: "id",
    url: urls,
    filters: filters,
    placeholder: 'Buscar Notificación',
    types: types,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: true,
    goTo: '',
    permiso: 0,
    col: 12,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default ConfigurationNotificaciones;