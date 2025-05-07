import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'bind/transactions',
    get: 'bind/transactions',
    post: 'bind/transactions',
    put: 'bind/transactions',
    delete: 'bind/transactions'
};
//BUSCADOR
let filters = [
    {
      "property": {"es": "Tipo", "en": "categories"},
      "match": [
        {"label": {"es": "Transferencias enviadas", "en": "TRANSFERENCIAS_ENVIADAS"}},
        {"label": {"es": "Transferencias recibidas", "en": "TRANSFERENCIAS_RECIBIDAS"}},
        // {"label": {"es": "Extracción por Viapago", "en": "cashout"}},
        // {"label": {"es": "cashback de Viapago", "en": "cashback_share"}},
        // {"label": {"es": "dinero por Viapago", "en": "cashin_share"}},
        // {"label": {"es": "transferencia por Viapago", "en": "cashout_share"}},
        // {"label": {"es": "Transferencia Viapago", "en": "transfer"}},
        // {"label": {"es": "Pago con Viapago", "en": "payment"}},
        // {"label": {"es": "Pago con QR", "en": "payment_qr"}},
        // {"label": {"es": "Pago con QR", "en": "cashout_coelsa"}},
        // {"label": {"es": "Cobranza con QR", "en": "cashin_coelsa"}},
        // {"label": {"es": "Pago de transporte", "en": "payment_micronauta"}},
        // {"label": {"es": "Extracción por cajero", "en": "cashout_atm"}},

      ],
      "value": "", 
    }
]    

//CAMPOS
let types = [{}, 
]; 

//POST
let postFields = null;


// Configuración
const ConfigurationBancoIndustrial = {
    title: "Banco Industrial",
    columnId: "id",
    url: urls,
    filters: filters,
    placeholder: 'Buscar',
    types: types,
    showGet: true,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    shortCard: true,
    goTo: '/b/identidad-detalle',
    permiso: 0,
    col: 3,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default ConfigurationBancoIndustrial;