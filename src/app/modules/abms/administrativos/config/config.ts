import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'config',
    get: 'config',
    post: 'config',
    put: 'config',
    delete: 'config',
    logs:'config/logs'
};

//BUSCADOR
let filters = [
    {
        key: 'idConfig',
        label: 'Id Config',
        type: 'number',
        url: null,
        data: null,
        value: null
    },
        {
        key: 'description',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'idConfig',
        label: 'Id Config',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'description',
        label: 'Descripcion',
        type: 'textarea',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'value',
        label: 'Valor',
        type: 'textarea',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'editable',
        label: 'Editable',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'idConfig',
        label: 'Id Config',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'description',
        label: 'Descripcion',
        type: 'textarea',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'value',
        label: 'Valor',
        type: 'textarea',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'editable',
        label: 'Editable',
        type: 'text',
        url: null,
        data: null,
        notShow: ['get'],
        readonly: true
    }
]; 

//POST
let postFields = [
{
    key: 'description',
    label: 'Descripcion',
    type: 'textarea',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
},
{
    key: 'value',
    label: 'Value',
    type: 'textarea',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
}

];


// Configuración
const Config = {
    title: "Config",
    columnId: "idConfig",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: true,
    showAdd: true,
    showEdit: true,
    showDelete: false,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, ''),
    logsForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.LOGS, '', '',undefined,urls.logs ),
        paginated:true
}

export default Config;