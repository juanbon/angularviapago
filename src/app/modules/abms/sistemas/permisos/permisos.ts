import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'permissions',
    get: 'permissions',
    post: 'permissions',
    put: 'permissions',
    delete: 'permissions'
};

//BUSCADOR
let filters = [
    {
        key: 'permission',
        label: 'Permiso',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'permission',
        label: 'Permiso',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: false
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
    },
    {
        key: 'id',
        label: 'Id Permiso',
        type: 'number',
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
    }
];

//SHOW
let typeShow = [

    {
        key: 'id',
        label: 'Id Permiso',
        type: 'number',
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
        key: 'permission',
        label: 'Permiso',
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
    key: 'permission',
    label: 'Permiso',
    type: 'text',
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
    title: "Permisos",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: true,
    showAdd: true,
    showEdit: true,
    showDelete: true,
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
