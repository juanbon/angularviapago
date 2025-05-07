import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'typesTransactions/all',
    get: 'typesTransactions/',
    post: 'typesTransactions',
    put: 'typesTransactions',
    delete: 'typesTransactions',
    logs: 'typesTransactions/logs'
};

//BUSCADOR
let filters = [
    {
        key: 'id',
        label: 'Id transaccion',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'id',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url:'',
        data: null,
        notShow: ['edit'],
        readonly: true
    },
        {
        key: 'typeTransaction',
        label: 'typeTransaction',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'updatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'deletedAt',
        label: 'deletedAt',
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
        key: 'id',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'name',
        label: 'Categoria',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'description',
        label: 'Descripción',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'url',
        label: 'Url',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'image',
        label: 'Imagen',
        type: 'image',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'category',
        label: 'Categoria',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'updatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    }
]; 

//POST
let postFields = [
{
    key: 'name',
    label: 'Nombre',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
},
{
    key: 'description',
    label: 'Descripcion',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
},
{
    key: 'url',
    label: 'Url',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
},
{
    key: 'image',
    label: 'Imagen',
    type: 'image',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
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
}
];


// Configuración
const Config = {
    title: "Transacciones",
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
    logsForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.LOGS, '', '',undefined,urls.logs ),
        paginated:true
}

export default Config;