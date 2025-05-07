import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'viapago/Transacciones/search',
    get: '',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [
    {
        key: 'FechaDesde',
        label: 'Fecha Desde',
        type: 'date',
        url: null,
        data: 1,
        value: null,
        class:'FechaDesde'
    },
    {
        key: 'FechaHasta',
        label: 'Fecha Hasta',
        type: 'date',
        url: null,
        data: 2,
        value: null,
        class:'FechaHasta'
    },
    {
        key: 'NroTransaccion',
        label: 'NroTransaccion',
        type: 'number',
        url: null,
        data: null,
        value: null
    },
    {
        key: 'Importe',
        label: 'Importe',
        type: 'text',
        url: null,
        data: null,
        value: null
    },
];

//CAMPOS
let types = [''];

//POST
let postFields = [
   ''
];



// Configuración
const Config = {
    title: "Transacciones Billetera",
    columnId: "id",
    url: urls,
    filters: filters,
    types: types,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, ''),
     paginated:true,
     usaApiBoletos: true,
     allPagesReport: true,
}

export default Config;
