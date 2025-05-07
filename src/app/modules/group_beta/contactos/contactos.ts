import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'contacts',
    get: 'contacts',
    post: 'contacts',
    put: 'contacts',
    delete: 'contacts/disable'
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
        "property": {"es": "Estado", "en": "status"},
        "match": [
          { "label": {"es": "Habilitado", "en": "enable"}},
          { "label": {"es": "Deshabilitado", "en": "disable"}},
          
        ],
        "value": ""
      },
      // {
      //   "property": {"es": "Tipo", "en": "type"},
      //   "match": [
      //     { "label": {"es": "Ingreso por Viapago", "en": "cashin"}},
      //     { "label": {"es": "Extracción por Viapago", "en": "cashout"}},
      //     { "label": {"es": "Transferencia Viapago", "en": "transfer"}},
      //     { "label": {"es": "Pago con Viapago", "en": "payment"}},
      //     { "label": {"es": "Cashback Viapago", "en": "cashback"}},
      //     { "label": {"es": "Extracción por cajero", "en": "cashout_atm"}},
      //     { "label": {"es": "Transferencia en CVU", "en": "cashin_bind"}},
      //     { "label": {"es": "Transferencia a CBU", "en": "cashout_bind"}},
      //     { "label": {"es": "Depósito en Rapipago", "en": "cashin_gire"}},
      //     { "label": {"es": "Extracción por Rapipago", "en": "cashout_gire"}},
      //     { "label": {"es": "Pago de servicios", "en": "payment_gire"}},
      //     { "label": {"es": "Recarga", "en": "recharge_gire"}},
      //     { "label": {"es": "Pago de viaticos", "en": "chashin_viatic"}}
      //   ],
      //   "value": ""
      // }
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
        isTitle:true,
        headerTop:false,
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
const ConfigurationContactos = {
    title: "Contactos",
    columnId: "id",
    url: urls,
    filters: filters,
    placeholder: 'Buscar contacto',
    types: types,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: true,
    shortCard: true,
    actionButton: true,
    goTo: '/b/contacto-detalle',
    permiso: 0,
    col: 3,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default ConfigurationContactos;