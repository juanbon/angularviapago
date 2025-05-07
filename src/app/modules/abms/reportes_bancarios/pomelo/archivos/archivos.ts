import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'viapago/viapagopomeloarchivosdetalle/search',
    get: '',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [
    {
        key: 'TipoArchivo',
        label: 'TipoArchivo',
        type: 'select',
        options:[  {key:'',value:'SELECCIONE'},{key:'1',value:'POMELO - ARCHIVO TRANSACTION'},{key:'2',value:'POMELO - ARCHIVO PRESENTMENT'}],
        url: null,
        data: null,
        value: null
    },
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

];

//CAMPOS
let types = [''];

//POST
let postFields = [
   ''
];



// Configuración
const Config = {
    title: "POMELO - Reporte Archivos",
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
     allPagesReport: true
}

export default Config;
