import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'cards',
    get: 'cards',
    post: 'cards',
    put: 'cards',
    delete: 'cards'
};
//BUSCADOR
let filters = [ 
    {
        "property": {"es": "Ordenar por", "en": "order"},
        "match": [
          {"label": {"es": "Nombre", "en": "name"}},
          {"label": {"es": "Fecha de actualización", "en": "updatedAt"}},
          {"label": {"es": "Fecha de creación", "en": "createdAt"}}
        ],
        "value": "name"
      },
      {
        "property": {"es": "Estado", "en": "state"},
        "match": [
          { "label": {"es": "Pendiente", "en": "pending"}},
          {"label": {"es": "Habilitado", "en": "enable"}},
          { "label": {"es": "Deshabilitado", "en": "disable"}},
        
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
        readonly: true,
        isTitle:false,
        headerTop:false,
        labelBottom:false,
        description:false,
        isText:false,
        isLabel:false
    },
    {
        key: 'image',
        label: '',
        type: 'image',
        url: null,
        data: null,
        notShow: [''],
        readonly: true,
        isTitle:false,
        headerTop:false,
        labelBottom:false,
        description:false,
        isText:false,
        isLabel:false
    },
    {
        key: 'name',
        label: '',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true,
        isTitle:false,
        headerTop:false,
        labelBottom:false,
        description:true,
        isText:false,
        isLabel:false
    },
    {
        key: 'status',
        label: ' ',
        type: 'string',
        url: null,
        data: null,
        notShow: [''],
        readonly: true,
        isTitle:true,
        headerTop:false,
        labelBottom:false,
        description:false,
        isText:false,
        isLabel:false
    },
    {
      key: 'subType',
      headerLabelTop: 'false',
      label: ' ',
      type: 'text',
      url: null,
      data: null,
      notShow: [''],
      readonly: true,
      isTitle:false,
      headerTop:true,
      labelBottom:false,
      description:false,
      isText:false,
      isLabel:false
  },
    {
        key: 'user',
        headerLabelTop: 'false',
        label: ' ',
        type: 'text',
        url: null,
        data: null,
        child:'name',
        notShow: [''],
        readonly: true,
        isTitle:false,
        headerTop:false,
        labelBottom:false,
        description:true,
        isText:false,
        isLabel:false,
        
    },
   
]; 

//POST
let postFields = null;


// Configuración
const ConfigurationTarjetas = {
    title: "Tarjetas",
    columnId: "id",
    url: urls,
    filters: filters,
    placeholder: 'Buscar Tarjetas por Nombre o CRD/IDPomelo',
    types: types,
    showGet: true,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    shortCard: true,
    goTo: '/b/tarjeta-detalle',
    permiso: 0,
    col: 4,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default ConfigurationTarjetas;
