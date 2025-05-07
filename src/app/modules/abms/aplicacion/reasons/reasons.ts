import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'reasons/all',
    get: 'reasons/all',
    post: 'reasons',
    put: 'reasons',
    delete: 'reasons'
};

//BUSCADOR
let filters = [
    {
        key: 'Motivo',
        label: 'Motivo',
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
        notShow: ['edit'],
        readonly: true
    },
    {
        key: 'reason',
        label: 'Motivo',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'description',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
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
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'reason',
        label: 'Motivo',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'description',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
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
let postFields = [{
    key: 'reason',
    label: 'Motivo',
    type: 'text'
},
{
    key: 'description',
    label: 'Descripcion',
    type: 'text'
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
}];


// Configuración
const Config = {
    title: "Motivo de transferencia",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
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
        paginated:true
}

export default Config;