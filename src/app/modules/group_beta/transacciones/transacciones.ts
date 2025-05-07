import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'transactions',
    get: 'transactions',
    post: 'transactions',
    put: 'transactions',
    delete: 'transactions'
};
//BUSCADOR
let filters = [
      {
        property: { es: 'Estado', en: 'state' },
    match: [
        { label: { es: 'Pendiente', en: 'pending' } },
        { label: { es: 'En proceso', en: 'process' } },
        { label: { es: 'Confirmada', en: 'confirm' } },
        { label: { es: 'Devuelta', en: 'reverse' } },
        { label: { es: 'Anulada', en: 'cancel' } },
        { label: { es: 'Con error', en: 'error' } },
    ],
    value: '',
      },
      {
        "property": {"es": "Tipo", "en": "type"},
        "match": [
          { "label": {"es": "Ingreso por Viapago", "en": "cashin"}},
          { "label": {"es": "Extracción por Viapago", "en": "cashout"}},
          { "label": {"es": "Transferencia Viapago", "en": "transfer"}},
          { "label": {"es": "Pago con Viapago", "en": "payment"}},
          { "label": {"es": "Cashback Viapago", "en": "cashback"}},
          { "label": {"es": "Extracción por cajero", "en": "cashout_atm"}},
          { "label": {"es": "Transferencia en CVU", "en": "cashin_bind"}},
          { "label": {"es": "Transferencia a CBU", "en": "cashout_bind"}},
          { "label": {"es": "Depósito en Rapipago", "en": "cashin_gire"}},
          { "label": {"es": "Extracción por Rapipago", "en": "cashout_gire"}},
          { "label": {"es": "Pago de servicios", "en": "payment_gire"}},
          { "label": {"es": "Recarga", "en": "recharge_gire"}},
          { "label": {"es": "Pago de viaticos", "en": "chashin_viatic"}}
        ],
        "value": ""
      }
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
        key: 'date',
        label: 'Fecha',
        type: 'datetime',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'humanType',
        label: 'Tipo',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'number',
        label: 'Número',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'sourceName',
        label: 'Origen',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'targetName',
        label: 'Destino',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'amount',
        label: 'Monto',
        type: 'price',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'success',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'currentBalance',
        label: 'Saldo',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
];

//POST
let postFields = null;


// Configuración
const ConfigurationTransacciones = {
    title: "Transacciones",
    columnId: "id",
    url: urls,
    filters: filters,
    placeholder: 'Nro transacción',
    types: types,
    showGet: true,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    goTo: '/b/transaccion',
    permiso: 0,
    col: 12,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default ConfigurationTransacciones;
