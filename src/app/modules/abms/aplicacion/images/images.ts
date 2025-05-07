import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'images',
    get: 'images',
    post: 'images',
    put: 'images',
    delete: 'images'
};

//BUSCADOR
let filters = [
    {
        key: 'Descripcion',
        label: 'Descripcion de la Empresa',
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
        label: 'Ids',
        type: 'number',
        url: null,
        data: null,
        notShow: ['edit'],
        readonly: true
    },
    {
        key: 'category',
        label: 'Categoria',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: false
    },
    {
        key: 'logo130px',
        label: 'Logo en 130px',
        type: 'image130px',
        url: '',
        data: null,
        notShow: [],
        readonly: true
    },
    {
        key: 'logo32px',
        label: 'Logo en 32px',
        type: 'image32px',
        url: '',
        data: null,
        notShow: [],
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
        key: 'companyDescription',
        label: 'Empresa',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'logo32px',
        label: 'Logo en 32px',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'logo130px',
        label: 'Logo en 130px',
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
let postFields = [
{
    key: 'companyDescription',
    label: 'Nombre de la empresa',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: true
},
{
    key: 'logo130px',
    label: 'Logo en 130px',
    type: 'image130px',
    url: '',
    data: null,
    notShow: [],
    readonly: true
},
{
    key: 'logo32px',
    label: 'Logo en 32px',
    type: 'image32px',
    url: '',
    data: null,
    notShow: [],
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
    title: "Logos de Empresas",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
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