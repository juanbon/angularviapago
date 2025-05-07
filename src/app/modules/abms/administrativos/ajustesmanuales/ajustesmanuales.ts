import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'transactions/transactionsmanual',
    get: 'transactions/gettransactionsmanual',
    post: 'users/createTransaction/createAsAdmin',
    put: 'transactions/gettransactionsmanual',
    delete: 'transactions',
};

//BUSCADOR
let filters = [
        {
            key: 'id',
            label: 'Nro Transaccion',
            type: 'text',
            url: null,
            data: null,
            value: null
        },
        {
        key: 'pomeloId',
        label: 'Pomelo Id',
        type: 'text',
        url: null,
        data: null,
        value: null
        },
        {
        key: 'coelsaId',
        label: 'Coelsa Id',
        type: 'text',
        url: null,
        data: null,
        value: null
        },
        {
        key: 'bindId',
        label: 'Bind Id',
        type: 'text',
        url: null,
        data: null,
        value: null
        },{
        key: 'idTransactionManual',
        label: 'Transacciones Manuales',
        type: 'select',
        url: 'typestransactions/getManualTypesTransactions/1',
        data: null,
        value: null
    },{
        key: 'nombreApellido',
        label: 'Nombre y Apellido',
        type: 'text',
        url: null,
        data: null,
        value: null
        },{
        key: 'cvu',
        label: 'Cvu',
        type: 'text',
        url: null,
        data: null,
        value: null
        }
];

//CAMPOS
let typesEdit = [

        {
        key: 'account',
        label: 'Id',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'amount',
        label: 'Importe',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: false
    },

    {
        key: 'adjustmentType',
        label: 'Tipo de Ajuste',
        type: 'select',
        url: '',
        data: null,
           options: [
      { key: 'credit', value: 'credit_by_admin' },
      { key: 'debit', value: 'debit_by_admin' }
    ],
        value: null
    },

    {
        key: 'operationType',
        label: 'Tipo de operacion',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'comment',
        label: 'Observacion',
        type: 'textarea',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    }

]; 

//SHOW
let typeShow = [
   
    {
        key: 'id',
        label: 'Id',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'amount',
        label: 'Importe',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'name',
        label: 'Nombre y Apellido',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = [
        {
        key: 'account',
        label: 'Cuenta',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
       // readonly: true
    },
    {
        key: 'amount',
        label: 'Importe',
        type: 'text',
        url: '',
        data: null,
        value: null
    },
        {
        key: 'comment',
        label: 'Comentarios',
        type: 'textarea',
        url: '',
        data: null,
        value: null
    }
];


// Configuración
const Config = {
    title: "Ajustes Manuales de Cuentas",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: true,
    showAdd: false,
    showEdit: true,
    showDelete: false,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
    ACTION_FORM.SAVE, urls.post, ''),
    paginated:true
}

export default Config;